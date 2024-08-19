import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[url("../loginbackground.jpg")] bg-cover w-screen h-screen px-[120px] flex items-center'>
      <div className="bg-[#F8F8F8] h-fit p-10 w-[45%] rounded-2xl space-y-8">
        {children}
      </div>
    </div>
  );
};

export default LoginLayout;
