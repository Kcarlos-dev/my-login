const app = require("../src/app")
const supertest = require("supertest")
const request = supertest(app)

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


})