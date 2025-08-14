🏨 MERN Stack Hotel Booking Website

Bu loyiha MERN Stack (MongoDB, Express, React, Node.js) yordamida yaratilgan to‘liq funksional Hotel Booking vebsayti. Foydalanuvchilar mehmonxonalarni ko‘rish, xonalarni bron qilish, to‘lovlarni amalga oshirish va email orqali tasdiqlash xabarlarini olish imkoniyatiga ega. Admin panel orqali yangi mehmonxonalar qo‘shish, mavjudlarini tahrirlash va bronlarni boshqarish mumkin.

✨ Xususiyatlar

🔐 User Authentication & Registration – Clerk yordamida login/signup

🏠 Home Page – mehmonxonalar ro‘yxati va izlash filtrlari

🏨 Hotel Details Page – mehmonxona tafsilotlari, narx va xonalar mavjudligi

📅 Booking System – foydalanuvchi bron qilganda email orqali tasdiqlash xabari yuboriladi

💳 Online Payment – Stripe integratsiyasi yordamida to‘lov qilish

📊 Admin Dashboard – mehmonxonalar va bronlarni boshqarish

🌐 Deployment – Vercel’da front-end va back-end joylashtirish

🛠 Texnologiyalar

Frontend:

React.js

Clerk Auth

Tailwind CSS

Backend:

Node.js

Express.js

MongoDB + Mongoose

Clerk Backend SDK

Stripe Payment Gateway

Qo‘shimcha:

Nodemailer (email yuborish)

Vercel (deployment)

📂 Loyihaning asosiy bo‘limlari

Navigation Bar – foydalanuvchi autentifikatsiyasiga qarab tugmalar

Home Page – asosiy qidiruv va mehmonxonalar ro‘yxati

Hotel List Page – filtrlash va saralash imkoniyatlari

Hotel Details Page – batafsil ma’lumot va bron qilish formasi

My Bookings Page – foydalanuvchining barcha bronlari

Admin Dashboard – mehmonxonalarni qo‘shish, tahrirlash, o‘chirish

Booking Confirmation Email – avtomatik email xabari

Stripe Payment – xavfsiz online to‘lov

🚀 O‘rnatish
# Repository'ni klonlash
git clone <repo-url>
cd hotel-booking

# Backend o‘rnatish
cd backend
npm install

# Frontend o‘rnatish
cd ../frontend
npm install

⚙️ Muhit sozlamalari (.env)

Backend uchun:

MONGO_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password


Frontend uchun:

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key

▶️ Ishga tushirish
# Backend
cd backend
npm run dev

# Frontend
cd ../frontend
npm run dev


Frontend: http://localhost:5173
Backend: http://localhost:5000

📺 Demo

🔗 Live Demo: hb-gs.vercel.app