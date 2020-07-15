import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { StarsContainer } from './styles';

const StarRating = ({ rating }) => {
  const [itemRating, setItemRating] = useState(rating);
  const [hover, setHover] = useState(null);

  let newRating;

  const handleRating = ratingValue => {
    newRating =
      itemRating > 0
        ? (ratingValue + itemRating) / 2
        : itemRating + ratingValue;
    setItemRating(newRating);
  };

  return (
    <StarsContainer>
      {[...Array(5)].map((star, i) => {
        //Have to add one to the value as arrays start at 0
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={10}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={
                ratingValue <= (hover || itemRating) ? '#ffc107' : '#e4e5e9'
              }
            />
          </label>
        );
      })}
    </StarsContainer>
  );
};

export default StarRating;
