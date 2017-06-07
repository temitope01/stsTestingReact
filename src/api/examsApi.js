import database from '../services/firebase';

class ExamsApi {



    getExams = () => {
        return new Promise((resolve, reject)=> {

            const exam = database.ref('ScheduledExam/Practice');

            exam.once('value', (snapshot)=> {
                resolve(snapshot.val());
            })
        })
    };

    startExam = (exams) => {
        return new Promise((resolve, reject)=> {

            const exam = database.ref(`ExamQuestion/${exams.trim()}`);

            exam.once('value', (snapshot)=> {
                resolve(Object.assign({}, snapshot.val()));
            });
        })

    };

    endExam = () => {

    };
}

export default new ExamsApi();