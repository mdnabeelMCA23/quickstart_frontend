import axios from "axios";

const API = axios.create({
  baseURL: "https://node-backend-hsdn.onrender.com"
});

// Helper to get token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Authenticated requests
export const getTasks = () => API.get("/api/tasks", { headers: getAuthHeaders() });
export const createTask = (data) => API.post("/api/tasks", data, { headers: getAuthHeaders() });
export const deleteTask = (id) => API.delete(`/api/tasks/${id}`, { headers: getAuthHeaders() });
export const updateTaskStatus = (id, status) =>
  API.patch(`/api/tasks/${id}/status`, { status }, { headers: getAuthHeaders() });
export const updateTask = (id, data) => API.put(`/api/tasks/${id}`, data, { headers: getAuthHeaders() });

// Auth endpoints
export const registerUser = (data) => API.post("/api/auth/register", data);
export const loginUser = (data) => API.post("/api/auth/login", data);
export const getAnalytics = (userId) => API.get(`/analytics/stats/${userId}`, { headers: getAuthHeaders() });

export default API;
