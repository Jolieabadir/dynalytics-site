import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const SIGNUPS_FILE = path.join(DATA_DIR, "signups.json");

interface Signup {
  email: string;
  role?: string;
  timestamp: string;
  emailSent: boolean;
}

async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function readSignups(): Promise<Signup[]> {
  try {
    const data = await fs.readFile(SIGNUPS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeSignups(signups: Signup[]) {
  await ensureDataDir();
  await fs.writeFile(SIGNUPS_FILE, JSON.stringify(signups, null, 2));
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

async function sendWelcomeEmail(
  email: string,
  role?: string
): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not configured, skipping email");
    return false;
  }

  const fromEmail =
    process.env.FROM_EMAIL || "Dynalytix <onboarding@resend.dev>";

  const roleText = role ? `<p style="color: #6A6A6A; font-size: 16px; margin: 0 0 20px 0;">You signed up as: <strong style="color: #4A4A4A;">${role}</strong></p>` : "";

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #FEFBFB;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #FEFBFB 0%, #F8F6FF 100%); padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.9); border-radius: 24px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="padding: 48px 48px 32px 48px; text-align: center;">
              <h1 style="margin: 0; font-size: 42px; font-weight: 900; background: linear-gradient(90deg, #4A4A4A 0%, #6A5A6A 50%, #4A4A4A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                dynalytix
              </h1>
              <p style="margin: 12px 0 0 0; font-size: 18px; font-weight: 600; background: linear-gradient(90deg, #B8A9C9 0%, #D4A5A5 50%, #7DB9A3 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                Movement is data. Patterns are prevention.
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 0 48px 48px 48px;">
              <div style="background: linear-gradient(90deg, #D4A5A5 0%, #B8A9C9 100%); height: 4px; border-radius: 2px; margin-bottom: 32px;"></div>

              <h2 style="color: #4A4A4A; font-size: 28px; font-weight: 700; margin: 0 0 20px 0;">
                Welcome to the Beta!
              </h2>

              <p style="color: #5A5A5A; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Thank you for signing up for Dynalytix! We're thrilled to have you join our community of athletes, therapists, and researchers who are pioneering the future of movement analysis.
              </p>

              ${roleText}

              <p style="color: #5A5A5A; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                We're working hard to build a platform that transforms how you understand movement patterns and prevent injuries. You'll be among the first to know when we're ready to launch.
              </p>

              <div style="background: linear-gradient(135deg, rgba(212, 165, 165, 0.1) 0%, rgba(184, 169, 201, 0.1) 100%); border-radius: 16px; padding: 24px; margin-bottom: 24px;">
                <h3 style="color: #4A4A4A; font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">
                  What's Next?
                </h3>
                <ul style="color: #6A6A6A; font-size: 15px; line-height: 1.8; margin: 0; padding-left: 20px;">
                  <li>We'll notify you when beta access opens</li>
                  <li>Early adopters get free access to premium features</li>
                  <li>Your feedback will shape the product</li>
                </ul>
              </div>

              <p style="color: #6A6A6A; font-size: 14px; margin: 0;">
                Questions? Reply to this email or reach out at <a href="mailto:hello@dynalytix.com" style="color: #D4A5A5; text-decoration: none;">hello@dynalytix.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 48px; background: linear-gradient(180deg, rgba(248, 246, 255, 0.5) 0%, rgba(254, 251, 251, 0.5) 100%); text-align: center; border-top: 1px solid rgba(229, 229, 229, 0.5);">
              <p style="color: #AFAFAF; font-size: 13px; margin: 0;">
                &copy; ${new Date().getFullYear()} Dynalytix. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: email,
        subject: "Welcome to Dynalytix Beta!",
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Resend API error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, role } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(normalizedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Try to check for duplicates (works locally, may fail on Vercel)
    let signups: Signup[] = [];
    try {
      signups = await readSignups();
      const existingSignup = signups.find(
        (s) => s.email.toLowerCase() === normalizedEmail
      );
      if (existingSignup) {
        return NextResponse.json(
          { error: "This email is already signed up" },
          { status: 409 }
        );
      }
    } catch {
      // File system not available (Vercel), skip duplicate check
      console.log("File system not available, skipping duplicate check");
    }

    const emailSent = await sendWelcomeEmail(normalizedEmail, role);

    const newSignup: Signup = {
      email: normalizedEmail,
      role: role || undefined,
      timestamp: new Date().toISOString(),
      emailSent,
    };

    // Try to save signup (works locally, may fail on Vercel)
    try {
      signups.push(newSignup);
      await writeSignups(signups);
    } catch {
      // File system not available (Vercel), skip file storage
      console.log("File system not available, skipping file storage");
    }

    return NextResponse.json(
      {
        message: "You're on the list! Check your inbox for a welcome email.",
        emailSent,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Not available in production" },
      { status: 403 }
    );
  }

  try {
    const signups = await readSignups();
    return NextResponse.json({ signups, count: signups.length });
  } catch (error) {
    console.error("Error reading signups:", error);
    return NextResponse.json(
      { error: "Failed to read signups" },
      { status: 500 }
    );
  }
}
