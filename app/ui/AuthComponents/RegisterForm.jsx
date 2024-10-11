"use client";
import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";
import {redirect} from "next/navigation";
import {useFormState} from "react-dom";
import { register } from "@/app/lib/actions/authActions";


export default function RegisterForm(){
  const [state,dispatch] = useFormState(register,{});
  if(state?.error && state.error){
    alert(state?.message);
    state.error=false;
  }
  if(state?.success && state.success){
    alert(state?.message);
    state.success=false;
    redirect("/login");
  }
  return (
    <form className="flex flex-col justify-center align-middle" action={dispatch}>
      <div className="py-2 my-4">
        <label> Usertype : </label>
        <select
          className="rounded-md"
          name="usertype"
          required
        >
          <option value={`admin`}>Admin</option>
          <option value={`traveler`}>Traveler</option>
        </select>
      </div>
      <div className="py-2 my-4">
        <label> Firstname : </label>
        <input
          type="text"
          className="p-2 rounded-md"
          name="firstname"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label> Lastname : </label>
        <input
          type="text"
          className="p-2 rounded-md"
          name="lastname"
          required
        />
      </div>
      <div className="py-2 my-4">
        <label> Email : </label>
        <input
          type="email"
          className="p-2 rounded-md"
          name="email"
          required
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
        <SubmitButton title={`Register`} loadingTitle={`Creating Account...`} width={`full`}/>
      </div>
    </form>
  );
}
