document.addEventListener("DOMContentLoaded", () => {
    // Side Navbar functionality
    const sidenav = document.querySelector(".side-navbar");
    const sideCloseNav = document.querySelector(".side-navbar__close i");
    const menuToggle = document.querySelector(".menubar");

    if (menuToggle && sidenav) {
        menuToggle.addEventListener("click", () => sidenav.classList.add("active"));
    }


    if (sideCloseNav && sidenav) {
        sideCloseNav.addEventListener("click", () => sidenav.classList.remove("active"));
    }


    // New Arrival Carousel Scrolling:
    const newArrivalContainer = document.querySelector(".newarrival__container");
    const leftButton = document.querySelector(".scroll-btn.left");
    const rightButton = document.querySelector(".scroll-btn.right");

    if (newArrivalContainer && leftButton && rightButton) {
        leftButton.addEventListener("click", () => {
            newArrivalContainer.scrollBy({
                 left: -200,
                  behavior: "smooth" });
        });

        rightButton.addEventListener("click", () => {
            newArrivalContainer.scrollBy({
                 left: 200, 
                 behavior: "smooth" });
        });
    }

    // Product Search Functionality:
const searchInput = document.getElementById("search");
const ProductItems = document.querySelectorAll(".Featured-item");
const ProductSection = document.querySelector(".Featured__container");

if (searchInput) {
    searchInput.addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        let matchFound = false;

        ProductItems.forEach((item) => {
            const ProductName = item.querySelector(".Featured__name").textContent.toLowerCase();

            if (ProductName.includes(searchValue)) {
                item.style.display = "block";   // Show the product
                matchFound = true;
            } else {
                item.style.display = "none";    // Hide the product
            }
        });

        // Check if any match was found
        let noMatchMessage = document.querySelector(".no-match-message");
        if (!matchFound) {
            if (!noMatchMessage) {
                noMatchMessage = document.createElement("p");
                noMatchMessage.classList.add("no-match-message");
                noMatchMessage.textContent = "Oops, no products found.";
                ProductSection.appendChild(noMatchMessage);
            }
        } else if (noMatchMessage) {
            noMatchMessage.remove();
        }
    });
}
});
document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", (event) => {
        event.preventDefault();

        const id = document.getElementById("name").value.trim();
        const addr = document.getElementById("address").value.trim();
        const emai = document.getElementById("E-mail").value.trim();  
        const messa = document.getElementById("Message").value.trim();
    
        const names = document.querySelector(".nameError");
        const addresss = document.querySelector(".addressError");
        const emails = document.querySelector(".emailError");
        const messages = document.querySelector(".messageError");
    
        let isValid = true;
    
        if (/^[a-zA-Z\s]+$/.test(id)) {
            names.style.display = "none";
        } else {
            names.style.display = "inline";
            isValid = false;
        }
    
        if (/^[a-zA-Z0-9.,\s]+$/.test(addr)) {
            addresss.style.display = "none";
        } else {
            addresss.style.display = "inline";
            isValid = false;
        }
    
        if (/^[a-zA-Z0-9.%_+-]+@gmail\.com$/.test(emai)) {
            emails.style.display = "none";
        } else {
            emails.style.display = "inline";
            isValid = false;
        }
    
        if (/^[\w\s.,!?'"-]+$/.test(messa)) {  
            messages.style.display = "none";
        } else {
            messages.style.display = "inline";
            isValid = false;
        }
    
        if (isValid) {
            alert("Form Submitted Successfully!");
            document.getElementById("contactform").submit(); 
        }
    });
});

    
    
