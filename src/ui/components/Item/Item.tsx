import  { useState } from 'react';
import { ItemContainer, ItemData, ItemText } from "../../styles/Item/Item.style";
import ActionButton from "../ActionButton/ActionButton"; 
import { ItemType } from "../../../data/@types/Item/Item.type";
import { formatDate } from "../../../data/services/FormatDate/FormatDate.service";

const Item = (props: ItemType & { onDelete: () => void, onCheck: (isChecked: boolean) => void }) => {
    const [checked, setChecked] = useState<boolean>(props.isChecked || false);
    
    const handleChangeCheckItem = () => {
        const newCheckedState = !checked;
        setChecked(newCheckedState);
        props.onCheck(newCheckedState); 
    };
    
    return (
        <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <input type="checkbox" title="Check" checked={checked} onChange={handleChangeCheckItem} />
                <div className="d-flex flex-column justify-content-center" style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                    <ItemText>{props.ItemTitle}</ItemText>
                    <ItemData>{formatDate(props.ItemData)}</ItemData>
                </div>
            </div>
            <ActionButton onDelete={props.onDelete} /> 
        </ItemContainer>
    )
}

export default Item;

