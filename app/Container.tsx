import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-screen px-3 mx-auto xl:px-20 md:px-8 sm:px-7">
      {children}
    </div>
  );
};

export default Container;
