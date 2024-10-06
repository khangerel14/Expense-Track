"use client";

import { Geldii, Plus, Profile } from "@/images";
import { useRouter, usePathname } from "next/navigation";

const Navbar = ({ onClick }) => {
  const pathName = usePathname();
  const router = useRouter();

  const dashboard = () => {
    router.push("/dashboard");
  };
  const recording = () => {
    router.push("/records");
  };
  return (
    <div className="w-full h-16 bg-white">
      <div className="flex max-w-screen-xl justify-between mx-auto items-center h-16">
        <div className="flex gap-6 items-center">
          <Geldii />
          <button
            style={{ fontWeight: pathName === "/dashboard" ? "700" : "" }}
            onClick={dashboard}
          >
            Dashboard
          </button>
          <button
            style={{ fontWeight: pathName === "/records" ? "700" : "" }}
            onClick={recording}
          >
            Records
          </button>
        </div>
        <div className="flex gap-6 items-center leading-none">
          <button
            className="flex bg-blue-600 rounded-3xl text-white p-2 px-3 gap-2 items-center"
            onClick={onClick}
          >
            <Plus /> Record
          </button>
          <button className="avatar online">
            <Profile />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
