import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api`;

// Quote APIs
export const createQuote = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/quotes`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating quote:', error);
    throw error;
  }
};

export const getQuotes = async (params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/quotes`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
};

export const getQuoteById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/quotes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching quote:', error);
    throw error;
  }
};

// Contact APIs
export const createContact = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/contacts`, data);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const getContacts = async (params = {}) => {
  try {
    const response = await axios.get(`${API_URL}/contacts`, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

export const getContactById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching contact:', error);
    throw error;
  }
};
