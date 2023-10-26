"use client";

import { useState } from "react";
import { User } from "@prisma/client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { BsGithub }from "react-icons/bs"
import { useRouter } from "next/navigation";
import useLoginModal from "@/hooks/use-login-modal";
import Image from "next/image";
import { useConnectors, useNetwork, useAccount } from "@starknet-react/core";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "./ui/use-toast";
import { finished } from "stream";
import Link from "next/link";


const Navbar = () => {
	const { connect, connectors, disconnect } = useConnectors();
	const { address, isConnected, isReconnecting, account } = useAccount();

	const [searchFilter, setSearchFilter] = useState("");
	const logInModal = useLoginModal();
	const router = useRouter();

	const onConnect = (connector: any) => {
		try {
			connect(connector)
			toast({
				title: "Account connected"
			})
		} catch (error) {
			console.log(error)
		} finally {
			
		}
	}

	return (
		<div className="fixed w-full flex justify-center py-3 border-b border-slate-800 mb-14 bg-black">
			<div className="hidden md:block absolute left-10 scroll-m-20 text-slate-300 text-2xl font-extrabold tracking-tight lg:text-3xl">
				<Link href={'/'}>
					BECOMME
				</Link>
			</div>
			<div className="flex flex-row items-center justify-center gap-3">
				<input
					type="search"
					className="text-white flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-blue-600 focus:bo"
					onChange={(e) => setSearchFilter(e.target.value)}
					placeholder='Search Streamers'
				/>
				<Button variant={"secondary"} onClick={() => router.push(`/search/${searchFilter}`)}>Search</Button>
			</div>
			<div className="hidden md:block absolute right-10">
				{!isConnected ? (
					<div className="flex flex-row items-center justify-center gap-4">
						{connectors.map((connector) => (
							<Button
								key={connector.id}
								onClick={() => onConnect(connector)}
								disabled={!connector.available()}
								variant={"secondary"}
							>
								<Image
									src={'/argent-x-logo.svg'}
									alt="Argent X logo"
									width={25}
									height={25}
									className="object-contain"
								/>
							</Button>
						))}
						{/* <Button variant={"secondary"} onClick={() => logInModal.onOpen()} className="flex flex-row gap-5">
							<BsGithub /> Log In
						</Button> */}
					</div>
				) : (
					<Popover>
						<PopoverTrigger asChild className="cursor-pointer">
							<Avatar>
								<AvatarImage src="" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</PopoverTrigger>
						<PopoverContent className="w-80">
							<Button variant={"outline"} onClick={disconnect} className="w-full">
								Disconnect
							</Button>
							{account?.address}
						</PopoverContent>
					</Popover>
				)}
			</div>
		</div>
	);
}
 
export default Navbar;