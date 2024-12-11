import { Minus, Plus } from "phosphor-react";
import { ButtonInputNumber, InputNumberContainer } from "./styles";
import { useState } from "react";

export default function InputNumber() {
  const [countAmount, setCountAmount] = useState(1);

  function handleMinusAcount() {
    if(countAmount > 1){
      setCountAmount(countAmount - 1);
    } 
      
  }

  function handlePlusAcount() {
    setCountAmount(countAmount + 1);
}

  return (
    <InputNumberContainer>
        <ButtonInputNumber onClick={handleMinusAcount}><Minus size={14}/></ButtonInputNumber>
        <span>{ countAmount }</span>
        <ButtonInputNumber onClick={handlePlusAcount}><Plus size={14} /></ButtonInputNumber>
    </InputNumberContainer>
  )
}
