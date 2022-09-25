import {
  StyledLineBlock,
  StyledTempBlock,
  StyledTemperatureText,
  StyledWeatherInfo,
} from "./StyledWeatherInfo";
import PropTypes from "prop-types";
import { Paper, TextoSubTitle, TextoDesc, TextTitle } from "../../components";
import axios from "axios";
import { useState, useEffect } from "react";
import { GetCidade, GetEstado } from "../../service/auth.service";

// eslint-disable-next-line react/prop-types
export const WeatherInfo = () => {
  const [data, setData] = useState();
  const cidade = GetCidade();
  const estado = GetEstado();

  const OPEN_WEATHER_KEY = "75bfb1360a9d9d1d0dc5443835439680";
  const URL_WEATHER = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},br&appid=${OPEN_WEATHER_KEY}&units=metric`;

  const getWeather = async () => {
    const dataWeather = await axios.get(URL_WEATHER);
    setData(dataWeather.data.list[0]);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const icon = `http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`;
  const temperatura = Math.round(data?.main.temp);
  const sensacao = Math.round(data?.main.feels_like);
  const precipitacao = Math.round(data?.rain ? data?.rain["3h"] : 0);
  const probabilidade = (data?.pop ? data?.pop : 0) * 100;

  return data ? (
    <Paper>
      <StyledWeatherInfo>
        <StyledTempBlock>
          <img src={icon} alt="Imagem Clima" width="100px" />
          <StyledTemperatureText>{temperatura}° Celsius</StyledTemperatureText>
        </StyledTempBlock>
        <TextoSubTitle fontSize={"35px"}>
          {cidade} - {estado}
        </TextoSubTitle>
        <StyledLineBlock>
          <TextoDesc fontSize={"20px"}>
            Sensação térmica: {sensacao} °C
          </TextoDesc>
          <TextoDesc fontSize={"20px"}>
            Precipitação: {precipitacao} mm
          </TextoDesc>
          <TextoDesc fontSize={"20px"}>
            Chance de chuva: {probabilidade} %
          </TextoDesc>
        </StyledLineBlock>
      </StyledWeatherInfo>
    </Paper>
  ) : (
    <TextTitle>... CARREGANDO DADOS ...</TextTitle>
  );
};

WeatherInfo.propTypes = {
  children: PropTypes.node,
};
