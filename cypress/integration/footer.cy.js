describe('Test footer button', () => {
  it('finds the content "type"', () => {
    cy.visit('https://wonderful-bush-0d50b8303.4.azurestaticapps.net')
    cy.get('.footer > a').scrollIntoView()
    cy.wait(2000)
    cy.get('.footer > a').scrollIntoView().click()
    cy.wait(2000)
  })
})