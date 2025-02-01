async function fetchRandomUserData() {
    try{
        const response = await fetch('https://randomuser.me/api/');

        if(!response.ok) {
            throw new Error(`HTTP error Statues: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;

        return { name, email };
    } catch(error) {
        console.error('Error fetching user data:', error);
    }

    async function displayUserData(){
        const display= fetchRandomUserData();
        console.log(`name:${display.name}
                Email:${display.email}`
        );

    }
    displayUserData()
}