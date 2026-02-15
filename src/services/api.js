import axios from "axios";

// For normal backend routes (/api)
const API = axios.create({
  baseURL: "https://node-backend-hsdn.onrender.com/api"
});

// For analytics route (NO /api)
const ANALYTICS_API = axios.create({
  baseURL: "https://python-backend-dnwl.onrender.com/"
});

// Helper to get token
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// ---------------- TASKS ----------------
export const getTasks = () =>
  API.get("/tasks", { headers: getAuthHeaders() });

export const createTask = (data) =>
  API.post("/tasks", data, { headers: getAuthHeaders() });

export const deleteTask = (id) =>
  API.delete(`/tasks/${id}`, { headers: getAuthHeaders() });

export const updateTaskStatus = (id, status) =>
  API.patch(`/tasks/${id}/status`, { status }, { headers: getAuthHeaders() });

export const updateTask = (id, data) =>
  API.put(`/tasks/${id}`, data, { headers: getAuthHeaders() });

// ---------------- AUTH ----------------
export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

// ---------------- ANALYTICS (IMPORTANT) ----------------
export const getAnalytics = (userId) =>
  ANALYTICS_API.get(`/analytics/stats/${userId}`, {
    headers: getAuthHeaders()
  });

export default API;
