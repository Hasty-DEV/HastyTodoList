import { ActionButtonContainer } from "../../styles/ActionButton/ActionButton.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const ActionButton = () => {
    return (
        <ActionButtonContainer className="d-flex justify-content-around">
            <button title="Delete Button">
                <FaRegTrashAlt />
            </button>
            <button title="Edit Button">
                <FaEdit />
            </button>
        </ActionButtonContainer>
    )
}

export default ActionButton;