import { useCallback, useState } from "react"
import Success from "./success";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Createconcert({ onSuccess }) {
    const [concertName, setConcertName] = useState("");
    const [seat, setSeat] = useState("");
    const [description, setDescription] = useState("");
    const [errMsg, seterrMsg] = useState("");
    const createConcert = () => {
        if (!concertName || !description || !seat) {
            seterrMsg('Please fill out the information completely.')
        } else if(seat <= 0){
            seterrMsg('Please specify a number of seats more than 0.')
        }
        else {
            axios.post(process.env.NEXT_PUBLIC_URI + "/concert", {
                name: concertName,
                des: description,
                amount: seat
            }).then((response) => {
                console.log(response)
                if (response.status === 201) {
                    onSuccess();
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                } else {

                }
            })
        }
    }



    return (
        <div className="card">
            <h2>Create</h2>
            {errMsg ? (
                        <p className="errMsg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={5}
                                stroke="currentColor"
                                className="h-5 w-5 md:w-7.5 md:h-7.5 mr-2 md:mr-2 mt-0.5 md:mt-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                            {errMsg}
                        </p>
                    ) : null}
            <div className="card-firstline">
                
                <div className="concert-finput">
                    <label
                        htmlFor="Concertname"
                    >
                        Concert Name
                    </label>
                    <input
                        id="Concertname"
                        type="text"
                        placeholder="Please input concert name"
                        autoComplete="off"
                        onChange={(e) => setConcertName(e.target.value)}
                        value={concertName}
                        className="mr-5"
                    >
                    </input>
                </div>
                <div className="concert-linput">
                    <label
                        htmlFor="Totalofseat"
                    >
                        Total of seat
                    </label>
                    <input
                        id="amount"
                        type="number"
                        placeholder="Please input your seat"
                        autoComplete="off"
                        onChange={(e) => setSeat(e.target.value)}
                        value={seat}
                        className=""
                    >
                    </input>
                </div>
            </div>
            <div className="concert-finput ">
                <label
                    htmlFor="Description"
                >
                    Description
                </label>
                <textarea
                    id="Description"
                    type="text"
                    placeholder="Please input concert name"
                    autoComplete="off"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="mr-5"
                >
                </textarea>
            </div>
            <div className="card-save-f">
                <button
                    className="card-save"
                    onClick={createConcert}
                >
                    <svg className="mr-3 mt-[0.3rem]" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M17 21V13H7V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 3V8H15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Save
                </button>
            </div>



        </div>
    )
};