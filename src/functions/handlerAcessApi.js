const url = "http://localhost:3003/api";

const getUserAuthenticated = async (user) => {
  try{
    const responseOfAPI = await fetch(`${url}/user/auth`, {
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
    const responseOfAPI = await fetch(`${url}/user`, {
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
    const responseOfAPI = await fetch(`${url}/user/request`, {
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
    const responseOfAPI = await fetch(`${url}/user/request`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email),
    });
    const userCreated = await responseOfAPI.json();
    return userCreated;
  } catch {
    return null;
  }
}

export { getUserAuthenticated, getUsersSolicitado, postUser, userToAgent };

