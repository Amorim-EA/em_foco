//const url = "https://emfocoapi.onrender.com/api";
const url =  "http://localhost:3003/api"

const postFoco = async (foco) => {
  try{
    const responseOfAPI = await fetch(`${url}/focos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(foco),
    });
    const focoSave = await responseOfAPI.json();
    console.log(focoSave)
    return focoSave;
  } catch {
    return null;
  }
}

const getAllFoco = async () => {
  try{
    const responseOfAPI = await fetch(`${url}/focos`, {
      cache: "no-cache"
    });
    const focos = await responseOfAPI.json();
    return focos;
  } catch {
    return null;
  }
}

const getOneFoco = async (id) => {
  try {
      const responseOfApi = await fetch(`${url}/foco/${id}`, {
          method: 'GET',
          headers: { 'Content-Type': 'Application/json' },
      });
      const foco = await responseOfApi.json();
      return foco;
  } catch {
      return null;
  }
}

const updateFoco = async (id, foco,) =>{
  try{
      const responseOfApi = await fetch(`${url}/foco/${id}`, {
          method: 'PUT',
          headers: {"Content-Type": "Application/json"},
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

export { getAllFoco, getOneFoco, postFoco, updateFoco };

