/* Transition effect on page load */
document.body.className = 'fade';

document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function() {
    document.body.className = '';
    }, 230);
});
