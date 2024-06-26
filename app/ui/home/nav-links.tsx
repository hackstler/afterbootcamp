"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/#hero-section", icon: HomeIcon },
  {
    name: "The program",
    href: "/#program-section",
    icon: AcademicCapIcon,
  },
  { name: "Services", href: "/#services-section", icon: DocumentDuplicateIcon },
  { name: "History", href: "/#history-section", icon: UserGroupIcon },
];

export default function NavLinks({ closeMenu }: { closeMenu: () => void }) {
  const pathName = usePathname();
  const textColor = pathName === "/services" ? "text-white" : "text-gray-900";
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`text-sm font-semibold leading-6 ${textColor} flex items-center gap-2 p-4 sm:p-0 sm:shadow-none sm:hover:bg-transparent sm:hover:shadow-none hover:bg-gray-300 hover:shadow-xl rounded-md transition`}
            onClick={closeMenu}
          >
            <LinkIcon className='h-5 w-5' />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
