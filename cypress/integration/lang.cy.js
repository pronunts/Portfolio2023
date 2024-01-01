describe('Test button languages', () => {
  it('finds the content "type"', () => {
    cy.visit('https://wonderful-bush-0d50b8303.4.azurestaticapps.net')
    cy.get('.js-change-lang-en').click()
    cy.wait(2000)
    cy.get('.net-and-lang > .switch > :nth-child(1)').click()
    cy.wait(2000)
  })
})