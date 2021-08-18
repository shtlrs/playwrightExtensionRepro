import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
    use: {
        browserName: 'chromium',
        // Make Chromium maximized
        // @ts-ignore
        trace: "retain-on-failure",
        viewport: { width: 1920, height: 1080 },
        launchOptions: {
            headless: true,
            /* args: ["--start-maximized"]*/
        },
    },

    // Look for test files in the "tests" directory, relative to this configuration file
    testDir: 'tests',

    // Each test is given 60 seconds
    timeout: 60000,
    // Two retries for each test
    retries: 0,
    // Limit the number of workers on CI, use default locally

    preserveOutput: 'always',

    workers: 100,
    reporter: "list",


    quiet: false,

};
export default config;