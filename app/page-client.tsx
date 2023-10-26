"use client"

import { Button } from "@/components/ui/button";
import { useStreamerSignUpModal, useUserSignUpModal} from "@/hooks/use-signup-modal";
import { useAccount, useConnectors } from "@starknet-react/core";
import { useRouter } from "next/navigation";

const PageClient = () => {
	const userSignUp = useUserSignUpModal();
	const streamerSignUp = useStreamerSignUpModal();
  const { connect, connectors, disconnect } = useConnectors();
	const { address, isConnected, isReconnecting, account } = useAccount();
  const router = useRouter();

  return (
		<>
      <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
        Become a User
      </button> 
      <button className="border-2 border-blue-700 text-white font-semibold p-3 bg-none hover:bg-blue-500 hover:bg-opacity-25 rounded-sm">
        Become a Streamer
      </button> 
		</>
	);
}
 
export default PageClient;