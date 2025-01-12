function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "info1", url: "https://google.com" }) // If you use reject instead it will throw the error at catch
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log(`fetching user data...`);
        const userData = await fetchUserData();
        console.log("User data fetched successfully");
        
        console.log(`User data:`, userData);              
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

getUserData();
