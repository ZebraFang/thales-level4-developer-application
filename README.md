# thales-level4-developer-application

My project for a software apprenticeship

Here’s a professional and comprehensive README template tailored for your project:

---

# **Gregory Mansell - Interactive Web Application for Thales Apprenticeship**

## **Overview**

This project is an interactive web application created as part of my application for the **Thales Software Developer Apprenticeship**. The site showcases my background, skills, and suitability for the role. It includes engaging elements like testimonials, a dynamically updated weather section, and an integrated contact form powered by EmailJS.

### **Features**

- **Sticky Navbar:** A responsive and fixed navigation bar for seamless user experience.
- **Dynamic Weather Section:** Real-time weather data near Templecombe using the OpenWeather API.
- **Interactive Design:** Smooth scrolling, hover effects, and a visually appealing layout.
- **Contact Form:** A working contact form integrated with EmailJS for direct communication.
- **Responsive Design:** Fully optimized for desktop and mobile devices.
- **Downloadable Resume:** A quick-access button for recruiters to download my CV.

---

## **Technologies Used**

- **Frontend:**
  - HTML5
  - CSS3
  - JavaScript (ES6+)
- **APIs and Services:**
  - OpenWeather API (Weather data)
  - EmailJS (Contact form)
- **Tools and Frameworks:**
  - Google Fonts (Montserrat)
  - Git and GitHub (Version control)
  - Vercel (Hosting)

---

## **Installation and Usage**

### **1. Clone the Repository**

```bash
git clone https://github.com/<your-github-username>/<repo-name>.git
```

### **2. Navigate to the Project Directory**

```bash
cd <repo-name>
```

### **3. Open the Project**

Simply open `index.html` in your preferred browser to view the project locally.

---

## **Live Demo**

You can view the live site here: [Live Demo](https://<your-vercel-domain>.vercel.app)

---

## **Configuration**

### **API Key Setup**

To enable the weather section, replace the `apiKey` in `app.js` with your OpenWeather API key:

```javascript
const apiKey = "your-openweather-api-key";
```

### **EmailJS Integration**

Ensure your EmailJS service and template IDs are configured in `app.js`:

```javascript
const serviceID = "your-emailjs-service-id";
const templateID = "your-emailjs-template-id";
```

---

## **Project Structure**

```
├── index.html          # Main HTML file
├── style.css           # Stylesheet for the project
├── app.js              # JavaScript for interactivity
├── img/                # Folder for images and icons
│   ├── favicon.png     # Favicon for the site
│   ├── hero-image.jpg  # Background image for the hero section
│   └── [other images]
├── docs/
│   └── Gregory_Mansell_Resume.pdf  # Downloadable CV
```

---

## **Contributing**

While this project is personal, I welcome suggestions and feedback. Feel free to open issues or submit pull requests.

---

## **Acknowledgements**

- **Thales:** For inspiring the project idea and providing a challenging opportunity.
- **EmailJS and OpenWeather:** For enabling key functionality.
- **HyperionDev & University of Manchester:** For my foundational web development education.

---

## **Contact**

If you'd like to discuss the project or get in touch, feel free to connect:

- **Email:** [gregorymansell0404@gmail.com](mailto:gregorymansell0404@gmail.com)
- **LinkedIn:** [Gregory Mansell](https://www.linkedin.com/in/gregory-mansell-52a40426/)
- **GitHub:** [ZebraFang](https://github.com/ZebraFang)
