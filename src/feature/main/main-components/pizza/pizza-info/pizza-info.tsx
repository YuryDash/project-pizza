import {Provider, Root, Trigger, Portal, Arrow, Content} from '@radix-ui/react-tooltip';
import s from './pizza-info.module.scss'
import {Info} from "../pizza-item/pizza-item.tsx";

type Props = {
  info: Info
}

export const PizzaInfo = ({info}: Props) => {
  const {energyValue, proteins, fats, carbohydrates} = info
  return (
    <Provider>
      <Root>
        <Trigger asChild>
          <button className={s.iconButton}>
            i
          </button>
        </Trigger>
        <Portal>
          <Content className={s.tooltipContent} sideOffset={5}>
              <div>Nutritional value per 100g of product</div>
              <div className={s.infoWrapper}>
                  <div>energyValue:</div>
                  <div>{energyValue}</div>
                  <div>proteins:</div>
                  <div>{proteins}</div>
                  <div>fats:</div>
                  <div>{fats}</div>
                  <div>carbohydrates:</div>
                  <div>{carbohydrates}</div>
              </div>
            <Arrow className={s.tooltipArrow}/>
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

