"use client";

import { profile_links } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="profile_sidebar sticky top-0">
      <div className="profile_sidebar_links">
        {profile_links.map((item, i) => {
          const isActive =
            pathname === item.route || pathname.endsWith(`${item.route}/`);

          return (
            <Link
              key={i}
              href={item.route}
              className={cn("profile_sidebar_link", { active: isActive })}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileSidebar;
