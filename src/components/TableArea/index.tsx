import React from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import TableItem from '../TableItem';

interface TableAreaProps {
    list: Item[]
}

export default function TableArea({ list }: TableAreaProps) {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColumn width={100}>Data</C.TableHeadColumn>
                    <C.TableHeadColumn width={100}>Categoria</C.TableHeadColumn>
                    <C.TableHeadColumn>Título</C.TableHeadColumn>
                    <C.TableHeadColumn width={150}>Valor</C.TableHeadColumn>
                </tr>
            </thead>
            <tbody>
                {list.map((item, index) => (
                    <TableItem key={index} item={item}/>
                ))}
            </tbody>
        </C.Table>
    )
}
