import Link from "next/link";
import { searchPlaces } from "@/app/lib/datafetch/placedata";

export default async function SearchPage({searchParams}){
  const type = searchParams?.type;
  const location = searchParams?.location;
  const places = await searchPlaces(type,location);
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <p className="text-2xl">{places?.length} Place Found</p>
      <div className="bg-gray-50 w-full p-2 py-8 rounded-md shadow-lg">
        {
          places?.map((place) => {
            return (
              <div className="relative p-4 bg-blue-100 w-[50%] rounded-md mx-auto mb-4" key={place?.id}>
                <p className="text-xl">{place?.name}</p>
                <div className="flex justify-between">
                  <p className="text-sm">Location : {place?.city}</p>
                  <p className="text-sm">Type : {place?.type}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm">Total Rooms : {place?.rooms}</p>
                </div>
                <p className="text-sm">{place?.description}</p>
                <p className="rounded-md absolute top-1 right-1">Price : {place?.price} EUR</p>
                <Link
                  className="px-1 rounded-md bg-blue-400 absolute bottom-1 right-1"
                  href={`/dashboard/traveler/book/${place?.id}`}
                >
                  Book
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
