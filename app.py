from flask import Flask, render_template, request, redirect, url_for, flash
import os

app = Flask(__name__)
app.secret_key = 'euki-india-secret-key-2024'

# ── Home ──────────────────────────────────────────────────────────────────────
@app.route('/')
def home():
    return render_template('home.html')

# ── Services ──────────────────────────────────────────────────────────────────
@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/services/ecommerce-marketing')
def ecommerce_marketing():
    return render_template('services/ecommerce_marketing.html')

@app.route('/services/web-development')
def web_development():
    return render_template('services/web_development.html')

@app.route('/services/digital-marketing')
def digital_marketing():
    return render_template('services/digital_marketing.html')

@app.route('/services/graphic-designing')
def graphic_designing():
    return render_template('services/graphic_designing.html')

@app.route('/services/product-photography')
def product_photography():
    return render_template('services/product_photography.html')

@app.route('/services/seo')
def seo():
    return render_template('services/seo.html')

@app.route('/services/blinkit')
def blinkit():
    return render_template('services/blinkit.html')

@app.route('/services/zepto')
def zepto():
    return render_template('services/zepto.html')

# ── Business Consultation ─────────────────────────────────────────────────────
@app.route('/business-consultation')
def consultation():
    return render_template('consultation.html')

@app.route('/business-consultation/company-registration')
def company_registration():
    return render_template('consultation/company_registration.html')

@app.route('/business-consultation/gst-service')
def gst_service():
    return render_template('consultation/gst_service.html')

@app.route('/business-consultation/legal-service')
def legal_service():
    return render_template('consultation/legal_service.html')

@app.route('/business-consultation/trademark-registration')
def trademark_registration():
    return render_template('consultation/trademark_registration.html')

# ── E-Commerce Platforms ──────────────────────────────────────────────────────
@app.route('/ecommerce')
def ecommerce():
    return render_template('ecommerce.html')

@app.route('/ecommerce/amazon')
def amazon():
    return render_template('ecommerce/amazon.html')

@app.route('/ecommerce/flipkart')
def flipkart():
    return render_template('ecommerce/flipkart.html')

@app.route('/ecommerce/meesho')
def meesho():
    return render_template('ecommerce/meesho.html')

@app.route('/ecommerce/nykaa')
def nykaa():
    return render_template('ecommerce/nykaa.html')

@app.route('/ecommerce/jiomart')
def jiomart():
    return render_template('ecommerce/jiomart.html')

@app.route('/ecommerce/etsy')
def etsy():
    return render_template('ecommerce/etsy.html')

@app.route('/ecommerce/walmart')
def walmart():
    return render_template('ecommerce/walmart.html')

# ── Partners ──────────────────────────────────────────────────────────────────
@app.route('/partners')
def partners():
    return render_template('partners.html')

@app.route('/partners/amazon')
def partner_amazon():
    return render_template('partners/amazon_partner.html')

@app.route('/partners/flipkart')
def partner_flipkart():
    return render_template('partners/flipkart_partner.html')

@app.route('/partners/shopify')
def partner_shopify():
    return render_template('partners/shopify_partner.html')

# ── Company Pages ─────────────────────────────────────────────────────────────
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/career')
def career():
    return render_template('career.html')

@app.route('/events')
def events():
    return render_template('events.html')

# ── Contact / Enquiry ─────────────────────────────────────────────────────────
@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        flash('Thank you for reaching out! Our team will contact you within 24 hours.', 'success')
        return redirect(url_for('contact'))
    return render_template('contact.html')

@app.route('/business-enquiry', methods=['GET', 'POST'])
def business_enquiry():
    if request.method == 'POST':
        flash('Your enquiry has been submitted! We will get back to you shortly.', 'success')
        return redirect(url_for('business_enquiry'))
    return render_template('business_enquiry.html')

# ── Policy Pages ──────────────────────────────────────────────────────────────
@app.route('/privacy-policy')
def privacy_policy():
    return render_template('policies/privacy_policy.html')

@app.route('/terms-and-conditions')
def terms_conditions():
    return render_template('policies/terms_conditions.html')

@app.route('/refund-cancellation-policy')
def refund_policy():
    return render_template('policies/refund_policy.html')

# ── 404 ───────────────────────────────────────────────────────────────────────
@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True, port=5001)
