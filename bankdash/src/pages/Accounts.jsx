import React from 'react';

const Account = () => {
  return (
    <div className="flex min-h-screen bg-[#f7f9fc] text-gray-800 font-sans">

      

      {/* Main content area */}
      <main className="flex-1 p-8">


        {/* Top Summary Box */}
        <section className="grid grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow">
            <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v2a3 3 0 006 0v-2c0-1.657-1.343-3-3-3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19c4 0 7-1.5 7-4.5V8c0-3.5-5-6-7-6s-7 2.5-7 6v6.5c0 3 3 4.5 7 4.5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">My Balance</p>
              <p className="font-semibold text-lg text-gray-900">$12,750</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Income</p>
              <p className="font-semibold text-lg text-gray-900">$5,600</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow">
            <div className="bg-pink-100 p-3 rounded-full text-pink-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 0a4 4 0 018 0v4m-8 4v4m8-8v8m0-8h-8" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Expense</p>
              <p className="font-semibold text-lg text-gray-900">$3,460</p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow">
            <div className="bg-teal-100 p-3 rounded-full text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l3-3m0 0l3-3m-3 3v6" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Saving</p>
              <p className="font-semibold text-lg text-gray-900">$7,920</p>
            </div>
          </div>
        </section>

        {/* Main below summary grid */}
        <section className="grid grid-cols-3 gap-8">
          {/* Left - Last Transaction */}
          <div className="col-span-2 bg-white rounded-xl p-6 shadow-md">
            <h2 className="font-semibold text-gray-900 mb-5 text-lg">Last Transaction</h2>
            <ul>
              {[
                {
                  iconColor: 'bg-teal-100 text-teal-600',
                  iconSvg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h4" />
                      <circle cx="17" cy="9" r="4" stroke="none" fill="currentColor" />
                    </svg>
                  ),
                  title: "Spotify Subscription",
                  date: "25 Jan 2021",
                  category: "Shopping",
                  card: "1234 ****",
                  status: "Pending",
                  statusClass: "text-red-500",
                  amount: "-$150",
                  amountClass: "text-red-500",
                },
                {
                  iconColor: 'bg-blue-100 text-blue-600',
                  iconSvg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 12H2M12 22V2" />
                    </svg>
                  ),
                  title: "Mobile Service",
                  date: "25 Jan 2021",
                  category: "Service",
                  card: "1234 ****",
                  status: "Completed",
                  statusClass: "text-gray-600",
                  amount: "-$340",
                  amountClass: "text-red-500",
                },
                {
                  iconColor: 'bg-pink-100 text-pink-600',
                  iconSvg: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" stroke="none" fill="currentColor" />
                    </svg>
                  ),
                  title: "Emilly Wilson",
                  date: "25 Jan 2021",
                  category: "Transfer",
                  card: "1234 ****",
                  status: "Completed",
                  statusClass: "text-gray-600",
                  amount: "+$780",
                  amountClass: "text-green-600",
                },
              ].map((tx, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className={`${tx.iconColor} p-3 rounded-full`}>
                      {tx.iconSvg}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">{tx.title}</span>
                      <span className="text-xs text-gray-500">{tx.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6 text-xs text-gray-500">
                    <span>{tx.category}</span>
                    <span>{tx.card}</span>
                    <span className={tx.statusClass}>{tx.status}</span>
                    <span className={tx.amountClass + " font-semibold"}>{tx.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Info Column */}
          <div className="flex flex-col space-y-8">
            {/* My Card */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl px-6 py-8 text-white shadow-lg relative">
              <div className="flex justify-between items-center mb-8">
                <span className="font-semibold opacity-80">Balance</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 opacity-50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-75">Balance</p>
                <p className="text-2xl font-semibold mb-6">$5,756</p>
                <p className="text-xs opacity-80 mb-4">CARD HOLDER<br /><strong>Eddy Cusuma</strong></p>
                <p className="text-xs opacity-80 mb-4">VALID THRU<br /><strong>12/22</strong></p>
                <div className="flex justify-between items-center">
                  <span className="tracking-widest text-lg">3778 **** **** 1234</span>
                  <label className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="w-12 h-6 bg-white rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:bg-blue-500 transition-colors"></div>
                    <span className="absolute left-1 top-0.5 w-5 h-5 bg-blue-400 rounded-full transition-transform peer-checked:translate-x-6"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* Invoices Sent */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-semibold text-gray-900 mb-5 text-lg">Invoices Sent</h2>
              <ul className="space-y-4 text-sm">
                {[
                  {
                    iconColor: 'bg-teal-100 text-teal-600',
                    iconName: 'Apple Store',
                    timeAgo: '5h ago',
                    amount: '$450',
                  },
                  {
                    iconColor: 'bg-yellow-100 text-yellow-600',
                    iconName: 'Michael',
                    timeAgo: '2 days ago',
                    amount: '$160',
                  },
                  {
                    iconColor: 'bg-blue-100 text-blue-600',
                    iconName: 'Playstation',
                    timeAgo: '5 days ago',
                    amount: '$1085',
                  },
                  {
                    iconColor: 'bg-pink-100 text-pink-600',
                    iconName: 'William',
                    timeAgo: '10 days ago',
                    amount: '$90',
                  },
                ].map((invoice, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`${invoice.iconColor} p-2 rounded-full`}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          {/* Icons variation based on name could be added here */}
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l6.16 3.422a12.083 12.083 0 01-12.32 0L12 12z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v6" />
                        </svg>
                      </div>
                      <div className="flex flex-col text-gray-600">
                        <span>{invoice.iconName}</span>
                        <span className="text-xs text-gray-400">{invoice.timeAgo}</span>
                      </div>
                    </div>
                    <span className="font-bold text-gray-900">{invoice.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Debit & Credit Overview */}
        <section className="mt-12 bg-white rounded-xl shadow p-6">
          <h2 className="font-semibold text-gray-900 mb-4 text-lg">Debit & Credit Overview</h2>
          <p className="text-xs mb-6 text-gray-600">
            $7,560 <span className="font-semibold">Debited</span> & $5,420 <span className="font-semibold">Credited in this Week</span>
          </p>

          <div className="flex justify-between space-x-6">
            {['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => {
              // Data based on the image chart approximate values (in px ratio)
              const debitHeights = [50, 25, 20, 60, 40, 25, 50];
              const creditHeights = [80, 60, 50, 40, 75, 30, 75];
              return (
                <div key={i} className="flex flex-col items-center space-y-1 w-8">
                  <div className="flex items-end space-x-1 h-24 relative">
                    <div
                      title="Debit"
                      className="w-4 rounded-t-lg bg-blue-800"
                      style={{ height: `${debitHeights[i]}px` }}
                    />
                    <div
                      title="Credit"
                      className="w-4 rounded-t-lg bg-yellow-500"
                      style={{ height: `${creditHeights[i]}px` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-gray-600">{day}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-end space-x-4 text-xs font-semibold text-gray-600">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-blue-800 inline-block"></span>
              <span>Debit</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span>Credit</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Account;


