import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

const NumberSetup = () => {
    return(
        <div className='bg-white'>

            <Tabs defaultValue="shared" className="w-full  rounded">
                <TabsList className="grid w-full grid-cols-2 border  bg-gray-100  rounded-lg">
                    <TabsTrigger
                        value="shared"
                        className=" data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                       Shared Number
                    </TabsTrigger>
                    <TabsTrigger
                        value="dedicated"
                        className="  data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:font-bold transition-colors"
                    >
                        Dedicated Number
                    </TabsTrigger>
                </TabsList>



                <TabsContent value="shared" className="mt-4">
                    <h1>Manual</h1>
                </TabsContent>

                <TabsContent value="dedicated" className="mt-4">
                    <h1>Upload CSV or Excel file</h1>
                </TabsContent>

            </Tabs>

        </div>
    )
}


export default  NumberSetup