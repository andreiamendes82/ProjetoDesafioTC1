/// <reference types="cypress"/>



import SelecionarVooElements from '../elements/SelecionarVooElements'
const selecionar = new SelecionarVooElements


class SelecionarVoo {
    TeladeVoos (){
        cy.get(selecionar.Title()).should('contain' , 'Sugerido para você')
    }
    SelecionarVooForm() {
        cy.get(selecionar.VooIda()).click({force:true})
        cy.get(selecionar.VooVolta()).click({force:true})
    }
    
    TaxaEmbarque() {
        cy.get(selecionar.TaxaEmbarque()).click({force:true})
    }
    Continuar() {
        cy.get(selecionar.Termos()).click({force:true})
        cy.get(selecionar.Continuar()).click({force:true})
    }    
        
    






}
export default SelecionarVoo;