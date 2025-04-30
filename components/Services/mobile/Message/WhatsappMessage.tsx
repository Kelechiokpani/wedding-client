'use client'
import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import {ContactListing, SenderId, WhatsappCampaign} from "@/utils/utils";
import {ListRow} from "@/components/Services/main/ContactList/ContactList";



const WhatsappMessage = ( )=>{
    const router = useRouter();
    const [message, setMessage] = useState("");
    const [to, setTo] = useState<string[]>([]);
    const [selectedList, setSelectedList] = useState<ListRow | null>(null);
    const [senderId, setSenderId] = useState('');
    const [campaignType, setCampaignType] = useState('');



    const [inputValue, setInputValue] = useState("");
    const [contactMode, setContactMode] = useState("manual");


    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if ((e.key === "Enter" || e.key === "," || e.key === " ") && inputValue.trim()) {
            e.preventDefault();
            if (!to.includes(inputValue.trim())) {
                setTo([...to, inputValue.trim()]);
            }
            setInputValue("");
        }
    };

    const removeRecipient = (index: number) => {
        setTo(to.filter((_, i) => i !== index));
    };

    const handleListSelect = (value: string) => {
        const foundList = ContactListing.find(list => list.name === value);
        if (foundList) {
            setSelectedList(foundList);
            // If you want to set the contacts from the list to 'to' state:
            // setTo([...to, foundList.name]); // Or whatever logic you need
        }
    };

    return(
        <div>
            <div className="flex justify-end">
                <Button onClick={() => router.back()}
                        type="button"
                        className="px-10 py-2 mb-8 rounded-lg border bg-orange-300 border-gray-300 text-gray-700  hover:bg-gray-100"
                >
                    Back
                </Button>
            </div>

            <div className="max-w-5xl mx-auto p-4 space-y-10">
                <Card className="p-6 space-y-20 border-2 border-orange-300">

                    {/*  contact Input Mode */}
                    <div className="flex justify-end  ">
                        <div className='px-8'>
                            <Label className="block cursor-pointer font-semibold mb-2">Recipient Mode</Label>
                            <Select value={contactMode} onValueChange={setContactMode}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select recipient mode"/>
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem className='cursor-pointer mb-2' value="manual"> Manual Input </SelectItem>
                                    <SelectItem className='cursor-pointer'  value="contacts">From Contacts List</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="">
                        {contactMode === "manual" ? (
                            <div>
                                <div className='mb-8'>
                                    <Label htmlFor="to" className="block mb-2 font-semibold">To (Contacts)</Label>
                                    <div className="relative ">
                                        <div className="flex mb-4 flex-wrap gap-2 border rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-400">
                                            {to.map((recipient, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-blue-100 text-blue-700 text-sm px-4 py-3 rounded flex items-center gap-1"
                                                >
                                                    {recipient}
                                                    <button
                                                        onClick={() => removeRecipient(index)}
                                                        className="text-red-500 hover:text-red-700"
                                                    > × </button>
                                          </span>
                                            ))}
                                            <Input
                                                id="to"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                onKeyDown={handleKeyDown}
                                                className="flex-1 min-w-[150px] outline-none"
                                                placeholder="Start Typing a number"
                                            />
                                            {/*<div*/}
                                            {/*    className="absolute px-4 top-1/2 right-3 -translate-y-1/2 text-sm text-green-600 font-medium">*/}
                                            {/*    Contacts*/}
                                            {/*</div>*/}
                                        </div>

                                        <div className="text-right text-xs text-green-600 font-bold pt-1">
                                            Recipients: {to.length} Contacts
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <Label htmlFor="to" className="block mb-2 font-semibold">
                                    Select Contact List
                                </Label>
                                <Select onValueChange={handleListSelect}>
                                    <SelectTrigger className="p-6">
                                        <SelectValue placeholder="Pick a contact list"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ContactListing.map((list) => (
                                            <SelectItem
                                                className="mb-2 cursor-pointer"
                                                key={list.id}
                                                value={list.name}
                                            >
                                                {list.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <div className="text-right text-xs text-muted-foreground pt-1">
                                    Recipients: {selectedList?.count || 0}
                                </div>
                            </div>
                        )}


                        {/* Sender ID selection */}


                        <div
                            className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t mt-4">
                            <div className="mb-8 mt-8 w-full">
                                <Label htmlFor="from" className="block mb-2 font-semibold">From (senderID)</Label>
                                <Select value={senderId} onValueChange={setSenderId}>
                                    <SelectTrigger className='p-6'>
                                        <SelectValue placeholder="Select sender ID"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {SenderId.map((sender, idx) => (
                                            <SelectItem className='p-3 cursor-pointer' key={idx}
                                                        value={sender.name}>{sender.name}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="mb-8 mt-8 w-full">
                                <Label htmlFor="from" className="block mb-2 font-semibold">Select (Campaign
                                    Type)</Label>
                                <Select value={campaignType} onValueChange={setCampaignType}>
                                    <SelectTrigger className='p-6'>
                                        <SelectValue placeholder="Select Campaign Type"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {WhatsappCampaign.map((campaign, idx) => (
                                            <SelectItem className='p-3 cursor-pointer' key={idx}
                                                        value={campaign.name}>{campaign.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>

                        {/*   CampaignType */}


                        <div className=' mt-8'>
                            <Label htmlFor="message" className="block mb-2 mt-8 font-semibold">Message</Label>
                            <Textarea
                                id="message"
                                value={message}
                                // onChange={(e) => setMessage(e.target.value)}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    if (newValue.length <= 300) setMessage(newValue);
                                }}
                                rows={4}
                                placeholder="Write your message here (max 300 characters)"
                            />
                            <div className="flex justify-end mt-4 text-xs text-muted-foreground pt-1">
                                {/*<div className="flex justify-between text-xs text-muted-foreground pt-1">*/}
                                {/*<div className="flex gap-4 mt-4">*/}
                                {/*    <div className="flex items-center gap-1 text-green-600 cursor-pointer">*/}
                                {/*        <Paperclip size={14}/> Attach file*/}
                                {/*    </div>*/}
                                {/*    <div className="flex items-center gap-1 text-green-600 cursor-pointer">*/}
                                {/*        <FileText size={14}/> Insert Template*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <div className='flex justify-end text-end'>
                                    Characters: {message.length}/300 &nbsp; Parts: 1/6 &nbsp; Cost: ₦5.30
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t mt-4">
                        <div className="flex items-center gap-2 text-green-600 cursor-pointer">
                            <Clock size={16}/>
                            {/*<span>Schedule message</span>*/}
                        </div>

                        <div className="flex gap-4 w-full md:w-auto">
                            <Button variant="outline" className="w-full md:w-auto">Save As Draft</Button>
                            <Button
                                className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-auto">Send</Button>
                        </div>
                    </div>
                </Card>
            </div>

        </div>
    )
}

export default WhatsappMessage

