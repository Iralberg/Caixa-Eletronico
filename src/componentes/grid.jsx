import React from "react";
import Griditem from "./GridItem";
import * as C from "./styles"
export default function Grid ({itens, setItens}){  
    const onDelete = (ID) => {
        const newArraw = itens.filter((transaction) =>  transaction.id !== ID);
        setItens(newArraw);
localStorage.setItem("transactions", JSON.stringify(newArraw))
    }
    
    return(
<C.Table>
<C.Thead>
    <C.Tr>
        <C.Th width={40}> Descrição</C.Th>
        <C.Th width={40}> Valor</C.Th>
        <C.Th width={10} alignCenter> Tipo</C.Th>
        <C.Th width={10}> </C.Th>
    </C.Tr>
</C.Thead>
<C.Tbody>
{itens?.map((item, index) =>(<Griditem key={index} item={item} onDelete={onDelete}/>))

}

</C.Tbody>
</C.Table>
    )

}