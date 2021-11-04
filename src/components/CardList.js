import Card from './Card';

const CardList = ({ robots }) => (
  <div>
    {robots.map(({ id, ...props }) => (
      <Card key={id} id={id} {...props} />
    ))}
  </div>
);

export default CardList;
