import React, { useEffect } from "react";
import { useState } from "react";

const PageSize = 10;
const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      // use the correct products endpoint
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      // API returns { products: [...] } — store the array in state
      setProducts(data.products ?? data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //selectedPage(i) is just a page index(i + 1)(assume)
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= noOfPages &&
      selectedPage !== page
    ) 
    setPage(selectedPage);
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PageSize);
  //in this currentpage * 10 -10 and we directly can take startIdx =0;
  const startIdx = page * 10 - 10;
  // currentpage-10 , we are take 10 direactly
  const lastIdx = page * 10;

  return (
    <div>
      <div className="product-container">
        {products.slice(startIdx, lastIdx).map((p) => {
          return (
            <div key={p.id} className="product-card">
              <img src={p.thumbnail} alt={p.title} className="product-image" />
              <span className="product-title">{p.title}</span>
            </div>
          );
        })}
      </div>

      <div className="pagination-container">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "page-disabled"}>Prev</span>
        {/* in this we are using spread operator and "i" is the page index (i+ 1) because page number should from 1 not "0"  */}
        {[...Array(noOfPages)].map((_, i) => {
          return (
            <span
              key={i}
              className={page === i + 1 ? "paginated_selected" : ""}
              onClick={() => selectPageHandler(i + 1)}
            >
              {" "}
              {/* (i+1) is the index   */}
              {i + 1}
            </span>
          );
        })}
        <span onClick={() => selectPageHandler(page + 1)} className={page < noOfPages ? "" : "page-disabled"}>Next</span>
      </div>
    </div>
  );
};

export default Pagination;
