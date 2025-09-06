
    // Get the query parameter (?id=...)
    const params = new URLSearchParams(window.location.search);
    const storyId = params.get("id");

    // Hide all stories first
    document.querySelectorAll(".story").forEach(story => {
        story.style.display = "none";
    });

    // Show only the selected one
    if (storyId) {
        const story = document.getElementById(storyId);
        if (story) {
            story.style.display = "block";
        } else {
            document.querySelector(".post-content").innerHTML = "<p>Story not found.</p>";
        }
    }
