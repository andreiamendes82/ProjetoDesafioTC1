/* global Given, Then, When */

import BuscarVoos from '../pageobjects/BuscarVoosPage'
const preencher = new BuscarVoos


Given(/^que eu tenha acessado o site$/, () => {
    preencher.AbrirBrowser();	
});

When(/^preencher os campos Partindo de e Destino$/, () => {
    preencher.PreencherCamposForm();	
});

And(/^selecionar as datas de ida e volta$/, () => {
	preencher.SelecionarDatas();

});

And(/^clicar no confirmar$/, () => {
	preencher.BotaoConfirmar();
});

Then(/^clicar em Buscar Voos$/, () => {
	preencher.BotaoBuscarVoos();
});
