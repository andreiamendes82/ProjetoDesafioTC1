class SelecionarVooElements {

    Title = () => {return '.span9 > .title-v2'}
    VooIda = () => { return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    VooVolta = () => { return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    TaxaEmbarque = () => { return '#totalMiles'}
    Termos = () => { return '.terms > label'}
    Continuar = () => { return '.button > .btn'}
    

}
export default SelecionarVooElements;