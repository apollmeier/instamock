import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite';
import {FileSystemIconLoader} from "unplugin-icons/loaders";

export default defineConfig({
	plugins: [
		sveltekit(),
		tailwindcss(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				'instamock': FileSystemIconLoader(
					'./src/lib/icons/',
				),
			},
			iconCustomizer(collection, icon, props) {
				if (collection === 'instamock') {
					props.width = '1.5rem'
					props.height = '1.5rem'
				}
			},
		})
	]
});
