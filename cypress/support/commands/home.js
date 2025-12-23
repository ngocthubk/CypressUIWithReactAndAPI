
export let home = {
    ct_Login_View: '[data-testid="open-login-view"]',
    ct_Username: '[data-testid="login-email"]',
    ct_Password: '[data-testid="login-password"]',
    bt_Login: '[data-testid="login-submit"]',
    bt_Add_Note: '[data-testid="add-new-note"]',
    lb_Note_Item: '[data-testid="note-card-title"]',
    bt_Delete_Note: '[data-testid="note-delete"]',
    bt_Confirm_Delete: '[data-testid="note-delete-confirm"]',
    lb_Note_Container: '[data-testid="note-card"]'
}

Cypress.Commands.add('login',(username, password ) => {
    cy.session([username, password],() => {
        cy.visit('/app/login')
        if (username)
            cy.get(home.ct_Username).type(username)
        if (password)
            cy.get(home.ct_Password).type(password)
        cy.get(home.bt_Login).click()
        cy.url().should('not.include', '/login')

    })

})

Cypress.Commands.add('deleteNote',(title) => {
    cy.get(home.lb_Note_Item)
    .contains(title)
    .parent()
    .get(home.bt_Delete_Note).click()
    cy.get(home.bt_Confirm_Delete).click()

})