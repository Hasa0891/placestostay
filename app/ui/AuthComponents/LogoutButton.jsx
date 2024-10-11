"use client";
import { logout } from "@/app/lib/actions/authActions";

export default function LogoutButton(){
  return (
    <button
      className="p-2 bg-white rounded-md mt-2"
      onClick={async () => {
        await logout();
      }}
    >Logout</button>
  );
}

