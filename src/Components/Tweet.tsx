import TweetHeader from "./TweetHeader";
import TweetBody from "./TweetBody";
import TweetFooter from "./TweetFooter";
import { TweetType } from "../App";

// TODO - instead of prop drilling, we can maybe use context as a test
// TODO - handle some actions - when you like it, increment the number of likes. support viewing number of likes in the tweet footer


function Tweet(props: TweetType) {
    return <div className="container m-2 p-6 gap-x-4 rounded-xl bg-white outline outline-black/5">
        <TweetHeader displayName={props.displayName} username={props.userName}/>
        <TweetBody tweetBodyText={props.tweetBodyText} createdAt={props.createdAt} />
        <TweetFooter likes={props.likes} replies={props.replies} />
    </div>
}

export default Tweet;