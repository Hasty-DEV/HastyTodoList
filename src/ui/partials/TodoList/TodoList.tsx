import { Button, Container } from "react-bootstrap";
import {
  AddButtonAndFilterContainer,
  TodoListContainer,
  ListContainer,
  ItemContainer,
  ItemText,
  ItemData,
  ActionButtonContainer,
} from "../../styles/TodoList/TodoList.style";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";

const TodoList = () => {
  return (
    <TodoListContainer className="d-flex flex-column justify-content-center align-items-center">
      <Container>
        <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
          <Button>Adicionar Tarefa</Button>
          <select title="filter">
            <option value="Todos">Todos</option>
            <option value="Concluídos">Concluídos</option>
            <option value="Pendentes">Pendentes</option>
          </select>
        </AddButtonAndFilterContainer>
        <ListContainer>
          <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <input type="checkbox" title="Check" />
              <div className="d-flex flex-column justify-content-center">
                <ItemText>Criar o primeiro projeto React</ItemText>
                <ItemData>19:45, 23/03/2024</ItemData>
              </div>
            </div>
            <ActionButtonContainer className="d-flex justify-content-around">
              <button title="Delete Button">
                <FaRegTrashAlt />
              </button>
              <button title="Edit Button">
                <FaEdit />
              </button>
            </ActionButtonContainer>
          </ItemContainer>
          <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <input type="checkbox" title="Check" />
              <div className="d-flex flex-column justify-content-center">
                <ItemText>Criar o primeiro projeto React</ItemText>
                <ItemData>19:45, 23/03/2024</ItemData>
              </div>
            </div>
            <ActionButtonContainer className="d-flex justify-content-around">
              <button title="Delete Button">
                <FaRegTrashAlt />
              </button>
              <button title="Edit Button">
                <FaEdit />
              </button>
            </ActionButtonContainer>
          </ItemContainer>
          <ItemContainer className="d-flex justify-content-between align-items-center">
            <div className="d-flex">
              <input type="checkbox" title="Check" />
              <div className="d-flex flex-column justify-content-center">
                <ItemText>Criar o primeiro projeto React</ItemText>
                <ItemData>19:45, 23/03/2024</ItemData>
              </div>
            </div>
            <ActionButtonContainer className="d-flex justify-content-around">
              <button title="Delete Button">
                <FaRegTrashAlt />
              </button>
              <button title="Edit Button">
                <FaEdit />
              </button>
            </ActionButtonContainer>
          </ItemContainer>
        </ListContainer>
      </Container>
    </TodoListContainer>
  );
};

export default TodoList;
