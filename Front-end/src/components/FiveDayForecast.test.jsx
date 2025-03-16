import React from 'react'
import { render, screen } from '@testing-library/react'
import FiveDayForecast from './FiveDayForecast'
import { useSelectedCityContext } from '../context/SelectedCityContext'
import { useForecastContext } from '../context/ForecastContext'
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"

vi.mock('../context/SelectedCityContext', () => ({
    useSelectedCityContext: vi.fn()
}))

vi.mock('../context/ForecastContext', () => ({
    useForecastContext: vi.fn()
}))

vi.mock('./ForecastCard', () => ({
    default: vi.fn(() => <div>Mocked ForecastCard</div>)
}))

describe('FiveDayForecast Component', () => {
    const mockForecastData = {
        forecastTimestamps: [
            { forecastTimeUtc: '2025-03-17 03:00:00' },
            { forecastTimeUtc: '2025-03-17 09:00:00' },
            { forecastTimeUtc: '2025-03-17 12:00:00' },
            { forecastTimeUtc: '2025-03-17 15:00:00' },
            { forecastTimeUtc: '2025-03-17 21:00:00' },
            { forecastTimeUtc: '2025-03-18 03:00:00' },
            { forecastTimeUtc: '2025-03-18 09:00:00' },
            { forecastTimeUtc: '2025-03-18 15:00:00' },
            { forecastTimeUtc: '2025-03-18 21:00:00' },
            { forecastTimeUtc: '2025-03-19 03:00:00' },
            { forecastTimeUtc: '2025-03-19 09:00:00' },
            { forecastTimeUtc: '2025-03-19 15:00:00' },
            { forecastTimeUtc: '2025-03-19 21:00:00' },
            { forecastTimeUtc: '2025-03-20 03:00:00' },
            { forecastTimeUtc: '2025-03-20 09:00:00' },
            { forecastTimeUtc: '2025-03-20 15:00:00' },
            { forecastTimeUtc: '2025-03-20 21:00:00' },
            { forecastTimeUtc: '2025-03-21 03:00:00' },
            { forecastTimeUtc: '2025-03-21 09:00:00' },
            { forecastTimeUtc: '2025-03-21 12:00:00' },
            { forecastTimeUtc: '2025-03-21 18:00:00' },
        ]
    }

    const mockFilteredForecastData =
        [
            [
                { forecastTimeUtc: '2025-03-17 03:00:00' },
                { forecastTimeUtc: '2025-03-17 12:00:00' },
                { forecastTimeUtc: '2025-03-17 15:00:00' }
            ],
            [
                { forecastTimeUtc: '2025-03-18 03:00:00' },
                { forecastTimeUtc: '2025-03-18 15:00:00' }
            ],
            [
                { forecastTimeUtc: '2025-03-19 03:00:00' },
                { forecastTimeUtc: '2025-03-19 15:00:00' }
            ],
            [
                { forecastTimeUtc: '2025-03-20 03:00:00' },
                { forecastTimeUtc: '2025-03-20 15:00:00' }
            ],
            [
                { forecastTimeUtc: '2025-03-21 03:00:00' },
                { forecastTimeUtc: '2025-03-21 12:00:00' }
            ]
        ]

    const setState = vi.fn()
    const useStateSpy = vi.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState])

    beforeEach(() => {
        useSelectedCityContext.mockReturnValue({ selectedCity: 'Kaunas' })
        useForecastContext.mockReturnValue({ forecast: mockForecastData })

        vi.useFakeTimers('modern')
        vi.setSystemTime(new Date('2025-03-16T00:00:00.000Z').getTime())
    })

    afterEach(() => {
        vi.useRealTimers()
    })

    it('should render the 5-Day Forecast header', () => {
        render(<FiveDayForecast />)
        expect(screen.getByText('5-Day Forecast')).toBeDefined()
    })

    it('should call filterForecasts and filter the forecast correctly', () => {
        render(<FiveDayForecast />)

        expect(setState).toHaveBeenCalledWith(mockFilteredForecastData)
    })
})
