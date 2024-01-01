describe('Test console professional skills', () => {
  it('finds the content "type"', () => {
    cy.visit('https://wonderful-bush-0d50b8303.4.azurestaticapps.net')
    cy.get('.professional_skills').scrollIntoView()
    cy.wait(1000)
    cy.get('.terminal > .switch > :nth-child(2)').click()
    cy.wait(1000)
    cy.get('.terminal > .switch > :nth-child(3)').click()
    cy.wait(1000)
    cy.get('.terminal > .switch > :nth-child(4)').click()
    cy.wait(1000)
  })
})