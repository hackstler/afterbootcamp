"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/#hero-section", icon: HomeIcon },
  {
    name: "The program",
    href: "/#program-section",
    icon: DocumentDuplicateIcon,
  },
  { name: "Pricing", href: "/#pricing-section", icon: UserGroupIcon },
  { name: "History", href: "/#history-section", icon: UserGroupIcon },
];

export default function NavLinks() {
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
            className={`text-sm font-semibold leading-6 ${textColor} flex items-center gap-2`}
          >
            <LinkIcon className='h-5 w-5' />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
