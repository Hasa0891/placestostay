"use client";
import { deletePlace } from "@/app/lib/actions/placeActions";

export default function DeletePlace({id}){
  return (
    <button
      className="text-red-500"
      onClick={async () => {
        await deletePlace(id);
      }}
    >Delete</button>
  );
}
