import  { useEffect, useState } from 'react';
import Filter from '../../components/Filter/Filter';
import { AddButtonAndFilterContainer } from '../../styles/AddButtonAndFilter/AddButtonAndFilter.style';
import { Button } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import useAddButtonAndFilter from '../../../data/hooks/useAddButtonAndFilter/useAddButtonAndFilter';

import { ItemType } from '../../../data/@types/Item/Item.type';
import List from '../List/List';

const AddButtonAndFilter = () => {
    const { modal, titleRef, HandleOpenModal, HandleOnSubmit } = useAddButtonAndFilter();
    const [items, setItems] = useState<ItemType[]>([]);
    const [selectedFilter, setSelectedFilter] = useState<string>('Todos'); // Estado do filtro selecionado
    const [filteredItems, setFilteredItems] = useState<ItemType[]>([]); // Estado para os itens filtrados

    useEffect(() => {
        const storedItems = localStorage.getItem('ListItems');
        if (storedItems) {
            const parsedItems: ItemType[] = JSON.parse(storedItems);
            setItems(parsedItems);
        }
    }, []);

    useEffect(() => {
        // Função para filtrar os itens baseado no filtro selecionado
        const filterItems = () => {
            switch (selectedFilter) {
                case 'Pendentes':
                    return items.filter(item => !item.isChecked);
                case 'Concluídos':
                    return items.filter(item => item.isChecked);
                case 'Todos':
                default:
                    return items;
            }
        };

        // Atualiza os itens filtrados quando houver mudança nos itens ou no filtro selecionado
        setFilteredItems(filterItems());
    }, [items, selectedFilter]);

    return (
        <>
            <AddButtonAndFilterContainer className="w-100 d-flex align-items-center justify-content-between">
                {!modal ? (
                    <Button onClick={HandleOpenModal}>Adicionar Tarefa</Button>
                ) : (
                    <Button disabled>Adicionar Tarefa</Button>
                )}
                <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </AddButtonAndFilterContainer>
            {modal && (
                <form className="w-100 pt-2 pb-2 d-flex form-group" onSubmit={(e) => HandleOnSubmit(e)}>
                    <input ref={titleRef} type="text" className="w-100 form-control" />
                    <Button type="submit" className="mx-2">
                        <FaPlus />
                    </Button>
                </form>
            )}

            
            <List filteredItems={filteredItems} />
        </>
    );
};

export default AddButtonAndFilter;
