import request from 'superagent';

class UsersApi {

    createUser = (user)=> {
        return new Promise((resolve, reject) => {
            resolve(Object.assign({}, user));
        })
    };

    logUserIn = (user) => {
        return new Promise((resolve, reject)=> {
            request
                .post('http://localhost:8080/StsExam/webresources/candidate/login')
                .send(user)
                .set('Authorization', 'Test')
                .set('Access-Control-Allow-Headers','POST, GET, PUT DELETE')
                .set('Content-Type', 'application/json; charset=utf-8')
                .set('Access-Control-Allow-Origin', 'http://localhost:3000')
                .end((err, res)=> {
                    if (err || !res.ok) {
                        reject(err);
                    } else {
                        resolve(Object.assign({}, res.body));
                    }

                });


        })
    }
}

export default new UsersApi();