"use client";
import Sidebar from "../components/sidebar";
import { useEffect, useState } from "react";
import CardConcert from "../components/cardConcert";
import Createconcert from "../components/createConcert";
import Success from "../components/success";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [overview, setOverview] = useState(true)
  const [create, setCreate] = useState(false);
  const [successCreate, setsuccessCreate] = useState(false);
  const [concerts,setconcerts] = useState([]);
  const [num,setNum] = useState([]);


  const handleClickOverview = () => {
    setCreate(false);
    setOverview(true);

  }
  const handleClickCreate = () => {
    setOverview(false);
    setCreate(true);
  }
  const handleCreateSuccess = () => {
    setCreate(false);
    setOverview(true);
    setsuccessCreate(true);
  };

  const fecthData = async () =>{
    axios.get(process.env.NEXT_PUBLIC_URI + "/concert").then(
      (response) =>{
        setconcerts(response.data)
      }
    ).catch(error => {
      console.log(error);
    });

    axios.get(process.env.NEXT_PUBLIC_URI + "/concert/num").then(
      (response) =>{
        setNum(response.data)
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
        {successCreate && (
          <Success state={true} word="Create successfully" />
        )}
        <div className="all-card">
          <div className="card-seat">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.3337 35V31.6667C33.3337 29.8986 32.6313 28.2029 31.381 26.9526C30.1308 25.7024 28.4351 25 26.667 25H13.3337C11.5655 25 9.86986 25.7024 8.61961 26.9526C7.36937 28.2029 6.66699 29.8986 6.66699 31.6667V35" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.9997 18.3333C23.6816 18.3333 26.6663 15.3486 26.6663 11.6667C26.6663 7.98477 23.6816 5 19.9997 5C16.3178 5 13.333 7.98477 13.333 11.6667C13.333 15.3486 16.3178 18.3333 19.9997 18.3333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>
              Total of seats
            </h2>
            <h1>
              {num.seat_count}
            </h1>
          </div>
          <div className="card-reserve">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9997 24.9993C26.443 24.9993 31.6663 19.776 31.6663 13.3327C31.6663 6.88936 26.443 1.66602 19.9997 1.66602C13.5564 1.66602 8.33301 6.88936 8.33301 13.3327C8.33301 19.776 13.5564 24.9993 19.9997 24.9993Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13.6837 23.1495L11.667 38.3328L20.0003 33.3328L28.3337 38.3328L26.317 23.1328" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>
              Reserve
            </h2>
            <h1>
              {num.reserve_count}
            </h1>
          </div>
          <div className="card-cancle">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M25 15L15 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M15 15L25 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>
              Cancel
            </h2>
            <h1>
              {num.cancel}
            </h1>
          </div>
        </div>
        <div className="tabbar">
          <button className={`mr-5 ${overview ? 'active' : ''}`} onClick={handleClickOverview}>Overview</button>
          <button className={create ? 'active' : ''} onClick={handleClickCreate}>Create</button>
        </div>
        {overview && (
          <ul className="">
            {concerts.map((concert, index) => (
              <li
                key={index}
              >
                <CardConcert key={index} prop={concert} />
              </li>
            ))}
          </ul>
        )}
        {create && (
          <div>
            <Createconcert onSuccess={handleCreateSuccess}></Createconcert>
          </div>
        )}
      </div>
    </div>
  );
}
