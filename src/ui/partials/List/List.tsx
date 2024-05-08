
import { ListContainer } from '../../styles/List/List.style';
import Item from '../../components/Item/Item';
import { useListItems } from '../../../data/hooks/useListItems/useListItems';
import { ItemType } from '../../../data/@types/Item/Item.type';

interface ListProps {
    filteredItems: ItemType[] | undefined; // Defina o tipo como um array de ItemType ou undefined
}

const List = ({ filteredItems }: ListProps) => {
    const { handleCheck, handleDelete, handleEdit } = useListItems();

    return (
        <ListContainer>
            {filteredItems?.length && // Verifique se filteredItems não é nulo e se tem elementos
                filteredItems.map((item, index) => (
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
