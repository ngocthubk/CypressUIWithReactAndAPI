
export const note = {
    lb_Add_New_Note: 'Add new note',
    ct_Dialog: '[role="dialog"]',
    ct_Category: "[data-testid='note-category']",
    lb_Category: '[for="category"]',
    ct_Options: 'option',
    ct_Completed: '[data-testid="note-completed"]',
    lb_Completed: '[for="completed"]',
    ct_Title: '[data-testid="note-title"]',
    lb_Title: '[for="title"]',
    ct_Description: '[data-testid="note-description"]',
    bt_Create: '[data-testid="note-submit"]',
    bt_Cancel: '[data-testid="note-cancel"]',
    lb_Description: '[for="description"]',
    lb_Feedback: '.invalid-feedback'
}

Cypress.Commands.add('createNote',(category, title, desc ) => {
    
    cy.get(note.ct_Category).select(category)
    if (title)
        cy.get(note.ct_Title).type(title)
    if (desc)
        cy.get(note.ct_Description).type(desc)
    cy.get(note.bt_Create).click()
})

