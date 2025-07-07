import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Hook untuk single request
export const useAxios = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios({
        url,
        method: options.method || 'GET',
        data: options.data,
        headers: options.headers,
        params: options.params,
        ...options
      });
      
      setData(response.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [fetchData]);

  const refetch = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch };
};

// Hook untuk multiple HTTP methods
export const useApi = (baseURL = '') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Setup axios instance
  const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  // Request interceptor untuk menambahkan token jika ada
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Sesuaikan dengan storage Anda
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response interceptor untuk handle error global
  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        // Handle unauthorized - redirect to login
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

  const request = useCallback(async (config) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api(config);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Terjadi kesalahan';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [api]);

  // GET request
  const get = useCallback((url, params = {}) => {
    return request({
      method: 'GET',
      url,
      params
    });
  }, [request]);

  // POST request
  const post = useCallback((url, data = {}) => {
    return request({
      method: 'POST',
      url,
      data
    });
  }, [request]);

  // PUT request
  const put = useCallback((url, data = {}) => {
    return request({
      method: 'PUT',
      url,
      data
    });
  }, [request]);

  // DELETE request
  const del = useCallback((url) => {
    return request({
      method: 'DELETE',
      url
    });
  }, [request]);

  // PATCH request
  const patch = useCallback((url, data = {}) => {
    return request({
      method: 'PATCH',
      url,
      data
    });
  }, [request]);

  return {
    loading,
    error,
    get,
    post,
    put,
    delete: del,
    patch,
    request
  };
};

// Hook untuk fetch data dengan dependency array
export const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(url);
        
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.response?.data?.message || err.message || 'Terjadi kesalahan');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (url) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [url, ...dependencies]);

  return { data, loading, error };
};

// Hook untuk mutation (POST, PUT, DELETE)
export const useMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const mutate = useCallback(async (config) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios(config);
      setData(response.data);
      
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || 'Terjadi kesalahan';
      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    mutate,
    loading,
    error,
    data,
    reset
  };
};