import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const sendMessage = async (message: string) => {
  try {
    const response = await api.post('/api/chat', { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const cloneVoice = async (audioData: Blob) => {
  try {
    const formData = new FormData();
    formData.append('audio', audioData);
    
    const response = await api.post('/api/voice-clone', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error cloning voice:', error);
    throw error;
  }
};

export const generateAvatar = async (userId: string) => {
  try {
    const response = await api.post('/api/generate-avatar', { userId });
    return response.data;
  } catch (error) {
    console.error('Error generating avatar:', error);
    throw error;
  }
};