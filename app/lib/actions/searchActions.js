"use server";
import { redirect } from "next/navigation";

export async function searchPlaces(formData){
  const type = formData.get("type");
  const location = formData.get("location");
  redirect(`/search?type=${type}&location=${location.trim().toLowerCase()}`);
}
