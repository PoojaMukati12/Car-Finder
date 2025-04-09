# 🚗 Car Finder Web App

A responsive and interactive React.js web application for browsing, filtering, and saving cars to a wishlist. This project uses a **mock API (json-server)** and is styled with **TailwindCSS**.

---

## ✨ Features

- 🔍 Search cars by name
- 🏷️ Filter by brand, price range, and fuel type
- ❤️ Add/Remove cars to/from wishlist (LocalStorage)
- 🔄 Real-time UI updates without page reloads
- 📦 Fetch data from a mock API
- 🎨 Interactive UI with TailwindCSS

---

## 🛠️ Tech Stack

- **React.js**
- **TailwindCSS**
- **json-server** (mock API)
- **LocalStorage** (for wishlist)

  # Live Demo [Click](https://car-finder-ivory.vercel.app/)

---


## 🚀 Setup Instructions

### 1. Clone the repository


git clone 
cd car-finder-app

### 2. Install dependencies
npm install

### 3. Start the mock API
Make sure json-server is installed globally:
npm install -g json-server

Then start the mock API:
json-server --watch db.json --port 5000

### 4. Start the React App
npm start
