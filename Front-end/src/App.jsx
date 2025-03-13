import CitiesDropdown from "./components/CitiesDropdown"
import { CitiesProvider } from "./context/CitiesContext"

function App() {

  return (
    <>
      <CitiesProvider>
        <CitiesDropdown />
      </CitiesProvider>
    </>
  )
}

export default App
