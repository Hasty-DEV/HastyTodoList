import { ActionButtonContainer } from "../../styles/ActionButton/ActionButton.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

interface ActionButtonProps {
    onDelete: () => void;  
}

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
