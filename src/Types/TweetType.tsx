interface TweetType {
  id: number
  displayName: string
  userName: string
  tweetBodyText: string
  likes: number
  replies: string[]
  createdAt: string
}

export type { TweetType }