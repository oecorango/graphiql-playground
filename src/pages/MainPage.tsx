import { useState } from 'react';
import { fetchSchema } from '../api/getSchema';
import { RICK_URL /* SWAPI_URL, COUNTRIES_URL */ } from '../constants/api';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { setSchema } from '../store/schemaSlice';

export const MainPage = () => {
  const [visibleSchema, setVisibleSchema] = useState(false);
  const dispatch = useAppDispatch();
  const schemaState = useAppSelector((state) => state.schemaGraphQl);

  const getSchema = async () => {
    const schemaRick = await fetchSchema(RICK_URL);
    console.log(schemaRick);
    // const schemaSwapi = await fetchSchema(SWAPI_URL);
    // console.log(schemaSwapi);
    // const schemaCountries = await fetchSchema(COUNTRIES_URL);
    // console.log(schemaCountries);
  };

  const clickHandler = async () => {
    const schema = await fetchSchema(RICK_URL);
    dispatch(setSchema(schema));

    visibleSchema ? setVisibleSchema(false) : setVisibleSchema(true);
  };

  return (
    <>
      <div>MainPage</div>
      <button onClick={getSchema}>
        Кликаем чтобы получить схему в консоль
      </button>
      <button onClick={clickHandler}>показать схему</button>
      <div>
        {visibleSchema ? (
          <>
            <p>QUERIES</p>
            {schemaState.schema.queryType.fields.map((el, index) => (
              <p key={index}>{`${el.name}(...): ${el.type.name}`}</p>
            ))}
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
