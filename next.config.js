/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"google.com",
			"lh3.googleusercontent.com"
		]
	},
	experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
