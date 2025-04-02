import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCreateSubmit = async (data: any) => {
    try {
      await axios
        .post(
          "https://full-stack-app.com/laravel_auth_jwt_api/public/api/event-create",
          data
        )
        .then((res) => {
          console.log(res);
          navigate("/meetings");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Blogs post create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Blogs</a>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                    <form onSubmit={handleSubmit(handleCreateSubmit)}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Title</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter title"
                              {...register("title", { required: true })}
                            />
                            {errors.title && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Detail</label>
                            <textarea
                              className="form-control"
                              {...register("detail", { required: true })}
                              placeholder="Enter content"
                            ></textarea>
                            {errors.detail && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">User</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter author"
                              {...register("user", { required: true })}
                            />
                            {errors.user && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Start</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter author"
                              {...register("start", { required: true })}
                            />
                            {errors.start && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">End</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter author"
                              {...register("end", { required: true })}
                            />
                            {errors.end && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="float-right">
                            <button type="submit" className="btn btn-primary">
                              <i className="fas fa-check-circle"></i> Submit
                            </button>{" "}
                            <button
                              type="button"
                              onClick={() => navigate("/blogs")}
                              className="btn btn-danger"
                            >
                              <i className="fas fa-times-circle mr-1"></i>
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default Create;
