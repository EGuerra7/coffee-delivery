import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"
import { CartContextProvider } from "./contexts/CartContext"
import DefaultLayout from "./layouts/DefaultLayout"
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

    
        <CartContextProvider>
          <DefaultLayout />
        </CartContextProvider>

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
