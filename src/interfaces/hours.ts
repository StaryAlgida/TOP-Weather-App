interface Hours {
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
