'use client'
import React, {useEffect, useMemo, useState} from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import Image, { StaticImageData } from "next/image";
import Logo from "@/public/assets/images/logo.png"
import {SearchInput} from "@/utils/SearchInput";
import {useDebouncedValue} from "@/utils/useDebouncedSearch";
import Link from "next/link";


interface Message {
    from: "admin" | "user";
    text: string;
    time: string;
}

interface User {
    id: string;
    name: string;
    phone: string;
    avatar: string | StaticImageData;
    messages: Message[];
    campaign:string
}

const users: User[] = [
    {
        id: "1",
        name: "Blessing Jonathan",
        phone: "+2347086587575",
        avatar: Logo,
        campaign:"one-way sms campaign",
        messages: [
            { from: "user", text: "Hi", time: "10:30am" },
            { from: "user", text: "Ever wondered what bookkeeping means?", time: "10:31am" },
            { from: "admin", text: "Not really, why?", time: "10:32am" },
            { from: "user", text: "Someone was explaining it and it was funny.", time: "10:33am" },
            { from: "admin", text: "Haha, interesting!", time: "10:34am" },
        ],
    },
    {
        id: "2",
        name: "Daniel Moses",
        phone: "+2348092334512",
        avatar: Logo,
        campaign:"two-way sms campaign",
        messages: [
            { from: "user", text: "Hello", time: "9:00am" },
            { from: "admin", text: "Hi Daniel, how can I help you today?", time: "9:01am" },
            { from: "user", text: "Can you assist with bulk SMS setup?", time: "9:02am" },
            { from: "admin", text: "Sure! Let's get started.", time: "9:03am" },
        ],
    },
    {
        id: "3",
        name: "Grace Idoko",
        phone: "+2347012233344",
        avatar: Logo,
        campaign:"one-way sms campaign",
        messages: [
            { from: "user", text: "Is WhatsApp automation available?", time: "8:15am" },
            { from: "admin", text: "Yes, we support WhatsApp campaign management.", time: "8:17am" },
            { from: "user", text: "Great, how do I start?", time: "8:18am" },
        ],
    },
    {
        id: "4",
        name: "Samuel Obi",
        phone: "+2348120001234",
        avatar: Logo,
        campaign:"two-way sms campaign",
        messages: [
            { from: "user", text: "Morning!", time: "7:45am" },
            { from: "admin", text: "Good morning Samuel!", time: "7:46am" },
            { from: "user", text: "Is my campaign active?", time: "7:47am" },
            { from: "admin", text: "Yes, your campaign is running.", time: "7:48am" },
        ],
    },
    {
        id: "5",
        name: "Amaka Uche",
        phone: "+2347019988776",
        campaign:"two-way sms campaign",
        avatar: Logo,
        messages: [
            { from: "user", text: "Thanks for the support earlier!", time: "6:30am" },
            { from: "admin", text: "You're welcome Amaka. Happy to help!", time: "6:31am" },
        ],
    },
];

