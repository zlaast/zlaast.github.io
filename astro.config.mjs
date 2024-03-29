import { defineConfig } from 'astro/config'

// Integrations
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), svelte()]
})
