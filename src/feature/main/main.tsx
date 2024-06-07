import s from './main.module.scss'
import {Pizza} from "./main-components/pizza/pizza.tsx";
import {Drinks} from "./main-components/drinks/drinks.tsx";
import {Snacks} from "./main-components/snacks/snacks.tsx";
import {Deserts} from "./main-components/deserts/deserts.tsx";
import {Sauces} from "./main-components/sauces/sauces.tsx";
import {HotOffers} from "./main-components/hot-offers/hot-offers.tsx";

type Props = any

export function Main({}: Props) {

  const text = "ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam cumque eaque est harum, maiores minima molestiae nostrum pariatur, quo rem sunt temporibus tenetur? Perspiciatis!"

  return (
    <main className={s.main}>
      <HotOffers/>
      <div id="pizza">
        <Pizza test={text}/>
      </div>
      <div id="snacks">
        <Snacks test={text}/>
      </div>
      <div id="deserts">
        <Deserts test={text}/>
      </div>
      <div id="drinks">
        <Drinks test={text}/>
      </div>
      <div id="sauces">
        <Sauces test={text}/>
      </div>
    </main>

  );
}
