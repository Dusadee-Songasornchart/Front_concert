"use client";
import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import axios from "axios";

export default function history() {
  const [data,setData] = useState([]);
  const fecthData = async () =>{
    axios.get(process.env.NEXT_PUBLIC_URI + "/concert/noti").then(
      (response) =>{
        setData(response.data)
      }
    ).catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    fecthData();
  }, [])

  
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="body">
        <div className="layout-table">
          <table>
            <tr>
              <th>Date</th>
              <th>Username</th>
              <th>Concert Name</th>
              <th>Action</th>
            </tr>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.User_name}</td>
                <td>{item.Concertname}</td>
                <td>{item.Action}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}