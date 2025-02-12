// Contains a list of Tweets
import { TweetType } from "../App"
import Tweet from "./Tweet";

interface FeedProps {
    tweets: TweetType[]
}

export default function Feed(props: FeedProps) {
    const tweets = props.tweets;
    return <>
        {tweets.map(tweet => (
            <Tweet key={tweet.id} {...tweet}/>
        ))}
    </>
}