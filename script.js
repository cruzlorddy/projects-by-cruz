document.addEventListener("DOMContentLoaded", function () {
    // Wait until the page is fully loaded, then fade out the preloader
    setTimeout(() => {
        document.getElementById("preloader").classList.add("hidden");
    }, 5000); // 1 second delay before removing preloader
});



$(document).ready(function () {
    // Show all projects initially
    $(".project-card").show();

    // Filter projects based on category
    $(".filter-btn").click(function () {
        let category = $(this).attr("data-category");

        // Remove active class from all buttons
        $(".filter-btn").removeClass("active");
        $(this).addClass("active");

        // Hide all projects, then show only the selected ones
        $(".project-card").fadeOut(300, function () {
            if (category === "all") {
                $(".project-card").fadeIn().addClass("animate-show");
            } else {
                $(".project-card")
                    .filter(`[data-category="${category}"]`)
                    .fadeIn()
                    .addClass("animate-show");
            }
        });
    });
});
