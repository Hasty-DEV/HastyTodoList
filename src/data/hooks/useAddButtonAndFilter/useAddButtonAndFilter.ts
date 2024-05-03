import { useState, useRef, FormEvent, RefObject } from 'react';

const useAddButtonAndFilter = () => {
    const [modal, setModal] = useState<boolean>(false);
    const titleRef: RefObject<HTMLInputElement> = useRef(null);

    const HandleOpenModal = () => {
        setModal(true);
    };

    const HandleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        if (!title) {
            alert("Por favor, insira um título para a tarefa.");
            return;
        }
        const date = Date.now();
        const checked = false;
        const newItem = {
            ItemTitle: title,
            ItemData: date,
            isChecked: checked
        };
        let listItems = JSON.parse(localStorage.getItem("ListItems") || "[]");
        listItems.push(newItem);
        localStorage.setItem("ListItems", JSON.stringify(listItems));
        titleRef.current!.value = "";
        setModal(false);
        window.location.reload();
    };

    return {
        modal,
        titleRef,
        HandleOpenModal,
        HandleOnSubmit
    };
};

export default useAddButtonAndFilter;
