# 🚗 PerfectRentalCar

PerfectRentalCar is a modern and responsive front-end web application for a car rental company. It allows users to explore a catalog of available vehicles, filter listings by brand, price, and mileage, view detailed information, and submit a rental request — all connected to a real backend API.

## 🔍 Project Overview

This project was built as part of a frontend development practice using React and Redux Toolkit. It consumes a ready-made backend API provided [here](https://car-rental-api.goit.global/api-docs/).

## ✨ Features

- 🔥 Homepage with a clear call-to-action
- 🛻 Catalog with:
  - Car cards with photos, prices, and specs
  - Backend-based filtering (brand, price, mileage)
  - “Add to Favorites” functionality (with persistence)
  - Load more cards via backend pagination
- 📄 Detailed car page:
  - Full specs and description
  - Booking form with validation and notification on success
- 📱 Clean and modern UI with consistent formatting (e.g., `5 000 km`)
- 🧭 Routing with React Router
- 💾 State management with Redux Toolkit
- 💅 Styled using CSS Modules

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router DOM](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Vite](https://vitejs.dev/)
- [CSS Modules](https://github.com/css-modules/css-modules)

## 📁 Pages & Routes

| Route            | Description                      |
|------------------|----------------------------------|
| `/`              | Homepage with banner             |
| `/catalog`       | Catalog of rental cars           |
| `/catalog/:id`   | Detailed car page with booking   |

## 🧩 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/perfect-rental-car.git
   cd perfect-rental-car
