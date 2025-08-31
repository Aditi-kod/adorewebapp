# Adore Web App

**Adore Web App** is a modern, full-stack web application designed to manage users, bookings, and other services seamlessly. It provides a responsive, user-friendly interface built with React on the frontend and Node.js/Express on the backend, with MongoDB as the database.

---

##  Tech Stack

- **Frontend:** React, Tailwind CSS, Vite  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT, Bcrypt.js  
- **Deployment:** (Optional: Vercel/Firebase/Heroku)  
- **Other tools:** Postman (for API testing), Git & GitHub

---

##  Features

- **User Authentication**  
  - Register, Login, and Logout functionality  
  - Passwords securely hashed using Bcrypt.js  
  - JWT-based authentication for protected routes  

- **Agent Management**  
  - Create, update, and delete agents  
  - Each agent has name, email, mobile number (with country code), and password  

- **Task Management**  
  - CSV upload to assign tasks to agents  
  - Automatic task distribution among agents  

- **Responsive UI**  
  - Built with React and Tailwind CSS  
  - Fully responsive and modern design  

- **Dashboard & Pages**  
  - Home, Login, Register, Dashboard, Profile pages  
  - Contact, Services, Products, News sections  

---

##  How to Run Locally

### 1. Clone the repository
git clone https://github.com/your-username/adore-web-app.git
cd adore-web-app
### 2. Install dependencies
Backend:
cd server
npm install
Frontend:
cd client
npm install
### 3. Set up environment variables
Create a .env file in the server folder with your MongoDB connection and JWT secret:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
### 4. Run the app
Backend:
cd server
npm run dev
It runs on port 5000
Frontend:
cd client
npm run dev
Now, open your browser at http://localhost:5173 to see the app.

----

##  Demo Login
You can use the following demo credentials to test the app:
name "mike"
email "mike1234@gmail.com"
password : "good5678"

name: "manny"
email: "manny1234@exmpl.com"
password: "manny5678"

----

## Project Structure

adore-web-app/
├── client/          # React frontend
├── server/          # Node.js backend
├── .gitignore
├── package.json
└── README.md

----

## Contact / More Info
For any questions or issues, feel free to reach out at ad2019ti@gmail.com.
