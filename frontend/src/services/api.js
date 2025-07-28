import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

// API Base URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// React Query Client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  
  // Code Execution
  RUN_CODE: '/run',
  
  // Snippets
  GET_SNIPPETS: '/snippets',
  GET_SNIPPET: (id) => `/snippets/${id}`,
  CREATE_SNIPPET: '/snippets',
  UPDATE_SNIPPET: (id) => `/snippets/${id}`,
  DELETE_SNIPPET: (id) => `/snippets/${id}`,
  
  // Health
  HEALTH: '/health',
};

// API Functions
export const authAPI = {
  login: async (credentials) => {
    const response = await apiClient.post(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
  },
  
  register: async (userData) => {
    const response = await apiClient.post(API_ENDPOINTS.REGISTER, userData);
    return response.data;
  },
};

export const codeExecutionAPI = {
  runCode: async (codeData) => {
    const response = await apiClient.post(API_ENDPOINTS.RUN_CODE, codeData);
    return response.data;
  },
};

export const snippetsAPI = {
  getSnippets: async () => {
    const response = await apiClient.get(API_ENDPOINTS.GET_SNIPPETS);
    return response.data;
  },
  
  getSnippet: async (id) => {
    const response = await apiClient.get(API_ENDPOINTS.GET_SNIPPET(id));
    return response.data;
  },
  
  createSnippet: async (snippetData) => {
    const response = await apiClient.post(API_ENDPOINTS.CREATE_SNIPPET, snippetData);
    return response.data;
  },
  
  updateSnippet: async (id, snippetData) => {
    const response = await apiClient.put(API_ENDPOINTS.UPDATE_SNIPPET(id), snippetData);
    return response.data;
  },
  
  deleteSnippet: async (id) => {
    const response = await apiClient.delete(API_ENDPOINTS.DELETE_SNIPPET(id));
    return response.data;
  },
};

export const healthAPI = {
  checkHealth: async () => {
    const response = await apiClient.get(API_ENDPOINTS.HEALTH);
    return response.data;
  },
}; 