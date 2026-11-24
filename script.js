document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value;
    const feedback = document.getElementById("formFeedback");

    if (name === "" || email === "") {
        feedback.style.color = "red";
        feedback.textContent = "Please fill out all required fields.";
        return;
    }

    feedback.style.color = "#16a34a";
    feedback.textContent = "Thank you, " + name + "! Your message regarding '" + topic + "' has been received.";
    
    // Reset form after submission
    document.getElementById("contactForm").reset();
});