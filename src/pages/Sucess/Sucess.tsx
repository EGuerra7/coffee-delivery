import { useContext } from "react";
import { InfoContent, Order, SucessContainer, SucessHeading } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { CurrencyDollar, Info, MapPin, Timer } from "phosphor-react";
import SuccessPhoto from '../../assets/Illustration.svg';

export function Sucess(){
    const theme = useTheme()
    const { orders } = useContext(CartContext);
    const { orderId } = useParams();
    const orderInfo = orders.find((order) => order.id === Number(orderId))
    const paymentMethod = {
        credit: 'Cartão de crédito',
        debit: 'Cartão de débito',
        cash: 'Dinheiro',
    }

    if (!orderInfo) {
        return null
    }

   
    return (
        <SucessContainer>
            <Order>
                <SucessHeading>
                    <h1>Uhu! Pedido confirmado</h1>
                    <h3>Agora é só aguardar que logo o café chegará até você</h3>
                </SucessHeading>

                <Info>
                    <InfoContent>
                        <div>
                            <MapPin 
                                color={theme.white}
                                style={{ backgroundColor: theme.purple }}
                                size={32}
                            />

                            <div>
                                <span>
                                    Entrega em{' '}
                                    <strong>
                                        {orderInfo.street}, {orderInfo.number}
                                    </strong>
                                </span>

                                <span>
                                    {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                                </span>
                            </div>
                        </div>

                        <div>
                            <Timer 
                                color={theme.white}
                                style={{ backgroundColor: theme.yellow }}
                                size={32}
                            />

                            <div>
                                <span>Previsão de entrega</span>

                                <strong>20 min - 30 min</strong>
                            </div>
                        </div>

                        <div>
                            <CurrencyDollar 
                                color={theme.white}
                                style={{ backgroundColor: theme["yellow-dark"] }}
                                size={32}
                            />

                            <div>
                                <span>Pagamento na entrega</span>

                                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                            </div>
                        </div>
                    </InfoContent>
                </Info>
            </Order>

            <img src={SuccessPhoto} />
        </SucessContainer>
    )
}