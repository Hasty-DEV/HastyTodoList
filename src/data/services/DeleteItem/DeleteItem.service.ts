import { HandleDeleteItemType } from "../../@types/HandleDeleteItem/HandleDeleteItem.type";

export const handleDeleteItem: HandleDeleteItemType = (index, items, setItems) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    localStorage.setItem("ListItems", JSON.stringify(updatedItems));
};