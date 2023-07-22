import React from 'react';
import './App.css';

const trainsData = [
  {
    id: 1,
    name: 'Express Train',
    number: 'TRN123',
    departureTime: '08:00 AM',
    seatsAvailable: 50,
    price: '$50',
    delayedBy: '5 mins',
  },
  {
    id: 2,
    name: 'Superfast Train',
    number: 'TRN456',
    departureTime: '10:30 AM',
    seatsAvailable: 30,
    price: '$70',
    delayedBy: 'No Delay',
  },
  // Add more train data as needed
];

const TrainSchedule = () => {
  return (
    <div>
      <h2>Train Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Departure Time</th>
            <th>Seats Available</th>
            <th>Price</th>
            <th>Delayed By</th>
          </tr>
        </thead>
        <tbody>
          {trainsData.map((train) => (
            <tr key={train.id}>
              <td>{train.name}</td>
              <td>{train.number}</td>
              <td>{train.departureTime}</td>
              <td>{train.seatsAvailable}</td>
              <td>{train.price}</td>
              <td>{train.delayedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <TrainSchedule />
    </div>
  );
}

export default App;
