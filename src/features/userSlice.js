import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    uid: null,
    name: '',
    photo: '',
    email: '',
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) =>{
            state.uid = action.payload.uid
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo = action.payload.photo
        },
        setSignOutState: state =>{
            state.uid = ''
            state.name = ''
            state.email = ''
            state.photo = ''
        }
    }
})

export const {setUserLoginDetails, setSignOutState} = userSlice.actions

export const selectUserId = state => state.user.uid
export const selectUserName = state => state.user.name
export const selectUserEmail = state => state.user.email
export const selectUserPhoto = state => state.user.photo

export default userSlice.reducer