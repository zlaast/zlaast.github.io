import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    category: z.string(),
    series: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    part: z.number().optional(),
    date: z.date(),
    tags: z.array(z.string()),
    graph_tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { posts: postsCollection };
