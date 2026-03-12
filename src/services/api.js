import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getHomeData = () => api.get("/home");

export const getPosts = (page = 1) => api.get(`/posts?page=${page}&limit=6`);

export const getPostBySlug = (slug) => api.get(`/posts/slug/${slug}`);

export const getPostById = (id) => api.get(`/posts/${id}`);

export const getBanners = () => api.get("/banners");

export default api;
