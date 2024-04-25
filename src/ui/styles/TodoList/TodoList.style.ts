import styled from "styled-components";

export const TodoListContainer = styled.main`
  height: 75vh;
`;

export const AddButtonAndFilterContainer = styled.div`
  margin-bottom: 10px;
  button {
    background: #6270ef;
    transition: background 0.5s ease;

    &:hover {
      background: #4b57ab;
    }
  }

  select {
    background: #cdccdf;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;

    &:focus {
      outline: none;
    }
  }
`;

export const ListContainer = styled.div`
  background: #ebecf2;
  padding: 15px;
  border-radius: 5px;
`;

export const ItemContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;

  input[type="checkbox"] {
    width: 20px;
    margin-right: 10px;
    &:checked,
    &:hover {
      background: #717ae8;
    }
  }
`;

export const ItemText = styled.div`
  font-size: 1rem;
  font-weight: bold;
  text-transform: capitalize;
`;

export const ItemData = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
`;

export const ActionButtonContainer = styled.div`
  max-width: 100px;
  gap: 20px;

  button {
    background: #ebebeb;
    padding: 8px;
    border: none;
    border-radius: 5px;
  }
`;
