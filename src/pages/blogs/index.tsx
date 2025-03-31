import { useState, useEffect } from "react";
// import { Link } from 'react-router-dom'
import dayjs from "dayjs";
import { useBlogStore } from "../../stores/blogStrore";
import { DataTable } from "mantine-datatable";

const PAGE_SIZES = [10, 20, 30];

const Blogs = () => {
  // Use The Zustand store
  const { blogs, fetchBlogs } = useBlogStore();

  const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [records, setRecords] = useState(blogs.slice(0, pageSize));

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const getData = async () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setRecords(blogs.slice(from, to));
      setLoading(false);
    };
    getData();
  }, [page, pageSize, blogs]); // Add dependencies for page, pageSize, and blogs

  useEffect(() => {
    fetchBlogs();
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
                    <DataTable
                      style={{
                        fontFamily: "Prompt",
                      }}
                      withBorder
                      withColumnBorders
                      verticalSpacing="md"
                      fontSize={"md"}
                      records={records}
                      fetching={loading}
                      idAccessor="id"
                      minHeight={200}
                      totalRecords={blogs.length}
                      recordsPerPage={pageSize}
                      page={page}
                      onPageChange={(p) => setPage(p)}
                      recordsPerPageOptions={PAGE_SIZES}
                      onRecordsPerPageChange={setPageSize}
                      paginationColor="gray"
                      paginationSize="md"
                      columns={[
                        {
                          accessor: "index",
                          title: "#",
                          textAlignment: "center",
                          width: 80,
                          render: (record) => records.indexOf(record) + 1,
                        },
                        {
                          accessor: "title",
                          title: "ชื่อเรื่อง",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "content",
                          title: "รายละเอียด",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "author",
                          title: "ผู้แต่ง",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "image",
                          title: "รูปภาพ",
                          textAlignment: "center",
                          render: ({image}) => (
                            <>
                              <img src={ "https://full-stack-app.com/laravel_auth_jwt_api/public/uploads/" + image} alt="" width={'100'} />
                            </>
                          )
                        },
                        {
                          accessor: "created_at",
                          title: "วันที่สร้าง",
                          titleStyle: { textAlign: "center" },
                          render: ({ created_at }) =>
                            dayjs(created_at).format("DD-MMM-YYYY"),
                        },
                        {
                          accessor: "updated_at",
                          title: "วันที่แก้ไข",
                          titleStyle: { textAlign: "center" },
                          render: ({ updated_at }) =>
                            dayjs(updated_at).format("DD-MMM-YYYY"),
                        },
                        {
                          accessor: "actions",
                          title: "ดำเนินการ",
                          textAlignment: "center",
                          render: () => (
                            <>
                              <button className="btn btn-primary btn-sm">
                                <i className="fas fa-eye"></i>
                              </button>{" "}
                              <button className="btn btn-info btn-sm">
                                <i className="fas fa-edit"></i>
                              </button>{" "}
                              <button className="btn btn-danger btn-sm">
                                <i className="fas fa-trash"></i>
                              </button>
                            </>
                          ),
                        },
                      ]}
                    />
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
