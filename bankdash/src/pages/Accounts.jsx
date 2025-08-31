import React from "react";
import {
  FaWallet,
  FaArrowUp,
  FaArrowDown,
  FaPiggyBank,
} from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import {
  DollarSign,
  CreditCard,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import PrimaryCard from "../components/PrimaryCard"; // ✅ reusable card

const Accounts = () => {
  return (
    <div className="p-6 space-y-6 bg-[#f9fbff] min-h-screen">
      {/* ================= Layer 1 : Summary Cards ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          {
            title: "My Balance",
            value: "$12,750",
            color: "bg-yellow-100 text-yellow-600",
            icon: <FaWallet size={22} />,
          },
          {
            title: "Income",
            value: "$5,600",
            color: "bg-blue-100 text-blue-600",
            icon: <FaArrowUp size={22} />,
          },
          {
            title: "Expense",
            value: "$3,460",
            color: "bg-pink-100 text-pink-600",
            icon: <FaArrowDown size={22} />,
          },
          {
            title: "Total Saving",
            value: "$7,920",
            color: "bg-teal-100 text-teal-600",
            icon: <FaPiggyBank size={22} />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl flex items-center shadow-md hover:shadow-lg transition"
          >
            <div className={`${item.color} p-4 rounded-full`}>{item.icon}</div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">{item.title}</p>
              <p className="font-bold text-xl">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Layer 2 : Last Transactions + My Card ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 items-stretch">
        {/* Last Transactions */}
        <div className="flex-col lg:col-span-2">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-1">
            Last Transactions
          </h2>
          <ul className="flex-1 flex flex-col bg-white p-6 rounded-2xl shadow-md flex ">
            {[
              {
                name: "Spotify Subscription",
                date: "25 Jan 2025",
                category: "Shopping",
                card: "Visa",
                status: "Completed",
                amount: "-$150",
                iconColor: "bg-green-100 text-green-600",
                amountColor: "text-red-500",
              },
              {
                name: "Mobile Service",
                date: "25 Jan 2025",
                category: "Service",
                card: "MasterCard",
                status: "Completed",
                amount: "-$340",
                iconColor: "bg-yellow-100 text-yellow-600",
                amountColor: "text-red-500",
              },
              {
                name: "Emily Wilson",
                date: "25 Jan 2025",
                category: "Transfer",
                card: "Bank",
                status: "Completed",
                amount: "+$780",
                iconColor: "bg-pink-100 text-pink-600",
                amountColor: "text-green-600",
              },
            ].map((tx, i) => (
              <li
              key={i}
              className="flex items-start py-1  last:border-3"
              >
  {/* Icon */}
  <div className={`${tx.iconColor} p-3 rounded-[16px] flex-shrink-0`}>
    <FiMusic size={20} />
  </div>

  {/* Transaction Details */}
  <div className="flex-1 ml-4 grid grid-cols-4 gap-1">
    {/* First row */}
    <span className="font-medium text-left">{tx.name}</span>
    <span className="text-center text-blue-300">{tx.category}</span>
    <span className="text-center text-blue-300">{tx.card}</span>
    <span className={`text-center ${tx.amountColor} font-semibold`}>{tx.amount}</span>

    {/* Second row: Date under first column */}
    <span className="text-xs mt-1 text-left text-blue-300">{tx.date}</span>

  </div>
</li>
            ))}
          </ul>
        </div>

        {/* My Card */}
        <div className="">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            My Card
          </h2>
          <div className="flex-1">
            <PrimaryCard />
          </div>
        </div>
      </div>

      {/* ================= Layer 3 : Debit & Credit Overview + Invoices ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Debit & Credit Graph */}
        <div className="">
          <h2 className="font-bold text-lg mb-6 flex items-center gap-2">
            Debit & Credit Overview
          </h2>
          <div className="flex justify-between bg-white p-6 rounded-2xl shadow-md">
            {["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => {
              const debitHeights = [70, 50, 40, 90, 60, 55, 80];
              const creditHeights = [100, 80, 70, 60, 95, 75, 100];
              return (
                <div key={i} className="flex flex-col items-center">
                  <div className="flex items-end space-x-1 h-40">
                    <div
                      className="w-3 rounded bg-blue-700"
                      style={{ height: `${debitHeights[i]}px` }}
                    />
                    <div
                      className="w-3 rounded bg-yellow-500"
                      style={{ height: `${creditHeights[i]}px` }}
                    />
                  </div>
                  <p className="text-xs font-semibold mt-2">{day}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Invoices */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
            Invoices Sent
          </h2>
          <ul>
            {[
              {
                name: "Apple Store",
                time: "5h ago",
                amount: "$450",
                color: "bg-green-100 text-green-600",
              },
              {
                name: "Michael",
                time: "2 days ago",
                amount: "$160",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                name: "Playstation",
                time: "5 days ago",
                amount: "$1085",
                color: "bg-blue-100 text-blue-600",
              },
              {
                name: "William",
                time: "10 days ago",
                amount: "$90",
                color: "bg-pink-100 text-pink-600",
              },
            ].map((inv, i) => (
              <li
                key={i}
                className="flex justify-between items-center py-3 border-b last:border-none"
              >
                <div className="flex items-center space-x-3">
                  <div className={`${inv.color} p-2 rounded-full`}>
                    <DollarSign size={16} />
                  </div>
                  <div>
                    <p className="font-medium">{inv.name}</p>
                    <p className="text-xs text-gray-400">{inv.time}</p>
                  </div>
                </div>
                <p className="font-bold">{inv.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
