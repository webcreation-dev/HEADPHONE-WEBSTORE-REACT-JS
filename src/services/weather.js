import axiosInstance from './interceptor';
import { api } from './interceptor';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getWeather = async (city) => {
  try {

    const response = await axiosInstance.get(`weather?q=${city}&units=metric&appid=${api.key}`);

    await delay(2000); 

    return response.data;

  } catch (error) {

    // throw error;
    return null;
  }
  
};


