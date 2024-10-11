import { fetchPlaces } from "@/app/lib/datafetch/placedata";
import Link from "next/link";
import DeletePlace from "@/app/ui/CommonComponents/DeletePlace";

export default async function AllPlacesPage(){
  const places = await fetchPlaces();
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2 relative">
      <p className="text-2xl font-bold text-center mt-4">All the places added</p>
      <Link href={`/dashboard/admin/places/add`} className="p-2 rounded-md absolute right-1 top-1 bg-blue-500"> Add Place</Link>
      <ul>
        {
          places?.map((place) => {
            return (
              <li key={place?.id} className="list-disc p-2 text-lg font-bold text-blue-500">
                <div className="flex gap-8">
                  <p className="text-black">{place?.name}</p>
                  <Link href={`/dashboard/admin/places/edit/${place?.id}`}>Edit/Details</Link>
                  <DeletePlace id={place?.id}/>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
