import { useState } from "react";

const useLocalStorage = (key, initialData) => {

    const [state, setState] = useState(() => {
        try {
            let savedInfo = localStorage.getItem(key);

            return savedInfo
                ? JSON.parse(savedInfo)
                : initialData
        } catch (err) {
            console.log(err);
            return initialData;
        }
    });

    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch (err) {
            console.log(err);
        }
    };

    return [state, setItem];
}

export default useLocalStorage;