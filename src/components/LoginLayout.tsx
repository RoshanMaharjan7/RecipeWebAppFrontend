import React from "react";

const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-[url("../loginbackground.jpg")] bg-cover w-screen h-screen px-[120px] flex items-center'>
      {children}
    </div>
  );
};

export default LoginLayout;
