import cn from 'classnames';
import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const goodsWithId = goods.map((name, index) => ({ name, index }));

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const handleClearSelection = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={handleClearSelection}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goodsWithId.map(good => {
            const isSelected = selectedGood === good.name;

            return (
              <tr
                data-cy="Good"
                className={cn({ 'has-background-success-light': isSelected })}
                key={good.index}
              >
                <td>
                  <button
                    data-cy={isSelected ? 'RemoveButton' : 'AddButton'}
                    type="button"
                    className={cn('button', { 'is-info': isSelected })}
                    onClick={() =>
                      setSelectedGood(isSelected ? null : good.name)
                    }
                  >
                    {isSelected ? '-' : '+'}
                  </button>
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
