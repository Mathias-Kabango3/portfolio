import React from "react";

const TeckIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return <Component className="size-10 text-emerald-300" />;
};

export default TeckIcon;
