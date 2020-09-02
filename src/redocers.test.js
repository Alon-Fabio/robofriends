import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'
import * as redocers from './redocers'

describe("searchRobots", ()=>{
    
    const stateObj = {
        searchField:'testValue'
    }

    it("Should return an empty searchField", ()=>{
        expect(redocers.searchRobots({},{
            type: CHANGE_SEARCH_FIELD,
            payload: ''
        })).toEqual({searchField:''})
    })

    it("Should return the state object", ()=>{
        expect(redocers.searchRobots(stateObj,{
            type: 'not the right action',
            payload: 'abc'
        })).toEqual(stateObj)
    })

    it("Should return a new state", ()=>{
        expect(redocers.searchRobots(stateObj,{
            type: CHANGE_SEARCH_FIELD,
            payload: 'new state'
        })).toEqual({searchField:'new state'})
    })

})

describe("requestRobotsReducer",()=>{
    
    const initialStateRobots = {
        isPending: false,
        robots: [],
        failed: ''
    }

    it("Should return the initialStateRobots",()=>{
        expect(redocers.requestRobotsReducer(initialStateRobots,{
            type:"wrong type"
            })).toEqual({
            isPending: false,
            robots: [],
            failed: ''
        })
    })

    it("Panding, Should change isPanding to ture",()=>{
        expect(redocers.requestRobotsReducer(initialStateRobots,{
            type:REQUES_ROBOTS_PENDING,
            payload:'test'
            })).toEqual({
            isPending: true,
            robots: [],
            failed: ''
        })
    })

    it("Error, Should input into failed",()=>{
        expect(redocers.requestRobotsReducer(initialStateRobots,{
            type:REQUES_ROBOTS_FAILED,
            payload:'failed'
            })).toEqual({
            isPending: false,
            robots: [],
            failed: 'failed'
        })
    })

    it("Success, Should change isPanding to ture",()=>{
        expect(redocers.requestRobotsReducer(initialStateRobots,{
            type:REQUES_ROBOTS_SUCCESS,
            payload:'test'
            })).toEqual({
            isPending: false,
            robots: 'test',
            failed: ''
        })
    })
})