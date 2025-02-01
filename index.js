async function fetchRandomUserData() {
    try{
        const response = await fetch('https://randomuser.me/api/');

        if(!response.ok) {
            throw new Error(`HTTP error Statues: ${response.status}`);
        }

        const data = await response.json();

    }
}