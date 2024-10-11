import { cookies } from "next/headers";
import { getAllBookingsByUser } from "@/app/lib/datafetch/bookingdata";
import { verifyToken } from "@/app/lib/utils/jwt";
import Link from "next/link";
import DeletePlace from "@/app/ui/CommonComponents/DeletePlace";

export default async function AllBookingPage(){
  const token = cookies().get("token")?.value;
  const user = await verifyToken(token);
  const bookings = await getAllBookingsByUser(user?.id);
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <p className="text-center font-bold text-2xl mt-4">All the bookings </p>
      <ul>
        {
          bookings?.map((booking) => {
            return (
              <li key={booking?.id} className="list-disc p-2 text-lg font-bold text-blue-500">
                <div className="flex gap-8">
                  <p className="text-black">{booking?.id}</p>
                  <Link href={`/dashboard/admin/bookings/edit/${booking?.id}`}>Edit/Details</Link>
                  <DeletePlace id={booking?.id}/>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
