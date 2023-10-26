import prisma from '@/lib/prismadb'

export default async function getAllUsers() {
	const users = await prisma.user.findMany({
		where: {
			hasRegistered: {
				equals: true
			}
		},
		select: {
			id: true,
			name: true,
			image: true,
			userType: true,
			createdAt: true,
		}
	})

	return (users)
}
