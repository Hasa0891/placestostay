"use server";

import { firebase } from "@/app/lib/utils/firebase";
import { collection,addDoc,setDoc, doc} from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addNewPlace(formState,formData){
  const type = formData.get("type");
  const name = formData.get("name");
  const city = formData.get("city");
  const location = formData.get("location");
  const price = Number(formData.get("price"));
  const max = Number(formData.get("max"));
  const description = formData.get("description");
  try{
    await addDoc(collection(firebase,"place"),{
      type,
      name,
      city:city.trim().toLowerCase(),
      location,
      rooms : max,
      description,
      price,
      bookings : {
        "2024-08-01":0,
        "2024-08-02":0,
        "2024-08-03":0
      }
    });
  }catch(err){
    console.log(err);
    return {
      ...formState,
      error : true,
      message : "Error Occured"
    }
  }
  revalidatePath("/dashboard/admin/places");
  redirect("/dashboard/admin/places");
}

export async function editPlace(formState,formData){
  const type = formData.get("type");
  const name = formData.get("name");
  const city = formData.get("city");
  const location = formData.get("location");
  const price = Number(formData.get("price"));
  const max = Number(formData.get("max"));
  const description = formData.get("description");
  const placeId = formData.get("placeId");
  console.log({
      placeId,
      type,
      name,
      city:city.trim().toLowerCase(),
      location,
      rooms : max,
      description,
      price
  });
  try{
    await setDoc(doc(firebase,"place",placeId),{
      type,
      name,
      city:city.trim().toLowerCase(),
      location,
      rooms : max,
      description,
      price
    },{merge:true});
  }catch(err){
    console.log(err);
    return {
      ...formState,
      error : true,
      message : "Error Occured"
    }
  }
  revalidatePath("/dashboard/admin/places");
  redirect("/dashboard/admin/places");
}
