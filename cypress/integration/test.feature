Feature: busca viagem

    Scenario: Preencher Campos Partindo de e Destino

        Given que eu tenha acessado o site
        When preencher os campos Partindo de e Destino
        And selecionar as datas de ida e volta
        And clicar no confirmar
        Then clicar em Buscar Voos


    Scenario: Selecionar voo ida e volta

        Given que eu esteja na tela de voos
        When seleciono o voo de ida e volta
        And seleciono a taxa de embarque com milhas
        And valido o resumo do pedido
        Then clico em aceitar termo e continuar