import React, { useState, useEffect } from 'react'



const DataTable = () => {

  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  //setPage to 1, when page changes
  useEffect(() => {
    setPage(1)
  }, [pageSize])


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

   //search-filter

  const filtered = products.filter((product) => 
  product.title.toLowerCase().includes(search.toLowerCase())
  )

  const PageSize = pageSize;
  // const totalProducts = products.length;
  const totalProducts = filtered.length;
  const noOfPages = Math.ceil(totalProducts / PageSize);
  const startIdx = (page - 1) * pageSize;
  const lastIdx = page * pageSize;

  const selectPageHandler = (i) => {
    setPage(i)
  }
  
  return (
    <div>

      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody  className='table-body'>
          {filtered.slice(startIdx, lastIdx).map((d) => (
            <tr key={d.id} className='row'>
            <td>{d.id}</td>
            <td>{d.title}</td>
            <td>{d.category}</td>
          </tr>
          ))}
        </tbody>
        <thead>
          <tr></tr>
        </thead>
      </table>
      
      <div className="pagination-container">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "page-disabled"}>Prev</span>
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

    {/* selected page of page */}
    <div><h1>page {page} of {noOfPages}</h1></div>
    {/* filter rows by size */}
   <div>
        <label>Rows per page:</label>
        <select value={pageSize} onChange={(e) => setPageSize((e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
     </div>
    </div>
  )
}

export default DataTable;
