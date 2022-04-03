import signup from '../Page/SignupPage'
import signupFactory from '../factories/SignupFactories'
import SignupPage from '../Page/SignupPage'

describe('SignUP', () => {

   /* beforeEach(function () {
        cy.fixture('deliver').then((massa) => {
            this.deliver = massa
        })
    })*/

    it('User should become a deliver', function () {

        var deliver = signupFactory.deliver()
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

        signup.modalContentShouldBe(expectedMessage)

    })

    it('Incorrect CPF', function () {
        var deliver = signupFactory.deliver()
        deliver.cpf = '123456789AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Oops! CPF inválido'

        signup.alertMessageShouldBe(expectedMessage)


    })

    it('Incorrect E-mail', function () {
        var deliver = signupFactory.deliver()
        deliver.email = 'dsfaa.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! Email com formato inválido.')


    })


    context('Required fields',function(){

        const messages = [
            {field: 'name',output: 'É necessário informar o nome'},
            {field: 'cpf',output: 'É necessário informar o CPF'},
            {field: 'email',output: 'É necessário informar o email'},
            {field: 'postalcode',output: 'É necessário informar o CEP'},
            {field: 'number',output: 'É necessário informar o número do endereço'},
            {field: 'delivery_method',output: 'Selecione o método de entrega'},
            {field: 'delivery_method',output: 'Adicione uma foto da sua CNH'},
        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} is required`,function(){
                SignupPage.alertMessageShouldBe(msg.output)
            })
        })
    })




   

    


})