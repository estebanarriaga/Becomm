import prismadb from "@/lib/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GitHubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prismadb),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string
		}),
	],
	pages: {
		signIn: '/',
	},
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt'
	},
	secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions);