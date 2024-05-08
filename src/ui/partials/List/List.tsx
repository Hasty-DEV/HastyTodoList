import { ListContainer } from "../../styles/List/List.style";
import Item from "../../components/Item/Item";
import { useListItems } from "../../../data/hooks/useListItems/useListItems";

const List = () => {
    const { items, handleCheck, handleDelete, handleEdit } = useListItems();

    return (
        <ListContainer>
            {items.map((item, index) => (
               <Item
               key={index}
               ItemTitle={item.ItemTitle}
               ItemData={item.ItemData}
               isChecked={item.isChecked}
               onDelete={() => handleDelete(index)}
               onCheck={(isChecked) => handleCheck(index, isChecked)}
               onEditSubmit={(editedTitle) => handleEdit(index, { ...item, ItemTitle: editedTitle })}
           />
            ))}
        </ListContainer>
    );
};

export default List;