document.addEventListener("DOMContentLoaded", function() {
    const letterLinks = document.querySelectorAll(".letter-link");
    const modal = document.getElementById("video-modal");
    const playerDiv = document.getElementById("player");

    letterLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const videoId = this.getAttribute("data-video-id");
            const embedUrl = `https://www.youtube.com/embed/${videoId}?controls=0&rel=0&modestbranding=1&loop=1`;

            playerDiv.innerHTML = `<iframe width="1060" height="700" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
            modal.style.display = "block";
        });
    });

    const closeBtn = document.querySelector(".close-btn");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        playerDiv.innerHTML = "";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            playerDiv.innerHTML = "";
        }
    });
});
