"use server";

import { firebase } from "@/app/lib/utils/firebase";
import { collection,addDoc} from "firebase/firestore";
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
