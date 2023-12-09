import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const RenderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} fill="#FF4500" />);
  }
  if (rating % 1 !== 0) {
    stars.push(<FaStarHalfAlt key={stars.length} fill="#FF4500" />);
  }
  return stars;
};

export default RenderStars;
