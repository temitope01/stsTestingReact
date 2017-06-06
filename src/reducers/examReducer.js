import * as Types from '../actions/actionTypes';

const initialState = {
    exams: [],
    currentExam: {}
};

export default function examReducer(state = initialState, action) {

    switch (action.type) {
        case Types.GET_EXAMS:
            return {...state, exams: [action.exams]};

        case Types.START_EXAM:
            return {...state, currentExam: action.exam}

        case Types.CURRENT_EXAM:
            return {...state, currentExam: action.exam};

        default:
            return state;
    }
}