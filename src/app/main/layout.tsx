import Navbar from "@/views/shared/Navbar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
        className={` antialiased min-h-screen`}
    >
      <Navbar/>
      {children}
    </div>
  );
}