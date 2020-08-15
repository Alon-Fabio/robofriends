import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe("Testing Card", ()=>{
  it('Card components shallow testing', () => {
    const CardRender = renderer.create(<Card />).toJSON()
    expect(CardRender).toMatchSnapshot()
    
  })
})
