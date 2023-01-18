export interface Chat {
    id: number;
    username: string;
    tagname:string;
    url:string;
    chattext: string;
    flagged: boolean;
    deleted: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}

export interface EmojiList {
    [key:string]: string,
}

export interface Emoji {
    key:string,
    image: string,
}

export interface GT6Params {
    user?:string;
}

export interface WSJsonMessage {
    pong?: boolean|number;
    list?: Chat[];
}
