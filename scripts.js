async function fetchContributions() {
    const username = document.getElementById('username').value;
    const contributionsList = document.getElementById('contributions');
    contributionsList.innerHTML = '';

    try {
        const response = await fetch(`https://api.openstreetmap.org/api/0.6/changesets?user=${username}`);
        const xml = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xml, "text/xml");
        const changesets = xmlDoc.getElementsByTagName("changeset");
        
        const contributions = changesets.length;
        const listItem = document.createElement('li');
        listItem.textContent = `${username}: ${contributions} contributions`;
        contributionsList.appendChild(listItem);
    } catch (error) {
        console.error('Error fetching contributions:', error);
    }
}
