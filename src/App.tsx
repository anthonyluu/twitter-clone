import { useReducer } from 'react'

import './App.css'
import Feed from './Components/Feed.tsx'
import { TweetsContext, TweetsDispatchContext } from './Components/TweetContext.tsx'
import { TweetType } from './Types/TweetType.tsx'

function App() {
  const [tweets, tweetsDispatch] = useReducer(tweetsReducer, tweetData);

  return (
    <>
      <TweetsContext.Provider value={tweets}>
        <TweetsDispatchContext.Provider value={tweetsDispatch}>
          <Feed tweets={tweets} />
        </TweetsDispatchContext.Provider>
      </TweetsContext.Provider>
    </>
  )
}

interface TweetActionType {
  type: string
  tweet: TweetType
}
export type {TweetActionType}

function tweetsReducer(tweets: TweetType[], action: TweetActionType) {
  switch (action.type) {
    case 'like': {
      return tweets.map((tweet) => {
        if (tweet.id === action.tweet.id) {
          let newTweet = {...action.tweet};
          console.log(newTweet)
          newTweet.likes = newTweet.likes + 1
          return newTweet;
        }
        else {
          return tweet;
        }
      })
    }
    default:
      throw Error("Unknown Tweet Action Type: " + action.type)
  }
}

// Test Data
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
