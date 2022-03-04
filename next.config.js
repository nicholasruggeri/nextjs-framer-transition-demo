/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: [
            'cms.caffeina-web-2022.test',
            '1.gravatar.com',
            'picsum.photos',
            'secure.gravatar.com',
            'static.caffeina-website-2022.n3.caffeina.host',
            'cms.main.caffeina-website-2022.n3.caffeina.host',
            'loremflickr.com',
            'images.unsplash.com'
        ]
    },
    assetPrefix: '/'
}

module.exports = nextConfig