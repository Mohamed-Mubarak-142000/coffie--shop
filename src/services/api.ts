import axios from 'axios';

const API_URL = 'http://localhost:3001';

export interface Coffee {
  id: number;
  name: string;
  nameEn: string;
  price: number;
  roast: string;
  type: string;
  size: string;
  description: string;
  descriptionEn: string;
  ingredients: string[];
  rating: number;
  image: string;
}

export interface Service {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  image: string;
}

export const fetchCoffees = async (): Promise<Coffee[]> => {
  const response = await axios.get(`${API_URL}/coffees`);
  return response.data;
};

export const fetchCoffeeById = async (id: string): Promise<Coffee> => {
  const response = await axios.get(`${API_URL}/coffees/${id}`);
  return response.data;
};

export const fetchServices = async (): Promise<Service[]> => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

export const searchCoffees = async (query: string): Promise<Coffee[]> => {
  const response = await axios.get(`${API_URL}/coffees?q=${query}`);
  return response.data;
};

export const filterCoffees = async (
  type?: string,
  roast?: string,
  minPrice?: number,
  maxPrice?: number
): Promise<Coffee[]> => {
  let url = `${API_URL}/coffees?`;
  
  if (type) url += `type=${type}&`;
  if (roast) url += `roast=${roast}&`;
  if (minPrice) url += `price_gte=${minPrice}&`;
  if (maxPrice) url += `price_lte=${maxPrice}&`;
  
  const response = await axios.get(url);
  return response.data;
};