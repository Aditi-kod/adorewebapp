# Adore Web App

**Adore Web App** is a rural service portal designed to help communities access essential products and services online. Users can browse available services and products, make bookings, view news updates, and contact support, all through a responsive, modern interface.

---

##  Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Bcrypt.js  
- **Deployment (optional):** Vercel / Netlify / Render  
- **Other tools:** Git & GitHub, Postman (for API testing)

---

##  Features

### 1. Homepage UI (Frontend)
- **Navbar:** Logo, Home, Services, Products, Contact  
- **Our Services:** 5+ service offerings with icons/images  
- **Available Products:** 6+ products with name, price, image  
- **News & Updates:** 2-3 dummy news headlines relevant to rural communities  
- **Contact Us:** Address, helpline number, and a simple form (name + message)  
- **Responsive Design:** Works seamlessly on mobile and desktop  

### 2. User Features (Frontend + Backend)
- **Signup/Login Flow** with forms  
- Users stored securely in the database  
- **User Dashboard** (for logged-in users):  
  - Welcome message  
  - List of existing bookings 
  - Option to edit profile (name, phone)  

### 3. Backend (API Endpoints)
- `GET /services` — List all service types  
- `GET /products` — List all products with details  
- `POST /register` — User registration  
- `POST /login` — User login  
- `GET /news` — Fetch news headlines for homepage  
- `POST /contact` — Store contact form submissions  

### 4. Booking & Extra Features
- **Service Booking:** Users can add products to a cart  
- **Bookings Saved:** Bookings stored in the database and visible on the user dashboard  
- **Product Search:** Search/filter bar for products  
- **User Profile Edit:** Update display name and phone number  

---

##  How to Run Locally

### 1. Clone the repository
git clone (https://github.com/Aditi-kod/adorewebapp.git)
cd adorewebapp
### 2. Install dependencies
Backend:
cd server
npm install
Frontend:
cd client
npm install
### 3. Set up environment variables
Create a .env file in the server folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
### 4. Run the app
Backend:
cd server
npm run dev
Frontend:
cd client
npm run dev
Open your browser at http://localhost:5173.

## Demo Login

name:"mike"
email:"mike1234@gmail.com"
password: "good5678"

name: "manny"
email: "manny1234@exmpl.com"
password: "manny5678"

## Project Structure

adore-web-app/
├── client/          # React frontend
├── server/          # Node.js backend
├── .gitignore
├── package.json
└── README.md

## Contact / More Info
For questions or support, reach out at ad2019ti@gmail.com.
