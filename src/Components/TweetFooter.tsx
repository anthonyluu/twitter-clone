import { useContext } from 'react'
import ChatBubble from '../assets/icons/ChatBubble.svg'
import Heart from '../assets/icons/Heart.svg'
import Link from '../assets/icons/Link.svg'
import LineDivider from './LineDivider'
import LinkButton from './LinkButton'
import { TweetsDispatchContext } from './TweetContext'
import { TweetType } from "../Types/TweetType";

interface TweetFooterProps {
    tweet: TweetType
}

export default function TweetFooter(props: TweetFooterProps) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    const formattedLikes = formatter.format(props.tweet.likes);

    const numberOfReplies = props.tweet.replies.length.toString();
    const tweetsDispatch = useContext(TweetsDispatchContext);

    function handleLikeTweet() {
        tweetsDispatch({
            type: 'like',
            tweet: props.tweet
        })
    }

    return <div className="buttonsContainer">
        <LineDivider />
        <LinkButton src={Heart} alt={"Heart Icon"} text={formattedLikes} onClick={() => handleLikeTweet()}/>
        <LinkButton src={ChatBubble} alt={"ChatBubble Icon"} text={numberOfReplies} />
        <LinkButton src={Link} alt={"Link Icon"} text={"Copy link to tweet"} />
    </div>
}