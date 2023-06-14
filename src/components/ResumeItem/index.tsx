import React from 'react';
import * as C from './styles';

interface ResumeItem {
    title: string,
    value: number,
    color?: string
}

export default function ResumeItem({ title, value, color }: ResumeItem) {
  return (
    <C.Container>
        <C.Title>{title}</C.Title>
        <C.Info color={color}>R$ {value}</C.Info>
    </C.Container>
  )
}
