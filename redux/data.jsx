<<<<<<< HEAD
//Action Types
const GET_LISTS_FROM_AS = "GET_LISTS_FROM_AS";


const CHANGE_USER_INFO = "CHANGE_USER_INFO";
const GET_USER_FROM_AS = "GET_USER_FROM_AS";
const ERROR_IMG = "ERROR_IMG";

//Get Actions
const MODULE_NAME = "data";
export const getLists = (state) => state[MODULE_NAME].lists; 
export const getUser = (state) => state[MODULE_NAME].user;

//Reducer
const initialState = {
    lists: [],
    user: 
    {
        photo: "https://kuduconsulting.co.zm/wp-content/uploads/2017/11/default-portrait-image-generic-profile.jpg",
        username: "username",
    }
}

export function planReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_LISTS_FROM_AS: 
            return {
                ...state,
                lists: payload,
            }
        case GET_USER_FROM_AS:
            return{
                ...state,
                user: payload
            }
        case CHANGE_USER_INFO:
            return {
                ...state,
                user:
                    {
                        photo: payload.imgUri,
                        username: payload.userName,
                    }
            }
        case ERROR_IMG:
            return {
                ...state,
                user: {
                    ...state.user,
                    photo: payload.defaultPhoto
                }
            }
        
        default:
            return state;
    }

}

//Action Creators

export const getListFromAS = (payload) => ({
    type: GET_LISTS_FROM_AS,
    payload,
})


export const getUserFromAS = (payload) => ({
    type: GET_USER_FROM_AS,
    payload,
})

export const changeUserInfo = (payload) => ({
    type: CHANGE_USER_INFO,
    payload,
})

export const errorImg = (payload) => ({
    type: ERROR_IMG,
    payload
})

//CreateID
function  createID() {
    return `${Date.now()}${Math.random()}`;
}
=======
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




>>>>>>> 7a6ed498a0b81bf904c19d664cbc073b777228c7
