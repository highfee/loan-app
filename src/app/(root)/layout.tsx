import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const loggedIn = {
  //   $id: "",
  //   email: "",
  //   userId: "",
  //   dwollaCustomerUrl: "",
  //   dwollaCustomerId: "",
  //   firstName: "",
  //   lastName: "",
  //   name: "", //ADDED
  //   address1: "",
  //   city: "",
  //   state: "",
  //   postalCode: "",
  //   dateOfBirth: "",
  //   ssn: "",
  // };

  const loggedIn = null;
  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="icon" />
          {/* <div> <MobileNavbar user={loggedIn} /> </div> */}
        </div>
        {children}
      </div>
    </main>
  );
}
