
document.getElementById('simple-toast').addEventListener('click', () => {
    Toastify({
        text: "Това е обикновен Toast!",
        duration: 3000
    }).showToast();
});

document.getElementById('custom-toast').addEventListener('click', () => {
    Toastify({
        text: "Това е персонализиран Toast!",
        duration: 3000,
        style: {
            background: "#4a90e2",
            color: "white"
        }
    }).showToast();
});

document.getElementById('customize-toast').addEventListener('click', () => {
    const text = document.getElementById('toast-text').value;
    const backgroundColor = document.getElementById('toast-bg').value;
    const duration = parseInt(document.getElementById('toast-duration').value, 10);

    if (!text) {
        Toastify({
            text: "Това е Toast демонстрация!",
            duration: 3000,
            style: {
                background: "#ff6b6b",
                color: "white"
            }
        }).showToast();
        return;
    }

    if (isNaN(duration) || duration <= 0) {
        Toastify({
            text: "Моля, въведете валидна продължителност на уведомлението!",
            duration: 3000,
            style: {
                background: "#ff6b6b",
                color: "white"
            }
        }).showToast();
        return;
    }

    Toastify({
        text: text,
        duration: duration,
        style: {
            background: backgroundColor,
            color: "white"
        }
    }).showToast();
});

document.getElementById('link-toast').addEventListener('click', () => {
    Toastify({
        text: "Кликни тук, за да посетиш сайта Google!",
        duration: 5000,
        destination: "https://www.google.com",
        newWindow: true, 
        style: { 
            background: "#3498db",
            color: "white"
        }
    }).showToast();
});

document.getElementById('icon-toast').addEventListener('click', () => {
    Toastify({
        text: "🚀 Това е уведомление с икона!",
        duration: 3000,
        style: {
            background: "#8e44ad",
            color: "white"
        }
    }).showToast();
});

document.getElementById('image-toast').addEventListener('click', () => {
    Toastify({
        text: "<img src='https://placehold.co/40x0' alt='Toast Image' style='vertical-align: middle;'> Toast със снимка!",
        duration: 3000,
        escapeMarkup: false,
        style: {
            background: "#2ecc71",
            color: "white"
        }
    }).showToast();
});

document.getElementById('styled-toast').addEventListener('click', () => {
    Toastify({
        text: "Това е Toast, стилизиран със  CSS!",
        duration: 3000,
        className: "custom-toast"
    }).showToast();
});

const style = document.createElement('style');
style.innerHTML = `
    .custom-toast {
        background: linear-gradient(to right, #ff7e5f, #feb47b);
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);
  