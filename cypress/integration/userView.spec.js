const baseUrl = 'http://localhost:3000/'
const apiUrl = 'http://localhost:3001/api/v1/urls'

describe('Home Page', () => {
  it('should visit home page', () => {
    cy.intercept('GET', apiUrl, { fixture: 'urlData' })
    
    cy 
      .visit(baseUrl)
  })

  it('should display the app title', () => {
    cy 
      .get('h1').should('have.text', 'URL Shortener')
  })

  it('should display any existing urls saved to dashboard', () => {
    cy 
      .get('.url')
      .get('h3').should('have.text', 'STUBBED YO!')
      .get('a').should('have.text', 'http://localhost:3001/STUBBING/REALLY/WORKS')
      .get('a').should('have.attr', 'href')
      .get('p').should('have.text', 'https://longURL.com/reaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaallyLoooooooooooooooooooongUUUUUUUUUUUURRRRRRRRRRRRLLLLLLLLLLLLLLLL')
  })

  it('should display a form with empty values', () => {
    cy 
      .get('input').eq(0).should('have.attr', 'placeholder', 'Title...')
      .get('input').eq(1).should('have.attr', 'placeholder', 'URL to Shorten...')
      .get('button').should('have.text', 'Shorten Please!')
  })

  it('should fill out form and values should change', () => {
    cy
      .get('input').eq(0).type('TESTING TITLE')
      .get('input').eq(1).type('TESTING URL')
      .get('input').eq(0).should('have.value', 'TESTING TITLE')
      .get('input').eq(1).should('have.value', 'TESTING URL')
  })
})