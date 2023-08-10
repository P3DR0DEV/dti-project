## Descrição do funcionamento do sistema

O código construído para a resolução do tema proposto seguiu a seguinte lógica:

- Os valores informados serão multiplicados por cada valor de banho de cada uma das três
  petHouses.
- O menor dos valores, já multiplicado pelo número informado de cachorros
  grandes e pequenos de cada uma das três petHouses, será aquele indicado pelo sistema ao
  consumidor Eduardo.

  - Caso haja dois valores iguais ao fim da multiplicação, o sistema
    realizará a comparação com base na distância em KM (informação também fornecida na construção
    do código).

Portanto, as premissas assumidas são as de que, se o valor do banho de uma petHouse - multiplicado pela quantidade de cachorros grandes e pequenos e com base no valor diferente de cada petHouse e de cada porte de cachorro - for menor que o das outras duas petHouses, então essa será adequada e mais econômica para o canil de Eduardo e; se os valores retornam iguais após a multiplicação, então a petHouse de menor distância será ideal para Eduardo.

Para a realização do código, decidi utilizar o JavaScript, em razão da minha familiaridade com a linguagem.

Além disso, tal linguagem foi importante, pois baseei o código na funcionalidade do date object, um built in object simples, que ofereceu o retorno que precisava, de forma a simplificar a checagem do dia, informando-me sobre os fins de semana e dias úteis.
Nesse caso, a data informada passa por um processo de tratamento, uma vez que o date object não suporta o padrão brasileiro (DD/MM/AA) e, após isso, há a checagem dos dias úteis ou finais de semana utilizando o método getDay() - de forma que o 0 e 6 representam fins de semana, começando por domingo e terminando por sábado.

Para o funcionamento correto do programa, o usuário deve levar em conta que, caso inserido uma data como "01/13/2023" o retorno será referente ao dia "01/01/2024" visto que este é o comportamento padrão do JavaScript.

- O programa também aceitará datas abreviadas como "01/01/23" ou "1/1/23".
- Seria possível contornar este comportamento criando funções que checassem o mes/dia inseridos, possiveis melhorias futuras.
- O número de cachorros inserido será aceito tanto do tipo number, ou seja 1, 2, 3, etc, ou do tipo string, ou seja "1", "2", "3", etc.
- Números escritos por extenso não serão aceitos. Exemplo: "01/01/2023", "tres", "quatro".

Por fim, a execução do sistema será realizada com base nas seguintes instruções:

- O projeto foi feito em JavaScript, caso não possua o Node instalado, siga as instruções disponíveis em: [NodeJS](https://nodejs.org/pt-br)
- Baixar ou Clonar este repositório GIT
- Na pasta inicial, rodar o código:

  ```
  node index.js
  ```

- Para funcionar o sistema, Eduardo deverá colocar o dia no padrão brasileiro "24/02/2002", seguido de a quantidade de cachorros grandes e cachorros pequenos na inicialização da função BestPetHouse.
  ```
  bestPetHouse("1/1/2023", 2, 1);
  ```
