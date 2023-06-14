import React, { useState} from 'react';
import * as C from './styles';
import { categories } from '../../data/categories';
import { Item } from '../../types/Item';

interface InputAreaProps {
    list: Item[],
    setList: React.Dispatch<React.SetStateAction<Item[]>>
}

export default function InputArea({ list, setList }: InputAreaProps) {
    const [ date, setDate ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ title, setTitle ] = useState('');
    const [ value, setValue ] = useState(0);

    const categoriesKeys: string[] = Object.keys(categories);

    function handleAddItem() {
        const erros: string[] = [];

        if(isNaN(new Date(date).getTime())) {
            erros.push('Data Inválida');
        }
        if(!categoriesKeys.includes(category)) {
            erros.push('Categoria Inválida')
        }
        if(title.trim() === '') {
            erros.push('Título Inválido')
        }
        if(value <= 0) {
            erros.push('valor inválido')
        }

        if(erros.length > 0) {
            alert(erros.join('\n'));
        } else {
            addItem();
            clearFields();
        }
    }

    function addItem() {
        setList(prevList => [...prevList, {
            date: new Date(date),
            category: category,
            title: title,
            value: value
        }])
    }

    function clearFields() {
        setDate('');
        setCategory('');
        setTitle('');
        setValue(0);
    }
  
    return (
    <C.Container>
        <C.InputLabel>
            <C.InputTitle>Data</C.InputTitle>
            <C.Input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
        </C.InputLabel>
        <C.InputLabel>
            <C.InputTitle>Categoria</C.InputTitle>
            <C.Select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option></option>
                {categoriesKeys.map((key, index) => (
                    <option key={index} value={key}>{categories[key].title}</option>
                ))}
            </C.Select>
        </C.InputLabel>
        <C.InputLabel>
            <C.InputTitle>Título</C.InputTitle>
            <C.Input type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
        </C.InputLabel>
        <C.InputLabel>
            <C.InputTitle>Valor</C.InputTitle>
            <C.Input type='text' value={value} onChange={(e) => setValue(Number(e.target.value))}/>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddItem}>Adicionar</C.Button>
        </C.InputLabel>
    </C.Container>
  )
}
