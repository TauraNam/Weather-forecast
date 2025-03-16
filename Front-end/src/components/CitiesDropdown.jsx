import { useCitiesContext } from "../context/CitiesContext"
import { ComboBox } from '@carbon/react'
import { useSelectedCityContext } from "../context/SelectedCityContext"
import MostViewedCities from "./MostViewedCities"


const CitiesDropdown = () => {
    const { cities } = useCitiesContext()
    const { selectedCity, setSelectedCity } = useSelectedCityContext()

    const handleCityChange = (selectedItem) => {
        if (selectedItem) {
            if (selectedItem.value === selectedCity) return

            setSelectedCity(selectedItem.value)

            const city = selectedItem.value
            let viewedCities = JSON.parse(localStorage.getItem('viewedCities')) || []

            const cityIndex = viewedCities.findIndex(item => item.value === city)

            if (cityIndex >= 0) {
                viewedCities[cityIndex].count++
            } else {
                viewedCities.push({ ...selectedItem, count: 1 })
            }

            localStorage.setItem('viewedCities', JSON.stringify(viewedCities.sort((a, b) => (a.count < b.count ? 1 : -1))))
        }
    }

    return (
        <>
            <h2 className="header">Select City</h2>
            <div className="combo-box-container">
                <div>
                    <ComboBox
                        onChange={({ selectedItem }) => handleCityChange(selectedItem)}
                        id="carbon-combobox"
                        items={cities}
                        selectedItem={cities.find(city => city.value === selectedCity)}
                        itemToString={(item) => item ? item.label : ''}
                        className="combo-box-input"
                    />
                </div>
                <MostViewedCities handleCityChange={handleCityChange} />
            </div>
        </>
    )
}

export default CitiesDropdown
