const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        // Yeni Next.js versiyonları için
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
            },
            {
                protocol: 'https',
                hostname: 'googleusercontent.com',
            },
        ],
    }
};

module.exports = nextConfig;
