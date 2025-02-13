interface LinkButtonProps {
    src: string
    alt: string
    text: string
    onClick?: any
}

export default function LinkButton(props: LinkButtonProps) {
    return <button className="link m-2" onClick={props.onClick}>
        <img src={props.src} className="inline" alt={props.alt} /><span className='p-2'>{props.text}</span>
    </button>
}