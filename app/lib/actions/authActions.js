"use server";
import { firebase } from "@/app/lib/utils/firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { cookies } from "next/headers";
import {redirect} from "next/navigation";

import { hashPassword,verifyPassword } from "@/app/lib/utils/hash";
import { createToken } from "@/app/lib/utils/jwt";

export async function register(initialState, formData){
  const usertype = formData.get("usertype");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  let password = formData.get("password");
  password = await hashPassword(password);

  try{
    const user = await getDocs(
      query(
        collection(firebase,"users"),
        where("email","==",email)
      )
    );
    if(user.size){
      return {
        ...initialState,
        success : false,
        message : "Email address already exists"
      }
    }else{
      await addDoc(collection(firebase,"users"),{
        usertype,
        firstname,
        lastname,
        email,
        password
      });
      return {
        ...initialState,
        success : true,
        message : "Account Created"
      }
    }
  }catch(err){
    console.log(err);
  }
}

export async function login(initialState,formData){
  const email = formData.get("email");
  const password = formData.get("password");
  try{
    const result = await getDocs(
      query(
        collection(firebase,"users"),
        where("email","==",email)
      )
    );
    if(result.size){
      let usrArray = [];
      result.forEach((usr) => {
        usrArray.push({
          id:usr.id,
          ...usr.data()
        })
      })
      const user = usrArray[0];
      const match = await verifyPassword(password,user?.password);
      if(match){
        const nToken = await createToken({...user},"24h");
        cookies().set("token",nToken,{
          expires : (Date.now() + 24*60*60*1000)
        });
        return {
          ...initialState,
          success : true,
          usertype : user?.usertype
        }
      }else{
        return {
          ...initialState,
          success : false,
          message : "Wrong Credentials"
        }
      }
    }else{
      return {
        ...initialState,
        success : false,
        message : "Wrong Credentials"
      }
    }
  }catch(err){
    console.log(err);
  }
}

export async function logout(){
  cookies().delete("token");
  redirect("/");
}
