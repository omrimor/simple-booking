import React from 'react'
import { shallow } from 'enzyme'
import { CardInfo } from './CardInfo';

const setup = (flag) => {
  const props = {
    name: 'testName',
    handleFavoriteClick: jest.fn(),
    isFavorite: flag
  };
  const enzymeWrapper = shallow(<CardInfo {...props} />);
  return {
    props,
    enzymeWrapper
  };
};

describe('CardInfo', () => {
  it('should render name from props', () => {
    const { enzymeWrapper, props } = setup(true);
    expect(enzymeWrapper.find('.title').text()).toEqual(props.name);
  });
  it('should render the FavoriteIcon components', () => {
    const { enzymeWrapper, props } = setup(true);
    expect(enzymeWrapper.find('Connect(withFeatureFlag(isFavoritesEnable))').exists()).toEqual(true);
  });
});
