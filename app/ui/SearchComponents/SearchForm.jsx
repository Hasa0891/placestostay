import SubmitButton from "@/app/ui/CommonComponents/SubmitButton";

export default function SearchForm(){
  return (
    <form className="flex gap-4 justify-between">
      <div className="py-2 my-4">
        <label>Place Type : </label>
        <select
          className="rounded-md"
        >
          <option value={`Hotel`}>Hotel</option>
          <option value={`Hostel`}>Hostel</option>
          <option value={`Campsite`}>Campsite</option>
        </select>
      </div>
      <div className="py-2 my-4">
        <label>Location : </label>
        <select
          className="rounded-md"
        >
          <option value={`Hotel`}>Hotel</option>
          <option value={`Hostel`}>Hostel</option>
          <option value={`Campsite`}>Campsite</option>
        </select>
      </div>
      <div className="my-4 mt-6">
        <SubmitButton title={`Search`} loadingTitle={`Searching...`} width={`full`}/>
      </div>
    </form>
  );
}
