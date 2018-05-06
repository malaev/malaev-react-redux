const initialState = {
    postList: [
        {
            title: 'something',
            text: 'something'
        }
    ]
};

export default function reducer(state = initialState, action) {
    switch (action.type){
        case 'CREATE_POST':
            return Object.assign({}, state, {
                postList: [
                    action.payload,
                    ...state.postList
                ]
            })
    }
    return state;
}