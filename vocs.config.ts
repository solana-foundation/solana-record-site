import { defineConfig } from 'vocs'

export default defineConfig({
    title: 'SAS',
    description: 'Documentation for the Solana Attestation Servie',
    font: {
        default: {
            google: 'Geist Mono',
        },
    },
    theme: {
        colorScheme: 'light'
    },
    iconUrl: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      logoUrl: {
        light: '/logo.png',
        dark: '/logo.png',
      },
      socials: [
        {
            icon: 'github',
            link: 'https://github.com/solana-foundation/solana-record-service',
        },
      ],
    sidebar: [
        {
            text: 'Getting Started',
            link: '/docs',
        },
        {
            text: "Guides",
            collapsed: false,
            items: [
                {
                    text: "Creating a Class",
                    link: "/docs/guides/creating-a-class",
                },
                {
                    text: "Creating a Record",
                    link: "/docs/guides/creating-a-record",
                },
                {
                    text: "Updating a Record",
                    link: "/docs/guides/updating-a-record",
                },
                {
                    text: "Burning a Record",
                    link: "/docs/guides/deleting-a-record",
                },
                {
                    text: "Fetching a record",
                    link: "/docs/guides/fetching-a-record",
                },
            ],
        }
    ],
})