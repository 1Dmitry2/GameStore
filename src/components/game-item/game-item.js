import React from "react";
import { GameCover } from "../game-cover";
import { GameBuy } from "../game-buy";
import { GameGenre } from "../game-genre";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentGame } from "../../redux/games/reducer";
import "./game-item.css";
export const GameItem = ({ game }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`./app/${game.title}`);
    dispatch(setCurrentGame(game));
  };
  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{game.title}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
