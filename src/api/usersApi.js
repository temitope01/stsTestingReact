class UsersApi {

    createUser(user) {
        return new Promise((resolve, reject) => {
            resolve(Object.assign({}, user));
        })
    }
}

export default new UsersApi();