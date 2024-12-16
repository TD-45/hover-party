// Select the button and container
const button = document.getElementById("hoverButton"); // Gets the button element by its ID.
const hoverZone = document.querySelector(".hover-zone"); // Gets the container element by its class.

// Add a mouseover (hover) event to the button
button.addEventListener("mouseover", () => {
    // Get the container's width and height
    const zoneWidth = hoverZone.offsetWidth; // Width of the container.
    const zoneHeight = hoverZone.offsetHeight; // Height of the container.

    // Generate random new positions for the button
    const newLeft = Math.random() * (zoneWidth - button.offsetWidth); // Random left position within the container.
    const newTop = Math.random() * (zoneHeight - button.offsetHeight); // Random top position within the container.

    // Apply the new positions to the button
    button.style.left = `${newLeft}px`; // Sets the new left position.
    button.style.top = `${newTop}px`; // Sets the new top position.
});
