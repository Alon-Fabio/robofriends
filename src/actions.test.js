import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'
import * as actions from './actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'


let store
let mockStore
beforeEach(()=>{
    mockStore = configureStore([thunk])
    store = mockStore({})
})
describe("setSearchField", ()=>{
    it("Sould return an object with payload", ()=>{
        const testPayload = "test"
        expect(actions.setSearchField(testPayload)).toEqual({
            type:CHANGE_SEARCH_FIELD,
            payload:testPayload
        })
    })
})

describe("requestRobotsAction", ()=>{

    it("Shuld be pending and fail the fatch call", async ()=>{
        expect.assertions(2)
        const wrongApiLink = "https://jsonplac"
        await store.dispatch(actions.requestRobotsAction(wrongApiLink))
        const action = store.getActions()
        
        expect(action[0].type).toEqual(REQUES_ROBOTS_PENDING);
        expect(action[1].type).toEqual(REQUES_ROBOTS_FAILED);
    })

    it("Shuld be pending and success", async ()=>{
        expect.assertions(3)
        // Testing API ↓
        const testingAPIurl = 'https://jsonplaceholder.typicode.com/todos/1'
        await store.dispatch(actions.requestRobotsAction(testingAPIurl))
        const action = store.getActions()

        expect(action[0].type).toEqual(REQUES_ROBOTS_PENDING)
        expect(action[1].type).toEqual(REQUES_ROBOTS_SUCCESS)
        expect(action[1].payload).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
            })
    })
    
})