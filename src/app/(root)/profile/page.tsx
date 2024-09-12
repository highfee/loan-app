import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";

const page = async () => {
  const loggedIn = await getLoggedInUser();

  // console.log(loggedIn?.firstname[0]);

  const labelStyling =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#3538CD] text-primary-foreground text-white hover:bg-[#3538CD] cursor-pointer";
  return (
    <div className="p-8">
      <div>
        <p className="text-lg text-gray-900 font-semibold">Profile Picture</p>

        <div className="flex items-center gap-8 mt-5">
          <div className="size-28 rounded-full  overflow-hidden grid place-content-center bg-gray-200">
            {loggedIn?.profile_img_url ? (
              <Image
                src={loggedIn?.profile_img_url}
                width={200}
                height={200}
                alt="profile image"
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <p className="text-2xl font-bold text-black uppercase ">
                {loggedIn?.firstname[0]}
                {loggedIn?.lastname[0]}
              </p>
            )}
          </div>

          <div className="flex gap-4">
            <Label htmlFor="pp" className={labelStyling}>
              {/* <Button> */}
              {loggedIn?.profile_img_url ? "Change picture" : "Add pricture"}
              {/* </Button> */}
            </Label>

            <Input type="file" id="pp" className="hidden" />

            {loggedIn?.profile_img_url && (
              <Button variant="destructive">Delete picture</Button>
            )}
          </div>
        </div>

        {/* profile name */}

        <div className="p-4 border-2 rounded-lg mt-10">
          <section className="">
            <Label
              htmlFor="email"
              className="text-lg text-gray-900 font-semibold mb-3"
            >
              Email
            </Label>
            <Input id="email" type="email" value={loggedIn?.email} disabled />
          </section>
          <section className="flex items-center gap-4 mt-5">
            <div className="flex-1">
              <Label
                htmlFor="firstname"
                className="text-lg text-gray-900 font-semibold mb-3"
              >
                Firstname
              </Label>
              <Input id="firstname" type="text" value={loggedIn?.firstname} />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="lastname"
                className="text-lg text-gray-900 font-semibold mb-3"
              >
                Lastname
              </Label>
              <Input id="lastname" type="text" value={loggedIn?.lastname} />
            </div>
          </section>

          <section className="flex items-center gap-4 mt-5">
            <div className="flex-1">
              <Label
                htmlFor="city"
                className="text-lg text-gray-900 font-semibold mb-3"
              >
                City
              </Label>
              <Input id="city" type="text" value={loggedIn?.city} />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="state"
                className="text-lg text-gray-900 font-semibold mb-3"
              >
                State
              </Label>
              <Input id="state" type="text" value={loggedIn?.state} />
            </div>
          </section>

          <section className="mt-5">
            <Label
              htmlFor="address"
              className="text-lg text-gray-900 font-semibold mb-3"
            >
              Address
            </Label>
            <Textarea
              id="address"
              className=" resize-none"
              value={loggedIn?.address1}
            />
          </section>

          <section className="mt-8 flex justify-end ">
            <Button className="" disabled>
              Save Changes
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default page;
