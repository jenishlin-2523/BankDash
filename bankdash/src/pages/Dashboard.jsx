import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
  PieChart, Pie, Cell, LineChart, Line, CartesianGrid, AreaChart,Area
} from "recharts";
import chipWhite from "../assets/chip.png";
import chipDark from "../assets/chip.png";

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
  { name: "Entertainment", value: 30, color: "#233A66" }, // dark indigo
  { name: "Bill Expense", value: 15, color: "#F59E0B" },  // orange
  { name: "Investment", value: 20, color: "#EC4899" },    // magenta
  { name: "Others", value: 35, color: "#1E3AFC" },        // blue
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

// ---------- Simple Card ----------
const CardShell = ({ title, children }) => (
  <div className="bg-white rounded-2xl shadow-sm p-5 h-full">
    <h3 className="text-[15px] font-semibold text-[#1F2A56] mb-4">{title}</h3>
    {children}
  </div>
);

// ---------- Pie label ----------
const RAD = Math.PI / 180;

const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
  const r = (innerRadius + outerRadius) / 2;
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD) - 8; // 🔥 shift upward

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="left"
      fill="#fff"
      fontSize={12}
    >
      <tspan fontWeight="700">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="14">{name}</tspan>
    </text>
  );
};

// ---------- Page ----------
const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* My Cards */}
        <div className="col-span-12 xl:col-span-8">
          <CardShell title="My Cards">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Primary Card */}
              <div
                className="rounded-2xl text-white p-5 relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg,#5B5BD6 0%, #3A57E8 50%, #2E3BCF 100%)",
                }}
              >
                <div className="absolute top-5 right-5">
                  <img src={chipWhite} alt="chip" className="w-[42px] h-[32px] object-contain" />
                </div>

                <p className="uppercase text-xs opacity-80">Balance</p>
                <p className="text-2xl font-bold mt-1">$5,756</p>

                <div className="mt-6 flex justify-between text-xs">
                  <div>
                    <p className="uppercase">Card Holder</p>
                    <p className="text-sm font-semibold">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="uppercase">Valid Thru</p>
                    <p className="text-sm font-semibold">12/22</p>
                  </div>
                </div>

                <div className="mt-5 mb-4 h-px bg-white/30" />
                <div className="flex justify-between items-center">
                  <p className="tracking-widest text-sm">3778 **** **** 1234</p>
                  <div className="relative flex items-center">
                    <span className="w-7 h-7 rounded-full bg-white opacity-30"></span>
                    <span className="w-7 h-7 rounded-full bg-white opacity-30 -ml-3"></span>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="rounded-2xl p-5 bg-white border relative">
                <div className="absolute top-5 right-5">
                  <img src={chipDark} alt="card chip" className="w-[42px] h-[32px] object-contain" />
                </div>

                <p className="uppercase text-xs text-gray-500">Balance</p>
                <p className="text-2xl font-bold text-[#1F2A56] mt-1">$5,756</p>

                <div className="mt-6 flex justify-between text-xs text-gray-500">
                  <div>
                    <p className="uppercase">Card Holder</p>
                    <p className="text-sm font-semibold text-gray-700">Eddy Cusuma</p>
                  </div>
                  <div>
                    <p className="uppercase">Valid Thru</p>
                    <p className="text-sm font-semibold text-gray-700">12/22</p>
                  </div>
                </div>

                <div className="mt-5 mb-4 h-px bg-slate-200" />
                <div className="flex justify-between items-center">
                  <p className="tracking-widest text-sm text-gray-700">3778 **** **** 1234</p>
                  <div className="relative flex items-center">
                    <span className="w-7 h-7 rounded-full bg-gray-400 opacity-70"></span>
                    <span className="w-7 h-7 rounded-full bg-gray-400 opacity-70 -ml-3"></span>
                  </div>
                </div>
              </div>
            </div>
          </CardShell>
        </div>

        {/* Recent Transaction */}
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
                  <span className={`text-sm font-semibold ${t.amount < 0 ? "text-rose-500" : "text-emerald-500"}`}>
                    {t.amount < 0 ? "-$" + Math.abs(t.amount) : "+$" + t.amount.toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </CardShell>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Weekly Activity */}
        <div className="col-span-12 xl:col-span-8">
  <CardShell title="Weekly Activity">
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={weeklyActivity} barSize={18}>
        <CartesianGrid vertical={false} stroke="#ffffffff" />
        <XAxis
          dataKey="day"
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={{ fill: "#F8FAFC" }} />

        {/* ✅ Legend moved top-right & slightly higher */}
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            fontSize: "12px",
            paddingRight: "10px",
            marginTop: "-12px", // pushes legend upward
          }}
        />

        <Bar
          dataKey="deposit"
          name="Deposit"
          radius={[6, 6, 0, 0]}
          fill="#0313f1ff"
        />
        <Bar
          dataKey="withdraw"
          name="Withdraw"
          radius={[6, 6, 0, 0]}
          fill="#14cfb9ff"
        />
      </BarChart>
    </ResponsiveContainer>
  </CardShell>
