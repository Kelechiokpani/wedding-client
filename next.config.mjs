/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        TANSTACK_DEVTOOLS: 'false', // Add this line
        // TANSTACK_DEVTOOLS: process.env.NODE_ENV === 'production' ? 'false' : 'true',
    },
};

export default nextConfig;
