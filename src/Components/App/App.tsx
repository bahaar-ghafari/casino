import Games from "Page/Games/container/Games";
import Header from "Components/Header/Container/Header";
import { AppContainer } from "./App.style";
import { SWRConfig } from "swr";

function App() {
  // Set global SWR configuration
  const swrConfig = {
    refreshInterval: 10 * 60 * 1000, // 10 minutes in milliseconds
    revalidateOnFocus: false,
  };
  return (
    <AppContainer>
      <SWRConfig value={swrConfig}>
        <Header />
        <Games />
      </SWRConfig>
    </AppContainer>
  );
}

export default App;
