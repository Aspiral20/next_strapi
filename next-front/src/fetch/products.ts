import axiosInstance, { endpoints } from "@/lib/axios";

export const getProducts = async () => {
  const url = endpoints.products.self;
  const res = await axiosInstance.get(url)
  return res.data
}

export const getProduct = async (id: number) => {
  const url = endpoints.products["[id]"](id);
  const res = await axiosInstance.get(url)
  return res.data
}