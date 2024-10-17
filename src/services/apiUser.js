//const url = "https://emfocoapi.onrender.com/api";
const url =  "http://192.168.15.84:3003/api"

const getUserAuthenticated = async (user) => {
  try{
    const responseOfAPI = await fetch(`${url}/users/auth`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    let userAuthenticated = await responseOfAPI.json();
    return userAuthenticated;
  } catch {
    return null;
  }
}

const postUser = async (user) => {
  try{
    const responseOfAPI = await fetch(`${url}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const userCreated = await responseOfAPI.json();
    return userCreated;
  } catch {
    return null;
  }
}

const getUsersSolicitado = async () => {
  try{
    const responseOfAPI = await fetch(`${url}/users/request`, {
      cache: "no-cache"
    });
    const users = await responseOfAPI.json();
    return users.users;
  } catch {
    return null;
  }
}

const userToAgent = async (email) => {
  try{
    const userEmail = { email: email }
    const responseOfAPI = await fetch(`${url}/users/request`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userEmail),
    });
    await responseOfAPI.json();
  } catch {
    return null;
  }
}

export { getUserAuthenticated, getUsersSolicitado, postUser, userToAgent };

