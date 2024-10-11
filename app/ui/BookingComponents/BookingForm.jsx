"use client";
import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";
import {useFormState} from "react-dom";
import { createBooking } from "@/app/lib/actions/bookingAction";

export default function BookingForm({place}){
  const [state,dispatch] = useFormState(createBooking,{});
  if(state?.error && state.error){
    alert(state?.message);
    state.error=false;
  }
  return (
    <form className="flex flex-col justify-center align-middle" action={dispatch}>
      <div className="py-2 my-4">
        <label> Rooms : </label>
        <input
          type="number"
          className="p-2 rounded-md"
          name="rooms"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label> Date : </label>
        <input
          type="date"
          className="p-2 rounded-md"
          name="date"
          min={`2024-08-01`}
          max={`2024-08-03`}
          required
        />
      </div>
      <div className="py-2 my-4">
        <label> Nights : </label>
        <input
          type="number"
          className="p-2 rounded-md"
          name="nights"
          required
        />
      </div>
      <input type="hidden" name="placeId" defaultValue={place?.id}/>
      <div className="my-4 mt-6">
        <SubmitButton title={`Book`} loadingTitle={`Booking...`} width={`full`}/>
      </div>
    </form>
  );
}
