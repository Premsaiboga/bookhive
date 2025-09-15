# 📚 Book Finder App  

A simple React application that allows users to search for books by title using the **Open Library API**. Users can view book details such as cover, title, author, and publication year.  

## 🚀 Features  
- 🔎 Search books by title  
- 📖 View book details (title, author, first publish year)  
- 🖼 Book cover images (when available)  
- 📱 Responsive design (works on mobile & desktop)  
- ⚡ Fast and interactive UI with React 

## 🛠 Tech Stack  
- **React (Vite)** – Frontend framework  
- **Open Library API** – Book data source  

API Example:  
https://openlibrary.org/search.json?q=


## 📂 Project Structure  
├── public/ # Static files
├── src/
│ ├── components
│ ├── images
│ └── pages
│ ├── index.css
│ └── index.jsx
├── package.json
├── README.md


## ⚡ Getting Started  
1. Clone the repo  
```bash
git clone 
cd book-finder

2. npm install
3. npm start
   App will be available at: http://localhost:5173/

🌐 API Endpoints Used
Search books:
https://openlibrary.org/search.json?q=SEARCH_TERM

Book details:
https://openlibrary.org/works/WORK_ID.json

Book covers:
https://covers.openlibrary.org/b/id/COVER_ID-M.jpg
