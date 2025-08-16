import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: "fa-solid fa-house", path: "/" },
    { name: "Transactions", icon: "fa-solid fa-file-invoice-dollar", path: "/transactions" },
    { name: "Accounts", icon: "fa-solid fa-user", path: "/accounts" },
    { name: "Investments", icon: "fa-solid fa-chart-column", path: "/investments" },
    { name: "Credit Cards", icon: "fa-solid fa-credit-card", path: "/credit-cards" },
    { name: "Loans", icon: "fa-solid fa-hand-holding-dollar", path: "/loans" },
    { name: "Services", icon: "fa-solid fa-screwdriver-wrench", path: "/services" },
    { name: "My Privileges", icon: "fa-solid fa-gift", path: "/my-privileges" },
    { name: "Setting", icon: "fa-solid fa-gear", path: "/setting" },
  ];

  return (
    <div className="h-screen w-64 bg-white shadow-md flex flex-col">
      {/* Logo */}
      <div className="px-6 py-6 text-2xl font-bold text-blue-950 flex items-center gap-2">
        <i className="fa-solid fa-wallet text-blue-600 text-2xl"></i>
        BankDash.
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <NavLink key={item.name} to={item.path} end>
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3 px-6 py-3 cursor-pointer relative transition-all duration-200
                  ${isActive ? "text-blue-600 font-semibold" : "text-gray-400"}`}
              >
                {/* Active Indicator (left bar) */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-tr-lg rounded-br-lg"></span>
                )}

                {/* Icon */}
                <i className={`${item.icon} text-lg`}></i>

                {/* Label */}
                <span>{item.name}</span>
              </div>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
