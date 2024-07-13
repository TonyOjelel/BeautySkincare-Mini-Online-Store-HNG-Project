// utils/api.js
const API_BASE_URL = 'https://api.timbu.cloud';
const API_KEY = process.env.NEXT_PUBLIC_TIMBU_API_KEY;
const APP_ID = process.env.NEXT_PUBLIC_TIMBU_APP_ID;
const ORGANIZATION_ID = "52cc7d6d1feb4807a24fe93fdf46c661"
console.log(APP_ID);

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_KEY}`,
};


export const fetchProducts = async () => {
  const res = await fetch(`${API_BASE_URL}/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&Appid=${APP_ID}&Apikey=${API_KEY}`, { headers,  mode: 'no-cors', });
  // https://api.timbu.cloud/products?organization_id=${ORGANIZATION_ID}&reverse_sort=false&page=1&size=10&Appid=${APP_ID}&Apikey=${APP_ID}
  console.log(res);
  const data = await res.json();
  return data;
};

export const fetchProductById = async (id) => {
    console.log('>>>>');
  const res = await fetch(`${API_BASE_URL}/products/${id}`, { headers });
  console.log(res, '>>>>>>');
  const data = await res.json();c
  return data;
};
