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
        <div style={{ padding: "20px 0 20px 0", fontSize: "35px", fontWeight: "600" }}>
            Welcome {firstName} {lastName} <br />
        </div>

        <div>
            <img src={`${window.location.origin}/student/Student1.jpeg`} height={"50%"} width={'30%'} />
        </div>

    </MainLayout>
}

export default Home;
