import axios from "axios";
import { Literata } from "next/font/google"
import { useState } from "react";
import Success from "./success";

export default function UserCardConcert({ prop }) {
    const [successReserve, setsuccessReserve] = useState(false);
    const [successCancel, setsuccessCancel] = useState(false);
    const userid = 100;
    const username = "dud";
    const findmyid = (list) => {

        if (list) {
            const found = list.find((user) => user.userid === userid);
            
            if (found !== undefined) {
                
                return (true);
            } else {
             
                return (false);
            }
        }else{
            return(false)
        }
    };
    const handleReserve = (concert_id) => {
        axios.put(`${process.env.NEXT_PUBLIC_URI}/concert/reserve/${concert_id}`, {
            userid: userid,
            username: username
        }).then((response) => {
            console.log(response)
            if(response.status === 200){
                setsuccessReserve(true)
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        })
    }

    const handleCancel = (concert_id) => {
        axios.put(`${process.env.NEXT_PUBLIC_URI}/concert/cancel/${concert_id}`, {
            userid: userid
        }).then((response) => {
            console.log(response)
            if(response.status === 200){
                setsuccessCancel(true)
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        })
    }

    return (
        <div className="card">
           {successReserve && (<Success state={true} word="Reserve successfully" />)}
           {successCancel && (<Success state={true} word="Cancel successfully" />)}
            <h1>{prop.name}</h1>
            <p>{prop.des}</p>
            <div className="card-footer">
                <div className="card-amount">
                    <svg className="mr-2" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6663 28V25.3333C26.6663 23.9188 26.1044 22.5623 25.1042 21.5621C24.104 20.5619 22.7475 20 21.333 20H10.6663C9.25185 20 7.8953 20.5619 6.8951 21.5621C5.89491 22.5623 5.33301 23.9188 5.33301 25.3333V28" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.0003 14.6667C18.9458 14.6667 21.3337 12.2789 21.3337 9.33333C21.3337 6.38781 18.9458 4 16.0003 4C13.0548 4 10.667 6.38781 10.667 9.33333C10.667 12.2789 13.0548 14.6667 16.0003 14.6667Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {prop.amount}
                </div>
                {findmyid(prop.user_reserve) === true ? (
                    <button className="cancel-card" onClick={() => handleCancel(prop.id)}>
                        Cancel
                    </button>
                ) : (
                    <button className="reserve-card" onClick={() =>handleReserve(prop.id)}>
                        Reserve
                    </button>
                )}

            </div>
        </div>
    )
};