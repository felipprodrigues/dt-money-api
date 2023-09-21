// api/transactions.js

export default (req, res) => {
  // Your JSON data
  const transactions = [
    {
      "description": "Purchase of house ornaments",
      "price": 3475,
      "category": "Home Decor",
      "type": "Outcome",
      "createdAt": "2023-09-20T18:32:45.698Z",
      "id": 3
    },
    {
      "description": "Received salary",
      "price": 15000,
      "category": "Income",
      "type": "Income",
      "createdAt": "2023-09-20T19:08:25.966Z",
      "id": 4
    },
    {
      "description": "Car accident expenses",
      "price": 10000,
      "category": "Emergency",
      "type": "Outcome",
      "createdAt": "2023-09-20T19:08:56.919Z",
      "id": 5
    },
    {
      "description": "Veterinary expenses for the dog",
      "price": 245,
      "category": "Pet Care",
      "type": "Outcome",
      "createdAt": "2023-09-20T19:09:17.527Z",
      "id": 6
    }
  ];

  // Return the JSON data as a response
  res.status(200).json({ transactions });
};
