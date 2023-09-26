import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'pnpm run build --mode test && pnpm run preview',
		port: 4173
	},
	testDir: 'tests',
	// fullyParallel: true,
	// reporter: 'html',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
