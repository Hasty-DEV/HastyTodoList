import { Button } from "react-bootstrap";
import { AddButtonAndFilterContainer } from "../../styles/AddButtonAndFilter/AddButtonAndFilter.style";
import Filter from "../../components/Filter/Filter";
import { FormEvent, RefObject, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ItemType } from "../../../data/@types/Item/Item.type";

const AddButtonAndFilter = () => {
    const [modal, setModal] = useState<boolean>();
    const titleRef: RefObject<HTMLInputElement> = useRef(null);

    const HandleOpenModal = () => {
        setModal(true)
    }

    const HandleOnSubmit = (e: FormEvent) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        if (!title) {
            alert("Por favor, insira um título para a tarefa.");
            return;
        }
        const date = Date.now();
        const checked = false;
        const newItem: ItemType = {
            ItemTitle: title,
            ItemData: date,
            isChecked: checked
        };
        let listItems: ItemType[] = JSON.parse(localStorage.getItem("ListItems") || "[]");
        listItems.push(newItem);
        localStorage.setItem("ListItems", JSON.stringify(listItems));
        titleRef.current!.value = "";
        setModal(false);
    };


    return (
        <>
            <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
                {!modal ? (
                    <Button onClick={HandleOpenModal} >Adicionar Tarefa</Button>
                ) :
                    (
                        <Button disabled>Adicionar Tarefa</Button>
                    )
                }
                <Filter />
            </AddButtonAndFilterContainer>
            {modal && (
                <form className="w-100 pt-2 pb-2 d-flex form-group" onSubmit={(e) => HandleOnSubmit(e)}>
                    <input ref={titleRef} type="text" className="w-100 form-control" />
                    <Button type="submit" className="mx-2"><FaPlus /></Button>
                </form>
            )}
        </>
    )
}

export default AddButtonAndFilter;