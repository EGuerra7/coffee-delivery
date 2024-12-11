import CardCoffee, { Coffee } from "./CardCoffee/CardCoffee";
import { CoffeContainer, CoffesSection } from "./styles";
import Expresso from '../../../../assets/CoffesCup/expresso.svg';
import ExpressoAmericano from '../../../../assets/CoffesCup/americano.svg';
import ExpressoCremoso from '../../../../assets/CoffesCup/expresso-cremoso.svg';
import ExpressoGelado from '../../../../assets/CoffesCup/cafe-gelado.svg';
import CafeComLeite from '../../../../assets/CoffesCup/cafe-com-leite.svg';
import Latte from '../../../../assets/CoffesCup/latte.svg';
import Capuccino from '../../../../assets/CoffesCup/capuccino.svg';
import Macchiato from '../../../../assets/CoffesCup/macchiato.svg';
import Mocaccino from '../../../../assets/CoffesCup/mocaccino.svg';
import ChocolateQuente from '../../../../assets/CoffesCup/chocolate-quente.svg';
import Cubano from '../../../../assets/CoffesCup/cubano.svg';
import Havaiano from '../../../../assets/CoffesCup/havaiano.svg';
import Árabe from '../../../../assets/CoffesCup/arabe.svg';
import Irlandes from '../../../../assets/CoffesCup/irlandes.svg';

export const coffees: Coffee[] = [
  {
    ulrImage: Expresso,
    types: ['TRADICIONAL'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
  },
  {
    ulrImage: ExpressoAmericano,
    types: ['TRADICIONAL'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
  },
  {
    ulrImage: ExpressoCremoso,
    types: ['TRADICIONAL'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
  },
  {
    ulrImage: ExpressoGelado,
    types: ['TRADICIONAL', 'GELADO'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
  },
  {
    ulrImage: CafeComLeite,
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 9.9,
  },
  {
    ulrImage: Latte,
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 9.9,
  },
  {
    ulrImage: Capuccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    value: 9.9,
  },
  {
    ulrImage: Macchiato,
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    value: 9.9,
  },
  {
    ulrImage: Mocaccino,
    types: ['TRADICIONAL', 'COM LEITE'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 9.9,
  },
  {
    ulrImage: ChocolateQuente,
    types: ['ESPECIAL', 'COM LEITE'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
  },
  {
    ulrImage: Cubano,
    types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 9.9,
  },
  {
    ulrImage: Havaiano,
    types: ['ESPECIAL'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 9.9,
  },
  {
    ulrImage: Árabe,
    types: ['ESPECIAL'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 9.9,
  },
  {
    ulrImage: Irlandes,
    types: ['ESPECIAL', 'ALCOÓLICO'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 9.9,
  },
];

export default function CoffeShop() {
  return (
    <CoffeContainer>
        <h1>Nossos cafés</h1>
        <CoffesSection>
          { coffees.map(coffee => {
            return (
              <CardCoffee 
                key= {coffee.name}
                coffee= {coffee}
              />
            )
          }) }
            
        </CoffesSection>
    </CoffeContainer>
  )
}
