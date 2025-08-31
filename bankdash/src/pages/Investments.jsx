import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TbMoneybag } from "react-icons/tb";
import { Repeat } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { SiTesla } from "react-icons/si";
import { FaApple, FaGoogle } from "react-icons/fa";

// ✅ Register Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ✅ Register solid icons
library.add(fas);
const byPrefixAndName = { fas };

export default function Investments() {
  // Chart Data
  const yearlyData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Total Investment",
        data: [5000, 25000, 20000, 40000, 30000, 35000],
        borderColor: "#f59e0b",
        backgroundColor: "#fcd34d",
        tension: 0.3,
        pointBackgroundColor: "#f59e0b",
      },
    ],
  };

  const monthlyData = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "Revenue",
        data: [10000, 18000, 30000, 25000, 27000, 37000],
        borderColor: "#0ea5e9",
        backgroundColor: "#bae6fd",
        tension: 0.3,
        pointBackgroundColor: "#0ea5e9",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { callback: (val) => `$${val}` },
      },
    },
  };

  return (
    <div className="p-6 space-y-6 bg-[#f9fbff] min-h-screen">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Invested Amount */}
        <div className="flex items-center bg-white shadow rounded-2xl p-5 space-x-4">
          <div className="bg-emerald-100 p-3 rounded-full">
            <TbMoneybag className="text-emerald-600" size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Invested Amount</p>
            <h2 className="text-xl font-semibold">$150,000</h2>
          </div>
        </div>

        {/* Number of Investments */}
        <div className="flex items-center bg-white shadow rounded-2xl p-5 space-x-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FontAwesomeIcon
              icon={byPrefixAndName.fas["chart-pie"]}
              className="text-pink-600 text-2xl"
            />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Number of Investments</p>
            <h2 className="text-xl font-semibold">1,250</h2>
          </div>
        </div>

        {/* Rate of Return */}
        <div className="flex items-center bg-white shadow rounded-2xl p-5 space-x-4">
          <div className="bg-indigo-100 p-3 rounded-full">
            <Repeat className="text-indigo-600" size={28} />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Rate of Return</p>
            <h2 className="text-xl font-semibold">+5.80%</h2>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-gray-700 font-medium mb-3">
            Yearly Total Investment
          </h3>
          <Line data={yearlyData} options={options} />
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-gray-700 font-medium mb-3">Monthly Revenue</h3>
          <Line data={monthlyData} options={options} />
        </div>
      </div>

      {/* Investments & Trending Stock */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* My Investment */}
        
    <div className="bg-white shadow rounded-2xl p-4">
      <h3 className="text-gray-700 font-medium mb-3">My Investment</h3>
      <div className="space-y-3">
        {[
          {
            name: "Apple Store",
            desc: "E-commerce, Marketplace",
            amount: "$54,000",
            return: "+16%",
            color: "text-emerald-600",
            bg: "bg-pink-100",
            icon: <FaApple className="text-pink-500 text-lg" />,
          },
          {
            name: "Google",
            desc: "Search Engine, Cloud",
            amount: "$25,300",
            return: "-4%",
            color: "text-red-500",
            bg: "bg-blue-100",
            icon: <FaGoogle className="text-blue-500 text-lg" />,
          },
          {
            name: "Tesla Motors",
            desc: "Electric Vehicles",
            amount: "$8,200",
            return: "+25%",
            color: "text-emerald-600",
            bg: "bg-yellow-100",
            icon: <SiTesla className="text-yellow-500 text-lg" />,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-gray-50 rounded-xl p-3"
          >
            {/* Left Section */}
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-[16px] ${item.bg}`}
              >
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-8">
              <div>
                <p className="font-semibold">{item.amount}</p>
                <p className="text-sm text-gray-400">Investment Value</p>
              </div>
              <div>
                <p className={`font-semibold ${item.color}`}>{item.return}</p>
                <p className="text-sm text-gray-400">Return Value</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


        {/* Trending Stock */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-gray-700 font-medium mb-3">Trending Stock</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-2">SL No</th>
                <th className="pb-2">Name</th>
                <th className="pb-2">Price</th>
                <th className="pb-2">Return</th>
              </tr>
            </thead>
            <tbody>
              {[
                { sl: "01.", name: "Trivago", price: "$520", return: "+5%" },
                { sl: "02.", name: "Canon", price: "$480", return: "+11%" },
                { sl: "03.", name: "Uber Food", price: "$350", return: "-3%" },
                { sl: "04.", name: "Nokia", price: "$940", return: "+24%" },
                { sl: "05.", name: "Tiktok", price: "$670", return: "-12%" },
              ].map((item, i) => (
                <tr key={i} className="border-t">
                  <td className="py-2">{item.sl}</td>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.price}</td>
                  <td
                    className={`py-2 ${
                      item.return.startsWith("-")
                        ? "text-red-500"
                        : "text-emerald-600"
                    }`}
                  >
                    {item.return}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
