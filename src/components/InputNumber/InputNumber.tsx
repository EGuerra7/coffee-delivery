import { Minus, Plus } from "phosphor-react";
import { ButtonInputNumber, InputNumberContainer } from "./styles";

export default function InputNumber() {
  return (
    <InputNumberContainer>
        <ButtonInputNumber><Minus size={14}/></ButtonInputNumber>
        <span>1</span>
        <ButtonInputNumber><Plus size={14} /></ButtonInputNumber>
    </InputNumberContainer>
  )
}
