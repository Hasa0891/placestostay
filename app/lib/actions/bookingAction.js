"use server";
import { verifyToken } from "@/app/lib/utils/jwt";
import { firebase } from "@/app/lib/utils/firebase";
import {
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {cookies} from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBooking(initialState,formData){
  const rooms  = Number(formData.get("rooms"));
  const date = formData.get("date");
  const nights = Number(formData.get("nights"));
  const placeId = formData.get("placeId");
  const token = cookies().get("token")?.value;
  const user = await verifyToken(token);

  try{
    let placeSnapshot = await getDoc(doc(firebase,"place",placeId));
    let place = placeSnapshot.data();
    let dates = [];
    for(let i=0 ; i< nights ; i++){
      let tmpdate = new Date(date);
      tmpdate.setDate(tmpdate.getDate()+i);
      dates.push(tmpdate.toISOString().split("T")[0]);
      if(place.rooms - place.bookings[dates[i]] < rooms){
        return {
          ...initialState,
          error : true,
          message : `More that Capacity ${dates[i]}`
        }
      }
    }
    let bookings = {};
    dates?.map((dt) => {
      bookings[dt] = place.bookings[dt] + rooms;
    })

    await setDoc(doc(firebase,"place",placeId),{
      ...bookings
    },{merge:true});

    await addDoc(collection(firebase,"bookings"),{
      rooms,
      nights,
      date,
      placeId,
      userId:user?.id
    });
  }catch(err){
    console.log(err);
    return {
      ...initialState,
      error : true,
      message : `Booking Not Successful`
    }
  }
  revalidatePath("/dashboard/traveler/bookings");
  redirect("/dashboard/traveler/bookings");
}
