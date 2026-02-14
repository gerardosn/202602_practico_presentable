/**
 * Desafío Práctico: Landing Page Manager
 * Handles the real-time clock synchronization with the client DOM.
 */

document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');
    
    /**
     * Updates the clock element with the current local time.
     */
    function updateClock() {
        const now = new Date();
        
        // Format the time as HH:MM:SS with leading zeros
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Update the DOM
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }

    // Initialize the clock immediately
    updateClock();

    // Update the clock every second for a premium dynamic experience
    setInterval(updateClock, 1000);

    // Subtle interaction: Add a small scale effect to the clock on each second tick
    // (Optional micro-animation handled via JS or CSS transitions)
});
