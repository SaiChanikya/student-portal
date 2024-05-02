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
    const firstName = localStorage.getItem("first_name")
    const lastName = localStorage.getItem("last_name")

    return <MainLayout>
        <div style={{ padding: "20px 0 20px 0", fontSize: "35px", fontWeight: "600", textAlign: "center" }}>
            Welcome {firstName} {lastName} <br />
        </div>

        <div style={{ textAlign: "center", padding: "20px 0" }}>
            <img src={`${window.location.origin}/student/Student1.jpeg`} height={"60%"} width={'40%'} />
        </div>

        <div style={{ padding: "20px 0 20px 0", fontSize: "25px", textAlign: "center" }}>
            the entire online platform which provides students with various academic resources such as course schedules, contacts, grades, class materials, etc. An online platform or website that serves as a centralized hub for students to access academic information, services, and resources real-time within their educational institution.
        </div>

    </MainLayout>
}

export default Home;
