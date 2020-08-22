import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './MainPage';
import {shallow} from 'enzyme';

let wrapper;
let wrapperShallow
beforeEach(()=>{
    let MokeProps = {
        onRequestRobots:jest.fn(),
        robots:[],
        serchField:'',
        isPending:false
    }
    wrapper = renderer.create(<MainPage {...MokeProps}/>).toJSON()
    wrapperShallow = shallow(<MainPage {...MokeProps}/>)
})
describe("MainPage tests", ()=>{
    it("Snapshot test", ()=>{
    
        expect(wrapper).toMatchSnapshot()
    })

    it("Instance tests", ()=>{
        expect(wrapperShallow.instance().filteredRobots([])).toEqual([])
    })
})
