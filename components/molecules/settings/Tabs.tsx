'use client'
import { useState } from "react";
import EditProfile from "./Edit-Profile";
import Preference from "./Preference";
import Security from "./Security";
import Billing from "./Billing";
import Roles from "./Roles";
import Activity from "./Activity";

type Tab = {
  name: string;
  value: string;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState<string>("editProfile");

  const tabs: Tab[] = [
    { name: "Edit Profile", value: "editProfile" },
    { name: "Preferences", value: "preferences" },
    { name: "Data and Security", value: "dataSecurity" },
    { name: "Roles and Permissions", value: "rolesPermissions" },
    { name: "Billings and Subscription", value: "billingSubscription" },
    { name: "Activity", value: "activity" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "editProfile":
        return <EditProfile/>
      case "preferences":
        return <Preference/>;
      case "dataSecurity":
        return <Security/>;
      case "rolesPermissions":
        return <Roles/>;
      case "billingSubscription":
        return <Billing/>;
      case "activity":
        return <Activity/>;
      default:
        return null;
    }
  };

  return (
    <div>
  <div className="flex space-x-4 border-b border-border overflow-x-auto whitespace-nowrap scrollbar-hide">
    {tabs.map((tab) => (
      <button
        key={tab.value}
        className={`py-2 px-4 text-sm font-medium ${
          activeTab === tab.value
            ? "border-b-2 border-purple-500 text-purple-500"
            : "text-gray-500 hover:text-purple-700"
        }`}
        onClick={() => setActiveTab(tab.value)}
      >
        {tab.name}
      </button>
    ))}
  </div>

  {/* Tab Content */}
  <div className="mt-4 p-2 sm:p-4">
    {renderTabContent()}
  </div>
</div>

  );
};

export default Tabs;
