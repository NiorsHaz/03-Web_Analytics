// script.js

// Page View Tracking (Place this in the <head> section of your HTML)
dataLayer.push({
  event: "page_view",
  pageTitle: document.title,
  pageLocation: window.location.href,
});

// CTA Button Click Tracking (Assuming the CTA button is on index.html)
const ctaButton = document.getElementById("cta-button");
if (ctaButton) {
  ctaButton.addEventListener("click", function () {
    dataLayer.push({
      event: "cta_click",
      buttonText: this.innerText,
    });
  });
}

// Contact Form Submission Tracking (Assuming the contact form is on contact.html and has id="contact-form")
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function () {
    dataLayer.push({
      event: "form_submit",
      formName: "contact_form",
    });
  });
}

// Navigation Link Click Tracking
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", function () {
    dataLayer.push({
      event: "nav_click",
      linkText: this.innerText,
      linkHref: this.getAttribute("href"),
    });
  });
});

// Blog Article Link Click Tracking (Assuming each article has class="blog-article")
document.querySelectorAll(".blog-article a").forEach((link) => {
  link.addEventListener("click", function () {
    dataLayer.push({
      event: "blog_article_click",
      articleTitle: this.closest(".blog-article").querySelector("h3").innerText,
      linkHref: this.getAttribute("href"),
    });
  });
});

// Service Box Interactions Tracking (Assuming each service box has class="service-box")
document.querySelectorAll(".service-box").forEach((box) => {
  box.addEventListener("click", function () {
    dataLayer.push({
      event: "service_box_click",
      serviceName: this.querySelector("h3").innerText,
    });
  });
});

// Outbound Link Click Tracking
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  if (link.hostname !== window.location.hostname) {
    // Exclude internal links
    link.addEventListener("click", function () {
      dataLayer.push({
        event: "outbound_link_click",
        linkUrl: this.href,
      });
    });
  }
});

// Error Handling (Example: Add a generic error handler)
window.addEventListener("error", function (event) {
  console.error(
    "An error occurred:",
    event.message,
    event.filename,
    event.lineno,
    event.colno
  );
  dataLayer.push({
    event: "javascript_error",
    errorMessage: event.message,
    errorFile: event.filename,
    errorLine: event.lineno,
    errorColumn: event.colno,
  });
});

// Data Layer Initialization (Ensure this is present before any dataLayer.push)
window.dataLayer = window.dataLayer || [];
