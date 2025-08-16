import React from "react";
import { FiSearch, FiBell, FiSettings } from "react-icons/fi";

const Header = () => {
  return (
    <header className="ml-1 flex items-center justify-between px-6 py-4 bg-white">
      {/* Left - Title */}
      <h2 className="text-xl font-semibold text-[#2D2F7F]">Overview</h2>

      {/* Right - Search + Icons + Avatar */}
      <div className="flex items-center gap-4">
        {/* Search Box */}
        <div className="flex items-center bg-[#F9FAFB] px-3 py-2 rounded-full text-gray-400">
          <FiSearch className="mr-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent focus:outline-none text-sm text-gray-500 w-40"
          />
        </div>

        {/* Settings Icon */}
        <div className="p-2 rounded-full bg-[#F9FAFB] cursor-pointer">
          <FiSettings className="text-gray-400" />
        </div>

        {/* Notification Icon */}
        <div className="p-2 rounded-full bg-[#F9FAFB] cursor-pointer">
          <FiBell className="text-[#EF4444]" />
        </div>

        {/* Profile Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
