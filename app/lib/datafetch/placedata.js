"use server";
import { collection,getDocs, doc, getDoc, where, query} from "firebase/firestore";
import { firebase } from "@/app/lib/utils/firebase";

export async function fetchPlaces(){
  const result = await getDocs(collection(firebase,"place"));
  let pss = [];
  result.forEach((pl) => {
    pss.push({
      id:pl.id,
      ...pl.data()
    })
  })
  return pss;
}

export async function fetchPlaceById(id){
  try{
    const pl = await getDoc(doc(firebase,"place",id));
    return {
      id : id,
      ...pl.data()
    }
  }catch(err){
    console.log(err);
  }
}

export async function fetchAllCities(){
  try{
    const result = await getDocs(collection(firebase,"place"));
    let cts = new Set();
    result.forEach((pl) => {
      cts.add(pl.data().city);
    })
    return Array.from(cities);
  }catch(err){
    console.log(err);
  }
}

export async function searchPlaces(type,location){
  let result;
  if(location==="ANY"){
    result = await getDocs(query(collection(firebase,"place"), where("type","==",type)));
  }else{
    result = await getDocs(query(collection(firebase,"place"), where("type","==",type), where("city","==",location)));
  }
  let places = [];
  result.forEach((pl) => {
    places.push({
      id:pl.id,
      ...pl.data()
    })
  })
  return places;
}

