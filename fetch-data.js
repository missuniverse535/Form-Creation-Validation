// 1. Initialize the Async Function
async function fetchUserData() {
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // 4. Fetch Data Using try-catch
    try {
        // Clear any existing error classes
        dataContainer.className = '';
        
        // Fetch data from API
        const response = await fetch(apiUrl);
        
        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        // Convert response to JSON
        const users = await response.json();
        
        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // 6. Create and Append User List
        const userList = document.createElement('ul');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        
        dataContainer.appendChild(userList);
        
    } catch (error) {
        // 7. Error Handling
        console.error('Error fetching user data:', error);
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
        dataContainer.className = 'error';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
});
