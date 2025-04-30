
# Apollo Clone Feature Implemented

This is a **Next.js** application that mimics the Apollo 24/7 platform's **Doctor Consultation** and **Doctor Listing** pages, along with filters and API integration for adding and listing doctors. This application allows users to book consultations with doctors, check their profiles, and apply various filters to find doctors based on their experience, consultation mode, fees, and languages spoken.

## Features

- **Doctor Listings**: Display a list of doctors with essential information like name, experience, mode of consultation, languages spoken, rating, consultation fee, and availability.
- **Filters**: Filter doctors by experience, consultation mode (online or hospital visit), fee range, and languages spoken.
- **API Integration**: Implemented backend APIs to add doctors (`add-doctor`) and list doctors with applied filters (`list-doctor-with-filter`).
- **SEO Optimization**: Implemented **Off-page SEO** (meta tags, Open Graph, Twitter cards) for better visibility on search engines and social media.
- **Pagination**: Paginated the doctor listing to improve performance when loading large datasets.
- **Favicon**: Custom favicon implementation to enhance user experience.

## Tech Stack

- **Frontend**: Next.js (React-based framework)
- **Backend**: Node.js (for API development) with RESTful API endpoints
- **Database**: MongoDB (NoSQL) or SQL (depending on backend choice)
- **Styling**: Tailwind CSS for responsive and modern UI
- **Deployment**: Vercel (for Next.js deployment)

## Setup & Installation

### Prerequisites

Ensure that you have the following installed on your machine:

- **Node.js** (v16 or later)
- **npm** (Node Package Manager)
- **MongoDB** (if using MongoDB, or another SQL/NoSQL database)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-repository-url/apollo-clone.git
```

### Step 2: Install Dependencies

Navigate to the project directory and install all dependencies:

```bash
cd apollo-clone
npm install
```

### Step 3: Configure the Database

- If you are using **MongoDB**, make sure to set up your MongoDB cluster and get the connection URI.
- Create a `.env.local` file in the root directory and add your MongoDB URI:

```bash
MONGODB_URI=your-mongo-uri-here
```

### Step 4: Running the Application Locally

To run the application locally:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Step 5: Building and Deploying the Application

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

Alternatively, if you're using **Vercel** for deployment, push the changes to your GitHub repository and connect it with your Vercel project for automatic deployment.

## API Endpoints

### 1. `POST /api/adddoctor`

**Description**: Adds a new doctor to the database.

**Request Body**:
```json
{
  "name": "Dr. John Doe",
  "experience": 10,
  "modeOfConsult": "online",
  "languages": ["English", "Hindi"],
  "rating": 4.5,
  "consultationFee": 500,
  "availableToday": true,
  "location": "Mumbai, India"
}
```

**Response**:
```json
{
  "message": "Doctor added successfully"
}
```

---

### 2. `GET /api/listdoctorwithfilter`

**Description**: Lists doctors based on the filters provided. Supports pagination.

**Query Parameters**:
- `page`: Current page (default: 1)
- `limit`: Number of doctors per page (default: 6)
- `minExperience`: Minimum years of experience (default: 0)
- `modeOfConsult`: Mode of consultation (optional: "online", "hospital visit")
- `minFee`: Minimum consultation fee (default: 0)
- `maxFee`: Maximum consultation fee (default: 0)
- `languages`: Comma-separated list of languages (optional)

**Example Request**:
```
GET /api/listdoctorwithfilter?page=1&limit=6&minExperience=5&modeOfConsult=online&languages=English,Hindi
```

**Response**:
```json
{
  "data": [
    {
      "name": "Dr. John Doe",
      "experience": 10,
      "modeOfConsult": "online",
      "languages": ["English", "Hindi"],
      "rating": 4.5,
      "consultationFee": 500,
      "availableToday": true,
      "location": "Mumbai, India"
    },
    ...
  ]
}
```
## Screenshot
<img width="1470" alt="Screenshot 2025-04-30 at 3 31 54 PM" src="https://github.com/user-attachments/assets/a8793b32-7630-416b-9917-ea9a22a1dcb7" />


## SEO Implementation

Off-page SEO has been implemented to enhance the searchability and visibility of the site. Key components include:

- **Meta Tags** for title, description, and keywords.
- **Open Graph** tags for social media previews.
- **Twitter Cards** for enhanced appearance on Twitter.
- **Canonical Link** for SEO-friendly duplicate content handling.

The **`metadata`** object is configured with appropriate Open Graph and Twitter tags:

```js
export const metadata = {
  title: "General Physicians | Book Doctor Consultation Online - Apollo Clone",
  description: "Find the best general physicians and internal medicine doctors online. Book appointments, check experience, consultation fees, and availability instantly.",
  keywords: ["General Physician", "Internal Medicine", "Doctor Consultation Online", "Apollo Clone", "Best doctors near me"],
  openGraph: {
    title: "General Physicians | Apollo Clone",
    description: "Book top general physicians and internal medicine specialists online with ease.",
    url: "https://your-clone-url.com/destination",
    siteName: "Apollo Clone",
    images: [
      {
        url: "https://your-clone-url.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apollo General Physicians"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Consult General Physicians Online - Apollo Clone",
    description: "Easily book appointments with top-rated general physicians through our Apollo 24/7 clone.",
    images: ["https://your-clone-url.com/twitter-image.jpg"]
  },
  alternates: {
    canonical: "https://your-clone-url.com/destination"
  }
};
```

## Conclusion

This project provides a clean and responsive user interface for booking doctor consultations with filters for better searchability. It is designed with SEO optimization.

