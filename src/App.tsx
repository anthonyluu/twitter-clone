import './App.css'
import Feed from './Components/Feed.tsx'
import Tweet from './Components/Tweet.tsx'

interface Tweet {
  id: number
  displayName: string
  userName: string
  tweetBodyText: string
  likes: number
  replies: string[]
  createdAt: string
}

export type { Tweet as TweetType }

function App() {
  return (
    <>
      <Feed tweets={tweetData} />
    </>
  )
}

const tweetData = [
  {
    id: 0,
    displayName: "Abcde F",
    userName: "@abcdef",
    tweetBodyText: "Here's some long text that i'm tweeting",
    createdAt: "January 20, 2025 15:24:00",
    likes: 1024,
    replies: [
      "Cool tweet!",
      "Another reply!!!"
    ]
  },
  {
    id: 1,
    displayName: "John Smith",
    userName: "@johnSmith",
    tweetBodyText: "Here's some long text that i'm tweeting",
    createdAt: "January 17,2025 15:24:00",
    replies: [
      "hi"
    ],
    likes: 220
  }
];

export default App
