const reservations = async (e) => {
  const getReservations = await fetch("http://localhost:5321/reservation", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(getReservations),
  });
};
