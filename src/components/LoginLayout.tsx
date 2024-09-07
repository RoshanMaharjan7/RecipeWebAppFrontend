import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[url("../loginbackground.jpg")] bg-cover w-screen h-screen px-[24px] sm:px-[40px] md:px-[120px] flex items-center'>
      <div className="bg-[#F8F8F8] h-fit p-8 md:p-10 w-full lg:w-[45%] rounded-2xl space-y-6">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
