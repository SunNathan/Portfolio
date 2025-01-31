import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
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
