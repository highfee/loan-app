import ProfileSidebar from "@/components/ProfileSidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-5 md:p-10">
      <p className="text-2xl  text-gray-700 font-bold">Account Settings</p>
      <section className="flex bg-white rounded-2xl mt-5 h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
        <ProfileSidebar />
        <div className="flex-1">{children}</div>
      </section>
    </div>
  );
};

export default layout;
