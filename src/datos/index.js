import axios from "axios";

export const api = axios.create({
  baseURL: "https://daniflix-api.onrender.com"
});

export const buscar = async (url, setData) => {
  try {
    const respuesta = await api.get(url);
    setData(respuesta.data);
  } catch (error) {
    console.error("Error al realizar la solicitud GET:", error);
  }
};

export const enviarDatos = async (url, datos, onSuccess, onError) => {
  try {
    const respuesta = await api.post(url, datos);
    if (onSuccess) {
      onSuccess(respuesta.data);
    }
  } catch (error) {
    console.error("Error al realizar la solicitud POST:", error);
    if (onError) {
      onError(error);
    }
  }
};






