import { render, screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import CitiesDropdown from "./CitiesDropdown"
import { useCitiesContext } from "../context/CitiesContext"
import { useSelectedCityContext } from "../context/SelectedCityContext"
import { describe, it, expect, vi, beforeEach } from "vitest"

vi.mock("../context/CitiesContext", () => ({
    useCitiesContext: vi.fn(),
}))

vi.mock("../context/SelectedCityContext", () => ({
    useSelectedCityContext: vi.fn(),
}))


describe("CitiesDropdown", () => {

    beforeEach(() => {
        Storage.prototype.setItem = vi.fn()
        Storage.prototype.getItem = vi.fn().mockReturnValue(null)

        useCitiesContext.mockReturnValue({
            cities: [
                { value: "vilnius", label: "Vilnius" },
                { value: "kaunas", label: "Kaunas" },
            ],
        })

        useSelectedCityContext.mockReturnValue({
            selectedCity: "vilnius",
            setSelectedCity: vi.fn(),
        })

        localStorage.clear()
    })

    it('should update selected city and store in localStorage', async () => {
        render(<CitiesDropdown />)

        const comboBox = screen.getByRole('combobox')

        await userEvent.type(comboBox, "Kaunas")

        const kaunasOptions = screen.queryAllByText('Kaunas')

        await userEvent.click(kaunasOptions[0])


        expect(localStorage.setItem).toHaveBeenCalledWith('viewedCities', JSON.stringify([{ value: "kaunas", label: "Kaunas", count: 1 }]))
    })

    it('should not update selected city if the same city is selected', async () => {
        render(<CitiesDropdown />)

        const comboBox = screen.getByRole('combobox')

        await userEvent.type(comboBox, "Vilnius")

        const vilniusOptions = screen.queryAllByText('Vilnius')

        await userEvent.click(vilniusOptions[0])

        expect(localStorage.setItem).not.toHaveBeenCalledWith('viewedCities', JSON.stringify([{ value: "vilnius", label: "Vilnius", count: 1 }]))
    })
})
