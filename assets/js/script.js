// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Fade-in Animation on Scroll
window.addEventListener("scroll", function () {
    document.querySelectorAll(".content").forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 50) {
            section.classList.add("visible");
        }
    });
});

// Open Project Pop-up
function openProject(projectId) {
    const projectData = {
        project1: {
            img: "assets/images/project1.png",
            title: "Project 1",
            description: "This is a brief description of Project 1."
        },
        project2: {
            img: "assets/images/project2.png",
            title: "Project 2",
            description: "This is a brief description of Project 2."
        },
        project3: {
            img: "assets/images/project3.png",
            title: "Project 3",
            description: "This is a brief description of Project 3."
        }
    };

    if (projectData[projectId]) {
        document.getElementById("popup-img").src = projectData[projectId].img;
        document.getElementById("popup-title").innerText = projectData[projectId].title;
        document.getElementById("popup-description").innerText = projectData[projectId].description;
        document.getElementById("popup").style.display = "flex";
    }
}

// Close Pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}



// Open Project Modal
function openModal(title, imageSrc, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('projectModal').style.display = 'flex';
}

// Close Project Modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}
