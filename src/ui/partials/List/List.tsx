import React from 'react';
import { ListContainer } from "../../styles/List/List.style";
import Item from "../../components/Item/Item";
import { useListItems } from "../../../data/hooks/useListItems/useListItems";
import { ItemType } from "../../../data/@types/Item/Item.type";

interface TodoListProps {
    filter: string;
}

const TodoList: React.FC<TodoListProps> = ({ filter }) => {
    const { items, handleCheck, handleDelete, handleEdit } = useListItems();
    const filteredItems = items.filter(item => {
        if (filter === 'Todos') return true;
        if (filter === 'Concluídos') return item.isChecked;
        if (filter === 'Pendentes') return !item.isChecked; 
        return false;
    });

    return (
        <ListContainer>
            {filteredItems.map((item: ItemType, index: number) => (
                <Item
                    key={index}
                    ItemTitle={item.ItemTitle}
                    ItemData={item.ItemData}
                    isChecked={item.isChecked}
                    onDelete={() => handleDelete(index)}
                    onCheck={(isChecked: boolean) => handleCheck(index, isChecked)}
                    onEditSubmit={(editedTitle: string) => handleEdit(index, { ...item, ItemTitle: editedTitle })}
                />
            ))}
        </ListContainer>
    );
};

export default TodoList;
