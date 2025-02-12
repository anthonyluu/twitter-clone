import TweetHeader from "./TweetHeader";
import TweetBody from "./TweetBody";
import TweetFooter from "./TweetFooter";

// TODO - instead of prop drilling, we can maybe use context as a test

function Tweet() {
    return <div className="container p-6 gap-x-4 rounded-xl bg-white outline outline-black/5">
        <TweetHeader displayName="John Smith" username="@johnsmith"/>
        <TweetBody />
        <TweetFooter />
    </div>
}

export default Tweet;