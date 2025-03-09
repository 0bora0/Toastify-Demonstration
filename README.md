# Toastify-Demonstration
Lightweight JavaScript Notifications Library
Toastify is a lightweight JavaScript library that allows developers to create stylish and customizable toast notifications for web applications. It provides a simple way to display informative, success, error, or warning messages to users in an interactive and visually appealing manner.

Key Features:
Customizable Notifications: Easily modify the position, background color, duration, and styling of toasts.
Auto-dismiss & Click-to-Close: Toasts can automatically disappear after a set time or be closed manually.
CSS & Animations Support: Supports custom CSS styles and animations for smooth effects.
Responsive & Mobile-Friendly: Works seamlessly across different screen sizes.
Progress Bar: Option to display a progress bar for better user experience.
Callbacks & Events: Execute functions when a toast is shown, clicked, or dismissed.
Compatible with Vanilla JS & Frameworks: Works with pure JavaScript, as well as frameworks like React and Vue.
Installation & Usage:
CDN (Direct Link)
html
Copy
Edit
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>
NPM (Node.js)
sh
Copy
Edit
npm install toastify-js
Basic Example
js
Copy
Edit
Toastify({
  text: "This is a Toast Notification!",
  duration: 3000,
  gravity: "top", // 'top' or 'bottom'
  position: "right", // 'left', 'center', or 'right'
  backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
  stopOnFocus: true, // Prevents dismissing on hover
}).showToast();
Conclusion
Toastify.js is an efficient solution for adding non-intrusive notifications to web applications. Its simplicity, flexibility, and lightweight nature make it a great alternative to bulkier notification libraries.
