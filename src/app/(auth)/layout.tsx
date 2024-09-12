import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter overflow-x-hidden">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            // src="/icons/auth-image.svg"
            src="/images/layout.PNG"
            alt="auth image"
            height={1000}
            width={1600}
            className=" -right-10 absolute top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </main>
  );
}
