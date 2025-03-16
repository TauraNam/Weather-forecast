import CitiesDropdown from "./components/CitiesDropdown"
import CurrentWeatherCard from "./components/CurrentWeatherCard"
import FiveDayForecast from "./components/FiveDayForecast"
import { CitiesProvider } from "./context/CitiesContext"
import { ForecastProvider } from "./context/ForecastContext"
import { SelectedCitiesProvider } from "./context/SelectedCityContext"

function App() {

  return (
    <>
      <CitiesProvider>
        <SelectedCitiesProvider>
          <ForecastProvider>
          <CitiesDropdown />
          <CurrentWeatherCard />
          <FiveDayForecast />
          </ForecastProvider>
        </SelectedCitiesProvider>
      </CitiesProvider>
    </>
  )
}

export default App
