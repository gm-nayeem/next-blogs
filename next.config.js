/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: [
            "images.pexels.com", 
            "nextjs.org"
        ],
    }
}

module.exports = nextConfig;
