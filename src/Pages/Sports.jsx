import React, { useState } from 'react';

const venues = [
  {
    id: 1,
    name: "Football",
    location: "Stadium A",
    coach: "John Doe",
    timingOptions: ["9 AM", "10 AM", "11 AM"],
    partners: ["Partner 1", "Partner 2", "Partner 3"],
  },
  {
    id: 2,
    name: "Basketball",
    location: "Gym B",
    coach: "Jane Smith",
    timingOptions: ["12 PM", "1 PM", "2 PM"],
    partners: ["Partner 4", "Partner 5", "Partner 6"],
  },
  {
    id: 3,
    name: "Tennis",
    location: "Court C",
    coach: "Michael Johnson",
    timingOptions: ["3 PM", "4 PM", "5 PM"],
    partners: ["Partner 7", "Partner 8", "Partner 9"],
  },
  {
    id: 4,
    name: "Swimming",
    location: "Pool D",
    coach: "Sarah Wilson",
    timingOptions: ["6 PM", "7 PM", "8 PM"],
    partners: ["Partner 10", "Partner 11", "Partner 12"],
  },
  {
    id: 5,
    name: "Soccer",
    location: "Field E",
    coach: "David Thompson",
    timingOptions: ["9 AM", "10 AM", "11 AM"],
    partners: ["Partner 13", "Partner 14", "Partner 15"],
  },
  //   {
  //   id: 4,
  //   name: 'Swimming',
  //   location: 'Pool D',
  //   coach: 'Sarah Wilson',
  //   timingOptions: ['6 PM', '7 PM', '8 PM'],
  //   partners: ['Partner 10', 'Partner 11', 'Partner 12'],
  // },
  // {
  //   id: 5,
  //   name: 'Soccer',
  //   location: 'Field E',
  //   coach: 'David Thompson',
  //   timingOptions: ['9 AM', '10 AM', '11 AM'],
  //   partners: ['Partner 13', 'Partner 14', 'Partner 15'],
  // },
  {
    id: 11,
    name: "Football",
    location: "Stadium A",

    timingOptions: ["9 AM", "10 AM", "11 AM"],
    partners: ["Partner 1", "Partner 2", "Partner 3"],
  },
  {
    id: 12,
    name: "Basketball",
    location: "Gym B",

    timingOptions: ["12 PM", "1 PM", "2 PM"],
    partners: ["Partner 4", "Partner 5", "Partner 6"],
  },
  {
    id: 13,
    name: "Tennis",
    location: "Court C",

    timingOptions: ["3 PM", "4 PM", "5 PM"],
    partners: ["Partner 7", "Partner 8", "Partner 9"],
  },
  {
    id: 14,
    name: "Swimming",
    location: "Pool D",

    timingOptions: ["6 PM", "7 PM", "8 PM"],
    partners: ["Partner 10", "Partner 11", "Partner 12"],
  },
  {
    id: 15,
    name: "Soccer",
    location: "Field E",

    timingOptions: ["9 AM", "10 AM", "11 AM"],
    partners: ["Partner 13", "Partner 14", "Partner 15"],
  },
];

// const partners = [
//   {
//     id: 11,
//     name: "Football",
//     location: "Stadium A",
   
//     timingOptions: ["9 AM", "10 AM", "11 AM"],
//     partners: ["Partner 1", "Partner 2", "Partner 3"],
//   },
//   {
//     id: 12,
//     name: "Basketball",
//     location: "Gym B",
    
//     timingOptions: ["12 PM", "1 PM", "2 PM"],
//     partners: ["Partner 4", "Partner 5", "Partner 6"],
//   },
//   {
//     id: 13,
//     name: "Tennis",
//     location: "Court C",
   
//     timingOptions: ["3 PM", "4 PM", "5 PM"],
//     partners: ["Partner 7", "Partner 8", "Partner 9"],
//   },
//   {
//     id: 14,
//     name: "Swimming",
//     location: "Pool D",
   
//     timingOptions: ["6 PM", "7 PM", "8 PM"],
//     partners: ["Partner 10", "Partner 11", "Partner 12"],
//   },
//   {
//     id: 15,
//     name: "Soccer",
//     location: "Field E",
   
