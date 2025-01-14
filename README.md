# **Movies and TV Shows Tracker**

A web application to track movies and TV shows you've watched. Users can add titles, view details like posters and release years, and delete entries. The app fetches data from the OMDb API and stores it in a backend file for persistence.

---

## **Features**
- Add movies or TV shows by their title.
- Fetch details (poster, year, and type) from the OMDb API.
- View a dynamic list of all added items.
- Persistent storage of data in a backend JSON file.
- Remove items from the list.

---

## **Technologies Used**

### **Frontend:**
- HTML5
- CSS3
- JavaScript (Vanilla)

### **Backend:**
- Node.js
- Express.js

### **External API:**
- [OMDb API](https://www.omdbapi.com/)

---

## **Project Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/movies-tv-tracker.git
cd movies-tv-tracker

### 2. Set Up Backend 
# 1. Navigate to the server folder:
cd server

# 2. Install dependencies:
npm install

# 3. Start the server
node server.js

The server will run at http://localhost:3000.

3. Configure OMDb API Key
# 1. Sign up for a free API key at OMDb API.
# 2. Replace YOUR_API_KEY in script.js with your API key.

4. Open Frontend
# 1. Navigate to the project root directory.
# 2. Open index.html in your browser.

Usage
# 1.Enter the title of a movie or TV show in the input field.
# 2.Select the type (movie or series) from the dropdown menu.
# 3.Click Add to fetch and save the data.
# 4.View added items with their poster, title, and year displayed.
# 5.Click Remove to delete an item from the list.

Project Structure
movies-tv-tracker/
├── index.html       # Frontend HTML
├── style.css        # Frontend styling
├── script.js        # Frontend JavaScript
├── server/          # Backend folder
│   ├── server.js    # Express server
│   ├── data.json    # JSON file for persistent storage
│   └── package.json # Backend dependencies

Future Enhancements
# 1. User authentication for personalized tracking.
# 2. Ability to categorize watched/unwatched items.
# 3. Advanced search and filtering options.
# 4. Deployment on cloud services for public access.

License
This project is licensed under the MIT License.

Contributing
Contributions are welcome! Please create an issue or submit a pull request for improvements or feature requests.

Acknowledgments
# 1. OMDb API for providing movie and TV show data.
# 2. Icons and placeholders from Placeholder.com.



