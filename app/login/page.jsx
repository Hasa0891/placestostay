import LoginForm from "@/app/ui/AuthComponents/LoginForm";

export default function LoginPage(){
  return (
    <div className="mt-12 mx-96 bg-gray-200 rounded-md shadow-md px-2">
      <p className="text-4xl font-bold text-center p-2">Login</p>
      <LoginForm/>
    </div>
  );
}
