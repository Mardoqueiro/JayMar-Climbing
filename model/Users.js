import { connection as db } from '../config/index.js'
import { createToken } from '../middleware/AuthenicateUser.js'
import { compare, hash } from 'bcrypt'

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        ;
        `
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Issue when retrieving all users.')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    fetchUser(req, res) {
        try {
            const strQry = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
            db.query(strQry, (err, result) => {
                if (err) throw new Error('Issue when retrieving a user.')
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: 'Please try again later.'
            })
        }
    }
    async signupUser(req, res) {
        try {
            let data = req.body
            data.userPass = await hash(data.userPass, 12)
            // Payload
            let user = {
                emailAdd: data.emailAdd,
                userPass: data.userPass
            }
            let strQry = `
        INSERT INTO Users
        SET ?;
        `
            db.query(strQry, [data], (err) => {
                if (err) {
                    res.json({
                        status: 400,
                        msg: 'This email has already been taken'
                    })
                } else {
                    const token = createToken(user)
                    res.json({
                        token,
                        msg: 'You are now registered.'
                    })
                }
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    async updateUser(req, res) {
        try {
            let data = req.body
            if (data.userPass) {
                data.userPass = await hash(data.userPass, 12)
            }
            const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id}
        `
            db.query(strQry, [data], (err) => {
                if (err) throw new Error('Unable to update a user')
                res.json({
                    status: res.statusCode,
                    msg: 'The user record was updated.'
                })
            })
        } catch (e) {
            res.json({
                status: 400,
                err: e.message
            })
        }

    }
    deleteUser(req, res) {
        try {
            const strQry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
            db.query(strQry, (err) => {
                if (err) throw new Error('To delete a user, please review your delete query.')
                res.json({
                    status: res.statusCode,
                    msg: 'A user\'s information was removed.'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    async login(req, res) {
        try {
            const { emailAdd, userPass } = req.body
            const strQry = `
        SELECT userID, firstName, lastName, userAge, Gender, userRole, emailAdd, userPass, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
            db.query(strQry, async (err, result) => {
                if (err) throw new Error('To login, please review your query.')
                if (!result?.length) {
                    res.json(
                        {
                            status: 401,
                            msg: 'You provided a wrong email.'
                        }
                    )
                } else {
                    const isValidPass = await compare(userPass, result[0].userPass)
                    if (isValidPass) {
                        const token = createToken({
                            emailAdd,
                            userPass
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'Invalid password or you have not registered'
                        })
                    }
                }
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
}
export { Users }