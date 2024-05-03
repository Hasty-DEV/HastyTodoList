import { ActionButtonProps } from "../../../data/@types/ActionButton/ActionButton.type";
import { ActionButtonContainer } from "../../styles/ActionButton/ActionButton.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ActionButton = ({ onDelete }: ActionButtonProps) => {
    return (
        <ActionButtonContainer className="d-flex justify-content-around">
            <button title="Delete Button" onClick={onDelete}>
                <FaRegTrashAlt />
            </button>
            <button title="Edit Button">
                <FaEdit />
            </button>
        </ActionButtonContainer>
    )
}

export default ActionButton;
