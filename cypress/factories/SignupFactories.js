var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '34999659522',
            address: {
                postalcode: '38400612',
                street: 'Rua dos Pereiras',
                number: '233',
                details: 'Perto da esquina',
                district: 'Brasil',
                city_state: 'Uberlândia/MG'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }
}