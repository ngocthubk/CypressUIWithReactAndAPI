
export let home = {
    ct_Login_View: '[data-testid="open-login-view"]',
    ct_Username: '[data-testid="login-email"]',
    ct_Password: '[data-testid="login-password"]',
    bt_Login: '[data-testid="login-submit"]',
    bt_Add_Note: '[data-testid="add-new-note"]',
    lb_Note_Item: '[data-testid="note-card-title"]',
    bt_Delete_Note: '[data-testid="note-delete"]',
    bt_Confirm_Delete: '[data-testid="note-delete-confirm"]'
}

Cypress.Commands.add('login',(username, password ) => {
    cy.session([username, password],() => {
        cy.visit('/app/login')
    
        cy.get(home.ct_Username).type(username)
        cy.get(home.ct_Password).type(password)
        cy.get(home.bt_Login).click()
        cy.url().should('not.include', '/login')
    // },
    // {
    //   validate() {
    //     cy.request('/api/users/login').its('status').should('eq', 200)
    //   },
    // }

    })

})

Cypress.Commands.add('deleteNote',(title) => {
    cy.get(home.bt_Delete_Note).contains(title).click()
    cy.get(home.bt_Confirm_Delete).contains(title).click()

})