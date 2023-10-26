"use client";

import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { User } from "@prisma/client";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { signIn } from "next-auth/react";
import { AiFillGithub }from "react-icons/ai"

const Navbar = ({ user }: { user?: User | null}) => {
	const [searchFilter, setSearchFilter] = useState("");

	return (
		<div className="fixed w-full flex justify-center py-3 border-b border-slate-800 mb-14">
			<div className="absolute left-10 scroll-m-20 text-slate-300 text-2xl font-extrabold tracking-tight lg:text-3xl">
				BECOMME
			</div>
			<div className="flex flex-row items-center justify-center gap-3">
				<input
					type="search"
					className="text-white flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-blue-600 focus:bo"
					onChange={(e) => setSearchFilter(e.target.value)}
					placeholder='Search Streamers'
				/>
				<Button variant={"secondary"}>Search</Button>
			</div>
			<div className="absolute right-10">
				{!user ? (
					<Button onClick={() => signIn('github')} className="flex flex-row gap-5">
						<AiFillGithub /> Log In
					</Button>
				) : (
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				)}
			</div>
		</div>
	);
}
 
export default Navbar;