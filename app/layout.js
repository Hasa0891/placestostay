import "./resources/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Places to Stay",
  description: "Place Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <div className="bg-blue-700 px-96 py-2">
            <div className="flex justify-between mb-32">
              <Link className="text-white text-4xl font-bold" href={`/`}>PlacesToStay</Link>
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
