"use client"

import { Button } from "@/components/ui/button";
import { useStreamerSignUpModal, useUserSignUpModal} from "@/hooks/use-signup-modal";

const PageClient = () => {
	const userSignUp = useUserSignUpModal();
	const streamerSignUp = useStreamerSignUpModal();
	return (
		<>
			<div className='flex flex-col text-center gap-3'>
        <h1 className='text-2xl text-slate-200 font-extrabold tracking-tight lg:text-3xl'>Be yourself. Be others. Be me</h1>
        {/* <p className="text-sm text-slate-300 text-muted-foreground">The world is your limit</p>
        <p className="text-sm text-slate-300 text-muted-foreground">Want to discover more? Click the button below and explore.</p> */}
      </div>
      <div className='flex flex-row items-center justify-center gap-9'>
        <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
          Become a User
        </button> 
        <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
          Become a Streamer
        </button> 
        {/* <Button onClick={userSignUp.onOpen} variant={"outline"} className="mt-0 shadow-md shadow-slate-500 hover:mb-2 hover:transition-all hover:shadow-blue-500">Become a user</Button>
        <Button variant={"outline"} onClick={streamerSignUp.onOpen} className="shadow-md shadow-slate-500 hover:border-2 hover:transition-all hover:border-blue-600 hover:shadow-blue-500">Become a streamer</Button> */}
      </div>
		</>
	);
}
 
export default PageClient;