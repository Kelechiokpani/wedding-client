import {ListRow} from "@/components/Services/main/ContactList/ContactList";
import {ListIcons} from "@/public/assets/icons";
import {Shared} from "@/components/Services/mobile/Number/Numbers/SharedNumber";





export const SenderId = [
    {id:"1001", name: "Default sender setting (recommended)"},
    {id:"1002", name:"CompanyName"},
    {id:"1003", name: "MyService"},
];

export const VoiceCampaign = [
    {id:"1004", name: "voice campaign", label: "Voice campaign"},
];

export const SmsCampaign = [
    {id:"1001", name: "one-way sms campaign",  label: "One-way sms campaign"},
];

export const ConversationalCampaign = [
    {id:"1002", name: "two-way sms campaign", label: "Two-way sms campaign"},
];

export const WhatsappCampaign = [
    {id:"1003", name: "whatsapp campaign", label: "Whatsapp campaign"},
];



export const ContactListing: ListRow[] = [
    { id:"1001", icon: ListIcons.dashboard, name: "Founders Program", count: 22, date: "12/Feb/2022" },
    { id:"1002",  icon: ListIcons.dashboard, name: "Whatsapp clients", count: 22, date: "12/Feb/2022" },
    { id:"1003",  icon: ListIcons.dashboard, name: "Mobile Texting Client", count: 22, date: "12/Feb/2022" },
    { id:"1004",  icon: ListIcons.dashboard, name: "Corporate Clients", count: 22, date: "12/Feb/2022" },
    { id:"1005",  icon: ListIcons.dashboard, name: "Small Business", count: 22, date: "12/Feb/2022" },
    { id:"1006",  icon: ListIcons.dashboard, name: "Employee", count: 22, date: "12/Feb/2022" },
];

export const SharedNumberListing: Shared[] = [
    { id:"1001", icon: ListIcons.dashboard, phoneNumber: "+234918765755636", status: "available", payment: "not-paid",},
    { id:"1002",  icon: ListIcons.dashboard, phoneNumber: "234918765755632",  status: "not-available",payment: "paid"  },
    { id:"1003",  icon: ListIcons.dashboard, phoneNumber: "234918765755633", status: "available",payment: "not-paid" },
    { id:"1004",  icon: ListIcons.dashboard, phoneNumber: "234918765755635", status: "not-available",payment: "paid"  },
    { id:"1005",  icon: ListIcons.dashboard, phoneNumber: "234918765755630", status: "available", payment: "not-paid"},
    { id:"1006",  icon: ListIcons.dashboard, phoneNumber: "234918765755636",  status: "not-available",payment: "paid" },
];

export const DedicatedNumberListing: Shared[] = [
    { id:"1001", icon: ListIcons.dashboard, phoneNumber: "+234918765755636", status: "available", payment: "not-paid",},
    { id:"1002",  icon: ListIcons.dashboard, phoneNumber: "234918765755632",  status: "not-available",payment: "paid"  },
    { id:"1003",  icon: ListIcons.dashboard, phoneNumber: "234918765755633", status: "available",payment: "not-paid" },
    { id:"1004",  icon: ListIcons.dashboard, phoneNumber: "234918765755635", status: "not-available",payment: "paid"  },
    { id:"1005",  icon: ListIcons.dashboard, phoneNumber: "234918765755630", status: "available", payment: "not-paid"},
    { id:"1006",  icon: ListIcons.dashboard, phoneNumber: "234918765755636",  status: "not-available",payment: "paid" },
];









export const currencyToNumber = (currency: string) => {
    return parseFloat(currency?.replace(/[^0-9.-]+/g,""));
};



export const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(amount).replace('NGN', 'N');
};


