# 🏗️ Fabrication Microservice

This microservice handles **fabrication products** and **fabrication orders** for the Aluminum E-Commerce platform.  
It allows clients to **browse fabrication products**, **place custom fabrication orders**, and manages **CRUD operations** for admins.

---

## 📌 Features
- ✅ Create, Read, Update, Delete **Fabrication Products**
- ✅ Upload images to **Cloudinary**
- ✅ Place **Custom Fabrication Orders**
- ✅ Validation using **Express Validator**
- ✅ MongoDB with **Mongoose**
- ✅ Secure environment variables with **dotenv**
- ✅ Structured microservice for easy integration with API Gateway

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB** (Mongoose)
- **Cloudinary** (Image Upload)
- **Express-Validator**
- **dotenv**
- **Cors**

---

## 📂 Project Structure
```bash
fabrication-service/
│
├── config/
│ └── cloudinary.js # cloudinary connection
│ └── db.js # MongoDB connection
│
├── controllers/
│ ├── fabrication.controller.js # CRUD for fabrication products
│ └── order.controller.js # CRUD for fabrication orders
│
├── middlewares/
│ └── fabrication.js
│ └── order.js
│ └── upload.js 
│
├── models/
│ ├── Fabrication.js # Fabrication product schema
│ └── Order.js # Fabrication order schema
│
├── routes/
│ ├── fabrication.routes.js # Routes for fabrication products
│ └── order.routes.js # Routes for fabrication orders
│
├── .env # Example environment variables
├── server.js # Main entry point
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository:
```bash
git clone https://github.com/your-username/fabrication-service.git
cd fabrication-service
```
2️⃣ Install dependencies:
```bash
npm install
```

3️⃣ Create .env file:
```bash
PORT=port-of-your-choice
MONGO_URI=mongodb://localhost:27017/name-of-your-choice
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

4️⃣ Start the server:
```bash
npm start
```

Server will run at:
```bash
http://localhost:ur-port
```

### 🔗 API Endpoints

 1. Fabrication Products

Method	Endpoint	Description
```bash
POST	/api/fabrication	Create a fabrication product
GET	/api/fabrication	Get all fabrication products
GET	/api/fabrication/:id	Get single fabrication product
PUT	/api/fabrication/:id	Update fabrication product
DELETE	/api/fabrication/:id	Delete fabrication product
```

 2. Fabrication Orders
    
Method	Endpoint	Description
```bash
POST	/api/orders	Create fabrication order
GET	/api/orders	Get all orders
GET	/api/orders/:id	Get single order
PUT	/api/orders/:id	Update order (status update)
DELETE	/api/orders/:id	Delete an order
```

### ✅ Sample Fabrication Product (POST)

URL: /api/fabrication
Body (form-data):
```bash
name: Custom Window Frame
price: 500
color: Silver
dimensions[length]: 200
dimensions[width]: 100
image: <file>
```
### 🖼 Image Upload

Images are uploaded to Cloudinary and stored with image (URL) and imagePublicId for deletion.


### ✅ Validations

  Fabrication Product:
```bash
name (min: 3, max: 50)
price (number, required)
color (string, required)
dimensions.length and dimensions.width (number, required)
image (required)
````

  Fabrication Order:
```bash
clientId (required)
fabricationProductId (required)
quantity (min: 1)
status (default: pending)
```


📧 Author

Jawad Bouzir
Full Stack JavaScript Developer
