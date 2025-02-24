import React from "react";
interface Props {
  children: React.ReactNode;
}
const Card = ({ children }: Props) => {
  return (
    <div className="rounded-lg p-6 border bg-white/10 container mb-8">
      {children}
    </div>
  );
};

export default Card;
