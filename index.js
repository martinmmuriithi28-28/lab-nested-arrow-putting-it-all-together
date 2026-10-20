
// Login Tracker Lab

// Outer function
function createLoginTracker(userInfo) {

    // Variable to keep track of login attempts
    let attemptCount = 0;

    // Nested arrow function
    const loginAttempt = (passwordAttempt) => {

        // Increment the login attempt count
        attemptCount++;

        // Lock the account after more than 3 attempts
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }

        // Check if the password is correct
        if (passwordAttempt === userInfo.password) {
            return "Login successful";
        }

        // Password is incorrect
        return `Login attempt ${attemptCount}: Login failed`;
    };

    // Return the nested arrow function
    return loginAttempt;
}


// Testing


// User information
const user = {
    username: "user1",
    password: "password123"
};

// Create the login tracker
const login = createLoginTracker(user);

// Test Cases
console.log(login("wrongPassword"));
console.log(login("123456"));
console.log(login("hello"));
console.log(login("password123"));
console.log(login("password123"));



module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};