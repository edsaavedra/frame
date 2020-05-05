const API_KEY = "zQvZFs_IjmQOmWZ7d2gYSfaWTGFXXdgihPLUWhrm6ug";
// const SECRET_KEY = "O5KVNlfJ7PzcoeKj0BDzJNqAQjsiphzEmBMamzToDrQ";
const BASE_URL = "https://api.unsplash.com/";

export default async (page = 1) => {
    const URL = `${BASE_URL}photos/?page=${page}&per_page=5&client_id=${API_KEY}`
    const response =  await fetch(URL);
    if (response.status >= 400) throw new Error(response.errors);
    return await response.json();
}
