document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll for jump links
    document.querySelectorAll(".jump-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Page load animation
    setTimeout(() => {
        document.getElementById("loading-screen").style.opacity = 0;
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";
        }, 1000);
    }, 3000);

    // Highlight the current section in jump links
    window.addEventListener("scroll", () => {
        let current = "";
        document.querySelectorAll("section[id]").forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        document.querySelectorAll(".jump-link").forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});