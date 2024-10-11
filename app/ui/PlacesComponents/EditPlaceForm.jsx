"use client";
import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";
import { editPlace } from "@/app/lib/actions/placeActions";
import { useFormState } from "react-dom";

export default function EditPlaceForm({place}){
  const [state,dispatch] = useFormState(editPlace,{});
  if(state?.error && state.error==true){
    alert(state.message);
    state.error = false;
  }
  return (
    <form action={dispatch}>
      <div className="py-2 my-4">
        <label htmlFor="type">Type : </label>
        <select
          className="rounded-md"
          id="type"
          name="type"
          defaultValue={place?.type}
          required
        >
          <option value={`Hotel`}>Hotel</option>
          <option value={`Hostel`}>Hostel</option>
          <option value={`Campsite`}>Campsite</option>
        </select>
      </div>
      <div className="py-2 my-4">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          name="name"
          id="name"
          defaultValue={place?.name}
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label htmlFor="city">City : </label>
        <input
          type="text"
          name="city"
          id="city"
          defaultValue={place?.city}
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label htmlFor="location">Location : </label>
        <input
          type="text"
          name="location"
          id="location"
          defaultValue={place?.location}
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label htmlFor="price">Price Per Room : </label>
        <input
          type="number"
          name="price"
          id="price"
          defaultValue={place?.price}
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label htmlFor="max">Total Room : </label>
        <input
          type="number"
          name="max"
          id="max"
          defaultValue={place?.rooms}
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label htmlFor="description">Description : </label>
        <input
          type="text"
          name="description"
          id="description"
          defaultValue={place?.description}
          className="rounded-md p-2"
          required
        />
      </div>
      <input type="hidden" name="placeId" defaultValue={place?.id}/>
      <div className="my-4 mt-6">
        <SubmitButton title={`Edit Place`} loadingTitle={`Editing Place...`} width={`full`}/>
      </div>
    </form>
  );
}
