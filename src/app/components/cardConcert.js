import { useCallback, useEffect, useState } from "react"
import Success from "./success";
import axios from "axios";
import { useRouter } from "next/navigation";


export default function CardConcert({ prop }) {
    const [modelDelete, setModelDelete] = useState(false);
    const [successDel, setsuccessDel] = useState(false);
    const router = useRouter();

    const toReloadPage = () => {
        router.push('/admin')
        router.refresh();
    };

    const handleModelDel = () => {
        console.log(modelDelete)
        setModelDelete(true)
        document.body.classList.add('modal-open');
    }

    const handleConfirmDel = (concert_id) => {
        deleteCard(concert_id)
        document.body.classList.remove('modal-open')
        setModelDelete(false)

    }

    const handleCancelDel = () => {
        document.body.classList.remove('modal-open')
        setModelDelete(false)
    }

    const deleteCard = (concert_id) => {
        axios.delete(`${process.env.NEXT_PUBLIC_URI}/concert/${concert_id}`)
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    setsuccessDel(true)
                    setTimeout( ()=>{
                        location.reload();
                    }, 2000);
                }
            })
            .catch(error => {
                console.log(error);
            });
    }


    useEffect(() => {


    }, [])

    return (
        <div className="card">
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
                <button id="delete" className="delete-card" onClick={handleModelDel}>
                    <svg className="mr-2 mb-1" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 6H5.5H21.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.5 6V20C19.5 20.5304 19.2893 21.0391 18.9142 21.4142C18.5391 21.7893 18.0304 22 17.5 22H7.5C6.96957 22 6.46086 21.7893 6.08579 21.4142C5.71071 21.0391 5.5 20.5304 5.5 20V6M8.5 6V4C8.5 3.46957 8.71071 2.96086 9.08579 2.58579C9.46086 2.21071 9.96957 2 10.5 2H14.5C15.0304 2 15.5391 2.21071 15.9142 2.58579C16.2893 2.96086 16.5 3.46957 16.5 4V6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.5 11V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 11V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Delete
                </button>

            </div>
            {modelDelete && (
                <div className="modal">
                    <div className="modal-body">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#E63946" />
                            <path d="M26.5444 24L32.4724 18.072C32.7903 17.7308 32.9634 17.2795 32.9552 16.8132C32.947 16.3468 32.7581 15.9019 32.4283 15.5721C32.0985 15.2423 31.6535 15.0534 31.1872 15.0452C30.7209 15.037 30.2696 15.2101 29.9284 15.528L24.0004 21.456L18.0724 15.528C17.7311 15.2101 17.2798 15.037 16.8135 15.0452C16.3472 15.0534 15.9023 15.2423 15.5725 15.5721C15.2427 15.9019 15.0538 16.3468 15.0455 16.8132C15.0373 17.2795 15.2104 17.7308 15.5284 18.072L21.4564 24L15.5284 29.928C15.1913 30.2655 15.002 30.723 15.002 31.2C15.002 31.677 15.1913 32.1345 15.5284 32.472C15.8659 32.8091 16.3234 32.9984 16.8004 32.9984C17.2774 32.9984 17.7349 32.8091 18.0724 32.472L24.0004 26.544L29.9284 32.472C30.2659 32.8091 30.7234 32.9984 31.2004 32.9984C31.6774 32.9984 32.1349 32.8091 32.4724 32.472C32.8094 32.1345 32.9988 31.677 32.9988 31.2C32.9988 30.723 32.8094 30.2655 32.4724 29.928L26.5444 24Z" fill="white" />
                        </svg>
                        <div className="modal-text">
                            Are you sure to delete? <br></br>{prop.name}
                        </div>
                        <div className="modal-footer">
                            <button className="modal-button-cancle" onClick={handleCancelDel}>
                                Cancel
                            </button>
                            <button className="modal-button-Yes" onClick={() => handleConfirmDel(prop.id)}>
                                Yes,Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {successDel && (
                <Success state={true} word="Delete successfully" />
            )}
        </div>
    )
};