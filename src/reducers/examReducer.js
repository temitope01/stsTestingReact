import * as Types from '../actions/actionTypes';

const initialState = {
    exams: []
};

export default function examReducer(state = initialState.exams, action) {

    switch (action.type) {
        case Types.GET_EXAMS:
            return [...state, action.exams];

        case Types.START_EXAM:
            return Object.assign(state.exam, action.exam);

        case Types.CURRENT_EXAM:
            return Object.assign()

        default:
            return state;
    }
}