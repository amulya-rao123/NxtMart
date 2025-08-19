import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = () => {
  return (
    <div className="flex justify-center items-center w-full h-full py-10 mt-80">
      <BeatLoader color="green" size={15} margin={5} />
    </div>
  );
};

export default Loader;
