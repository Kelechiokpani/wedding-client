'use client'

import { useState } from "react";
import Image from 'next/image';
import paystack from "@/public/assets/images/paystack.png";
import BillingTable from "./Billing-Table";
import PricingPlans from "./PricingPlans";

const Billing = () => {
  const [showPricing, setShowPricing] = useState(false);
  const [currentUsage] = useState(20000);
  const totalUsage = 40000;

  if (showPricing) {
    return <PricingPlans/> ;
  }

  return (
    <div className="p-6 bg-white rounded-lg mx-auto">
      <div className="grid grid-cols-1 gap-10 flex-col md:grid-cols-2">
        {/* Current Plan Section */}
        <div className="flex justify-between flex-col items-start mb-6 md:flex-row">
          <div>
            <h2 className="text-lg font-semibold">Current Plan</h2>
            <p className="text-sm text-gray-500">
              Thanks for using our free membership and supporting our development.
            </p>
            <div className="flex justify-between gap-3 md:items-center flex-col my-6 md:flex-row">
              <div>
                <p className="text-xs font-medium text-gray-500">Current Plan</p>
                <p className="text-gray-700 font-semibold">Free</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Billing Cycle</p>
                <p className="text-gray-700 font-semibold">Monthly</p>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Plan Cost</p>
                <p className="text-gray-700 font-semibold">#40000</p>
              </div>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">
                Usage: {currentUsage} out of {totalUsage} monthly active use
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: `${(currentUsage / totalUsage) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="my-4">
              <p className="text-sm text-gray-600">Renewal Date</p>
              <p className="font-semibold text-gray-700">12-June-2025</p>
            </div>
          </div>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700"
            onClick={() => setShowPricing(true)} 
          >
            Upgrade
          </button>
        </div>

        {/* Payment Method Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Payment Method</h2>
          <div className="mt-2 p-4 border rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src={paystack} alt="Paystack" className="h-6" />
              <span className="text-sm text-gray-700">Safe Online Payment</span>
            </div>
            <input type="radio" checked readOnly />
          </div>
          <p className="text-sm text-purple-600 mt-2 cursor-pointer">
            + Add new payment method
          </p>
        </div>
      </div>

      {/* Billing History */}
      <BillingTable />
    </div>
  );
};

export default Billing;
