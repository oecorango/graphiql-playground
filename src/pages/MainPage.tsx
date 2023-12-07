import { fetchSchema } from '../apollo/data';

export const MainPage = () => {
  const getData = async () => {
    const schema = await fetchSchema();
    console.log(schema);
  };

  return (
    <>
      <div>MainPage</div>
      <button onClick={getData}>Кликаем чтобы получить схему в консоль</button>
    </>
  );
};
