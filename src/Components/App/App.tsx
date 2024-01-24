import Games from "Page/Games/container/Games";
import Header from "Components/Header/Container/Header";
import { AppContainer } from "./App.style";

function App() {
  return (
    <AppContainer>
      <Header />
      <Games />
    </AppContainer>
  );
}

export default App;
