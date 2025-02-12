import ChatBubble from '../assets/icons/ChatBubble.svg'
import Heart from '../assets/icons/Heart.svg'
import Link from '../assets/icons/Link.svg'

interface LinkButtonProps {
    src: string
    alt: string
    text: string
}

function LinkButton(props: LinkButtonProps) {
    return <button className="link m-2">
        <img src={props.src} className="inline" alt={props.alt} /><span className='p-2'>{props.text}</span>
    </button>
}

function LineDivider () {
    return <div className="relative flex pt-2 items-center">
        <div className="flex-grow border-t border-gray-400"></div>
    </div>
}

export default function TweetFooter() {
    return <div className="buttonsContainer">
        <LineDivider />
        <LinkButton src={Heart} alt={"Heart Icon"} text={"Like"} />
        <LinkButton src={ChatBubble} alt={"ChatBubble Icon"} text={"Reply"} />
        <LinkButton src={Link} alt={"Link Icon"} text={"Copy link to tweet"} />
    </div>
}