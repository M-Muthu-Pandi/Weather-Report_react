import { useState } from "react";
import axios from "axios";
import Input from "./weatherInput";
import Report from "./weatherReport";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");

    const handleCity = (e) => {
        setCity(e.target.value);
    }

    const getWeather = () => {
        const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=476d02702accb1070d65a5829a04de8c`)
        weatherData.then((success) => {
            console.log(success.data);
            setWeather(success.data.weather[0].main);
            setTemp(success.data.main.temp);
            setDesc(success.data.weather[0].description);

        }).catch(()=>{
            console.log("Wrong input");
            setWeather("Error");
            setTemp("Error");
            setDesc("Error");
        })
    }

    return (
        <div className=" text-white bg-[#070a0d] py-5 px-2 sm:px-5 lg:px-10 xl:px-14 h-screen flex justify-center items-center">
            <main className="bg-[#2b2d42] px-5 sm:px-7 py-10 rounded-md md:flex gap-5 w-screen  min-h-[65%]">
                <Input city={city} handleCity={handleCity} getWeather={getWeather} />
                <Report weather={weather} temp={temp} desc={desc} />
            </main>

        </div>
    );
}

export default Weather;
