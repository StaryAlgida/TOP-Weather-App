interface Forecast {
  forecastday: [
    {
      date: string;
      day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        maxwind_mph: number;
        maxwind_kph: number;
        avgvis_km: number;
        avgvis_miles: number;
        daily_chance_of_rain: number;
        daily_chance_of_snow: number;
        condition: {
          text: string;
          icon: string;
        };
        uv: number;
      };
      astro: {
        sunrise: string;
        sunset: string;
        moonrise: string;
        moonset: string;
        moon_phase: string;
        moon_illumination: string;
      };
      hour: [
        {
          time: string;
          temp_c: number;
          temp_f: number;
          condition: {
            text: string;
            icon: string;
          };
          wind_mph: number;
          wind_kph: number;
          wind_dir: string;
          pressure_mb: number;
          pressure_in: number;
          chance_of_rain: number;
          chance_of_snow: number;
        }
      ];
    }
  ];
}

export default Forecast;
