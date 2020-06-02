import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'

const initialStateSearch = {
    searchField:''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state, {searchField:action.payloud})
        default:
            return state
    }
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    failed: ''
}

export const requestRobotsReducer = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUES_ROBOTS_PENDING:
            return Object.assign({} , state, {isPending: true})
        case REQUES_ROBOTS_FAILED:
            return Object.assign({} , state, {failed: action.payloud, isPending: false})
        case REQUES_ROBOTS_SUCCESS:
            return Object.assign({} , state, {robots: action.payloud, isPending: false})
        default:
            return state
    }
}