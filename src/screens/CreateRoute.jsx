import React from "react";

const CreateRoute = () => {
  return (
    <div className="md:py-5 py-3 px-5 mx-auto md:bg-white md:w-96 flex flex-col">
      <h1 className="text-2xl  px-4  mt-8 w-full text-blue-500 font-bold text-left ">
        {" "}
        Create Route
      </h1>
      <div className="w-full mx-auto flex flex-col space-y-3 items-center justify-center mt-5">
        <input
          type={"text"}
          placeholder="Start Location"
          className="px-3 w-11/12 rounded-lg "
        />
        <input
          type={"text"}
          placeholder="Final Destination"
          className="px-3 w-11/12 rounded-lg "
        />
        <textarea
          className="px-3 rounded-lg w-11/12"
          rows={10}
          placeholder="Enter description"
        />
        <button className="w-11/12 rounded-lg py-3 border-2 border-blue-500 text-blue-500  font-semibold bg-white">
          Attach file ex:.gpx
        </button>
        <button className="w-11/12 rounded-lg  bg-green-500 py-1.5 text-white  font-semibold ">
          Upload Route
        </button>
        <p className="mt-10 h-28 text-center mb-40">
          By uploading the route you abide to all the{" "}
          <span className="text-green-500">terms and policies </span> of
          Firfirey.
        </p>
      </div>
    </div>
  );
};

export default CreateRoute;
