"use client";

import Image from "next/image";
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const Page = () => {
	const [date, setDate] = useState<Date>();

	return (
		<>
			<div className="w-full h-full flex flex-col items-start mb-16">
				<div className="mb-12">
					<Image
						src={'/mumbai-india-cut.png'}
						alt="toronto"
						width={2000}
						height={700}
						className="object-contain -z-10"
						/>
				</div>
				<div className="flex flex-row items-start gap-14 pt-6 border-t border-slate-700 mx-12">
					<Image 
						src={'/amara-singh.png'}
						alt="Image"
						width={300}
						height={900}
						/>
						<div>
							<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">Amara Singh</h3>
							<blockquote className="mt-6 border-l-2 pl-6 italic text-slate-500">Mumbai, India</blockquote>
							<h4 className="scroll-m-20 text-xl mt-5 font-semibold tracking-tight">Description: </h4>
							<p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
								Im Amara, residing in the heart of Mumbai where the city never sleeps. Being a yoga instructor, I find solace amidst the chaos by delving into the ancient practices of yoga and meditation. Every morning, as the city gradually stirs to life, I find my balance on the mat, embracing the dawn with a tranquil heart. Mumbai, with its contrasting blend of modernity and tradition, offers a unique backdrop to my spiritual journey which I document on my personal blog.							</p>
							<div className="mt-12">
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={"outline"}
											className={cn(
												"w-[280px] justify-start text-left font-normal",
												!date && "text-muted-foreground"
											)}
										>
											<CalendarIcon className="mr-2 h-4 w-4 bg-black" />
											{date ? format(date, "PPP") : <span>Pick a date</span>}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0 bg-black">
										<Calendar
											mode="single"
											selected={date}
											onSelect={setDate}
											initialFocus
											/>
									</PopoverContent>
								</Popover>
							</div>
						</div>
				</div>
			</div>
		</>
	);
}
 
export default Page;