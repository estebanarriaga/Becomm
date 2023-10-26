
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
	return (
		<div className="flex flex-row items-center justify-center pt-24 gap-10 mx-16 flex-wrap">
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Marcus Johnson</CardTitle>
					<CardDescription>Toronto, Canada</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={'/marcus-johnson.png'}
						alt="image"
						width={300}
						height={200}
					/>
				</CardContent>
				<CardFooter className="w-full">
					<Button className="w-full">
						<Link href={'/profile/marcus-johnson'}>
							Visit
						</Link>
					</Button>
				</CardFooter>
			</Card>

			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Amara Singh</CardTitle>
					<CardDescription>Mumbai, India</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={'/amara-singh.png'}
						alt="image"
						width={300}
						height={200}
					/>
				</CardContent>
				<CardFooter className="w-full">
					<Button className="w-full">
						<Link href={'/profile/amara-singh'}>
							Visit
						</Link>
					</Button>
				</CardFooter>
			</Card>
			
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Sofía Martínez</CardTitle>
					<CardDescription>Buenos Aires, Argentina</CardDescription>
				</CardHeader>
				<CardContent>
					<Image
						src={'/sofia-martinez.png'}
						alt="image"
						width={300}
						height={200}
					/>
				</CardContent>
				<CardFooter className="w-full">
					<Button className="w-full">
						<Link href={'/profile/sofia-martinez'}>
							Visit
						</Link>
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
 
export default Page;