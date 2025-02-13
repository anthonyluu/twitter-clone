import React, { createContext } from "react";
import { TweetActionType } from "../App";
import { TweetType } from "../Types/TweetType";

export const TweetsContext = createContext<TweetType[]>([]);
export const TweetsDispatchContext = createContext<React.Dispatch<TweetActionType>>(() => {});