import "./resources/globals.css";
import Link from "next/link";
import { cookies } from "next/headers";
import { verifyToken } from "@/app/lib/utils/jwt";
import LogoutButton from "@/app/ui/AuthComponents/LogoutButton";

export const metadata = {
  title: "Places to Stay",
  description: "Place Booking Website",
};

export default async function RootLayout({ children }) {
  const token = cookies().get("token")?.value;
  const user = await verifyToken(token);
  return (
    <html lang="en">
      <body>
        <div>
          <div className="bg-blue-700 px-96 py-2">
            <div className="flex justify-between mb-32">
              <Link className="text-white text-4xl font-bold" href={`/`}>PlacesToStay</Link>
              {
                (!user.tokenStatus || !token) && (
                  <div className="flex gap-2">
                    <Link
                      href={`/register`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Register</Link>
                    <Link
                      href={`/login`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Login</Link>
                  </div>
                )
              }
              {
                user?.usertype==="admin" && (
                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/admin/places`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Places</Link>
                    <Link
                      href={`/dashboard/admin/bookings`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Bookings</Link>
                    <LogoutButton/>
                  </div>
                )
              }
              {
                user?.usertype==="traveler" && (
                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/traveler/bookings`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Bookings</Link>
                    <Link
                      href={`/dashboard/traveler`}
                      className="p-2 bg-white rounded-md mt-2"
                    >Search</Link>
                    <LogoutButton/>
                  </div>
                )
              }
            </div>
            <div>
              <p className="text-white font-bold text-4xl">Find Your Next Stay</p>
              <p className="text-white font-bold text-lg">Search hotels, hostels and campsites...</p>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
