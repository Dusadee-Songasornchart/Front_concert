import Sidebar from "../components/sidebar";
import UserCardConcert from "../components/usercardConcert";
import Usersidebar from "../components/usersidebar";

export default function User() {

    const concerts = [
        { id: 1, name: "Concert Name 1", des: "Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida porttitor nibh urna sit ornare a. Proin dolor morbi id ornare aenean non.dignissim turpis sed non est orci sed in. Blandit ut purus nunc sed donec commodo morbi diam scelerisque.", amount: "500", reserve: [1] },
        { id: 2, name: "Concert Name 2", des: "i'm hungry", amount: "200", reserve: [1, 2, 3] }
    ];

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
        // <div>
        //     <Usersidebar></Usersidebar>
        //     <div className="body">
        //         <ul className="">
        //             {concerts.map((concert, index) => (
        //                 <li
        //                     key={index}
        //                 >
        //                     <UserCardConcert key={index} prop={concert} />
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // </div>
    );
}
