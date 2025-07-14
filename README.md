# 🎬 Movie API

This is a RESTful API for managing a collection of movies built with **Node.js**, **Express.js**, and **MongoDB**.

## 🚀 Features

- Add a single movie or multiple movies (bulk insert)
- Fetch all movies or a single movie by ID
- Update movie information
- Delete a movie
- Clean and modular MVC structure

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Environment Config**: dotenv
- **Development Tool**: nodemon

## 📁 Folder Structure

movie-api/
│
├── app.js # Entry point
├── .env # Environment variables
├── package.json
│
├── model/
│ └── Movie.js # Mongoose schema
│
├── router/
│ └── movieRoutes.js # All API routes
│
├── controllers/ # (Optional: for cleaner route logic)
│ └── movieController.js



---

## 📦 API Endpoints

### ➕ Add a Single Movie
`POST /api/movies`

```json
{
  "name": "Inception",
  "img": "https://bit.ly/inception-img",
  "summary": "A mind-bending thriller by Christopher Nolan..."
}

📦 Add Movies in Bulk
POST /api/movies/bulk

[
  {
    "name": "Movie 1",
    "img": "https://...",
    "summary": "..."
  },
  {
    "name": "Movie 2",
    "img": "https://...",
    "summary": "..."
  }
]

📥 Get All Movies
GET /api/movies

📥 Get Single Movie
GET /api/movies/:id

✏️ Update a Movie
PUT /api/movies/:id

❌ Delete a Movie
DELETE /api/movies/:id


