import React, { Fragment } from 'react';
import { Text, Title } from '../text';
import classes from './IngredientsTable.module.scss';

export const IngredientsTable = ({ ingredientsWithMeasures }) => {
  return (
    <Fragment>
      <Title className={classes.title}>Ingredients</Title>
      
      <table className={classes.ingredientsTable}>
        <tbody>
          {ingredientsWithMeasures.map((ingredient) => (
            <tr key={ingredient.index}>
              <td>
                <Text>
                  {ingredient.ingredient}
                </Text>
              </td>

              <td>
                <Text>
                  {ingredient.measure}
                </Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
}
