// Contains a list of Tweets
import Tweet from "./Tweet";
import { TweetType } from "../Types/TweetType";

interface FeedProps {
    tweets: TweetType[]
}

export default function Feed(props: FeedProps) {
    const tweets = props.tweets;
    return <>
        {tweets.map(tweet => (
            <Tweet key={tweet.id} tweet={tweet}/>
        ))}
    </>
}