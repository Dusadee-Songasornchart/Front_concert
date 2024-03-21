'use client'
import axios from "axios";
import Sidebar from "../components/sidebar";
import UserCardConcert from "../components/usercardConcert";
import Usersidebar from "../components/usersidebar";
import { useEffect, useState } from "react";

export default function User() {

    const [concerts,setconcerts] = useState([]);

    const fecthData = async () =>{
        axios.get(process.env.NEXT_PUBLIC_URI + "/concert").then(
          (response) =>{
            console.log(response)
            setconcerts(response.data)
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
            <Usersidebar></Usersidebar>
            <div className="body">
                <div className="text-white">
                hello
                </div>
                
                <div className="mt-14 md:mt-5">
                    <ul className="">
                        {concerts.map((concert, index) => (
                            <li
                                key={index}
                            >
                                <UserCardConcert key={index} prop={concert} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
