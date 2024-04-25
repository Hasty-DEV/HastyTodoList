import { useState } from "react";
import { ItemType } from "../../../data/@types/Item/Item.type";
import { ListContainer } from "../../styles/List/List.style"
import Item from "../../components/Item/Item";

const List = () => {
    const [items, setItems] = useState<ItemType[]>([
        { ItemTitle: "Criar o primeiro projeto React", ItemData: Date.now() },
    ]);

    const handleItemCheck = (index: number, isChecked: boolean) => {
        const updatedItems = [...items];
        updatedItems[index].isChecked = isChecked;
        setItems(updatedItems);
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
    )
}

export default List