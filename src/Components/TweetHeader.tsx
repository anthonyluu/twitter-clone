interface TweetHeaderProps {
    displayName: string,
    username: string,
}

export default function TweetHeader(props: TweetHeaderProps) {
    return <div className="">
        <div className="flow-root">
            <span className="float-left dot bg-blue-400 p-2"></span>
            <div className="float-left m-auto p-2">
                <div><strong>{props.displayName}</strong></div>
                <div><span className="text-gray-500">{props.username}</span></div>
            </div>
        </div>
    </div>
}