/// <reference types="cypress"/>

const smiles = Cypress.config("baseUrl")
import BuscarVoosElements from '../elements/BuscarVoosElements'
const preencherCampo = new BuscarVoosElements

class BuscarVoos {

//Chamada da nossa baseUrl
    
AbrirBrowser(){
    cy.visit(smiles)    
}

//Preencher Partindo De

PreencherCamposForm() {
    
    cy.get(preencherCampo.PreencherCampoPartindo()).type('São Paulo')
    cy.get(preencherCampo.PartindoDe()).click()
    cy.get(preencherCampo.PreencherCampoDestino()).type('Rio de Janeiro')
    cy.get(preencherCampo.Destino()).click()

}

SelecionarDatas() {
    cy.get(preencherCampo.CampoIda()).click({force:true})
    cy.get(preencherCampo.DataIda()).click({force:true})
    cy.get(preencherCampo.DataVolta()).click({force:true})
    
}

BotaoConfirmar() {
    cy.get(preencherCampo.Confirmar()).click({force:true})
}

BotaoBuscarVoos() {
    cy.get(preencherCampo.BuscarVoos()).click({force:true})
}
    
    



visualizarTest() {
    cy.screenshot
    cy.wait(1000)

}
    
    
}
export default BuscarVoos;