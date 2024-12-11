
import CoffeShop from "./components/CoffeShop/CoffeShop";
import Intro from "./components/Intro/Intro";
import { HomeContainer } from "./styles";


export default function Home() {
 

  return (
    <HomeContainer>
      <Intro />
      <CoffeShop />
    </HomeContainer>
  )
}
