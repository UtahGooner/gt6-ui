
export const storeKeys = {
    name: 'chat-name',
    user: 'user-name',
    auth: 'chat-auth',
    id: 'chat-id',
}

export const getStorage = <T = any>(key:string, defaultValue: T):T => {
    if (!window.sessionStorage) {
        return defaultValue;
    }
    try {
        const json = window.sessionStorage.getItem(key);
        return JSON.parse(json ?? 'null') ?? defaultValue;
    } catch(err:unknown) {
        return defaultValue;
    }
}

export const clearStorage = () => {
    if (window?.sessionStorage) {
        window.sessionStorage.clear();
    }
}

export const setStorage = async <T = any>(key:string, value: T):Promise<void> => {
    if (window?.sessionStorage) {
        try {
            const json = JSON.stringify(value);
            window.sessionStorage.setItem(key, json);
        } catch(err:unknown) {
            if (err instanceof Error) {
                console.debug("setStorage()", err.message);
                return Promise.reject(err);
            }
            console.debug("setStorage()", err);
            return Promise.reject(new Error('Error in setStorage()'));
        }
    }
}
