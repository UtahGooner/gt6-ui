import isEmail from "validator/lib/isEmail";
import isURL from "validator/lib/isURL";
import React from "react";


const TagName = ({url = '', tagName = ''}: {
    url: string,
    tagName: string,
}) => {
    url = url.trim();
    if (isEmail(url)) {
        return (<a href={`mailto:${url}`} target="_blank">{tagName}</a>);
    }
    if (isURL(url)) {
        return (<a href={url} target="_blank">{tagName}</a>);
    }
    return (<span>{tagName}</span>);
};

export default TagName;
