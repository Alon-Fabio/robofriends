import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList.js';
import renderer from 'react-test-renderer';
import {robots} from "../robots.js";

describe("Testing Card", ()=>{
  it('Card components shallow testing', () => {
    const CardRender = renderer.create(<CardList robots={robots} />).toJSON()
    expect(CardRender).toMatchSnapshot()
    
  })
})
