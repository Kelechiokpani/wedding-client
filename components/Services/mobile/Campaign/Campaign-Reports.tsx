import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ListIcons} from "@/public/assets/icons";
import SmsReport, {SmsReportList} from "@/components/Services/mobile/Campaign/Reports/Sms";
import ConversationalReport from "@/components/Services/mobile/Campaign/Reports/Conversational";
import VoiceReport, {VoiceReportList} from "@/components/Services/mobile/Campaign/Reports/Voice";


const smsReport: SmsReportList[] = [
    {
        icon: ListIcons.dashboard,
        id: '1001',
        recipients: ['09987654678', '09123487433943'],
        senderId: 'kreative Rock',
        message: 'Hello! This is a test message for your SMS portal.',
        date: '2025-04-19',
        count: '20',
        campaign:"one-way sms campaign",
        status:"pending",
        amount:"400"
    },
    {
        icon: ListIcons.dashboard,
        id: '1002',
        recipients: ['09987654670', '09123487433943'],
        senderId: 'Beauty Salon',
        message: 'Hello! This is a test message for our SMS portal.',
        date: '2025-04-19',
        count: '10',
        campaign:"one-way sms campaign",
        status:"failed",
        amount:"200"
    },
    {
        icon: ListIcons.dashboard,
        id: '1003',
        recipients: ['09987654670', '09123487433943'],
        senderId: 'Beauty Salon',
        message: 'Hello! This is a test message for our SMS portal.',
        date: '2025-04-19',
        count: '15',
        campaign:"one-way sms campaign",
        status:"successful",
        amount:"300"
    },
];

const conversationalReport: SmsReportList[] = [
    {
        icon: ListIcons.dashboard,
        id: '1001',
        recipients: ['09987654678', '09123487433943'],
        senderId: 'kreative Rock',
        message: 'Hello! This is a test message for your SMS portal.',
        date: '2025-04-19',
        count: '20',
        campaign:"one-way sms campaign",
        status:"pending",
        amount:"400"
    },
    {
        icon: ListIcons.dashboard,
        id: '1002',
        recipients: ['09987654670', '09123487433943'],
        senderId: 'Beauty Salon',
        message: 'Hello! This is a test message for our SMS portal.',
        date: '2025-04-19',
        count: '10',
        campaign:"one-way sms campaign",
        status:"failed",
        amount:"200"
    },
    {
        icon: ListIcons.dashboard,
        id: '1003',
        recipients: ['09987654670', '09123487433943'],
        senderId: 'Beauty Salon',
        message: 'Hello! This is a test message for our SMS portal.',
        date: '2025-04-19',
        count: '15',
        campaign:"one-way sms campaign",
        status:"successful",
        amount:"300"
    },
];

const voiceReport: VoiceReportList[] = [
    {
        icon: ListIcons.dashboard,
        id: '1001',
        recipients: ['09987654678', '09123487433943'],
        callerId: '+2349123454884949',
        message: 'message.mp3',
        date: '2025-04-19',
        count: '20',
        campaign:"voice campaign",
        status:"pending",
        amount:"400"
    },
    {
        icon: ListIcons.dashboard,
        id: '1002',
        recipients: ['09987654670', '09123487433943'],
        callerId: '+2349123454884949',
        message: 'message.mp3',
        date: '2025-04-19',
        count: '10',
        campaign:"voice campaign",
        status:"failed",
        amount:"200"
    },
    {
        icon: ListIcons.dashboard,
        id: '1003',
        recipients: ['09987654670', '09123487433943'],
        callerId: '+2349123454884949',
        message: 'message.mp3',
        date: '2025-04-19',
        count: '15',
        campaign:"voice campaign",
        status:"successful",
        amount:"300"
    },
];


const CampaignReports = () => {
    return(
        <div className='bg-white px-6 py-6'>

            <Tabs defaultValue="voice_call" className="w-full  rounded">
                <TabsList className="grid w-full grid-cols-4 border h-[3rem]  bg-gray-100  rounded-lg ">
                    <TabsTrigger
                        value="voice_call"
                        className="py-2 data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Voice call report
                    </TabsTrigger>
                    <TabsTrigger
                        value="one_way_sms"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        One way sms report
                    </TabsTrigger>
                    <TabsTrigger
                        value="two_way_sms"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Two way sms report
                    </TabsTrigger>
                    <TabsTrigger
                        value="whatsapp"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                       Whatsapp message report
                    </TabsTrigger>
                </TabsList>


                <TabsContent value="one_way_sms" className="mt-8">
                    <SmsReport data={smsReport}/>
                </TabsContent>

                <TabsContent value="two_way_sms" className="mt-4">
                   <ConversationalReport data={conversationalReport}/>
                </TabsContent>

                <TabsContent value="voice_call" className="mt-4">
                   <VoiceReport data={voiceReport}/>
                </TabsContent>

                <TabsContent value="whatsapp" className="mt-4">
                    <div>Whatsapp Message</div>
                </TabsContent>

            </Tabs>

        </div>
    )
}


export default  CampaignReports