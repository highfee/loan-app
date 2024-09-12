"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const SettingPage = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleCurrentPassword = () =>
    setShowCurrentPassword(!showCurrentPassword);
  const toggleNewPassword = () => setShowNewPassword(!showNewPassword);
  const toggleConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="p-8 grid grid-col-1 lg:grid-cols-2">
      <section>
        <p className="text-xl text-gray-900 font-semibold">Change Password</p>

        <div className="mt-10">
          <Label
            htmlFor="current"
            className="block mb-2 font-medium text-gray-700"
          >
            Current Password
          </Label>
          <div className=" relative">
            <Input
              type={showCurrentPassword ? "text" : "password"}
              className="border-2 pr-12 w-full"
            />
            <div onClick={toggleCurrentPassword}>
              {showCurrentPassword ? (
                <EyeOff
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <Eye
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Label
            htmlFor="current"
            className="block mb-2 font-medium text-gray-700"
          >
            New Password
          </Label>
          <div className=" relative  ">
            <Input
              type={showNewPassword ? "text" : "password"}
              className="border-2 pr-12 w-full"
            />
            <div onClick={toggleNewPassword}>
              {showNewPassword ? (
                <EyeOff
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <Eye
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Label
            htmlFor="current"
            className="block mb-2 font-medium text-gray-700"
          >
            Confirm New Password
          </Label>
          <div className=" relative  ">
            <Input
              type={showConfirmPassword ? "text" : "password"}
              className="border-2 pr-12"
            />
            <div onClick={toggleConfirmPassword}>
              {showConfirmPassword ? (
                <EyeOff
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              ) : (
                <Eye
                  size={18}
                  stroke="#555"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        <div>
          <Button disabled className="w-full mt-10">
            Update
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SettingPage;
