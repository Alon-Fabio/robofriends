import {CHANGE_SEARCH_FIELD,
    REQUES_ROBOTS_PENDING,
    REQUES_ROBOTS_SUCCESS,
    REQUES_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => ({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})
const robotsUrl = 'https://jsonplaceholder.typicode.com/users'
export const requestRobotsAction = (Url=robotsUrl) => async (dispatch) => {
    try{
    dispatch({type: REQUES_ROBOTS_PENDING});
    const data = await fetch(Url)
      .then(response=> response.json())
    dispatch({type: REQUES_ROBOTS_SUCCESS, payload: data})
    } catch(error) {
    dispatch({type: REQUES_ROBOTS_FAILED, payload: error})
    }
}
// export const requestRobotsAction = (robotsUrl) => (dispatch) => {
//     dispatch({type: REQUES_ROBOTS_PENDING});
//     fetch(robotsUrl)
//         .then(response=> response.json())
//         .then((data)=> dispatch({type: REQUES_ROBOTS_SUCCESS, payload: data}))
//         .catch(error => { dispatch({type: REQUES_ROBOTS_FAILED, payload: error})})
// }
