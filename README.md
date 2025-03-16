# Weather Forecast Application

## Description
This application provides users with weather forecasts by retrieving data from the [Meteo.lt API](https://api.meteo.lt/). Users can search for a city, view its current weather conditions, and check the five-day forecast. The application also logs user interactions in the backend.

## Features
### Front-end
- Responsive layout using SASS
- Searchable dropdown to select a city (Carbon Design System ComboBox component)
- Storage of three most viewed cities in the browser (localStorage)
- Display of three most viewed cities as quick-select buttons
- Display of current weather conditions for the selected city (temperature, wind, humidity, etc.)
- Display of a five-day weather forecast with daily and nightly temperatures

### Back-end
- Node.js application with Express framework
- API endpoints:
  - Retrieve a list of cities available for weather forecasts
  - Fetch weather forecasts for a selected city
- Logs user actions (city selections) with timestamps in the console

## Technologies
- **Front-end:** JavaScript, React, Vite, Carbon Design System (ComboBox, Button), SASS
- **Back-end:** Node.js, Express
- **Data Source:** [Meteo.lt API](https://api.meteo.lt/)
- **Testing:** Vitest

## Prerequisites
Before installing and running the application, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (which includes npm)

## Installation and running
Clone the repository:
```bash
git clone https://github.com/TauraNam/Weather-forecast.git
```

### Installing and running the Front-end
```bash
cd Front-end
npm install
npm run dev
```
The application will be available at: [http://localhost:5173/](http://localhost:5173/)

### Installing and running the Back-end
```bash
cd Back-end
npm install
npm run server
```
The backend will start and log user interactions in the console.

### Running Tests
```bash
npm run test
```
Runs unit tests using Vitest.

## Dependencies
All necessary dependencies can be installed using:
```bash
npm install
```
The full list of dependencies is available in the `package.json` file.

## License
MIT

## Author
Taura Namirskaitė
