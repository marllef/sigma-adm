import { ReactNode } from "react";

interface Props {
  children?: string;
}

export const NavDivider = ({ children }: Props) => {
  return (
    <div className="w-full px-5 text-xs my-2 font-roboto text-gray-400 select-none">
      <div>{children?.toString().toUpperCase()}</div>
    </div>
  );
};
