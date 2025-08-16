import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid
} from "recharts";

// ---------- Sample data ----------
const weeklyActivity = [
  { day: "Sat", deposit: 480, withdraw: 250 },
  { day: "Sun", deposit: 340, withdraw: 120 },
  { day: "Mon", deposit: 320, withdraw: 280 },
  { day: "Tue", deposit: 490, withdraw: 360 },
  { day: "Wed", deposit: 210, withdraw: 160 },
  { day: "Thu", deposit: 450, withdraw: 300 },
  { day: "Fri", deposit: 380, withdraw: 260 },
];

const expenseStats = [
  { name: "Entertainment", value: 30, color: "#4F46E5" }, // indigo-600
  { name: "Bill Expense", value: 15, color: "#F59E0B" },  // amber-500
  { name: "Investment", value: 20, color: "#EC4899" },    // pink-500
  { name: "Others", value: 35, color: "#3B82F6" },        // blue-500
];

const balanceHistory = [
  { m: "Jul", v: 120 },
  { m: "Aug", v: 280 },
  { m: "Sep", v: 620 },
  { m: "Oct", v: 780 },
  { m: "Nov", v: 520 },
  { m: "Dec", v: 640 },
  { m: "Jan", v: 680 },
];

const tx = [
  { icon: "fa-solid fa-credit-card", bg: "bg-emerald-50", iconColor: "text-emerald-500", title: "Deposit from my Card", date: "28 January 2021", amount: -850 },
  { icon: "fa-brands fa-paypal", bg: "bg-indigo-50", iconColor: "text-indigo-500", title: "Deposit Paypal", date: "25 January 2021", amount: 2500 },
  { icon: "fa-solid fa-user", bg: "bg-cyan-50", iconColor: "text-cyan-500", title: "Jemi Wilson", date: "21 January 2021", amount: 5400 },
];

// ---------- Helpers ----------
const currency = (n) =>
  (n < 0 ? "-$" : "+$") + Math.abs(n).toLocaleString();

