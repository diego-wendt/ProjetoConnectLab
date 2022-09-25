import { useEffect, useState } from "react";
import { GetDevicesUser } from "../../service/device.service";
import { toast } from "react-toastify";
import {
  CategoryButton,
  CategoryList,
  ListSmallCards,
  SmallCard,
  TextTitle,
  WeatherInfo,
} from "./../../components";


export const Home = () => {
  const [devices, setDevices] = useState([]);
  const [locals, setLocals] = useState([]);

  useEffect(() => {
    loadDevices();
  }, []);

  const loadDevices = async () => {
    try {
      const data = await GetDevicesUser();
      const userDevices = data.data;
      setDevices(userDevices);
    } catch (error) {
      toast.error("Erro ao buscar dispositivos.");
    }
  };

  const categories = Array.from(
    new Set(devices.map((dev) => dev.local.description)),
  );

  const handleSelecionarLocal = (local) => {
    // TODO FILTRAR LOCAL
  };

  return (
    <>
      <WeatherInfo></WeatherInfo>

      {categories ? (
        <CategoryList>
          {categories.length > 1 ? <CategoryButton>Todos </CategoryButton> : ""}
          {categories.map((item, key) => (
            <CategoryButton
              key={key}
              local={item}
              onSelecionar={handleSelecionarLocal}
            >
              {item}
            </CategoryButton>
          ))}
        </CategoryList>
      ):<TextTitle>...CARREGANDO DADOS...</TextTitle>}

      {devices ? (
        <ListSmallCards>
          {devices.map((item, key) => (
            <SmallCard key={key} item={item}></SmallCard>
          ))}
        </ListSmallCards>
      ) : (
        <TextTitle>...CARREGANDO DADOS...</TextTitle>
      )}
    </>
  );
};
