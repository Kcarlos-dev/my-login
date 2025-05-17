const app = require("../src/app")
const supertest = require("supertest")
const mongoose = require("mongoose")
const request = supertest(app)

const mainUser = { name: "adm", email: "adm@email.com", password: "123456" }

beforeAll(() => {
    //Inserir usuario adm no banco
    return request.post("/user")
        .send(mainUser)
        .then(res => { })
        .catch(err => { console.log(err) })

})

afterAll(async () => {
    //remove o usuario adm do banco
    return request.delete(`/user/${mainUser.email}`)
        .then(res => { })
        .catch(err => { console.log(err) })

})


describe("Cadastro de usuario", () => {
    test("Deve cadastrar um usuario com sucesso", () => {

        const time = Date.now()
        let email = `${time}@email.com`
        let user = { name: "Carlos", email: email, password: "123456" }

        return request.post("/user")
            .send(user)
            .then(res => {

                expect(res.statusCode).toEqual(200)
                expect(res.body.email).toEqual(email)

            }).catch(err => {
                throw err
            })

    })
    test("Deve impedir que um usuario se cadastre como os daddos vazios", () => {
        let user = { name: "", email: "", password: "" }

        return request.post("/user")
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(400)
            }).catch(err => {
                throw err
            })
    })
    test("Deve impedir que um usuario se cadastre com um e-mail repetido", () => {

        const time = Date.now()
        let email = `${time}@email.com`
        let user = { name: "Carlos", email: email, password: "123456" }

        return request.post("/user")
            .send(user)
            .then(res => {

                expect(res.statusCode).toEqual(200)
                expect(res.body.email).toEqual(email)

                return request.post("/user")
                    .send(user)
                    .then(res => {
                        expect(res.statusCode).toEqual(400)
                        expect(res.body.error).toEqual("E-mail já cadastrado")
                    })
                    .catch(err => {
                        throw err
                    })

            }).catch(err => {
                throw err
            })


    })

})
