import { Card, Carousel, Input, Select, Statistic } from "antd";
import MainLayout from "./Layout/Layout";
import { useEffect, useState } from "react";
import ApiService from "../Api.Service";
import ApiUrls from "../ApiUrls";
import { useHistory } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import Urls from "../ApiUrls";

const { Search } = Input;

function Home() {
    const email = localStorage.getItem("email")
    const firstName = localStorage.getItem("first_name")
    const lastName = localStorage.getItem("last_name")
    const id = localStorage.getItem("id")
    const [marks, setMarks] = useState<any>([]);

    useEffect(() => {
        ApiService.get(Urls.marks(id))
            .then((data: any) => {
                setMarks(data.marks)
            })
    }, [])

    return <MainLayout>
        <div style={{ padding: "20px 0 20px 0", fontSize: "35px", fontWeight: "600" }}>
            Welcome {firstName} {lastName} <br />
        </div>

        <div>
            <img src={`${window.location.origin}/student/Student1.jpeg`} height={"50%"} width={'30%'} />
        </div>

        <div style={{ padding: "20px 0 20px 0", fontSize: "35px", fontWeight: "600" }}>
            {marks?.length > 0 && "Your mark(s): "}
        </div>

        <div style={{
            display: "grid",
            gridRowGap: "20px",
        }}>
            {
                marks?.length > 0 && marks?.map((type: any) => {
                    return <div key={type.id}>
                        <Card key={type} className={"hovering"} style={{ border: '1px solid #d7d7dc', width: '300px', boxShadow: "2px 2px 3px 3px lightgrey" }}>
                            <Statistic key={type}
                                title={<div style={{ fontWeight: 600, fontSize: "30px", color: "black" }}>{type.subject}</div>} value={`${type.grades} / 10`}
                            />
                        </Card>
                    </div>
                })
            }
        </div>

    </MainLayout>
}

export default Home;
