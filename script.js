let notificationBtn = document.querySelector("#notification-btn")
let notification = document.querySelector("#notification-wrapper")
let closeBtn = document.querySelector("#close-btn")
let progress = document.querySelector("#progress-bar");

// "onclick" event will trigger on when click show notification button
notificationBtn.addEventListener("click", () => {
    notification.classList.add("showNotification")
    progress.classList.add("progress")

    setTimeout(() => {
        notification.classList.remove("showNotification")
        progress.classList.remove("progress")

    }, 5000);
});

closeBtn.addEventListener("click", () => {
    notification.classList.remove("showNotification")
    progress.classList.remove("progress")
});