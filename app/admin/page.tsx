import { cookies } from "next/headers";
import LoginForm from "./login-form";
import AdminDashboard from "./dashboard";

export default async function AdminPage() {
  // Check cookie server-side
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get("admin_session")?.value === "true";

  if (!isLoggedIn) {
    return <LoginForm />;
  }

  return <AdminDashboard />;
}
