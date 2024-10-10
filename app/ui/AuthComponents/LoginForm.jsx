import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";

export default function LoginForm(){
  return (
    <form className="flex flex-col justify-center align-middle">
      <div className="py-2 my-4">
        <label> Email : </label>
        <input
          type="text"
          className="p-2 rounded-md"
        />
      </div>
      <div className="py-2 my-4">
        <label> Password : </label>
        <input
          type="password"
          className="p-2 rounded-md"
        />
      </div>
      <div className="my-4 mt-6">
        <SubmitButton title={`Login`} loadingTitle={`Logging In...`} width={`full`}/>
      </div>
    </form>
  );
}
