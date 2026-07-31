import type { Metadata } from "next";
import { cookies } from "next/headers";
import LoginForm from "./login-form";
import AdminDashboard from "./dashboard";

// Keep the admin area out of the index. robots.txt disallows crawling it, but a
// meta tag is what actually prevents the URL being indexed if it gets linked.
export const metadata: Metadata = {
  title: "Διαχείριση | Οικείωσις",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  // Check cookie server-side
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_session")?.value === "true";

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return <AdminDashboard />;
}
