"use client";

import {useFormState} from "react-dom";
import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";
import { login } from "@/app/lib/actions/authActions";
import {redirect} from "next/navigation";

export default function LoginForm(){
  const [state,dispatch] = useFormState(login,{});
  if(state?.error && state.error){
    alert(state?.message);
  }
  if(state?.success){
    redirect(`/dashboard/${state?.usertype}/`);
  }
  return (
    <form className="flex flex-col justify-center align-middle" action={dispatch}>
      <div className="py-2 my-4">
        <label> Email : </label>
        <input
          type="email"
          className="p-2 rounded-md"
          required
          name="email"
        />
      </div>
      <div className="py-2 my-4">
        <label> Password : </label>
        <input
          type="password"
          className="p-2 rounded-md"
          name="password"
          required
        />
      </div>
      <div className="my-4 mt-6">
        <SubmitButton title={`Login`} loadingTitle={`Logging In...`} width={`full`}/>
      </div>
    </form>
  );
}
