import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  // toggle fucntion
  const toggle = () => {
    setStatus(!setStatus);
    onClick();
  };

  const [status, setStatus] = useState(true);
  if (status) return <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />;

  return <AiOutlineHeart size={20} onClick={toggle} />;
};

export default Like;
