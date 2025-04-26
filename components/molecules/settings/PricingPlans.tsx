import React, { useState } from "react";

const plans = [
  {
    name: "Free",
    price: "NGN 0",
    description: "For small businesses and startups that need business tools to get started",
    features: [
      "1 user per account",
      "Up to 50 inventory products",
      "Up to 50 sales with basic tracking and logging",
      "Monthly sales and inventory support",
      "Up to 5 low stock alerts per month",
      "Email support only",
      "2 CSV export per month",
    ],
    buttonLabel: "Choose Plan",
  },
  {
    name: "Basic Plan",
    price: "NGN 2000",
    description: "For small businesses and startups that need business tools to get started",
    features: [
      "3 users per account",
      "500 inventory products",
      "Unlimited sales tracking and digital receipts",
      "Weekly sales, inventory, and expense reports",
      "Unlimited low-stock alerts",
      "Top selling products & average sales analytics",
      "Priority email support",
      "15 CSV export or excel formats per month",
    ],
    buttonLabel: "Pause Plan",
    cancelLabel: "Cancel Subscription",
  },
  {
    name: "Pro Plan",
    price: "NGN 5500",
    description: "For medium businesses and startups that need business tools to get started",
    features: [
      "10 users per account",
      "5000 inventory products",
      "Low stock, overdue payment, and custom alerts",
      "Sales tracking with payment type",
      "Daily, weekly, and monthly detailed reports (profit & loss, sales analytics)",
      "5 document uploads with OCR processing per month",
      "Multi-currency support (up to 3 currencies)",
      "Advanced analytics for customer insights, profitability, and inventory valuation",
      "Email and chat support",
      "Unlimited exports in PDF, Excel, or CSV formats",
    ],
    buttonLabel: "Choose Plan",
    borderColor: "border-purple-500",
  },
  {
    name: "Enterprise Plan",
    price: "Custom",
    description: "For large businesses and startups that need business tools to get started",
    features: [
      "Unlimited users per account",
      "Unlimited inventory products",
      "Custom workflows with multi-location management",
      "Multi-currency support, unlimited currencies",
      "Daily, weekly, and monthly detailed reports",
      "Bulk OCR with advanced file conversion",
      "Full API access for custom solutions",
      "Personalized, real-time notifications for all metrics",
      "Role-based permissions for enhanced security",
      "Unlimited document uploads with OCR processing",
      "Unlimited and customizable exports in any format",
      "24/7 premium support with a dedicated account manager",
      "Predictive analytics with AI recommendations",
    ],
    buttonLabel: "Choose Plan",
  },
];

const PricingPlans = () => {
  const [activePlan] = useState("Basic Plan");

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Choose Your Plan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-2 ${plan.borderColor || "border-gray-300"} rounded-lg shadow-md p-6 flex flex-col justify-between`}
          >
            <div>
              <h3 className="text-xl text-left text-purple-700">{plan.name}</h3>
              <p className="text-gray-500 text-left text-sm mt-2">{plan.description}</p>
              <p className="text-2xl font-bold text-left text-gray-900 mt-4">
                {plan.price} <span className="text-sm">/month</span>
              </p>
              
              <ul className="mt-4 space-y-2 text-sm text-gray-700 p-4 bg-[#f5f6fa]">
              <p className="mb-5">What&apos;s included</p>
                {plan.features.map((feature, i) => (
                   
                  <li key={i} className="flex items-start space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              {plan.name === activePlan ? (
                <>
                  <button className="w-full py-2 px-4 border border-purple-700 rounded-lg bg-transparent text-purple-700 transition-all">
                    Pause Plan
                  </button>
                  <button className="w-full py-2 px-4 border border-purple-700 rounded-lg bg-purple-700 text-white transition-all">
                    Cancel Subscription
                  </button>
                </>
              ) : (
                <button className="mt-6 w-full py-2 px-4 border border-purple-700 rounded-lg bg-transparent text-purple-700 transition-all">
                  {plan.buttonLabel}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
