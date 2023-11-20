import { useState, useEffect } from "react";
import { buscar } from "../datos";

export const useVideos = () => {
    const [data, setData] = useState({ "categorias":[] });
    const [tieneVideos, setTieneVideos] = useState(false)
  
    useEffect(() => {
     buscar(`/db`, setData)
  }, [])
  
  useEffect(() => {
    data.videos ? setTieneVideos(true) : setTieneVideos(false)
  }, [data]);

  return {
    data,
    tieneVideos
  }
}