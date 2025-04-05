const Home = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Home</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Home</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>10%</h3>
                    <p>CPU Traffic</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-cog"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    <span className="text-white">More info</span>{" "}
                    <i className="fas fa-arrow-circle-right text-white"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>41,410</h3>
                    <p>Blogs</p>
                  </div>
                  <div className="icon">
                    <i className="far fa-comment-alt"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    <span className="text-white">More info</span>{" "}
                    <i className="fas fa-arrow-circle-right text-white"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>760</h3>
                    <p>Sales</p>
                  </div>
                  <div className="icon">
                    <i className="fas fa-shopping-cart"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    <span className="text-white">More info</span>{" "}
                    <i className="fas fa-arrow-circle-right text-white"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
              <div className="small-box bg-info">
                  <div className="inner">
                    <h3>2,000</h3>
                    <p>New Members</p>
                  </div>
                  <div className="icon">
                  <i className="fas fa-users"></i>
                  </div>
                  <a href="#" className="small-box-footer">
                    <span className="text-white">More info</span>{" "}
                    <i className="fas fa-arrow-circle-right text-white"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
