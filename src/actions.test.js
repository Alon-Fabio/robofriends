import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'
import * as actions from './actions'

describe("setSearchField", ()=>{
    it("Sould return an object with payload", ()=>{
        expect(actions.setSearchField("test")).toEqual({
            type:CHANGE_SEARCH_FIELD,
            payload:"test"
        })
    })
})

describe("requestRobotsAction", ()=>{
    it("Shuld return the list", ()=>{
        function mockDispatch(data) {
            return data
        }
        expect.assertions(1)
        return actions.requestRobotsAction()
            .then(result => result.json())
            .then(result => expect(result).toHaveLength(9))
    })
})