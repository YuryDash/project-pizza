import s from './pizza-item.module.scss'
import {PizzaInfo} from "../pizza-info/pizza-info.tsx";
import {ButtonLong, ButtonWithIcon} from "../../../../../components";
import {useEffect, useState} from "react";
import {Basket} from "../../../../../components/icon-components";
import {useAppDispatch} from "../../../../../store/store.ts";
import {cartAC} from "../../../../../reducers/cart-reducer.ts";

export const PizzaItem = ({pizzaItem}: Props) => {
  const {base, info, title, prise, weight, img, id} = pizzaItem

  const [sizeFocus, setSizeFocus] = useState<PizzaSize>('m')
  const [baseFocus, setBaseFocus] = useState<PizzaBase>('classic')

  const [totalPrise, setTotalPrise] = useState<number>(prise)
  const [totalWeight, setTotalWeight] = useState<number>(weight)

const dispatch = useAppDispatch()

  const sizeBtnObj: SizeValue[] = [{title: 'S', value: 's'}, {title: 'M', value: 'm'}, {title: 'L', value: 'l'}]
  const baseBtnObj: BaseValue[] = [
    {title: 'Classic', value: 'classic'},
    {title: 'Slim', value: 'slim'},
    {title: 'Cheese board', value: 'cheese'},
    {title: 'Hot-dog board', value: 'dog'}]

  const mappedSizeValues = sizeBtnObj.map((el) => (
    <ButtonLong
      key={el.title}
      values={el}
      paddingY={'48px'}
      paddingX={'0px'}
      onButtonClick={() => handleSizeClick(el.value)}
      focused={sizeFocus === el.value}
    />
  ))
  const mappedBaseValues = baseBtnObj.map((el) => (
    <div className={s.btnsBase__item}><ButtonLong
      key={el.title}
      values={el}
      paddingY={'38px'}
      paddingX={'0px'}
      fullWidth={true}
      onButtonClick={() => handleBaseClick(el.value)}
      focused={baseFocus === el.value}
      disable={sizeFocus === 's'}
    /></div>
  ))

  useEffect(() => {
    let newPrice = prise;
    let newWeight = weight;
    switch (sizeFocus) {
      case 'l':
        newPrice += 6;
        newWeight += 170
        break;
      case 's':
        newPrice -= 4;
        newWeight -= 170
        break;
    }
    switch (baseFocus) {
      case 'cheese':
        newPrice += 6;
        if (sizeFocus === 'm') {
          newWeight -= 55
        }
        if (sizeFocus === 'l') {
          newWeight -= 110
        }
        break;
      case 'dog':
        if (sizeFocus === 'm') {
          newWeight -= 15
        }
        if (sizeFocus === 'l') {
          newWeight -= 75
        }
        newPrice += 7;
        break;
      case 'slim':
        if (sizeFocus === 'm') {
          newWeight -= 200
        }
        if (sizeFocus === 'l') {
          newWeight -= 250
        }
        break;
    }
    setTotalPrise(+newPrice.toFixed(2));
    setTotalWeight(newWeight);
  }, [sizeFocus, baseFocus])


  const handleSizeClick = (size: PizzaSize) => {
    size === 's' && setBaseFocus('classic')
    setSizeFocus(size);
  };

  const handleBaseClick = (base: PizzaBase) => {
    sizeFocus !== 's' && setBaseFocus(base);
  }

  const onClickHandler = () => {
    dispatch(cartAC({title, base: baseFocus, size: sizeFocus, prise, id}))
  }

  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <img className={s.img} src={img} alt="img"/>
      </div>
      <div className={s.descriptionPizza}>
        <div className={s.heading}>
          <div className={s.title}>{title}</div>
          <div className={s.info}>
            <PizzaInfo info={info}/>
          </div>
        </div>
        <div className={s.productComposition}>{base}</div>
      </div>
      <div className={s.sizeWrapper}>
        <div className={s.size}>size :</div>
        <div className={s.weight}>{totalWeight} g</div>
      </div>
      <div className={s.btnsSize}>
        {mappedSizeValues}
      </div>

      <div>
        <div className={s.base}>pizza base</div>
        <div className={s.btnsBase}>
          {mappedBaseValues}
        </div>
      </div>

      <div className={s.result}>
        <div
          className={s.prise}>{totalPrise} BYN
        </div>
        <ButtonWithIcon onClickHandler={onClickHandler} backColor={'var(--color-info-500)'} image={<Basket/>} title='Add to Cart'/>
      </div>
    </div>
  );
};

export type Info = {
  proteins: string
  fats: string
  carbohydrates: string
  energyValue: string
}
export type PizzaSize = 's' | 'm' | 'l'

export type PizzaBase = 'classic' | 'slim' | 'cheese' | 'dog'

export type SizeValue = {
  title: string
  value: PizzaSize
}
export type BaseValue = {
  title: string
  value: PizzaBase
}

export type PizzaItemType = {
  id: string
  img: string
  title: string
  info: Info
  size: PizzaSize
  base: string
  pizzaBase: PizzaBase
  weight: number
  prise: number
}
type Props = {
  pizzaItem: PizzaItemType
};