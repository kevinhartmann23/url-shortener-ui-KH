const baseUrl = 'http://localhost:3000/'
const apiUrl = 'http://localhost:3001/api/v1/urls'

describe('Home Page', () => {
  it('should visit home page', () => {
    cy.intercept('GET', apiUrl, { fixture: 'urlData' })
    
    cy
      .visit(baseUrl)
  })

  it('should submit information to server', () => {
    cy.intercept('POST', apiUrl, {fixture: 'post'})
    
    cy
      .get('input').eq(0).type('TITLE')
      .get('input').eq(1).type('ajksdhfjkahsdjfhasdf')
      .get('button').click()
  })

  it('should display a success message after submit', () => {
    cy 
      .get('.success-message').should('have.text', 'Url successfully shortened to http://localhost:3001/useshorturl/2!')
  })

  it('should reset input values after submit', () => {
    cy
      .get('input').eq(0).should('have.value', '')
      .get('input').eq(1).should('have.value', '')
  })

  it('should display a new url card on success', () => {
    cy
      .get('.url').eq(1)
      .get('h3').eq(1).should('have.text', 'TITLE')
      .get('a').eq(1).should('have.text', 'http://localhost:3001/useshorturl/2')
      .get('a').eq(1).should('have.attr', 'href')
      .get('.url p').eq(1).should('have.text', 'ajksdhfjkahsdjfhasdf')
  })

  it('should display any error messages if error occurs', () => {
    cy.intercept('POST', apiUrl, { statusCode: 400 })

    cy
      .get('input').eq(0).type('TITLE')
      .get('input').eq(1).type('ajksdhfjkahsdjfhasdf')
      .get('button').click()

      .get('.error-message').should('have.text', 'Unexpected end of JSON input')
  })
})