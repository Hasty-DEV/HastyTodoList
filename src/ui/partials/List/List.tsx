import  { useState, useEffect } from 'react';
import { ItemType } from "../../../data/@types/Item/Item.type";
import { ListContainer } from "../../styles/List/List.style";
import Item from "../../components/Item/Item";

const List = () => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("ListItems");
        if (storedItems) {
            const parsedItems: ItemType[] = JSON.parse(storedItems);
            setItems(parsedItems.map(item => ({
                ...item,
                isChecked: item.isChecked || false 
            })));
        }
    }, []);

    const handleItemCheck = (index: number, isChecked: boolean) => {
        const updatedItems = [...items];
        updatedItems[index].isChecked = isChecked;
        setItems(updatedItems);
        localStorage.setItem("ListItems", JSON.stringify(updatedItems));
    };

    const handleDeleteItem = (index: number) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
        localStorage.setItem("ListItems", JSON.stringify(updatedItems));
    };

    return (
        <ListContainer>
            {items.map((item, index) => (
                <Item
                    key={index}
                    ItemTitle={item.ItemTitle}
                    ItemData={item.ItemData}
                    isChecked={item.isChecked}
                    onDelete={() => handleDeleteItem(index)}  
                    onCheck={(isChecked) => handleItemCheck(index, isChecked)}
                />
            ))}
        </ListContainer>
    );
};

export default List;