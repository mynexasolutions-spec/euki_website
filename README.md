# CEUKI India Pvt. Ltd. — Website

A complete Flask-based website for CEUKI India Pvt. Ltd., mirroring the structure and content strategy of evitamin.in, with CEUKI's brand theme (blue-to-orange gradient).

## 📁 Project Structure

```
CEUKI_website/
├── app.py                    # Flask application & routes
├── requirements.txt          # Python dependencies
├── README.md
├── static/
│   ├── css/
│   │   └── main.css          # Main stylesheet (CEUKI brand theme)
│   ├── js/
│   │   └── main.js           # Interactive JS (navbar, accordion, tabs, counters)
│   └── images/
│       └── logo.png          # CEUKI India logo
└── templates/
    ├── base.html             # Base layout (navbar + footer)
    ├── home.html             # Homepage
    ├── about.html            # About Us
    ├── services.html         # Services overview
    ├── ecommerce.html        # E-Commerce overview
    ├── partners.html         # Partners overview
    ├── contact.html          # Contact page
    ├── business_enquiry.html # Quote / Enquiry form
    ├── career.html           # Careers page
    ├── events.html           # Events & Gallery
    ├── 404.html              # 404 error page
    ├── services/
    │   ├── ecommerce_marketing.html
    │   ├── web_development.html
    │   ├── digital_marketing.html
    │   ├── graphic_designing.html
    │   ├── product_photography.html
    │   └── seo.html
    ├── ecommerce/
    │   ├── amazon.html
    │   ├── flipkart.html
    │   ├── meesho.html
    │   ├── nykaa.html
    │   ├── jiomart.html
    │   ├── etsy.html
    │   └── walmart.html
    ├── partners/
    │   ├── amazon_partner.html
    │   ├── flipkart_partner.html
    │   └── shopify_partner.html
    └── policies/
        ├── privacy_policy.html
        ├── terms_conditions.html
        └── refund_policy.html
```

## 🚀 Quick Start

### 1. Install Python (3.8+)
Make sure Python is installed: `python --version`

### 2. Create a Virtual Environment
```bash
cd CEUKI_website
python -m venv venv

# Activate:
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run the Server
```bash
python app.py
```

Visit: **http://localhost:5000**

---

## 🎨 Branding & Theme

The site uses CEUKI India's brand colors extracted from the logo:
- **Primary Blue:** `#0D47A1` → `#1976D2`
- **Brand Orange:** `#E65100` → `#FF8F00`
- **Gradient:** Blue-to-Orange (matching the CEUKI logo arrow)

Fonts: **Poppins** (headings) + **Nunito** (body) — loaded from Google Fonts.

---

## 📄 Pages Included

| Page | URL |
|------|-----|
| Homepage | `/` |
| Services | `/services` |
| E-Commerce Marketing | `/services/ecommerce-marketing` |
| Web Development | `/services/web-development` |
| Digital Marketing | `/services/digital-marketing` |
| Graphic Design | `/services/graphic-designing` |
| Product Photography | `/services/product-photography` |
| SEO Services | `/services/seo` |
| E-Commerce Overview | `/ecommerce` |
| Amazon | `/ecommerce/amazon` |
| Flipkart | `/ecommerce/flipkart` |
| Meesho | `/ecommerce/meesho` |
| Nykaa | `/ecommerce/nykaa` |
| JioMart | `/ecommerce/jiomart` |
| Etsy | `/ecommerce/etsy` |
| Walmart | `/ecommerce/walmart` |
| Partners | `/partners` |
| Amazon Partner | `/partners/amazon` |
| Flipkart Partner | `/partners/flipkart` |
| Shopify Partner | `/partners/shopify` |
| About Us | `/about` |
| Career | `/career` |
| Events | `/events` |
| Contact | `/contact` |
| Business Enquiry | `/business-enquiry` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-and-conditions` |
| Refund Policy | `/refund-cancellation-policy` |

---

## 🛠 Customization

- **Logo:** Replace `static/images/logo.png`
- **Brand Colors:** Edit CSS variables at the top of `static/css/main.css`
- **Contact Info:** Update in `templates/base.html` (topbar) and `templates/contact.html`
- **Business Details:** Company name, address, phone in `base.html` footer

---

## 📦 Deployment

For production deployment:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:8000 app:app
```

Use Nginx as a reverse proxy for static files.

---

Built with ❤️ for CEUKI India Pvt. Ltd.
