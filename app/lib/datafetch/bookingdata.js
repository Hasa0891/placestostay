"use server";
import { firebase } from "@/app/lib/utils/firebase";
import { collection,getDocs,where,query} from "firebase/firestore";

export async function getAllBookingsByUser(userId){
  const snapshot = await getDocs(query(collection(firebase,"bookings"),where("userId","==",userId)));
  let bookings = [];
  snapshot.forEach((booking) => {
    bookings.push({
      id:booking.id,
      ...booking.data()
    })
  })
  return bookings;
}

export async function getAllBookings(){
  const snapshot = await getDocs(collection(firebase,"bookings"));
  let bookings = [];
  snapshot.forEach((booking) => {
    bookings.push({
      id:booking.id,
      ...booking.data()
    })
  })
  return bookings;
}
