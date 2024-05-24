"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "About Us", href: "/about", icon: HomeIcon },
  {
    name: "Contact",
    href: "/contact",
    icon: DocumentDuplicateIcon,
  },
  { name: "Pricing", href: "/pricing", icon: UserGroupIcon },
  { name: "History", href: "/history", icon: UserGroupIcon },
];

export default function NavLinks() {
  // refactor the NavLinks component to use the usePathname hook
  const pathName = usePathname();
  const textColor = pathName === "/pricing" ? "text-white" : "text-gray-900";
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold leading-6 ${textColor}`}
          >
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