</div>


        {/* Expense Statistics */}
        <div className="col-span-12 xl:col-span-4">
          <CardShell title="Expense Statistics">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={expenseStats}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}      // larger pie
                  innerRadius={0}
                  paddingAngle={2}
                  stroke="#FFFFFF"
                  strokeWidth={6}
                  label={renderPieLabel}
                  labelLine={false}
                  isAnimationActive={false}
                >
                  {expenseStats.map((s, i) => (
                    <Cell key={i} fill={s.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </CardShell>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-12 gap-6">
        {/* Quick Transfer */}
        <div className="col-span-12 xl:col-span-5 flex justify-start">
  <CardShell
    title="Quick Transfer"
    className="w-full max-w-[440px] p-5"
  >
    {/* content wrapper */}
    <div className="w-full">
      {/* Avatars row + chevron button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {[
            { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/80?img=5" },
            { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/80?img=12" },
            { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/80?img=20" },
          ].map((p, i) => (
            <div key={p.name} className="mt-7 flex flex-col items-center min-w-[100px]">
              <img
                src={p.img}
                alt={p.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <p className={`mt-2 text-sm ${i === 0 ? "font-semibold text-[#1F2A56]" : "font-semibold text-[#1F2A56]"}`}>
                {p.name}
              </p>
              <p className="text-xs text-indigo-500">{p.role}</p>
            </div>
          ))}
        </div>

        {/* Round chevron button */}
        <button
          type="button"
          className="shrink-0 w-10 h-10 rounded-full bg-white shadow-md ring-1 ring-slate-100 flex items-center justify-center text-indigo-600"
          aria-label="Next"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>

      {/* Amount row */}
      <div className="mt-12 flex items-center gap-3 w-full max-w-[700px]">
  {/* Label */}
  <span className="text-sm text-slate-400 whitespace-nowrap">
    Write Amount
  </span>

  {/* Input with overlay button */}
  <div className="relative flex-1">
    <input
      className="w-full px-5 py-2.5 pr-24 text-sm bg-slate-100 text-slate-600 rounded-full outline-none text-center"
      defaultValue="525.50"
    />

    <button
      className="absolute right-1 top-1/2 -translate-y-1/2 px-6 py-2.5 rounded-full text-white flex items-center gap-2 shadow-lg"
      style={{ background: "linear-gradient(135deg,#3144FF 0%,#1A2BFF 100%)" }}
    >
      <span>Send</span>
      <i className="fa-solid fa-paper-plane"></i>
    </button>
  </div>
</div>

    </div>
  </CardShell>
</div>




        {/* Balance History */}
<div className="col-span-12 xl:col-span-6">
  <CardShell title="Balance History">
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={balanceHistory} margin={{ left: 4, right: 12, top: 10 }}>
        <defs>
          <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#EEF2FF" />
        <XAxis
          dataKey="m"
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "#94A3B8", fontSize: 12 }}
          domain={[0, 800]}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="v"
          stroke="#3B82F6"
          strokeWidth={3}
          fill="url(#colorBlue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </CardShell>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
