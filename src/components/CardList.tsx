import { Robot } from '../containers/App';
import Card from './Card';

type CardListProps = {
  robots: Robot[];
};

const CardList = ({ robots }: CardListProps) => (
  <div>
    {robots.map((robot) => (
      <Card key={robot.id} robot={robot} />
    ))}
  </div>
);

export default CardList;
