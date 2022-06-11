import TicketCard from "../components/TicketCard";
import { useEffect, useState } from "react";
import { getTickets } from "../db";
const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await getTickets();
      const dataObject = response.data;

      const arrayOfKeys = Object.keys(dataObject);
      const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
      const formattedArray = [];
      arrayOfKeys.forEach((key, index) => {
        const formmatedData = { ...arrayOfData[index] };
        formmatedData["documentId"] = key;
        formattedArray.push(formmatedData);
      });

      setTickets(formattedArray);
    }
    getData();
  }, []);

  const colors = [
    "rgb(255,179,186)",
    "rgb(255,223,186)",
    "rgb(255,255,186)",
    "rgb(186,255,201)",
    "rgb(186,225,255)",
  ];
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);
  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{category}</h3>
              {tickets
                .filter((ticket) => ticket.category === category)
                .map((ticket, index) => (
                  <TicketCard
                    key={index}
                    color={colors[categoryIndex] || colors[0]}
                    ticket={ticket}
                  />
                ))}
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
