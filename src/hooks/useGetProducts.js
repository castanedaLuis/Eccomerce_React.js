import { useEffect, useState } from 'react';

const useGetProducts = (API) => {
  
  const [products, setProducts] = useState([]);

  async function getData() {
    const response = await fetch(API)
    const data = await response.json()
    setProducts(data);
  }

  useEffect(() => {
    getData()
  }, [])
  return products
}

export default useGetProducts