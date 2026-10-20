// Outer function
function createLoginTracker(userInfo) {

    // Track the number of login attempts
    let attemptCount = 0;

    // Inner arrow function to handle login attempts
    const loginAttempt = (passwordAttempt) => {

        // Increase attempt count every time the function is called
        attemptCount++;

        // Check if account has exceeded allowed attempts
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check if password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Lock account after the third failed attempt
        if (attemptCount === 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Return failed attempt message
        return `Attempt ${attemptCount}: Login failed`;
    };

    // Return the nested arrow function
    return loginAttempt;
}


// Export function for Jest tests
module.exports = createLoginTracker;

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};