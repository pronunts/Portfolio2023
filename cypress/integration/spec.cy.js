describe('Test page reload', () => {
  it('passes', () => {
    cy.visit('https://wonderful-bush-0d50b8303.4.azurestaticapps.net')
  })
  it('cy.reload() - reload the page', () => {
    // https://on.cypress.io/reload
    cy.reload()

    // reload the page without using the cache
    cy.reload(true)
  })    
})