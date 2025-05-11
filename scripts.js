document.addEventListener("DOMContentLoaded", async () => {
    const content = document.getElementById('content');

    try {
        const response = await fetch('https://api.github.com/repos/your-github-repo-name');
        const data = await response.json();

        content.innerHTML = `
            <h2>Repository Info:</h2>
            <p>Name: ${data.name}</p>
            <p>Description: ${data.description}</p>
            <p>Stars: ${data.stargazers_count}</p>
            <p>Forks: ${data.forks_count}</p>
        `;
    } catch (error) {
        content.innerHTML = `<p>Failed to load data: ${error.message}</p>`;
    }
});
