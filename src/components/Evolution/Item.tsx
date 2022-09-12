import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPokemon } from "../../services/pokemon";

import Sprite from "../Sprite";

interface Props {
  identification?: number | string;
}

const Item = (props: Props) => {
  const { identification } = props;
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [id, setId] = useState<number>();

  const Detail = (targetId: number) => {
    navigate(`/${targetId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (identification == undefined) {
      return;
    }
    getPokemon(identification).then((res) => {
      setName(res.name);
      setId(res.id);
    });
  }, [identification]);

  if (id == undefined) {
    return null;
  }
  return (
    <div
      className="flex flex-col shrink-0 ml-auto cursor-pointer"
      onClick={() => Detail(id)}
    >
      <Sprite id={id} />
      <p className="mb-2">{name}</p>
    </div>
  );
};

export default Item;
