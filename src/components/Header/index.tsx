import { Branding } from "./Branding";
import { BiMenu as MenuIcon } from "react-icons/bi";
import { AvatarPopover } from "./Avatar";
import { Notifications } from "./Notifications";

export const Header = () => {
  return (
    <div className="flex fixed z-50  w-full px-12 items-center justify-between h-12 border border-t-0 shadow bg-white">
      <span className="flex flex-row">
        <span className="mr-4">
          <MenuIcon size={24} />
        </span>
        <Branding />
      </span>

      <span className="flex flex-row items-center justify-between">
        <Notifications />
        <AvatarPopover />
      </span>
    </div>
  );
};
