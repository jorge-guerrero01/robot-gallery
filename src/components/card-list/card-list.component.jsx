import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ robots }) => (
  <div className="card-list">
    {robots.map((robot) => {
      return <Card robot={robot} key={robot.id} />;
    })}
  </div>
);

export default CardList;
