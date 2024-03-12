"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const authLinks = [
  { name: "sign-up", href: "/sign-up" },

  { name: "account", href: "account" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div>
      {authLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
