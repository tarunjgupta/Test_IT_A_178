const users = [
    { username: "mojombo", followers: 2000 },
    { username: "defunkt", followers: 1500 },
    { username: "pjhyett", followers: 1200 },
    { username: "wycats", followers: 900 },
    { username: "ezmobius", followers: 600 },
    { username: "ivey", followers: 400 },
    { username: "evanphx", followers: 350 },
    { username: "vanpelt", followers: 250 },
    { username: "wayneeseguin", followers: 150 },
    { username: "brynary", followers: 100 }
];

// Elements
const loginSection = document.getElementById("login-section");
const dashboardSection = document.getElementById("dashboard-section");
const userList = document.getElementById("user-list");
const logoutButton = document.getElementById("logout-button");
const sortDropdown = document.getElementById("sort-users");

// Login functionality
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Simulate authentication (for this example, we are assuming it's always successful)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        loginSection.style.display = "none";
        dashboardSection.style.display = "block";

        // Populate the user list
        populateUserList(users);
    }
});

// Populate the user list with GitHub users
function populateUserList(usersArray) {
    userList.innerHTML = ''; // Clear existing list

    usersArray.forEach(user => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${user.username}</span>
            <span>Followers: ${user.followers}</span>
        `;
        userList.appendChild(li);
    });
}

// Sort users based on selection
sortDropdown.addEventListener("change", function() {
    const selectedOption = sortDropdown.value;
    let sortedUsers;

    if (selectedOption === "name") {
        sortedUsers = [...users].sort((a, b) => a.username.localeCompare(b.username));
    } else if (selectedOption === "followers") {
        sortedUsers = [...users].sort((a, b) => b.followers - a.followers);
    } else {
        sortedUsers = users;
    }

    populateUserList(sortedUsers);
});

// Logout functionality
logoutButton.addEventListener("click", function() {
    loginSection.style.display = "block";
    dashboardSection.style.display = "none";
});