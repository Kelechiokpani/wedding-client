"use client";
// import {useRouter} from "next/navigation";


export default function NotFound() {
    // const router = useRouter();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="w-full max-w-md mx-auto">
                <div className="text-center">
                    <div className="px-4 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                        <span className="text-2xl">404</span>
                    </div>
                    <div className="text-4xl mt-10">Page Not Found !</div>
                </div>
                <div className="space-y-4 mt-6">
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        Oops! The page you are looking for does not exist or has been moved.
                    </p>

                    {/*<div className="flex flex-col sm:flex-row gap-3 pt-2">*/}
                    {/*    <Button asChild variant="default" className="w-full"  onClick={() => router.back()}>*/}
                    {/*        <Rocket className="mr-2 h-4 w-4" />*/}
                    {/*        Go Home*/}
                    {/*    </Button>*/}
                    {/*    <Button asChild variant="outline" className="w-full">*/}
                    {/*        <Link href="/contact">*/}
                    {/*            Contact Support*/}
                    {/*        </Link>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}