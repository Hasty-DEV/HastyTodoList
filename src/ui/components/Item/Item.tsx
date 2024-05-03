import { ItemContainer, ItemData, ItemText } from "../../styles/Item/Item.style";
import ActionButton from "../ActionButton/ActionButton";
import { ItemType } from "../../../data/@types/Item/Item.type";
import { formatDate } from "../../../data/services/FormatDate/FormatDate.service";
import useCheck from "../../../data/hooks/useCheck/useCheck";

const Item = (props: ItemType) => {
    const { checked, handleChangeCheck } = useCheck(props);

    return (
        <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
                <input type="checkbox" title="Check" checked={checked} onChange={handleChangeCheck} />
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
