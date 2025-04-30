import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";


const CampaignReports = () => {
    return(
        <div className='bg-white'>

            <Tabs defaultValue="voice_call" className="w-full  rounded">
                <TabsList className="grid w-full grid-cols-4 border h-[3rem]  bg-gray-100  rounded-lg ">
                    <TabsTrigger
                        value="voice_call"
                        className="py-2 data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Voice Call Report
                    </TabsTrigger>
                    <TabsTrigger
                        value="one_way_sms"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        One Way Sms Report
                    </TabsTrigger>
                    <TabsTrigger
                        value="two_way_sms"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Two way Sms Report
                    </TabsTrigger>
                    <TabsTrigger
                        value="whatsapp"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                       Whatsapp Message Report
                    </TabsTrigger>
                </TabsList>


                <TabsContent value="one_way_sms" className="mt-8">
                  <div>One Way sms</div>
                </TabsContent>

                <TabsContent value="two_way_sms" className="mt-4">
                    <div>Two Way sms</div>
                </TabsContent>

                <TabsContent value="voice_call" className="mt-4">
                    <div>Robo Voice Call</div>
                </TabsContent>

                <TabsContent value="whatsapp" className="mt-4">
                    <div>Whatsapp Message</div>
                </TabsContent>

            </Tabs>

        </div>
    )
}


export default  CampaignReports