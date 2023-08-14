const AllClothes = () => {
  const data: string[] = [""];
  return (
    <section>
      {data.map((cloth) => {
       return <img src={cloth} />;
      })}
    </section>
  );
};

export default AllClothes;
