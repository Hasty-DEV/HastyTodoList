import useAddButtonAndFilter from "../../../data/hooks/useAddButtonAndFilter/useAddButtonAndFilter";
import Filter from "../../components/Filter/Filter";
import { AddButtonAndFilterContainer } from "../../styles/AddButtonAndFilter/AddButtonAndFilter.style";
import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

const AddButtonAndFilter = () => {
    const { modal, titleRef, HandleOpenModal, HandleOnSubmit } = useAddButtonAndFilter();

    return (
        <>
            <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
                {!modal ? (
                    <Button onClick={HandleOpenModal} >Adicionar Tarefa</Button>
                ) : (
                    <Button disabled>Adicionar Tarefa</Button>
                )}
                <Filter />
            </AddButtonAndFilterContainer>
            {modal && (
                <form className="w-100 pt-2 pb-2 d-flex form-group" onSubmit={(e) => HandleOnSubmit(e)}>
                    <input ref={titleRef} type="text" className="w-100 form-control" />
                    <Button type="submit" className="mx-2"><FaPlus /></Button>
                </form>
            )}
        </>
    );
};

export default AddButtonAndFilter;
