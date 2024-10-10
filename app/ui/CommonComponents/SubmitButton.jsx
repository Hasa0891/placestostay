"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({title,loadingTitle,width}){
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={`w-${width} ${pending && "bg-blue-300" }
                  rounded-md border border-blue-300 p-2
                  hover:bg-blue-400 text-black`}
      disabled={pending}
    >
      {pending ? (
        <span className="flex justify-center">{loadingTitle}</span>
      ) : title}
    </button>
  );
}

