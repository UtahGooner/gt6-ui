import React from "react";
import {emojiList} from "../emoji";



const EmojiImage = ({name}:{
    name: string,
}) => {
    if (!emojiList[name]) {
        return null;
    }
    const wrappedWord = `:${name}:`;
    const image = `https://progulus.com/rprweb/images/smilies/${emojiList[name]}`;
    return (<img src={image} alt={wrappedWord} className="smiley" />);
};

export default EmojiImage;
