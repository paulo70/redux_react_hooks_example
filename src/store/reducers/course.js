const INITIAL_STATE = {
    data: [
        'React JS',
        'React Native',
        'Node JS',
        'Redux',
        'Redux Saga'
    ]
}

function course(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return {
                ...state,
                data: [ ...state.data, action.title ]
            }

        case 'CLEAR_COURSE':
            return {
                ...state,
                data: []
            }

        default:
            return state
    }
}

export default course