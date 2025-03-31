import { useEffect } from "react";
import { Link } from 'react-router-dom'
import dayjs from "dayjs";
import { useBlogStore } from "../../stores/blogStrore";

const Blogs = () => {
  // Use The Zustand store
  const { blogs, isLoading, error, fetchBlogs } = useBlogStore();

  useEffect(() => {
    fetchBlogs()
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Blogs post list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Blogs</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="float-right">
                          <Link to={'/blogs/create'} className="btn btn-primary mb-2">
                            + Create blog
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {error && (
                      <div className="alert alert-danger">{error}</div>
                    )}
                    
                    {isLoading ? (
                      <div className="text-center my-3">
                        <div className="spinner-border text-primary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Author</th>
                            <th>Created at</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {blogs.map((blog, index) => (
                            <tr key={blog.id}>
                              <td>{index + 1}</td>
                              <td>
                                <img
                                  className="img-thumbnail"
                                  src={
                                    "https://full-stack-app.com/laravel_auth_jwt_api/public/uploads/" +
                                    blog.image
                                  }
                                  alt={blog.title}
                                  width={"50"}
                                />
                              </td>
                              <td>{blog.title}</td>
                              <td>{blog.content}</td>
                              <td>{blog.author}</td>
                              <td>
                                {dayjs(blog.created_at).format("DD-MMM-YYYY")}
                              </td>
                              <td>
                                <button className="btn btn-primary btn-sm">
                                  <i className="fas fa-eye"></i>
                                </button>{" "}
                                <button className="btn btn-info btn-sm">
                                  <i className="fas fa-edit"></i>
                                </button>{" "}
                                <button className="btn btn-danger btn-sm">
                                  <i className="fas fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
