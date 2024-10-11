"use client";
import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";
import { addNewPlace } from "@/app/lib/actions/placeActions";
import { useFormState } from "react-dom";

export default function AddPlaceForm(){
  const [state,dispatch] = useFormState(addNewPlace,{});
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
          className="rounded-md p-2"
          required
        />
      </div>
      <div className="my-4 mt-6">
        <SubmitButton title={`Add New Place`} loadingTitle={`Adding New Place...`} width={`full`}/>
      </div>
    </form>
  );
}
