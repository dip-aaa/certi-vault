
import "@fontsource/baloo-2/400.css";
import "@fontsource/baloo-2/700.css";
import "./globals.css";


export const metadata = {
  title: "CertiVault – Smart Certificate Locker",
  description: "A peaceful digital trophy room for students",
};




import AuthGuard from "../components/AuthGuard";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bb antialiased bg-slate-50 text-slate-900">
        <AuthGuard>{children}</AuthGuard>
      </body>
    </html>
  );
}
