import { Button } from "react-bootstrap";
import { AddButtonAndFilterContainer } from "../../styles/AddButtonAndFilter/AddButtonAndFilter.style";
import Filter from "../../components/Filter/Filter";

const AddButtonAndFilter = () => {
    return (
        <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
            <Button>Adicionar Tarefa</Button>
            <Filter />
        </AddButtonAndFilterContainer>
    )
}

export default AddButtonAndFilter;