import BookingForm from "@/app/ui/BookingComponents/BookingForm";
import { fetchPlaceById } from "@/app/lib/datafetch/placedata";

export default async function BookPage({params}) {
  const place = await fetchPlaceById(params.id);
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <BookingForm place={place}/>
    </div>
  );
}
