import NavbarDashboard from "./NavDashboard/NavbarDashboard";

export const metadata = {
  title: "Ask Query Dashboard",
  description: "Ask Query is an open question platform",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <NavbarDashboard />

          <div className="flex-1 overflow-auto p-4 mt-14 md:mt-0 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
