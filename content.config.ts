import {defineContentConfig, defineCollection, z} from '@nuxt/content'

export default defineContentConfig({
    collections: {
        realisations: defineCollection({
            type: 'page',
            source: 'realisations/*.md',
            schema: z.object({
                title: z.string(),
                slug: z.string(),
                imageSrc: z.string(),
                projectTag: z.string(),
            })
        }),
        experiences: defineCollection({
            type: 'page',
            source: 'experiences/*.md',
            schema: z.object({
                order: z.number(),
                jobTitle: z.string(),
                imageSrc: z.string(),
                imageAlt: z.string(),
                linkText: z.string(),
                linkUrl: z.string(),
                dateRange: z.string(),
                description: z.string(),
            })
        })

    }
})
