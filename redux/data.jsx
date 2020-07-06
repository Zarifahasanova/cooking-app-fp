const ADD_PHOTO_USERNAME_URL = 'ADD_PHOTO_USERNAME_URL';
const SET_ALL_DATA = 'SET_ALL_DATA';


const MODULE_NAME = "data";
export const getData = (state) => state[MODULE_NAME].data;

const InitialStateOneTimeList = {

    data: {
        imgUrl: '',
        username: 'Username',
    }
}
export function reducer(state = initialStateOneTimeList, { type, payload }){
switch(type) {
    case ADD_PHOTO_USERNAME_URL: {
        return {
            ...state ,
            data: {
                ...state.data,
                username: payload.username,
                imgUrl: payload.imgUrl 
            }
        }
    };
    case SET_ALL_DATA: {
        return {
            ...state,
            data: payload.data
        }
    }
    default: 
    return state;
   }
}

export const addPhotoUrlAndUsername = payload => ({
    type: ADD_PHOTO_USERNAME_URL,
    payload
})


export const setAllData = payload => ({
    type: SET_ALL_DATA,
    payload
})




