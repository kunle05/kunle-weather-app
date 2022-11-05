export interface WeatherCode {
  [key: number]: string;
}

export const weathercode: WeatherCode = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Dense drizzle',
  56: 'Light freezing',
  57: 'Freezing drizzle',
  61: 'Slight rain',
  63: 'Rain',
  65: 'Heavy rain',
  66: 'Freezing rain',
  67: 'Heavy freezing rain',
  71: 'Slight snow',
  73: 'Snow,',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Light rain',
  81: 'Rain shower',
  82: 'Heavy rain',
  85: 'Slight snow',
  86: 'Heavy snow',
  95: 'Thunderstorm',
  96: 'Thunderstorm with rain',
  99: 'Thunderstorm with heavy rain',
};
