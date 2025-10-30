# Portfolio Setup Instructions

## EmailJS Setup (For Contact Form)

To enable real email notifications from your contact form:

1. **Sign up at EmailJS**: https://www.emailjs.com/
2. **Create an Email Service**: 
   - Connect your Gmail account
3. **Create an Email Template**:
   - Use these variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
4. **Get your credentials**:
   - Service ID
   - Template ID
   - Public Key
5. **Update Contact.js**:
   - Open `src/components/Contact.js`
   - Replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, and `YOUR_PUBLIC_KEY`
   - Uncomment the emailjs.send() code block
   - Comment out the temporary mailto solution

## Google Analytics Setup (Optional)

To track website visitors:

1. **Create Google Analytics Account**: https://analytics.google.com/
2. **Get your Measurement ID** (format: G-XXXXXXXXXX)
3. **Update index.html**:
   - Open `public/index.html`
   - Replace `GA_MEASUREMENT_ID` with your actual ID
   - Uncomment the Google Analytics script

## Current Features

✅ Contact form (currently opens email client)
✅ Project filters (All, Web Application, Mobile Application)
✅ Timeline/Journey section
✅ Google Analytics placeholder (ready to activate)
✅ EmailJS integration (ready to activate)

## Notes

- Contact form currently opens your default email client
- After setting up EmailJS, it will send emails directly without opening email client
- All features are production-ready
