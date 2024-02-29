import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'http://localhost:1337/api' })

axiosInstance.interceptors.response.use(
  (res) => res,
  err => Promise.reject((err.response || err.response.data) || "Something went wrong!")
)

const endpoints = {
  self: '/',
  products: {
    self: '/products',
    '[id]': (id: string | number) => `/products/${id}`
  },
  categories: {
    self: '/categories',
    '[id]': (id: string | number) => `/categories/${id}`
  },
  subCategories: {
    self: '/sub_categories',
    '[id]': (id: string | number) => `/sub-categories/${id}`
  },
}

export {
  endpoints
}
export default axiosInstance