import React from "react";
import {Emoji} from "../types";
import EmojiImage from "./EmojiImage";

const SmileyHint = ({emoji, onClick}: {
    emoji: Emoji,
    onClick: (key: string) => void,
}) => {
    return (
        <div className="smiley-hint" onClick={() => onClick(emoji.key)}>
            <EmojiImage name={emoji.key}/>
        </div>
    )
}
export default SmileyHint;
