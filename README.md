riptions
- **Shopping Cart**: Add/remove items with real-time cart updates
- **Wishlist**: Save favorite products for later
- **User Authentication**: Sign up, login, and account management
- **Checkout Process**: Complete purchase flow
- **Contact & About Pages**: Company information and contact details

### Backend# GoldAura Jewellery Website

A modern, responsive jewellery e-commerce website built with HTML, CSS, JavaScript, and Node.js backend.

## 🌟 Features

### Frontend Features
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Product Catalog**: Browse through various jewellery categories
- **Product Details**: Detailed product pages with images and desc Features
- **User Authentication**: Secure signup and login with bcrypt password hashing
- **MongoDB Integration**: User data storage with Mongoose ODM
- **RESTful API**: Express.js server with CORS support
- **Environment Configuration**: Secure environment variable management

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with responsive design
- **JavaScript**: Interactive functionality and DOM manipulation
- **Font Awesome**: Icons for enhanced UI

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: MongoDB object modeling tool
- **bcrypt**: Password hashing for security
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variable management

## 📁 Project Structure

```
jewellery-website/
├── index.html              # Homepage
├── products.html           # Product catalog
├── product-detail.html     # Individual product page
├── cart.html              # Shopping cart
├── checkout.html          # Checkout process
├── wishlist.html          # User wishlist
├── login.html             # User login
├── signup.html            # User registration
├── account.html           # User account management
├── about.html             # About page
├── contact.html           # Contact page
├── dashboard.html         # Admin dashboard
├── style.css              # Main stylesheet
├── script.js              # Frontend JavaScript
├── account.js             # Account management scripts
├── images/                # Product images
│   ├── diamond-ring.jpg
│   ├── bangles.jpeg
│   ├── Chocker_necklace.jpg
│   └── ... (other product images)
├── backend/               # Backend server
│   ├── server.js          # Express server
│   ├── package.json       # Dependencies
│   ├── models/
│   │   └── User.js        # User model
│   └── .env               # Environment variables
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jewellery-website
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the `backend` directory:
   ```env
   MONGO_URI=mongodb://localhost:27017/goldaura
   PORT=5000
   ```

4. **Start the backend server**
   ```bash
   npm start
   # or
   node server.js
   ```

5. **Open the frontend**
   - Open `index.html` in your web browser
   - Or serve the frontend using a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (install http-server globally)
     npx http-server
     ```

## 📱 Pages Overview

### Homepage (`index.html`)
- Hero section with call-to-action
- Featured products showcase
- Navigation to all major sections

### Products (`products.html`)
- Product grid with filtering options
- Product cards with images and prices
- Add to cart and wishlist functionality

### Product Detail (`product-detail.html`)
- Detailed product information
- Product images and descriptions
- Add to cart functionality

### Shopping Cart (`cart.html`)
- Cart items display
- Quantity adjustment
- Price calculation
- Checkout process initiation

### User Authentication
- **Signup** (`signup.html`): New user registration
- **Login** (`login.html`): User authentication
- **Account** (`account.html`): User profile management

### Additional Pages
- **About** (`about.html`): Company information
- **Contact** (`contact.html`): Contact details and form
- **Wishlist** (`wishlist.html`): Saved favorite products
- **Checkout** (`checkout.html`): Purchase completion
- **Dashboard** (`dashboard.html`): Admin interface

## 🔧 Backend API Endpoints

### Authentication
- `POST /signup` - User registration
- `POST /login` - User authentication

### User Management
- User data stored in MongoDB
- Password hashing with bcrypt
- Session management

## 🎨 Design Features

- **Modern UI**: Clean and elegant design
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Color Scheme**: Gold and elegant color palette
- **Typography**: Professional font choices
- **Icons**: Font Awesome integration for enhanced UX

## 🔒 Security Features

- **Password Hashing**: bcrypt for secure password storage
- **CORS Configuration**: Proper cross-origin handling
- **Environment Variables**: Secure configuration management
- **Input Validation**: Server-side data validation

## 📸 Product Categories

The website includes various jewellery categories:
- Rings (Diamond, Gold, Engagement)
- Necklaces (Chocker, Chains)
- Earrings (Diamond, Gold-plated, Pearl)
- Bangles (Golden, Simple)
- Anklets
- Jewellery Sets

## 🛒 Shopping Features

- **Cart Management**: Add/remove items
- **Wishlist**: Save favorite products
- **Price Display**: Indian Rupee (₹) pricing
- **Product Images**: High-quality product photos
- **Checkout Process**: Complete purchase flow

## 🚀 Deployment

### Frontend Deployment
- Can be deployed to any static hosting service
- Netlify, Vercel, GitHub Pages, etc.

### Backend Deployment
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set up MongoDB Atlas for database
- Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👥 Contact

For questions or support, please contact the development team.

---

**GoldAura** - Shine with Elegance ✨ 
