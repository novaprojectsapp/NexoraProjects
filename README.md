# Nova Projects

> Innovative Hardware & Software Projects for Students, Developers & Businesses.

Live Demo: [https://nova-projects.onrender.com](https://nova-projects.onrender.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | HTML5, CSS3, Vanilla JavaScript (ES6+) |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, bcrypt |
| File Upload | Multer, Cloudinary |

---

## Features

- Premium dark theme with glassmorphism navbar
- Responsive mobile-first design
- Live search and filtering
- Animated counters, scroll effects, toast notifications
- Full admin dashboard with CRUD operations
- JWT authentication with password hashing
- Rate limiting, Helmet security headers, CORS
- SEO meta tags, sitemap, robots.txt

---

## Quick Start (Local Development)

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [MongoDB](https://www.mongodb.com/) (local install or Atlas cloud URI)

### 1. Clone & Install

```bash
git clone https://github.com/your-username/NovaProjects.git
cd NovaProjects
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nova-projects
JWT_SECRET=your-random-secret-string-here
JWT_EXPIRE=7d
NODE_ENV=development
```

### 3. Seed the Database

```bash
npm run seed
```

This creates:
- **Admin account:** `admin@nova` / `novaadmin123`
- **10 sample projects** (5 hardware + 5 software)

### 4. Start the Server

```bash
npm start
```

Visit **http://localhost:5000**

---

## Project Structure

```
NovaProjects/
├── public/                   # Static frontend assets
│   ├── css/style.css          # Complete stylesheet
│   ├── js/app.js              # Frontend logic
│   ├── js/user.js             # User auth/favorites/profile logic
│   ├── js/admin.js            # Admin dashboard logic
│   ├── robots.txt             # SEO
│   └── sitemap.xml            # SEO
├── views/                     # HTML pages
│   ├── index.html             # Home page
│   ├── projects.html          # All projects
│   ├── hardware.html          # Hardware category
│   ├── software.html          # Software category
│   ├── project-detail.html    # Project details
│   ├── about.html             # About page
│   ├── contact.html           # Contact form
│   ├── login.html             # User login
│   ├── register.html          # User register
│   ├── profile.html           # User profile
│   ├── favorites.html         # User favorites
│   ├── admin-login.html       # Admin login
│   ├── admin-dashboard.html   # Admin CRUD dashboard
│   └── 404.html               # Error page
└── src/                       # Backend source
    ├── server.js              # Express server entry
    ├── routes/                # Route definitions
    │   ├── auth.js            # Auth routes
    │   ├── projects.js        # Project CRUD routes
    │   ├── contact.js         # Contact form routes
    │   └── viewRoutes.js      # Page routes
    ├── controllers/           # Request handlers
    │   ├── authController.js  # Login logic
    │   ├── projectController.js # Project CRUD logic
    │   └── contactController.js # Contact form logic
    ├── middleware/            # Express middleware
    │   ├── auth.js            # JWT verification
    │   └── upload.js          # Multer file upload
    ├── models/                # Mongoose schemas
    │   ├── Project.js         # Project schema
    │   ├── User.js            # User schema
    │   └── Contact.js         # Contact form schema
    ├── config/db.js           # MongoDB connection
    └── scripts/seed.js        # Database seeder
├── package.json
├── .env.example
├── .gitignore
├── render.yaml                # Render deployment config
├── Dockerfile                 # Docker build
├── docker-compose.yml         # Docker compose
└── README.md
```

---

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/login` | No | Admin login, returns JWT |
| GET | `/api/projects` | No | List projects (with search, filter, pagination) |
| GET | `/api/projects/:id` | No | Get single project by slug or ID |
| POST | `/api/projects` | Yes | Create new project |
| PUT | `/api/projects/:id` | Yes | Update existing project |
| DELETE | `/api/projects/:id` | Yes | Delete project |
| GET | `/api/dashboard` | Yes | Dashboard statistics |
| GET | `/api/projects/admin/all` | Yes | All projects for admin |
| POST | `/api/contact` | No | Submit contact form |

### Query Parameters (GET /api/projects)

| Parameter | Values | Example |
|-----------|--------|---------|
| `search` | Text | `?search=arduino` |
| `category` | `hardware`, `software` | `?category=hardware` |
| `difficulty` | `beginner`, `intermediate`, `advanced` | `?difficulty=beginner` |
| `featured` | `true` | `?featured=true` |
| `sort` | `latest`, `oldest` | `?sort=oldest` |
| `page` | Number | `?page=2` |
| `limit` | Number | `?limit=12` |

---

## Deployment Guide (Render + MongoDB Atlas)

### Step 1: Set Up MongoDB Atlas (Free)

1. Go to [cloud.mongodb.com](https://cloud.mongodb.com) and sign up (free)
2. Click **Create a Free Database** (M0 Sandbox)
3. Choose a cloud provider and region (closest to your users)
4. Click **Create Cluster**

**Create a database user:**
5. Go to **Database Access** → **Add New Database User**
6. Choose **Password** authentication
7. Enter a username and a strong password
8. Click **Add User**

**Allow network access:**
9. Go to **Network Access** → **Add IP Address**
10. Click **Allow Access from Anywhere** (adds `0.0.0.0/0`)
11. Click **Confirm**

**Get the connection string:**
12. Go to **Database** → **Connect** → **Connect your application**
13. Select **Drivers** → **Node.js** → **5.0 or later**
14. Copy the connection string
15. Replace `<password>` with your database user's password

It will look like:
```
mongodb+srv://myuser:mypassword@cluster0.xxxxx.mongodb.net/nova-projects?retryWrites=true&w=majority
```

### Step 2: Push Code to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit - Nova Projects"

# Create a repo on github.com, then:
git remote add origin https://github.com/your-username/NovaProjects.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [dashboard.render.com](https://dashboard.render.com) and sign up
2. Click **New +** → **Web Service**
3. Connect your **GitHub account**
4. Select your **NovaProjects** repository
5. Configure the service:

| Field | Value |
|-------|-------|
| **Name** | `nova-projects` |
| **Region** | Closest to your users |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `npm start` |

6. Click **Advanced** → **Add Environment Variable** and add:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your Atlas connection string from Step 1 |
| `JWT_SECRET` | A long random string (e.g., `nxr-2026-secure-key-abc123`) |
| `JWT_EXPIRE` | `7d` |
| `NODE_ENV` | `production` |

7. Click **Create Web Service**

Render will build and deploy your app. It takes 2-5 minutes.

### Step 4: Seed the Production Database

After deployment, seed your production database:

```bash
# Install mongosh if you don't have it, or use the Render shell
# Or create a one-time seed script:

MONGODB_URI="mongodb+srv://user:pass@cluster.mongodb.net/nova-projects?retryWrites=true&w=majority" npm run seed
```

Or use Render's **Shell** tab in your service dashboard:
```bash
npm run seed
```

### Step 5: Verify

Visit `https://your-app-name.onrender.com`

- **Home page:** `https://your-app-name.onrender.com`
- **Admin login:** `https://your-app-name.onrender.com/admin/login`
- **Credentials:** `admin@nova` / `novaadmin123`

> **Important:** Change the admin password after first login for production use.

---

## Vercel Deployment

This project runs on Vercel as a single Express serverless function (`src/server.js`).

### 1. Push to GitHub

```bash
git add .
git commit -m "Prepare Vercel deployment"
git push origin main
```

### 2. Import on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repo
2. Framework preset: **Other** (no build command needed)
3. Add these **Environment Variables**:

| Key | Value |
|-----|-------|
| `MONGODB_URI` | Your Atlas connection string (required — in-memory DB can't run serverless) |
| `JWT_SECRET` | A long random string |
| `JWT_EXPIRE` | `7d` |
| `GOOGLE_CLIENT_ID` | (optional) Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | (optional) Google OAuth client secret |
| `GOOGLE_CALLBACK_URL` | `https://your-app.vercel.app/api/auth/google/callback` |

4. Click **Deploy**

> **Note:** `mongodb-memory-server` is only used as a local fallback. On Vercel you must set `MONGODB_URI`.

---

## Docker Deployment

```bash
# Build and run
docker-compose up -d

# Or build manually
docker build -t nova-projects .
docker run -p 5000:5000 --env-file .env nova-projects
```

---

## Post-Deployment Checklist

- [ ] Change admin password from default `novaadmin123`
- [ ] Update `JWT_SECRET` to a strong random value
- [ ] Verify MongoDB Atlas IP whitelist allows Render IPs
- [ ] Test all pages load correctly
- [ ] Test admin login and CRUD operations
- [ ] Test contact form submission
- [ ] Set up a custom domain (optional)

---

## License

MIT