export default function ChatUI() {
    const [selectedUser, setSelectedUser] = useState<User>(users[0]);
    const [newMessage, setNewMessage] = useState("");

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

    useEffect(() => {}, [debouncedSearchTerm]);
    const filteredData = useMemo(() => {
        if (!debouncedSearchTerm.trim()) return users;
        return users.filter(data =>
            data.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        );
    }, [debouncedSearchTerm]);
    // }, [users, debouncedSearchTerm]);

    // const handleSend = () => {
    //     if (!newMessage.trim()) return;
    //     const updatedMessages = [...selectedUser.messages, { from: "admin", text: newMessage, time: "Now" }];
    //     const updatedUser = { ...selectedUser, messages: updatedMessages };
    //     setSelectedUser(updatedUser);
    // };

    const handleSend = () => {
        if (!newMessage.trim()) return;

        // Create formatted time (e.g., "10:30am")
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedHours = hours % 12 || 12;
        const formattedTime = `${formattedHours}:${minutes.toString().padStart(2, '0')}${ampm}`;

        const updatedMessages = [
            ...selectedUser.messages,
            {
                from: "admin" as const,
                text: newMessage.trim(),
                time: formattedTime
            }
        ];

        const updatedUser = {
            ...selectedUser,
            messages: updatedMessages
        };

        setSelectedUser(updatedUser);
        setNewMessage("");
    };

    return (
        <div className='  '>

            <div className="flex justify-end mb-4">
                <Link href="/mobile-texting/campaign/sms"
                      className="mt-4 py-2 px-2 text-xs rounded bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                    New message
                </Link>


                <Button variant="default" className="w-full ml-4 mt-4 md:w-auto">
                    <Link href="/mobile-texting/draft"
                          className=" py-2 px-2 text-xs rounded text-white font-semibold">
                        Draft
                    </Link>
             </Button>



                <Link href="/dashboard/contacts"
                      className="mt-4 ml-4 py-2 px-2 text-xs rounded bg-green-500 hover:bg-green-600 text-white font-semibold">
                      {/*className="mt-4 ml-4 py-2 px-2 text-xs rounded bg-[#04BA99] hover:bg-[#04BA99] text-white font-semibold">*/}
                    Contact List
                </Link>
            </div>

            <div className="grid bg-white rounded-2xl  shadow-2xl grid-cols-1 md:grid-cols-[350px_1fr]  ">
                <div className="border-r border-r-green-500 bg-white  p-4">
                    <div className="w-full mb-4">
                        <SearchInput
                            value={searchTerm}
                            onChange={setSearchTerm}
                            placeholder="Search by name"
                        />
                    </div>

                    <ScrollArea className="h-[85vh]   space-y-2">
                        {filteredData.map((user) => (
                            <div key={user.id}
                                 onClick={() => setSelectedUser(user)}
                                 className={`p-3 mb-3 flex gap-2 items-center cursor-pointer rounded-2xl ${selectedUser.id === user.id ? "bg-orange-200" : ""}`}
                            >
                                <div>
                                    <Image src={selectedUser.avatar} alt={selectedUser.name} width={40} height={40}
                                           className=""/>
                                </div>
                                <div className="flex-1">
                                    <p className="font-semibold text-sm">{user.name}</p>
                                    <p className="text-xs text-muted-foreground truncate">
                                        {user.campaign}
                                        {/*{user.messages[user.messages.length - 1]?.text}*/}
                                    </p>
                                </div>
                                {/*<div className="text-xs text-muted-foreground">9:09</div>*/}
                            </div>
                        ))}
                    </ScrollArea>
                </div>

                <div className="flex flex-col h-full">
                    {selectedUser ? (
                        <>
                            <div className="border-b border-b-green-500 p-4 flex   items-center gap-4">

                                <div>
                                    <Image src={selectedUser.avatar} alt={selectedUser.name} width={40} height={40}
                                           className=""/>
                                </div>

                                <div>
                                    <p className="font-semibold">{selectedUser.name}</p>
                                    <p className="text-sm text-muted-foreground">{selectedUser.phone}</p>
                                </div>
                            </div>
                            <ScrollArea className="flex-1 p-4 space-y-3">
                                {selectedUser.messages.map((msg, index) => (
                                    <div
                                        key={index}
                                        className={`max-w-sm p-3 mb-6 rounded-lg text-sm ${msg.from === "admin" ? "ml-auto bg-orange-100 text-black" : "bg-muted"}`}
                                    >
                                        {msg.text}
                                        <div className="text-xs text-muted-foreground mt-1 text-right">{msg.time}</div>
                                    </div>
                                ))}
                            </ScrollArea>
                            <div className="p-4 border-t border-t-green-500 flex gap-2 items-center">
                                <Textarea
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Write a message..."
                                    className="flex-1 min-h-[40px]"
                                />
                                <Button className="bg-orange-500 hover:bg-[#04BA99] text-white flex items-center"
                                        onClick={handleSend}>Send</Button>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            <Image src={Logo} alt="No message" width={80} height={80}/>
                            <p className="mt-4 font-semibold">No Message Selected</p>
                            <p className="text-muted-foreground text-sm">Please select a conversation or create new
                                one</p>
                            <Link href="/mobile-texting/campaign/sms"
                                  className="mt-4 py-3 px-6 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                                new message
                            </Link>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
