describe('Test menu', () => {
  it('finds the content "type"', () => {
    cy.visit('https://wonderful-bush-0d50b8303.4.azurestaticapps.net')
    cy.get('.menu > :nth-child(2) > a').click()
    cy.wait(2000)
    cy.get('.menu > :nth-child(3) > a').click()
    cy.wait(2000)
  })
})