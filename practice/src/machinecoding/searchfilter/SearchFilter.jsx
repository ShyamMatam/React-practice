
// 🎯 Final Order to Tell Interviewer
// 1. Fetch API
// 2. Display UI using map
// 3. Add Search
// 4. Add Sort
// 5. Add Pagination
// 6. Reset pagination on search/sort
// 7. Style last



import React, { useEffect, useState } from "react";

export default function SearchSortPaginationAPI() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");  // asc | desc
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 5;

  // Fetch Users API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
            setUsers(data.products);
            setLoading(false);
            console.log(data);
      })
      .catch(() => {
            setError("Failed to load data");
            setLoading(false);
      });
  }, []);

  // Step 1: Filter users
  // const filtered = users.filter((user) =>
  //   user.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filtered = users.filter((user) => 
  user.title.toLowerCase().includes(search.toLowerCase())
  );

  // Step 2: Sort users
  // const sorted = [...filtered].sort((a, b) => {
  //   if (sortOrder === "asc") return a.name.localeCompare(b.name);
  //   else return b.name.localeCompare(a.name);
  // });

  const sorted = [...filtered].sort((a,b) => {
    if(sortOrder === "asc") return a.title.localeCompare(b.title);
    else return b.title.localeCompare(a.title);
  }
  )

  // Reset page to 1 when search or sort changes
  useEffect(() => {
    setPage(1);
  }, [search, sortOrder]);

  // Step 3: Pagination
  const totalPages = Math.ceil(sorted.length / pageSize);
  const start = (page - 1) * pageSize;
  const paginated = sorted.slice(start, start + pageSize);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={{ width: "350px", margin: "auto" }}>
      <h2>Product Search</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/* Sorting */}
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      >
        <option value="asc">Sort A → Z</option>
        <option value="desc">Sort Z → A</option>
      </select>

      {/* No results */}
      {sorted.length === 0 && <p>No users found</p>}

      {/* Users List */}
      <ul>
        {paginated.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <strong>{user.title}</strong> <br />
            {/* <small>{user.email}</small> */}
            <img src={user.thumbnail} alt={user.title}/>
          </li>
        ))}
      </ul>

      {/* Numbered Pagination */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        <span className={page <= 1 ? "prev-disable": "" } onClick={() => setPage(page -1)} >Prev</span>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            onClick={() => setPage(num)}
            style={{
              padding: "6px 10px",
              background: num === page ? "#333" : "#eee",
              color: num === page ? "white" : "black",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
            }}
          >
            {num}
          </button>
        ))}
        <span className={page < totalPages ? "" : "prev-disable"}  onClick={() => setPage(page + 1)}>Next</span>

      </div>
    </div>
  );
}
