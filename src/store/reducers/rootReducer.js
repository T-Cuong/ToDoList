const initState = {
    users: [
        { id: 1, name: 'Cuong' },
        { id: 2, name: 'Vu Pham Trong Cuong' },
        { id: 3, name: 'Harry Poster' }
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {//state o day la trang thai cua redux

    switch (action.type) {
        case 'DELETE_USER'://khi truyen action DELETE_USER
            let users = state.users;//lay ra list user hien tai cua redux
            users = users.filter(item => item.id !== action.payload.id)//filter loc
            return {
                ...state, users//coppy va ghi de , coppy de sau nay neu co nhieu du lieu thi posts trong initState se ko bi anh huong no se coppy va ghi de len user thoi
            };

        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10000)//tao id rando
            let user = { id: id, name: `random - ${id}` }

            return {
                ...state, users: [...state.users, user]//coppy obj , coppy mang user va ghi de len mang nhung user moi
            }

        default:
            return state;
    }

}

export default rootReducer;
