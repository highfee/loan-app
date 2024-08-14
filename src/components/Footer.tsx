import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer>
      <div className="footer">
        <div
          className={type === "mobile" ? "footer_name-mobile" : "footer_name"}
        >
          <p className="text-xl font-bold text-gray-700 ">
            {user?.firstname[0]}
          </p>
        </div>

        <div
          className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
        >
          <h1 className="text-14 truncate text-gray-700 font-semibold">
            {user?.firstname}
          </h1>
          <p className="text-14 truncate font-normal text-gray-600">
            {user?.email}
          </p>
        </div>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <p className="text-gray-900 max-xl:hidden">Logout</p>
        <Image src="icons/logout.svg" alt="image" width={20} height={20} />
      </div>
    </footer>
  );
};

export default Footer;
