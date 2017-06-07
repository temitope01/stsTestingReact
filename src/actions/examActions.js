import * as Types from './actionTypes';
import ExamsApi from '../api/examsApi';

export function getExamSuccess(exams) {
    return {type: Types.GET_EXAMS, exams};
}

export function startExamSuccess(exam) {
    return {type: Types.START_EXAM, exam};
}

export function endExamSuccess(exam) {
    return {type: Types.END_EXAM, exam};
}

export function currentExamSuccess(exam) {
    return {type: Types.CURRENT_EXAM, exam};
}

export function getExams() {
    return dispatch => {
        return ExamsApi.getExams().then(exams=> {
            dispatch(getExamSuccess(exams));
        }).catch(err=> {
            throw(err);
        })
    }
}

export function startExam(exam) {
    return dispatch => {
        return ExamsApi.startExam(exam).then( examDetail => {
            dispatch(startExamSuccess(examDetail));
        }).catch(err => {
            throw(err);
        })
    }
}

export function currentExam(exam) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            resolve(dispatch(currentExamSuccess(exam)));
        })
    }
}