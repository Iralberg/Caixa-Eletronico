import React from "react";
import * as C from '../styles'

function Resumeitem({ title, Icon, value }){
return(
<C.Containeritem>
<C.HEADER>

    <C.Headertitle>{title}</C.Headertitle>
<Icon/>
</C.HEADER>
<C.Total>{value}</C.Total>

</C.Containeritem>


)

}
export default Resumeitem