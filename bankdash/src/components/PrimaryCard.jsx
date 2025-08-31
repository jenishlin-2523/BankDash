import React from "react";
import chipWhite from "../assets/chip.png";

const PrimaryCard = () => {
  return (
    <div
      className="rounded-2xl text-white p-5 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#5B5BD6 0%, #3A57E8 50%, #2E3BCF 100%)",
      }}
    >
      {/* Chip */}
      <div className="absolute top-5 right-5">
        <img
          src={chipWhite}
          alt="chip"
          className="w-[42px] h-[32px] object-contain"
        />
      </div>

      {/* Balance */}
      <p className="uppercase text-xs opacity-80">Balance</p>
      <p className="text-2xl font-bold mt-1">$5,756</p>

      {/* Card Info */}
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

      {/* Divider */}
      <div className="mt-5 mb-4 h-px bg-white/30" />

      {/* Card Number + Circles */}
      <div className="flex justify-between items-center">
        <p className="tracking-widest text-sm">3778 **** **** 1234</p>
        <div className="relative flex items-center">
          <span className="w-7 h-7 rounded-full bg-white opacity-30"></span>
          <span className="w-7 h-7 rounded-full bg-white opacity-30 -ml-3"></span>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
