import { home } from "../support/commands/home"
import {note} from "../support/commands/note"
import { invalid_note } from "../fixtures/invalid-note"
import 'cypress-axe'

describe ('Successful creation', () => {
  let title = 'Experiment Cypress'
  let category = 'Home'
  let desc = 'Experiment commands'
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    cy.login('thunguyen18.vn@gmail.com','123321a@')
    cy.visit('/app/login')
  })
  it('Create a note successfully', () => {
    
    cy.injectAxe()
    // cy.checkA11y('.page-layout',{
    //     skipFailures: true
    //   })
    // Step 1: Open the dialog Add new note
    cy.get(home.bt_Add_Note).click()
    // Verify the labels and the 3 options of the Category field
    cy.contains(note.lb_Add_New_Note).should('be.visible')
    cy.get(note.ct_Dialog).get(note.lb_Category).should('be.visible')
    cy.get(note.ct_Dialog).get(note.lb_Completed).should('be.visible')
    cy.get(note.ct_Dialog).get(note.lb_Title).should('be.visible')
    cy.get(note.lb_Completed).should('be.visible')
    
    cy.get(note.ct_Dialog).get(note.ct_Options).should('have.length', 3)

    cy.get(note.ct_Options).eq(0).contains('Home').should('be.visible')
    cy.get(note.ct_Options).eq(1).contains('Work').should('be.visible')
    cy.get(note.ct_Options).eq(2).contains('Personal').should('be.visible')

    //Step 2: Input into the fields, and click the button Create
    cy.inputNote(category,title,desc)
    // cy.checkA11y('.modal-content',{
    //     skipFailures: true
    //   })
    cy.get(note.bt_Create).click()
    // Verify if the note is created successfully
    cy.get(home.lb_Note_Item).contains(title).should('be.visible')
  })
  afterEach(()=> {
    cy.deleteNote(title)
  })
})

describe('Unsuccessful creation', () => {
  
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    
    cy.login('thunguyen18.vn@gmail.com','123321a@')
    cy.visit('/app/login')
  })
  invalid_note.forEach(($item)=>{
    const [title, desc, category, completed,message1,message2 ] = $item
    it(`Input invalid data ${title}, ${desc} into the fields`, () => {
      cy.injectAxe()
      // cy.checkA11y('.page-layout',{
      //   skipFailures: true
      // })
      cy.get(home.bt_Add_Note).click()
      //Step 2: Input into the fields, and click the button Create
      cy.inputNote(category,title,desc)
      // cy.checkA11y('.modal-content',{
      //   skipFailures: true
      // })
      cy.get(note.bt_Create).click()
      // Verify if the note is created successfully
      if (message1)
        cy.get(note.lb_Feedback).contains(message1).should('be.visible')
      if (message2)
        cy.get(note.lb_Feedback).contains(message2).should('be.visible')
    })
  })
  
})
