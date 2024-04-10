import React from "react";
import img from "../assets/404-error.jpg";
const PageNotFound = () => {
  return (
    <div className="flex justify-between items-center h-screen  p-10 gap-5">
      <div className="w-full">
        <img src={img} alt="" />
      </div>
      <div className=" flex flex-col text-center border-2 shadow-2xl rounded-2xl bg-white ">
        <h1 className="text-5xl mt-10">OOPS! PAGE NOT FOUND</h1>
        <p className="text-md w-[700px] p-10 text-start">
          Oops! It seems like you've wandered off the path. The page you're
          looking for isn't here. <br /> But don't worry, like Arjuna on the
          battlefield of Kurukshetra, sometimes we encounter unexpected
          challenges and obstacles on our journey. Just as Lord Krishna guided
          Arjuna through moments of doubt and confusion, so too do we:
        </p>
        <h1 className="text-3xl">
          कर्मण्ये वाधिकारस्ते, मा फलेषौ कदा चना || <br />
          मा कर्म फल हेतुर भूर्मते सङ्गोस्त्व अकर्मणि ||
        </h1>
        <p className="text-sm p-10 text-start">
          Take this moment to navigate back to the main path or explore other
          areas of our site. If you need any assistance, feel free to reach out
          to our support team. <br />
          Wishing you clarity and purpose on your digital journey!
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
