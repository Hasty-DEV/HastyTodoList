import React, { useState } from 'react';
import useAddButtonAndFilter from "../../../data/hooks/useAddButtonAndFilter/useAddButtonAndFilter";
import Filter from "../../components/Filter/Filter";
import { AddButtonAndFilterContainer } from "../../styles/AddButtonAndFilter/AddButtonAndFilter.style";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useListItems } from "../../../data/hooks/useListItems/useListItems";
import List from '../List/List';

const AddButtonAndFilter = () => {
    const { modal, titleRef, HandleOpenModal } = useAddButtonAndFilter();
    const { addItem } = useListItems();
    const [filter, setFilter] = useState<string>('Todos');

    const handleFilterChange = (value: string) => {
        setFilter(value);
    };

    const HandleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const title = titleRef.current?.value;
        if (title) {
              addItem({ ItemTitle: title, isChecked: false, ItemData: 0, onCheck: () => {}, onDelete: () => {}, onEditSubmit: () => {} });
            titleRef.current.value = '';
        }
    };

    return (
        <>
            <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
                {!modal ? (
                    <Button onClick={HandleOpenModal}>Adicionar Tarefa</Button>
                ) : (
                    <Button disabled>Adicionar Tarefa</Button>
                )}
                <Filter onChange={handleFilterChange} />
            </AddButtonAndFilterContainer>
            {modal && (
                <form className="w-100 pt-2 pb-2 d-flex form-group" onSubmit={HandleOnSubmit}>
                    <input ref={titleRef} type="text" className="w-100 form-control" />
                    <Button type="submit" className="mx-2"><FaPlus /></Button>
                </form>
            )}
            {/* Passando o estado filter para o componente List */}
            <List filter={filter} />
        </>
    );
};

export default AddButtonAndFilter;
