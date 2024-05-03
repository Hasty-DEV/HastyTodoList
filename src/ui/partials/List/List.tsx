import { ListContainer } from "../../styles/List/List.style";
import Item from "../../components/Item/Item";
import { useListItems } from "../../../data/hooks/useListItems/useListItems";

const List = () => {
    const { items, handleCheck, handleDelete } = useListItems();

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
                />
            ))}
        </ListContainer>
    );
};

export default List;