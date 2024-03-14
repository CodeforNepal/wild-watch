import React, { useRef } from "react";

import {
  ArrowUpTrayIcon,
  ChatBubbleLeftRightIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ uploadRef, membersRef, contactRef }) => {
  const scrollToPage = (pageRef) => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="hidden lg:flex fixed left-2 top-1/2 transform -translate-y-1/2 h-[90vh] w-16 bg-gray-800 flex-col items-center justify-around rounded-full border-r-2 border-gray-700 pl-2 shadow-lg">
      <div
        className="sidebar-item w-[30px] cursor-pointer"
        onClick={() => scrollToPage(uploadRef)}
      >
        <ArrowUpTrayIcon className="text-[#f3f3f3] text-lg" />
        <span className="text-[#f3f3f3] text-xs ml-[4px]">Test</span>
      </div>

      <div
        className="sidebar-item w-[30px] cursor-pointer"
        onClick={() => scrollToPage(membersRef)}
      >
        <UserGroupIcon className="text-[#f3f3f3] text-base" />
        <span className="text-[#f3f3f3] text-xs ">Team</span>
      </div>

      <div
        className="sidebar-item w-[30px] cursor-pointer"
        onClick={() => scrollToPage(contactRef)}
      >
        <ChatBubbleLeftRightIcon className="text-[#f3f3f3] text-sm" />
        <span className="text-[#f3f3f3] text-xs ml-[-7px]">Contact</span>
      </div>
    </div>
  );
};

export default Sidebar;
