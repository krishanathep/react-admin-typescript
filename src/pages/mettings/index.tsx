import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useMeetingStore } from "../../stores/meetingStore";
import { DataTable } from "mantine-datatable";
import axios from "axios";

const PAGE_SIZES: number[] = [10, 20, 30];

interface Meeting {
  id: number;
  title: string;
  detail: string;
  user: string;
  start: string;
  end: string;
  created_at: string;
  updated_at: string;
}

const Meetings = () => {
  // Use The Zustand store
  const { meetings, fetchMeetings, isLoading } = useMeetingStore();

  const [pageSize, setPageSize] = useState<number>(PAGE_SIZES[0]);
  const [page, setPage] = useState<number>(1);
  const [records, setRecords] = useState<Meeting[]>(
    meetings.slice(0, pageSize)
  );

  const handleDeleteEvent = (meetings:any,data:any)=> {
    axios
      .delete(
        "https://full-stack-app.com/laravel_auth_jwt_api/public/api/event-delete/" +
          meetings.id,data
      )
      .then((res) => {
        console.log(res);
        fetchMeetings();
      });
  };

  useEffect(() => {
    setPage(1);
  }, [pageSize]);

  useEffect(() => {
    const getData = async () => {
      const from = (page - 1) * pageSize;
      const to = from + pageSize;
      setRecords(meetings.slice(from, to));
    };
    getData();
  }, [page, pageSize, meetings]);

  useEffect(() => {
    fetchMeetings();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Meetings list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Meetings</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <Link to={"/meetings/create"} className="btn btn-success mb-2">
                  Create Meeting
                </Link>
                <div className="card">
                  <div className="card-body">
                    <DataTable
                      style={{
                        fontFamily: "Prompt",
                      }}
                      withBorder
                      striped
                      highlightOnHover
                      withColumnBorders
                      fontSize={"md"}
                      records={records}
                      fetching={isLoading}
                      idAccessor="id"
                      minHeight={200}
                      totalRecords={meetings.length}
                      recordsPerPage={pageSize}
                      page={page}
                      onPageChange={(p) => setPage(p)}
                      recordsPerPageOptions={PAGE_SIZES}
                      onRecordsPerPageChange={setPageSize}
                      paginationColor="blue"
                      paginationSize="md"
                      columns={[
                        {
                          accessor: "id",
                          title: "#",
                          textAlignment: "center",
                          width: 80,
                        },
                        {
                          accessor: "title",
                          title: "ชื่อการประชุม",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "detail",
                          title: "รายละเอียด",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "user",
                          title: "ผู้จัดทำ",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "start",
                          title: "วันที่เริ่ม",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "end",
                          title: "วันที่สิ้นสุด",
                          titleStyle: { textAlign: "center" },
                        },
                        {
                          accessor: "created_at",
                          title: "วันที่สร้าง",
                          titleStyle: { textAlign: "center" },
                          render: ({ created_at }: { created_at: string }) =>
                            dayjs(created_at).format("DD-MMM-YYYY"),
                        },
                        {
                          accessor: "actions",
                          title: "ดำเนินการ",
                          textAlignment: "center",
                            render: (meetings) => (
                              <>
                                <Link
                                  to={"/meetings/update/" + meetings.id}
                                  className="btn btn-info btn-sm"
                                >
                                  <i className="fas fa-edit"></i>
                                </Link>{" "}
                                <button onClick={()=>handleDeleteEvent(meetings,{ reason: "User request" })} className="btn btn-danger btn-sm">
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

export default Meetings;
