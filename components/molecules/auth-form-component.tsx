import React from "react";

function AuthFormComponent({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    // <div className="flex flex-col items-center gap-4 w-[720px] bg-white mx-auto rounded-[10px] py-7 px-10 shadow-md">
    <div className="flex flex-col items-center gap-4  mx-auto rounded-[10px] py-7 px-10 ">
      <h1 className="text-text font-semibold text-[36px] capitalize">
        {label}
      </h1>
      {children}
    </div>
  );
}

export default AuthFormComponent;
