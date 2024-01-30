/** @type {import('next').NextConfig} */
const nextConfig = {
    // required to declare the external link
    images: {
        remotePatterns: [
            { hostname: "source.unsplash.com" }
        ]
    }
};

export default nextConfig;
