// Toggle Nomination Form
document.getElementById("nominateButton").addEventListener("click", () => {
    const form = document.getElementById("nominationForm");
    form.classList.toggle("hidden");
});

// Responsive Adjustments
window.addEventListener("resize", adjustResponsiveElements);

function adjustResponsiveElements() {
    const videoBar = document.getElementById("videoBar");

    if (window.innerWidth < 768) {
        videoBar.style.overflowX = "scroll";
    } else {
        videoBar.style.overflowX = "hidden";
}

adjustResponsiveElements()}