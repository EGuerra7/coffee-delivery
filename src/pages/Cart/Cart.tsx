import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AdressContainer, AdressForm, CartContainer, CartTotal, HeadingAdress, HeadingPayment, InfoContainer, PaymentContainer, PaymentInfos, PaymentOptions, SubmitButton } from "./styles";
import { useTheme } from "styled-components";
import { Radio } from "../../components/Radio/Radio";
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { CoffeeCart } from "./component/Coffee";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { coffees } from "../Home/components/CoffeShop/CoffeShop";




type FormInputs = {
  cep: number
  street: string
  number: number
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.number().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
  invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>




export default function Cart() {
  const theme = useTheme();

  const {
    register,
    handleSubmit,
    watch
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })
  
  const selectedPaymentMethod = watch('paymentMethod')
  const { cart, checkout } = useContext(CartContext);

  const shippingPrice = 3.5;

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.coffee.id)

    if(!coffeeInfo){
      throw new Error('Invalid coffee')
    }

    return{
      ...coffeeInfo,
      quantity: item.quantity
    }
  }) 

  const totalItemsPrice = coffeesInCart.reduce((previusValue, currentItem) => {
    return (previusValue += currentItem.value * currentItem.quantity)
  }, 0)
 
  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkout(data)
  }
  return (
    
    <CartContainer>
      <InfoContainer>
        <h2>Complete o seu Pedido</h2>
           
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <AdressContainer>
              <HeadingAdress>
                <MapPinLine size={22} color={theme["yellow-dark"]}/>
                <div>
                  <h3>Endereço de Entrega</h3>
                  <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
              </HeadingAdress>
              <AdressForm>
                <input type="text" placeholder="CEP" {...register('cep', { valueAsNumber: true })} />
                <input type="text" placeholder="Rua" {...register('street')}/>
                <input type="text" placeholder="Número" {...register('number', { valueAsNumber: true })}/>
                <input type="text" placeholder="Complemento"  {...register('fullAddress')}/>
                <input type="text" placeholder="Bairro" {...register('neighborhood')}/>
                <input type="text" placeholder="Cidade" {...register('city')}/>
                <input type="text" placeholder="UF" {...register('state')}/>
              </AdressForm>
            </AdressContainer>

            <PaymentContainer>
              <HeadingPayment>
                <CurrencyDollar size={22} color={theme["purple"]}/>
                <div>
                  <h3>Pagamento</h3>
                  <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
              </HeadingPayment>
              <PaymentOptions>
                <div>
                  <Radio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit">
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </Radio>
                  <Radio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit">
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </Radio>
                  <Radio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash">
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </Radio>
                </div>
              </PaymentOptions>
            </PaymentContainer>
            </form>
      </InfoContainer>
      

      <InfoContainer>
        <h2>Cafés selecionados</h2>
        <CartTotal>
          <div>
            { cart.map(item => {
              return (
                <CoffeeCart 
                  key={item.coffee.id}
                  coffee={item.coffee}
                  quantity={item.quantity}
                />
              )
            })}
          </div>
          <PaymentInfos>
            <div>
              <span className="description-payment">Total de Itens</span>
              <span className="value">
                  {new Intl.NumberFormat('pt-br', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(totalItemsPrice)}
              </span>
            </div>
            <div>
              <span className="description-payment">Entrega</span>
              <span className="value">
                  {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                  }).format(shippingPrice)}
                </span>
            </div>
            <div>
              <b>Total</b>
              <b>
                {new Intl.NumberFormat('pt-br', {
                      currency: 'BRL',
                      style: 'currency',
                  }).format( totalItemsPrice + shippingPrice )}
              </b>
            </div>
          </PaymentInfos>

          <SubmitButton type="submit" form="order">
            CONFIRMAR PEDIDO
          </SubmitButton>
        </CartTotal>
      </InfoContainer>
    </CartContainer>
    
  )
}
