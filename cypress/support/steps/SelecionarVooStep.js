/* global Given, Then, When */

import SelecionarVoo from '../pageobjects/SelecionarVooPage'
const selecionarvoo = new SelecionarVoo

Given(/^que eu esteja na tela de voos$/, () => {
	selecionarvoo.TeladeVoos();
});

When(/^seleciono o voo de ida e volta$/, () => {
	selecionarvoo.SelecionarVooForm();
});

And(/^seleciono a taxa de embarque com milhas$/, () => {
	selecionarvoo.TaxaEmbarque();
});

And(/^valido o resumo do pedido$/, () => {
	return true;
});

Then(/^clico em aceitar termo e continuar$/, () => {
	selecionarvoo.Continuar();
});


