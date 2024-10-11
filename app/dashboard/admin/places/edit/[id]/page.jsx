import EditPlaceForm from "@/app/ui/PlacesComponents/EditPlaceForm";
import { fetchPlaceById } from "@/app/lib/datafetch/placedata";

export default async function AddPlacePage({params}){
  const place = await fetchPlaceById(params.id);
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <EditPlaceForm place={place}/>
    </div>
  );
}
