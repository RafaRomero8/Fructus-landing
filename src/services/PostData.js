import React, { useState, useEffect } from "react";
import Axios from "axios";

function PostData() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://qzqymzh90a.execute-api.us-east-1.amazonaws.com/Stage/countries/Mexico/cities?page=1"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <select className="cityselector col-lg-12" name="products">
        {
          products.map(elemento =>(
            <option key={elemento.id} value={elemento.id}>{elemento.items}</option>
          ))
        }

      </select>
    </div>
  );
}

export default PostData;