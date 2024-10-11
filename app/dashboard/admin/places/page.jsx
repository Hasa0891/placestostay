import { fetchPlaces } from "@/app/lib/datafetch/placedata";
import Link from "next/link";

export default async function AllPlacesPage(){
  const places = await fetchPlaces();
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <p className="text-2xl font-bold text-center">All the places added</p>
      <ul>
        {
          places?.map((place) => {
            return (
              <li key={place?.id} className="list-disc p-2 text-lg font-bold text-blue-500">
                <div className="flex gap-8">
                  <p className="text-black">{place?.name}</p>
                  <Link href={`/dashboard/admin/places/edit/${place?.id}`}>Edit/Details</Link>
                  <button className="text-red-500">Delete</button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
