import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './MainPage';
import {shallow} from 'enzyme';

let wrapper;
let wrapperShallow
beforeEach(()=>{
    let MockEmptyProps = {
        onRequestRobots:jest.fn(),
        robots:[],
        searchField:'',
        isPending:false
    }
    wrapper = renderer.create(<MainPage { ...MockEmptyProps} />).toJSON()
    wrapperShallow = shallow(<MainPage { ...MockEmptyProps} />)
})

describe("MainPage tests", ()=>{
    it("Snapshot with no users", ()=>{
        expect(wrapper).toMatchSnapshot()
    })

    it("Instance tests for no users", ()=>{
        expect(wrapperShallow.instance().filteredRobots([])).toEqual([])
    })

    it("Test isPanding ture/false", ()=>{
        //isPanding = false
        expect(wrapperShallow.find('h1').text()).toEqual("RoboFriends")
        //isPanding = true
        let MockFalsyIsPanding = {
            onRequestRobots:jest.fn(),
            robots:[],
            searchField:'',
            isPending:true
        }
        wrapperShallow = shallow(<MainPage { ...MockFalsyIsPanding} />)
        expect(wrapperShallow.find('h1').text()).toEqual("Loading")
    })

    describe("Tests with users", ()=>{
        const MockProps = {
            onRequestRobots:jest.fn(),
            robots:[{
                id: 2,
                name: 'Ervin Howell',
                username: 'Antonette',
                email: 'Shanna@melissa.tv'
              },
              {
                id: 3,
                name: 'Clementine Bauch',
                username: 'Samantha',
                email: 'Nathan@yesenia.net'
              },
              {
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org'
              }],
            searchField:"p",
            isPending:false
        }
        const wrapperShallowWithUsers = shallow(<MainPage { ...MockProps} />)
        it("Instance test with users", ()=>{
            expect(wrapperShallowWithUsers.instance().filteredRobots(MockProps.robots)).toEqual([{
                id: 4,
                name: 'Patricia Lebsack',
                username: 'Karianne',
                email: 'Julianne.OConner@kory.org'
              }])

            
        })
    })
})
