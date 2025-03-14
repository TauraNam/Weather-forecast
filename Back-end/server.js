import express from 'express'
import cors from 'cors'
import CitiesRoutes from './src/routes/CitiesRoutes.js'

const app = express()

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/api/cities', CitiesRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});