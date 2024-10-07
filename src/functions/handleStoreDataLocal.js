const storeData = async (title, value) => {
  try {
    await SecureStore.setItemAsync(title, value);
  } catch (error) {
    console.log("Erro ao salvar dados", error);
  }
}

export default storeData;
