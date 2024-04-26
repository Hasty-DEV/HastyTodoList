import { useState, useEffect } from "react";
import { ItemType } from "../../../data/@types/Item/Item.type";
import { ListContainer } from "../../styles/List/List.style";
import Item from "../../components/Item/Item";

const List = () => {
    const [items, setItems] = useState<ItemType[]>([]);

    useEffect(() => {
        const storedItems = localStorage.getItem("ListItems");
        if (storedItems) {
            const parsedItems: ItemType[] = JSON.parse(storedItems);
            setItems(parsedItems);
        }
    }, []);

    const handleItemCheck = (index: number, isChecked: boolean) => {
        const updatedItems = [...items];
        updatedItems[index].isChecked = isChecked;
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
                    onCheck={(isChecked) => handleItemCheck(index, isChecked)}
                />
            ))}
        </ListContainer>
    );
};

export default List;
