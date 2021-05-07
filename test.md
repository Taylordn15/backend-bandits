    			<dl class="reservationcardcontainer">
    				${reservations.map(data => `
    				<div class="reservationcard">
    					<h4 class="name1">Restaurant</h4>
    					<dt class="dtcss">${data.Restaurant}</dt>
    					<h4 class="name2">Date</h4>
    					<dt class="dtcss">${data.Date}</dt>
    					<h4 class="name3">Time</h4>
    					<dt class="dtcss">${data.Time}</dt>
    					<h4 class="name4">Time</h4>
    					<dt class="dtcss">${data.Party_Size}</dt>
    					<button>Edit Reservation</button>
    					<button>Delete Reservation</button>
    				</div>
    				` ).join("")};

    			</dl>


    <script>

    const reservationsFromDB = async (e) => {
    	const getReservations = await fetch("http://localhost:5321/reservations", {
    	method: "GET",
    	headers: {
    		"Content-Type": "application/json",
    	},
    	body: JSON.stringify(getReservations),
    });

};

reservationsFromDB()

    </script>
