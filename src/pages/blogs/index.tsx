import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";

type resultProps = {
  id: number;
  title: string;
  content: string;
  author: string;
  image: string;
  created_at: any;
  updated_at: any;
};

const Blogs = () => {
  const [blogs, setBlogs] = useState<resultProps[]>([]);

  const getData = async () => {
    await axios
      .get("https://full-stack-app.com/laravel_auth_jwt_api/public/api/blogs")
      .then((res) => {
        console.log(res.data.blogs);
        setBlogs(res.data.blogs);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Blogs list</h1>
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
                      {blogs.map((blog) => (
                        <tbody key={blog.id}>
                          <tr>
                            <td>{blog.id}</td>
                            <td>
                              <img
                                className="img-thumbnail"
                                src={
                                  "https://full-stack-app.com/laravel_auth_jwt_api/public/uploads/" +
                                  blog.image
                                }
                                alt={blog.title}
                                width={"100"}
                              />
                            </td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>{blog.author}</td>
                            <td>{dayjs(blog.created_at).format("DD-MMM-YYYY")}</td>
                            <td>
                                <button className="btn btn-primary"><i className="fas fa-eye"></i></button>{' '}
                                <button className="btn btn-info"><i className="fas fa-edit"></i></button>{' '}
                                <button className="btn btn-danger"><i className="fas fa-trash"></i></button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
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
