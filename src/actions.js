import {CHANGE_SEARCH_FIELD} from './constants'

export const setsearchField = (text) => ({
    type=CHANGE_SEARCH_FIELD,
    payloud=text
})