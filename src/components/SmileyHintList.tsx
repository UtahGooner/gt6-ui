import React from "react";
import {Emoji} from "../types";
import SmileyHint from "./SmileyHint";

interface SmileyHintList {
    matching: Emoji[],
    onClick: (key: string) => void,
}

const SmileyHintList: React.FC<SmileyHintList> = ({matching, onClick}) => {
    return (
        <div className="smiley-hint-list">
            {matching.map(emoji => (
                (<SmileyHint key={emoji.key} emoji={emoji} onClick={onClick}/>)
            ))}
        </div>
    );
}
export default SmileyHintList;
