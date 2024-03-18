import Sidebar from "../../components/sidebar";

export default function history() {

  const data = [{ date: "12/09/2024 15:00:00", Username: "Sara John", Concertname: "The festival Int 2024", Action: "Cancel" },
  { date: "12/09/2024 15:00:00", Username: "Sara John", Concertname: "The festival Int 2024", Action: "Cancel" }]
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
                <td>{item.date}</td>
                <td>{item.Username}</td>
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