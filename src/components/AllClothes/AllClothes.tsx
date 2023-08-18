/* eslint-disable @typescript-eslint/no-explicit-any */

const AllClothes = () => {
  return (
    <section>
      {[""].map((cloth: any) => {
        return <img src={cloth} />;
      })}
    </section>
  );
};

export default AllClothes;
