class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    const result = await fetch(url)

    if (result.status == 200) {
        const info = result.json();
        return info;
    } else {
        throw new HttpError(result);
    }
}

async function demoGithubUser() {
    let name = prompt("Enter a name?", "Biggiegun");

    try {
        const user = await loadJson(`https://api.github.com/users/${name}`)
        alert(`Full name: ${user.name}.`);
        return user;
    } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    };
}

demoGithubUser();