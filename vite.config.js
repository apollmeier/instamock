import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import {FileSystemIconLoader} from "unplugin-icons/loaders";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			customCollections: {
				'instamock16': FileSystemIconLoader(
					'./src/lib/assets/icons/16',
				),
				'instamock24': FileSystemIconLoader(
					'./src/lib/assets/icons/24',
				),
				'instamock32': FileSystemIconLoader(
					'./src/lib/assets/icons/32',
				)
			}
		})
	]
});
