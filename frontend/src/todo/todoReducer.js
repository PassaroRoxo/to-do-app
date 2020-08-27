const INITIAL_STATE = {description: '', list: []}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.playload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_ADD':
            return { ...state, description: '' }
        default:
            return state
    }
}