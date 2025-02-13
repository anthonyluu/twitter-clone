import TweetHeader from "./TweetHeader";
import TweetBody from "./TweetBody";
import TweetFooter from "./TweetFooter";
import { TweetType } from "../Types/TweetType";

interface TweetProps {
    tweet: TweetType
}

function Tweet(props: TweetProps) {
    return <div className="container m-2 p-6 gap-x-4 rounded-xl bg-white outline outline-black/5">
        <TweetHeader displayName={props.tweet.displayName} username={props.tweet.userName}/>
        <TweetBody tweetBodyText={props.tweet.tweetBodyText} createdAt={props.tweet.createdAt} />
        <TweetFooter tweet={props.tweet} />
    </div>
}

export default Tweet;