import {ListRow} from "@/components/Services/main/ContactList/ContactList";
import {ListIcons} from "@/public/assets/icons";

export const CampaignType = [
    {id:"1001", name: "one-way sms campaign",  label: "One-way sms campaign"},
    {id:"1002", name: "two-way sms campaign", label: "Two-way sms campaign"},
    {id:"1003", name: "whatsapp campaign", label: "Whatsapp campaign"},
    {id:"1004", name: "voice campaign", label: "Voice campaign"},
];


export const ContactListing: ListRow[] = [
    { id:"1001", icon: ListIcons.dashboard, name: "Founders Program", count: 22, date: "12/Feb/2022" },
    { id:"1002",  icon: ListIcons.dashboard, name: "Whatsapp clients", count: 22, date: "12/Feb/2022" },
    { id:"1003",  icon: ListIcons.dashboard, name: "Mobile Texting Client", count: 22, date: "12/Feb/2022" },
    { id:"1004",  icon: ListIcons.dashboard, name: "Corporate Clients", count: 22, date: "12/Feb/2022" },
    { id:"1005",  icon: ListIcons.dashboard, name: "Small Business", count: 22, date: "12/Feb/2022" },
    { id:"1006",  icon: ListIcons.dashboard, name: "Employee", count: 22, date: "12/Feb/2022" },
];


export const currencyToNumber = (currency: string) => {
    return parseFloat(currency?.replace(/[^0-9.-]+/g,""));
};



export const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0
    }).format(amount).replace('NGN', 'N');
};


