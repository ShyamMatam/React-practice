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

  //selectedPage is just a page index(i + 1)(assume)
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= noOfPages &&
      selectedPage !== page
    ) 
    setPage(selectedPage); //just use this ignore above if block
  };

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PageSize);
  //in this currentpage * 10 -10 ; 10 which is pageSize
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
        {/* The current element (underscore(_) is a convention meaning "I don't need this value"). Each element is undefined since we only care about the index, not the value */}
        {/* [...Array(5)]  // [undefined, undefined, undefined, undefined, undefined] [_ = undefined ]*/}
        {/* we only need "i", so we ignore _ */}
        {/* {[...Array(noOfPages).keys()].map(i) => { this will also work */}
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


//namastedev

// const PAGE_SIZE = 10;

// const Pagination = () => {

//   const [products, setProducts] = useState([])
//   const [page, setPage] = useState(1)

//   const fetchdata = async () => {
//     try {
//       const res = await fetch("https://dummyjson.com/products?limit=200");
//       const data = await res.json();
//       setProducts(data?.products)
//       console.log(data)
//     } catch (error) {
//       console.log(error)
//     }

//   };

//   useEffect(() => {
//     fetchdata()
//   }, []);


//   const totalProducts = products.length;
//   const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
//   startIdx = page * 10 - 10;
//   lastIdx = page * 10;

//   //pgfn

//   const handlePageSelect = (i) => {
//   setPage(i)
//   }

//   //prev
//   const handlePagePrev = () => {
//     setPage((prev) => prev - 1)
//   };

//   //next

//   const handlePageNext = () => {
//     setPage((prev) => prev + 1)
//   }

//  return(
//     <div>
//      <h1>Pagination</h1>

//      <div>{products.slice(startIdx, lastIdx).map((p) => (
//        <div key={p.id}>
//          <img src={p.images} height={75}  />
//          <div>{p.title}</div>
//        </div>
       
//      ))}</div>

//      //pagination

//     <button disabled={page === 1} id="Previous" onClick ={() => handlePagePrev()}>Prev</button>

//      {[...Array(noOfPages).keys()].map(( i) => (
      
//          <span className={ page === i+1 ? "page-selected" : ""} key={i} onClick={() => handlePageSelect(i+1)}>{i + 1}</span>
      
//      ))}

//      <button disabled={page === noOfPages} id="Next" onClick={() => handlePageNext()}>Next</button>
//    </div>
      
//  )
// };
// export default Pagination;