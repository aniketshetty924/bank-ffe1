import React, { useEffect, useState, useCallback } from 'react';
import "./login.css";
import { handleRequest } from '../../controller/handleController';
import Table from '../../shared-components/table/Table';
import { getAllUsers } from '../../service/user';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await getAllUsers(limit, page);
      if (response && response.data.users) {
        setUser(response.data.users);
        const totalCount = response.data.totalCount || 30;
        setTotalPages(Math.ceil(totalCount / limit));
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, [limit, page]);

  const handlePageChange = (directionOrPage) => {
    setPage((prev) => {
      if (directionOrPage === "next") {
        return prev >= totalPages ? 1 : prev + 1;
      } else if (directionOrPage === "prev") {
        return prev <= 1 ? totalPages : prev - 1;
      } else {
        return directionOrPage;
      }
    });
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div>
      <form onSubmit={(e) => handleRequest(e, userName, password)}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <button onClick={fetchUsers} className="btn btn-info">Get Users</button>

      {user.length > 0 && (
        <Table
          data={user}
          setLimit={setLimit}
          handlePageChange={handlePageChange}
          currentPage={page}
          totalPages={totalPages}
          limit={limit}
        />
      )}
    </div>
  );
};

export default Login;
