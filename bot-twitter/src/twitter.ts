import TwitterApi from 'twitter-api-v2';
import { isDev, enforceEnvVariables } from './utils';

let twitterClient: TwitterApi | undefined;

const setup = function (): void {
    if (isDev) {
        console.warn('twitter: skipping twitter setup due to development mode');
        return;
    }
    enforceEnvVariables(['TWITTER_API_KEY', 'TWITTER_API_SECRET', 'TWITTER_ACCESS_TOKEN', 'TWITTER_ACCESS_SECRET']);
    twitterClient = new TwitterApi({
        appKey: process.env.TWITTER_API_KEY,
        appSecret: process.env.TWITTER_API_SECRET,
        accessToken: process.env.TWITTER_ACCESS_TOKEN,
        accessSecret: process.env.TWITTER_ACCESS_SECRET,
    });
};
setup();

export const sendNotification = async function (message: string) {
    if (isDev) {
        console.warn('twitter: tweet is skipped due to development mode', message);
    }
    if (!twitterClient) {
        console.error('twitter: twitter client was not yet initialised');
    }
    try {
        const result = await twitterClient.v1.tweet(message);
        console.info(`twitter: https://twitter.com/anyuser/status/${result.id_str}`);
    } catch (error) {
        console.error('twitter: tweet error', error);
    }
};
