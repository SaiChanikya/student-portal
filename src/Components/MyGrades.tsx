import { Table } from "antd";
import { useState, useEffect } from "react";
import ApiService from "../Api.Service";
import Urls from "../ApiUrls";
import MainLayout from "./Layout/Layout";

function MyGrades() {
    const id = localStorage.getItem("id")
    const [marks, setMarks] = useState<any>([]);

    useEffect(() => {
        ApiService.get(Urls.marks(id))
            .then((data: any) => {
                setMarks(data.marks)
            })
    }, [])

    const columns = [
        {
            title: "Subject",
            dataIndex: "subject",
            width: "70%"
        },
        {
            title: "Grades",
            dataIndex: "grades",
            width: "30%",
            render: (text: any, record: any) => <>{record.grades} / 5</>
        }
    ]

    return <MainLayout>
        <div className="content-header">
            My Grades
        </div>

        <Table
            columns={columns}
            dataSource={marks}
            bordered
            pagination={false}
        />
    </MainLayout>
}

export default MyGrades;
