import React from "react";
import style from "./style/app.module.css";
import Card from "../components/Card";
import Button from "../components/Buttons";

const App = () => {
  const [food, setFood] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const getFoods = () => {
    fetch("https://asm-dev-api.herokuapp.com/api/v1/food")
      .then((res) => res.json())
      .then((data) => {
        setFood(data.data.meals);
        setLoading(false);
      })
      .catch((err) => JSON.stringify(err));
  };

  React.useEffect(() => {
    getFoods();
  }, []);

  const foodResult = food.map((meal) => {
    //  destructuring the response from the API endpoint
    // for ease of mapping them onto the app UI
    const { id, strMeal, strMealThumb, description, title, price, ratings } =
      meal;

    return (
      <Card
        key={id}
        mealPrice={price}
        mealName={strMeal}
        mealImg={strMealThumb}
        mealDescription={description}
        subName={title}
        mealRatings={ratings}
      />
    );
  });

  return (
    <section className={style.app__root}>
      <div className={style.food__container}>
        {loading ? foodResult : setLoading("Loading...")}
      </div>
      <div className={style.btn__wrapper}>
        <Button className={style.app__btn}>Learn more</Button>
      </div>
    </section>
  );
};

export default App;
