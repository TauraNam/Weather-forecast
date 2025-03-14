export const getCities = async (req, res) => {
    try {
        const response = await fetch('https://api.meteo.lt/v1/places')

        if (!response.ok) {
            return res.status(500).json({ error: 'Failed to fetch cities' })
        }

        const places = await response.json()
        
        res.json(places)
    } catch (error) {
        res.status(500).json({ error: 'An error occured while fetching cities' })
    }
}
