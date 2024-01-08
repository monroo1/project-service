/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },

    reactStrictMode: true,
    webpack(config) {
        config.module.rules = config.module?.rules?.map((rule) => {
            if (/svg/.test(rule.test)) {
                return { ...rule, exclude: /\.svg$/ };
            }

            return rule;
        });
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: {
                        icon: true,
                        svgoConfig: {
                            plugins: [
                                {
                                    name: "convertColors",
                                    params: {
                                        currentColor: true,
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = nextConfig;
