import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'dyn-green-50': 'var(--dyn-green-50)',
        'dyn-green-100': 'var(--dyn-green-100)',
        'dyn-green-200': 'var(--dyn-green-200)',
        'dyn-green-300': 'var(--dyn-green-300)',
        'dyn-green-400': 'var(--dyn-green-400)',
        'dyn-green-500': 'var(--dyn-green-500)',
        'dyn-green-600': 'var(--dyn-green-600)',
        'dyn-green-700': 'var(--dyn-green-700)',
        'dyn-green-800': 'var(--dyn-green-800)',
        'dyn-green-900': 'var(--dyn-green-900)',
        'dyn-green-950': 'var(--dyn-green-950)',
        'dyn-cyan-50': 'var(--dyn-cyan-50)',
        'dyn-cyan-100': 'var(--dyn-cyan-100)',
        'dyn-cyan-200': 'var(--dyn-cyan-200)',
        'dyn-cyan-300': 'var(--dyn-cyan-300)',
        'dyn-cyan-400': 'var(--dyn-cyan-400)',
        'dyn-cyan-500': 'var(--dyn-cyan-500)',
        'dyn-cyan-600': 'var(--dyn-cyan-600)',
        'dyn-cyan-700': 'var(--dyn-cyan-700)',
        'dyn-cyan-800': 'var(--dyn-cyan-800)',
        'dyn-cyan-900': 'var(--dyn-cyan-900)',
        'dyn-cyan-950': 'var(--dyn-cyan-950)',
				'dyn-accent': 'var(--dyn-gradient)',
        'background': "var(--background)",
      },
			fontFamily: {
        'ibm': ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
      }
    }
	},
	plugins: []
}
