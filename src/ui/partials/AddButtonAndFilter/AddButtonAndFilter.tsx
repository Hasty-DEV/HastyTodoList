import { Button } from "react-bootstrap";
import { AddButtonAndFilterContainer } from "../../styles/AddButtonAndFilter/AddButtonAndFilter.style";

const AddButtonAndFilter = () => {
    return (
        <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
            <Button>Adicionar Tarefa</Button>
            <select title="filter">
                <option value="Todos">Todos</option>
                <option value="Concluídos">Concluídos</option>
                <option value="Pendentes">Pendentes</option>
            </select>
        </AddButtonAndFilterContainer>
    )
}

export default AddButtonAndFilter;