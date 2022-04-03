describe('home page',()=> { 
    it('app deve estar online',()=> { //caso te teste- it
        cy.visit('/')// cy - comando para acessar api  e ter acesso aos recursos do framework, aqui ele acessa o site do projeto de teste automatizado
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats') // busca slogan h1 da pagina que inspecionei, e deve ter o texto 'Seja um parceiro entregador pela Buger Eats'
    })

})//definindo uma switch de testes