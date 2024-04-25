import {  useState } from "react";

export const useCheck = (initialCheckedState: boolean) => {
    const [checked, setChecked] = useState<boolean>(initialCheckedState || false);

    const handleOnCheck = (newCheckedState: boolean) => {
        setChecked(newCheckedState);
    };

    return {
        checked,
        handleOnCheck,
    };
}