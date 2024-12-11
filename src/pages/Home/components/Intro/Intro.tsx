import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { useTheme } from "styled-components";
import { IntroSection, IntroItens, IconMoldure } from "./styles";
import CoffeImage from '../../../../assets/coffee.svg';

export default function Intro() {
    const theme = useTheme();
    
    return (
    <IntroSection>
        <main>
            <section>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
            </section>
            <IntroItens>
                <div>
                    <span>
                    <IconMoldure $color={"yellow-dark"}>
                        <ShoppingCart weight="fill" color={theme.white}/>
                    </IconMoldure>
                    Compra simples e segura
                    </span>
                    <span>
                    <IconMoldure $color={"yellow"}>
                        <Timer weight="fill" color={theme.white}/>
                    </IconMoldure>
                    Entrega rápida e rastreada
                    </span>
                </div>
                <div>
                <span>
                    <IconMoldure $color={"base-text"}>
                        <Package weight="fill" color={theme.white}/>
                    </IconMoldure>
                    Embalagem mantém o café intacto
                    </span>
                    <span>
                    <IconMoldure $color={"purple"}>
                        <Coffee  weight="fill" color={theme.white}/>
                    </IconMoldure>
                    O café chega fresquinho até você
                    </span>
                </div>
            </IntroItens>
        </main>
            <img src={CoffeImage} />
    </IntroSection>
  )
}
