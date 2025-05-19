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
        // {
        //     text: "Guides",
        //     collapsed: false,
        //     items: [
        //         {
        //             text: "Creating a Class",
        //             link: "/docs/guides/creating-a-class",
        //         },
        //         {
        //             text: "Creating a Record",
        //             link: "/docs/guides/creating-a-record",
        //         },
        //         {
        //             text: "Updating a Record",
        //             link: "/docs/guides/updating-a-record",
        //         },
        //         {
        //             text: "Burning a Record",
        //             link: "/docs/guides/deleting-a-record",
        //         },
        //         {
        //             text: "Fetching a record",
        //             link: "/docs/guides/fetching-a-record",
        //         },
        //     ],
        // }
        {
            text: "Classes",
            link: "/docs/classes"
        },
        {
            text: "Records",
            link: "/docs/records"
        },
        {
            text: "Instructions",
            collapsed: false,
            items: [
                {
                    text: "Create Class",
                    link: "/docs/instructions/create-class"
                },
                {
                    text: "Update Class Metadata",
                    link: "/docs/instructions/update-class-metadata"
                },
                {
                    text: "Create Record",
                    link: "/docs/instructions/create-record"
                },
                {
                    text: "Update Record",
                    link: "/docs/instructions/update-record"
                },
                {
                    text: "Delete Record",
                    link: "/docs/instructions/delete-record"
                },
                {
                    text: "Freeze Record",
                    link: "/docs/instructions/freeze-record"
                },
                {
                    text: "Transfer Record",
                    link: "/docs/instructions/transfer-record"
                },
                {
                    text: "Mint Tokenized Record",
                    link: "/docs/instructions/mint-tokenized-record"
                },
                {
                    text: "Update Tokenized Record",
                    link: "/docs/instructions/update-tokenized-record"
                },
                {
                    text: "Freeze Tokenized Record",
                    link: "/docs/instructions/freeze-tokenized-record"
                },
                {
                    text: "Transfer Tokenized Record",
                    link: "/docs/instructions/transfer-tokenized-record"
                },
                {
                    text: "Burn Tokenized Record",
                    link: "/docs/instructions/burn-tokenized-record"
                }
            ]
        }
    ],
})