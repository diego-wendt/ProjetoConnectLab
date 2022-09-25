import { useEffect, useState } from "react";
import { GetListAllDevices } from "../../service";
import {toast} from 'react-toastify'
import {
  InputContainer,
  TextTitle,
  DeviceCard,
  ListDeviceCards,
} from "./../../components";
import {
  StyledDevices,
  StyledLineSearch,
  StyledSearchLabel,
} from "./StyledDevices";

export const Devices = (dasdsadas) => {
   const [campoFiltro, setCampoFiltro] = useState("");
  const [listDevices, setListDevices] = useState([]);


  useEffect(() => {
    loadListDevices();
  }, []);

  const loadListDevices = async () => {
    try {
      const { data: Devices } = await GetListAllDevices();
      setListDevices(Devices);
    } catch (error) {
      toast.error("Erro ao buscar dispositivos.")
    }
  };

  const FilteredDevices = campoFiltro
    ? listDevices.filter((dev) =>
        dev.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(campoFiltro.toLowerCase()),
      )
    : listDevices;

  return listDevices ? (
    <StyledDevices>
      <TextTitle>Dispositivos</TextTitle>
      <InputContainer>
        <StyledLineSearch>
          <StyledSearchLabel
            type={"filtrar"}
            id={"filtrar"}
            placeholder={"Buscar pelo nome do dispositivo"}
            value={campoFiltro}
            onChange={(e) => setCampoFiltro(e.target.value)}
          />
        </StyledLineSearch>
      </InputContainer>

      {FilteredDevices && (
        <ListDeviceCards>
          {FilteredDevices.map((item, key) => (
            <DeviceCard key={key} item={item}></DeviceCard>
          ))}
        </ListDeviceCards>
      )}
    </StyledDevices>
  ) : (
    <TextTitle>...CARREGANDO DADOS...</TextTitle>
  );
};
