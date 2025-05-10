import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import SharedNumber from "@/components/Services/mobile/Number/Numbers/SharedNumber";
import {DedicatedNumberListing, SharedNumberListing} from "@/utils/utils";
import DedicatedNumber from "@/components/Services/mobile/Number/Numbers/DedicatedNumber";


const NumberSetup = () => {
    return(
        <div className='bg-white'>

            <Tabs defaultValue="shared" className="w-full  rounded">
                <TabsList className="grid w-full grid-cols-2 border h-[3rem]  bg-gray-100  rounded-lg ">
                    <TabsTrigger
                        value="shared"
                        className="py-2 data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                       Shared Number
                    </TabsTrigger>
                    <TabsTrigger
                        value="dedicated"
                        className="py-2  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Dedicated Number
                    </TabsTrigger>
                </TabsList>


                <TabsContent value="shared" className="mt-8">
                     <SharedNumber data={SharedNumberListing}/>
                </TabsContent>

                <TabsContent value="dedicated" className="mt-4">
                    <DedicatedNumber data={DedicatedNumberListing}/>
                </TabsContent>

            </Tabs>

        </div>
    )
}


export default  NumberSetup