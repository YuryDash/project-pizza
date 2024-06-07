import s from "./pizza.module.scss";
import {PizzaItem, PizzaItemType} from "./pizza-item/pizza-item.tsx";

type Props = {
  test: any
}

export function Pizza({}: Props) {
  return (
    <div className={s.wrapper}>
      <h2>pizza</h2>
      <div className={s.pizzaItems}>
        {dataPizza.map(el => {
          return <PizzaItem pizzaItem={el} key={el.id}/>
        })}
      </div>
    </div>
  );
}


export const dataPizza: PizzaItemType[] = [
  {
    id: '1',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2024/01/22/Chocopizza_480%D1%85480-thumbnail-480x480.png',
    title: 'ChocoPizza',
    info: {
      energyValue: '315.26 kcal',
      proteins: '9.08 g',
      fats: '16.55 g',
      carbohydrates: '31.4g',
    },
    size: 'm',
    weight: 460,
    base: 'Fresh cream, nut paste, mozzarella cheese, pineapple, kinder chocolate',
    prise: 29.49,
    pizzaBase: 'classic'
  },
  {
    id: '2',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2023/11/02/4_sezona-thumbnail-480x480.png',
    title: '4 seasons',
    info: {
      energyValue: '247.3 kcal',
      proteins: '9.32 g',
      fats: '12.10 g',
      carbohydrates: '24.85 g',
    },
    size: 'm',
    weight: 610,
    base: 'ranch sauce, mozzarella cheese, pepperoni, honeydew, tomatoes, feta, pineapple, shrimp',
    prise: 30.49,
    pizzaBase: 'classic'
  },
  {
    id: '3',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2024/01/22/Superveggi_480%D1%85480-thumbnail-480x480.png',
    title: 'super vegi',
    info: {
      energyValue: '194.75 kcal',
      proteins: '8.86 g',
      fats: '5.21 g',
      carbohydrates: '27.86 g',
    },
    size: 'm',
    weight: 610,
    base: 'pineapple, champignons, mozzarella cheese, sweet pepper, domino\'s tomato sauce, beans, onions',
    prise: 24.49,
    pizzaBase: 'classic'
  },
  {
    id: '4',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2023/11/02/5_syrov-thumbnail-480x480.png',
    title: '5 Cheeses',
    info: {
      energyValue: '253.13 kcal',
      proteins: '11.26 g',
      fats: '10.53 g',
      carbohydrates: '28.08 g',
    },
    size: 'm',
    weight: 515,
    base: 'fresh cream, mozzarella cheese, feta, parmesan, blue cheese, cheddar',
    prise: 30.49,
    pizzaBase: 'classic'
  },
  {
    id: '5',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2023/11/02/bavarchkaya-thumbnail-480x480.png',
    title: 'Bavarian',
    info: {
      energyValue: '249.7 kcal',
      proteins: '13.04 g',
      fats: '6.07 g',
      carbohydrates: '29.62 g',
    },
    size: 'm',
    weight: 540,
    base: 'barbecue sauce, mozzarella cheese, Bavarian sausages, parmesan, jalapeno',
    prise: 24.49,
    pizzaBase: 'classic'
  },
  {
    id: '6',
    img: 'https://media.dominos.by/__sized__/menu/product_osg_image/2023/11/02/barbecue-thumbnail-480x480.png',
    title: 'Barbecue',
    info: {
      energyValue: '223.23 kcal',
      proteins: '10.14 g',
      fats: '7.17 g',
      carbohydrates: '29.18 g',
    },
    size: 'm',
    weight: 550,
    base: 'barbecue sauce, mozzarella cheese, bacon, chicken, mushrooms, onions',
    prise: 27.49,
    pizzaBase: 'classic'
  },
]