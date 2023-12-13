import React, { ReactNode } from 'react';

export const Hero = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#FFFFFF] pt-[1.97rem] desk:bg-[#F3F9FD] desk:pt-[3.97rem]">
      {children}
    </div>
  );
};
