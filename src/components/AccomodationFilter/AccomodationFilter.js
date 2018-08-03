import React from 'react';
import isEmpty from 'lodash/isEmpty';

const AccomodationFilter = ({ options, handleFilterChange, selectedValue }) => {
  return (
    <div style={{marginTop: 30}} className="level">
      <div className="level-item has-text-centered">
        <div className="field">
          <div className="control has-icons-left">
            <div className="select is-medium">
              <select
                onChange={handleFilterChange}
                value={selectedValue}
              >
                {enhanceOptions(options).map(opt => <option value={opt.option} key={opt.value}>{opt.value}</option>)}
              </select>
            </div>
            <div className="icon is-small is-left">
              <i className="fas fa-globe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function enhanceOptions(options) {
    return options.reduce((acc, currentValue) => {
      if (isEmpty(acc)) {
        acc.push({ option: '', value: 'Where to'});
      }
      acc.push({ option: currentValue, value: currentValue });
      return acc;
    }, []);
  }

export default AccomodationFilter;
