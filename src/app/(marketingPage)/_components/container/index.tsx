import React, { ReactNode } from 'react';

export const ContainerMarketingPage = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="mx-auto max-w-[90rem] px-4">{children}</div>;
};
