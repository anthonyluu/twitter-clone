interface TweetBodyProps {
    tweetBodyText: string
    createdAt: string
}

export default function TweetBody(props: TweetBodyProps) {
    const d = new Date(props.createdAt);
    const formattedDate = d.toLocaleDateString('en-US', { timeZoneName: 'short' });
    return <>
        <div className="tweetContents text-left text-xl">{props.tweetBodyText}</div>
        <div className="timestamp text-left">{formattedDate}</div>
    </>
}