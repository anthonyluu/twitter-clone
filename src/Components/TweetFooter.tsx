import ChatBubble from '../assets/icons/ChatBubble.svg'
import Heart from '../assets/icons/Heart.svg'
import Link from '../assets/icons/Link.svg'
import LineDivider from './LineDivider'
import LinkButton from './LinkButton'

interface TweetFooterProps {
    likes: number,
    replies: string[]
}

export default function TweetFooter(props: TweetFooterProps) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    const formattedLikes = formatter.format(props.likes);

    const numberOfReplies = props.replies.length.toString();

    return <div className="buttonsContainer">
        <LineDivider />
        <LinkButton src={Heart} alt={"Heart Icon"} text={formattedLikes} />
        <LinkButton src={ChatBubble} alt={"ChatBubble Icon"} text={numberOfReplies} />
        <LinkButton src={Link} alt={"Link Icon"} text={"Copy link to tweet"} />
    </div>
}