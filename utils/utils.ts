
export const CampaignType = [
    {id:"1001", name: "one-way sms campaign",  label: "One-way sms campaign"},
    {id:"1002", name: "two-way sms campaign", label: "Two-way sms campaign"},
    {id:"1003", name: "whatsapp campaign", label: "Whatsapp campaign"},
    {id:"1004", name: "voice campaign", label: "Voice campaign"},
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


