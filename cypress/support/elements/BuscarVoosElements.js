class BuscarVoosElements {

    PartindoDe = () => { return '#ulOriginAirport > :nth-child(3)'}
    PreencherCampoPartindo = () => { return '#inputOrigin'}
    
    Destino = () => { return '#ulDestinationAirport > :nth-child(1)'}
    PreencherCampoDestino = () => { return '#inputDestination'}

    CampoIda = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    DataIda = () => { return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody > :nth-child(3) > :nth-child(7) > .ui-state-default'}
    DataVolta = () => { return '.ui-datepicker-group-last > .ui-datepicker-calendar > tbody > :nth-child(4) > :nth-child(2) > .ui-state-default'}
    Confirmar = () => { return '.ui-datepicker-current'}
    BuscarVoos = () => { return '#submitFlightSearch'}

}
export default BuscarVoosElements;