//     timingOptions: ["9 AM", "10 AM", "11 AM"],
//     partners: ["Partner 13", "Partner 14", "Partner 15"],
//   },
// ];


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#/">Home</a>
        </li>
        <li>
          <a href="#/">About</a>
        </li>
        <li>
          <a href="#/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [selectedTimings, setSelectedTimings] = useState({});
  const [selectedPartner, setSelectedPartner] = useState({});
  const [searchLocationTerm, setSearchLocationTerm] = useState('');
  const [searchSportTerm, setSearchSportTerm] = useState('');

  const addToCartPartner = (venue) => {
    const selectedTime = selectedTimings[venue.id];
    const selectedMember = selectedPartner[venue.id];

    if (!selectedTime) {
      alert("Please select a time");
      return;
    }

    if (!selectedMember) {
      alert("Please select a partner");
      return;
    }

    const venueWithTimePartner = { ...venue, selectedTime, selectedMember };

   

    setCart([...cart, venueWithTimePartner]);

    // Clear the selected time for the venue
    setSelectedTimings({ ...selectedTimings, [venue.id]: "" });
    setSelectedPartner({ ...selectedPartner, [venue.id]: "" });
  };


  const addToCart = (venue) => {
    const selectedTime = selectedTimings[venue.id];
    

    if (!selectedTime) {
      alert("Please select a time");
      return;
    }

  

    const venueWithTime = { ...venue, selectedTime };

    

    console.log(venue.id);
    setCart([...cart, venueWithTime]);

    // Clear the selected time for the venue
    setSelectedTimings({ ...selectedTimings, [venue.id]: "" });
    
  };

  const handleTimingChange = (venueId, time) => {
    setSelectedTimings({ ...selectedTimings, [venueId]: time });
  };

   const handlePartnerChange = (venueId, partner) => {
     setSelectedPartner({ ...selectedPartner, [venueId]: partner });
   };

  const handleLocationSearch = (e) => {
    setSearchLocationTerm(e.target.value);
  };

  const handleSportSearch = (e) => {
    setSearchSportTerm(e.target.value);
  };

  const filteredVenues = venues.filter(
    (venue) =>
      venue.location.toLowerCase().includes(searchLocationTerm.toLowerCase()) &&
      venue.name.toLowerCase().includes(searchSportTerm.toLowerCase())
  );

  return (
    <div style={{ paddingTop: "6rem" }}>
      <h1>Sports Venues</h1>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div>
          <label htmlFor="locationSearch">Search Location: </label>
          <input
            type="text"
            id="locationSearch"
            value={searchLocationTerm}
            onChange={handleLocationSearch}
          />
        </div>
        <div style={{ marginLeft: "20px" }}>
          <label htmlFor="sportSearch">Search Sport: </label>
          <input
            type="text"
            id="sportSearch"
            value={searchSportTerm}
            onChange={handleSportSearch}
          />
        </div>
      </div>
      <h1>Coaches</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredVenues.map((venue) => (
          <div key={venue.id} style={{ flex: "0 0 200px", margin: "10px" }}>
            {venue.coach ? (
              <div
                style={{
                  border: "2px solid #ccc",
                  padding: "10px",
                  backgroundColor: "white",
                  borderRadius: "10px",
                }}>
                <h3>{venue.name}</h3>
                <p>Location: {venue.location}</p>
                <p>Coach: {venue.coach}</p>
                <div>
                  <strong>Select Time:</strong>
                  <br />
                  <select
                    style={{ cursor: "pointer" }}
                    value={selectedTimings[venue.id] || ""}
                    onChange={(e) =>
                      handleTimingChange(venue.id, e.target.value)
                    }>
                    <option value="">Choose Time</option>
                    {venue.timingOptions.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
                {/* <div>
                <strong>Select Partner:</strong>
                <br />
                <select>
                  <option value="">Choose Partner</option>
                  {venue.partners.map((partner) => (
                    <option key={partner} value={partner}>
                      {partner}
                    </option>
                  ))}
                </select>
              </div> */}
                <button
                  style={{
                    backgroundColor: "#4CAF50",
                    color: "white",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                    width: "100%",
                    marginTop: "15px",
                  }}
                  onClick={() => addToCart(venue)}>
                  Add to Cart
                </button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
      <h1>Partners</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredVenues.map((partner) => (
          <>
            {partner.coach ? null : (
              <div
                key={partner.id}
                style={{ flex: "0 0 200px", margin: "10px" }}>
                <div
                  style={{
                    border: "2px solid #ccc",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "10px",
                  }}>
                  <h3>{partner.name}</h3>
                  <p>Location: {partner.location}</p>
                  {/* <p>Coach: {partner.coach}</p> */}
                  <div style={{ marginBottom: "15px" }}>
                    <strong>Select Time:</strong>
                    <br />
                    <select
                      style={{ cursor: "pointer" }}
                      value={selectedTimings[partner.id] || ""}
                      onChange={(e) =>
                        handleTimingChange(partner.id, e.target.value)
                      }>
                      <option value="">Choose Time</option>
                      {partner.timingOptions.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <strong>Select Partner:</strong>
                    <br />
                    <select
                      style={{ cursor: "pointer" }}
                      value={selectedPartner[partner.id] || ""}
                      onChange={(e) =>
                        handlePartnerChange(partner.id, e.target.value)
                      }>
                      <option value="">Choose Partner</option>
                      {partner.partners.map((partner) => (
                        <option key={partner} value={partner}>
                          {partner}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    style={{
                      backgroundColor: "#4CAF50",
                      color: "white",
                      padding: "10px",
                      border: "none",
                      cursor: "pointer",
                      width: "100%",
                      marginTop: "15px",
                    }}
                    onClick={() => addToCartPartner(partner)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <h2>Cart:</h2>
      {cart.map((venue) => (
        <div key={venue.id}>
          <h3>{venue.name}</h3>
          <p>Location: {venue.location}</p>
          {venue.coach ? <p>Coach: {venue.coach}</p> : <p></p>}
          <p>
            <strong>Selected Time:</strong> {venue.selectedTime}
          </p>
          {venue.selectedMember ? (
            <p>
              <strong>Selected Partner:</strong> {venue.selectedMember}
            </p>
          ) : (
            <p></p>
          )}

          <hr />
        </div>
      ))}
    </div>
  );
};

export default ProductList;