const CardShell = ({ title, right, children }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-[15px] font-semibold text-[#1F2A56]">{title}</h3>
      {right}
    </div>
    {children}
  </div>
);

// ---------- Page ----------
const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top: My Cards + Recent Transaction */}
      <div className="grid grid-cols-12 gap-6 ">
        {/* My Cards (span 8) */}
        <div className="col-span-12 xl:col-span-8">
          <CardShell
            title="My Cards"
            right={<button className="text-xs text-blue-600 hover:underline">See All</button>}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Primary card */}
              <div className="relative overflow-hidden rounded-xl text-white p-5"
                   style={{ background: "linear-gradient(135deg,#5B5BD6 0%, #3A57E8 50%, #2E3BCF 100%)" }}>
                <div className="flex items-start justify-between">
                  <div className="text-xs opacity-90">
                    <p className="uppercase tracking-wide">Balance</p>
                    <p className="text-2xl font-bold mt-1">$5,756</p>
                  </div>
                  <div className="w-9 h-6 bg-white/20 rounded-md" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-6 text-xs opacity-95">
                  <div>
                    <p className="uppercase tracking-wide">Card Holder</p>
                    <p className="text-sm font-semibold">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-wide">Valid Thru</p>
                    <p className="text-sm font-semibold">12/22</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="tracking-widest text-sm">3778 **** **** 1234</p>
                  {/* fake toggle */}
                  <div className="w-11 h-6 bg-white/30 rounded-full flex items-center p-1">
                    <span className="w-4 h-4 bg-white rounded-full translate-x-[20px]" />
                  </div>
                </div>
              </div>

              {/* Secondary card */}
              <div className="relative overflow-hidden rounded-xl p-5 bg-white border">
                <div className="flex items-start justify-between">
                  <div className="text-xs text-gray-500">
                    <p className="uppercase tracking-wide">Balance</p>
                    <p className="text-2xl font-bold text-[#1F2A56] mt-1">$5,756</p>
                  </div>
                  <div className="w-9 h-6 bg-gray-200 rounded-md" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-6 text-xs text-gray-500">
                  <div>
                    <p className="uppercase tracking-wide">Card Holder</p>
                    <p className="text-sm font-semibold text-gray-700">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-wide">Valid Thru</p>
                    <p className="text-sm font-semibold text-gray-700">12/22</p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <p className="tracking-widest text-sm text-gray-700">
                    3778 **** **** 1234
                  </p>
                  <div className="w-11 h-6 bg-gray-200 rounded-full flex items-center p-1">
                    <span className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </CardShell>
        </div>

        {/* Recent Transaction (span 4) */}
        <div className="col-span-12 xl:col-span-4">
          <CardShell title="Recent Transaction">
            <ul className="space-y-3">
              {tx.map((t, i) => (
                <li key={i} className="flex items-center justify-between bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.bg}`}>
                      <i className={`${t.icon} ${t.iconColor} text-lg`}></i>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1F2A56]">{t.title}</p>
                      <p className="text-xs text-gray-500">{t.date}</p>
                    </div>
                  </div>
                  <div className={`text-sm font-semibold ${t.amount < 0 ? "text-rose-500" : "text-emerald-500"}`}>
                    {t.amount < 0 ? "-$" + Math.abs(t.amount) : "+$" + t.amount.toLocaleString()}
                  </div>
                </li>
              ))}
            </ul>
          </CardShell>
        </div>
      </div>

      {/* Middle: Weekly Activity + Expense Statistics */}
      <div className="grid grid-cols-12 gap-6">
        {/* Weekly Activity */}
        <div className="col-span-12 xl:col-span-8">
          <CardShell title="Weekly Activity">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyActivity} barSize={18}>
                  <CartesianGrid vertical={false} stroke="#EEF2FF" />
                  <XAxis dataKey="day" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: "#F8FAFC" }} />
                  <Legend verticalAlign="top" align="center" iconType="circle" wrapperStyle={{ paddingBottom: 16 }} />
                  <Bar dataKey="deposit" name="Deposit" radius={[6, 6, 0, 0]} fill="#3B82F6" />
                  <Bar dataKey="withdraw" name="Withdraw" radius={[6, 6, 0, 0]} fill="#14B8A6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardShell>
        </div>

        {/* Expense Statistics */}
        <div className="col-span-12 xl:col-span-4">
          <CardShell title="Expense Statistics">
            <div className="h-64 grid place-items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseStats}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                  >
                    {expenseStats.map((s, i) => (
                      <Cell key={i} fill={s.color} />
                    ))}
                  </Pie>
                  <Legend layout="vertical" verticalAlign="middle" align="right" />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardShell>
        </div>
      </div>

      {/* Bottom: Quick Transfer + Balance History */}
      <div className="grid grid-cols-12 gap-6">
        {/* Quick Transfer */}
        <div className="col-span-12 xl:col-span-6">
          <CardShell title="Quick Transfer">
            <div className="flex items-center gap-5 overflow-x-auto pb-2">
              {[
                { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/60?img=5" },
                { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/60?img=12" },
                { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/60?img=20" },
              ].map((p) => (
                <div key={p.name} className="flex items-center gap-3">
                  <img src={p.img} alt={p.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-[#1F2A56]">{p.name}</p>
                    <p className="text-xs text-gray-500">{p.role}</p>
                  </div>
                </div>
              ))}
              <button className="ml-auto shrink-0 w-9 h-9 rounded-full bg-gray-100 grid place-items-center">
                <i className="fa-solid fa-chevron-right text-gray-500"></i>
              </button>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <button className="px-3 py-2 text-sm text-gray-500 bg-gray-50 rounded-lg">Write Amount</button>
              <input
                className="px-3 py-2 text-sm bg-gray-50 rounded-lg outline-none"
                defaultValue="525.50"
              />
              <button className="ml-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-2">
                Send <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </CardShell>
        </div>

        {/* Balance History */}
        <div className="col-span-12 xl:col-span-6">
          <CardShell title="Balance History">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={balanceHistory} margin={{ left: 4, right: 12, top: 10, bottom: 0 }}>
                  <CartesianGrid vertical={false} stroke="#EEF2FF" />
                  <XAxis dataKey="m" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 12 }} domain={[0, 800]} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line type="monotone" dataKey="v" stroke="#3B82F6" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardShell>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
