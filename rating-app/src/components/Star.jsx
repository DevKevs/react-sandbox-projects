const Star = ({ star, rating, hover, color, ratingClick, hoverStar }) => {
  return (
    <span
      className="star"
      style={{ color: star <= (hover || rating) ? color : "lightgray" }}
      onClick={() => ratingClick(star)}
      onMouseEnter={() => hoverStar(star)}
      onMouseLeave={() => hoverStar(0)}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
