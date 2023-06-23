import React from "react";
const [rating, setRating] = useState(0);


const Rating = () => {
  const handleRatingChange = (value) => {
    setRating(value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the rating value
    console.log(rating);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Rate your experience:</label>
      <Rating
        onChange={handleRatingChange}
        initialRating={rating}
        emptySymbol={<span className="text-gray-300">&#9734;</span>}
        fullSymbol={<span className="text-yellow-400">&#9733;</span>}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Rating;
