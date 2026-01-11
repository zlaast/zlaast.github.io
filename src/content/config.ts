import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    category: z.string(),
    project: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    part: z.number(),
    date: z.date(),
    tags: z.array(z.string()),
    graph_tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    excerpt: z.string().optional(),
    read_time: z.number().optional(),
  }),
});

export const collections = { posts: postsCollection };