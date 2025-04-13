const url = "http://192.168.15.103:3003/api";

//https://api-emfoco.onrender.com/api

const postFoco = async (foco, token) => {
  try {
      const responseOfAPI = await fetch(`${url}/focos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: foco,
    });

    const focoSave = await responseOfAPI.json();
    console.log(focoSave);
    return focoSave;
  } catch (error) {
    console.error('Erro ao postar foco:', error);
    return null;
  }
};

const getAllFoco = async (token) => {
  try{
    const responseOfAPI = await fetch(`${url}/focos`, {
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const focos = await responseOfAPI.json();
    return focos;
  } catch {
    return null;
  }
}

const getFocosEncontrados = async (token) => {
  try{
    const responseOfAPI = await fetch(`${url}/focosCad`, {
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    const FocosEncontrados = await responseOfAPI.json();
    return FocosEncontrados;
  } catch {
    return null;
  }
}

const getOneFoco = async (id, token) => {
  try {
      const responseOfApi = await fetch(`${url}/focos/${id}`, {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
      });
      const foco = await responseOfApi.json();
      return foco;
  } catch {
      return null;
  }
}

const updateFoco = async (id, foco, token) =>{
  try{
      const responseOfApi = await fetch(`${url}/focos/${id}`, {
          method: 'PUT',
          headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(foco)
      });
      const focoUpdate = await responseOfApi.json();
      console.log(focoUpdate)
      return focoUpdate;
  }
  catch{
      return null;
  }
}

export { getAllFoco, getFocosEncontrados, getOneFoco, postFoco, updateFoco };

