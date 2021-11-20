const Cards = ({ repo }) => {
  return (
    <ul>
      {repo.map((e, index) => (
        <li key={index}>
          <img src={e.owner.avatar_url} alt="" />
          <div className="spans">
            <span className="fname">{e.full_name}</span>
            <span className="desc">{e.description}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
