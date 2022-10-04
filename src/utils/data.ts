interface Info {
  id: number
  description: string
  count: number
}

interface City {
  id: number
  city: string
  country: string
  flag: string
}

interface Continent {
  id: string
  name: string
  callPhrase: string
  description: string
  callImage: string
  pageImage?: string
  info: Info[]
  plus100Cities: City[]
}

const continents: Continent[] = [
  {
    id: 'north-america',
    name: 'América do Norte',
    callPhrase: 'Bem vindo ao "novo mundo".',
    description:
      'A América do Norte é um subcontinente que compreende a porção setentrional do continente americano. Existem duas formas de classificar esse continente: a primeira considera que a América do Norte é apenas a parte mais setentrional da América, separada da América Central na fronteira entre o México e a Guatemala, a segunda classificação reconhece apenas uma América do Norte e uma América do Sul, traçando o limite no Istmo do Panamá (umas vezes no Canal do Panamá, outras na fronteira entre o Panamá e a Colômbia). Pela última definição, a América do Norte incluiria a América Central Continental e Insular (Caribe).',
    callImage:
      'https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1087&q=80',

    info: [
      {
        id: 0,
        description: 'países',
        count: 29,
      },
      {
        id: 1,
        description: 'línguas',
        count: 150,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 9,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Nova York',
        country: 'Estados Unidos da América',
        flag: 'https://www.worldometers.info/img/flags/us-flag.gif',
      },
      {
        id: 1,
        city: 'Miami',
        country: 'Estados Unidos da América',
        flag: 'https://www.worldometers.info/img/flags/us-flag.gif',
      },
      {
        id: 2,
        city: 'Los Angeles',
        country: 'Estados Unidos da América',
        flag: 'https://www.worldometers.info/img/flags/us-flag.gif',
      },
      {
        id: 3,
        city: 'Toronto',
        country: 'Canadá',
        flag: 'https://www.worldometers.info/img/flags/ca-flag.gif',
      },
    ],
  },
  {
    id: 'south-america',
    name: 'América do Sul',
    callPhrase: 'O continente dos extremos.',
    description:
      'A América do Sul é um continente[2][3] que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.[4][5] A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente. Os outros pontos extremos da América do Sul são: ao norte a Punta Gallinas, na Colômbia, ao leste a Ponta do Seixas, no Brasil, e a oeste a Punta Pariñas, no Peru. Seus limites naturais são: ao norte com o mar do Caribe; a leste, nordeste e sudeste com o oceano Atlântico; e a oeste com o oceano Pacífico.[6] O Brasil representa atualmente a metade da população e produto econômico desta região.',
    callImage:
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    info: [
      {
        id: 0,
        description: 'países',
        count: 14,
      },
      {
        id: 1,
        description: 'línguas',
        count: 220,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 10,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Buenos Aires',
        country: 'Argentina',
        flag: 'https://www.worldometers.info/img/flags/ar-flag.gif',
      },
      {
        id: 1,
        city: 'Lima',
        country: 'Peru',
        flag: 'https://www.worldometers.info/img/flags/pe-flag.gif',
      },
      {
        id: 2,
        city: 'Rio de Janeiro',
        country: 'Brasil',
        flag: 'https://www.worldometers.info/img/flags/br-flag.gif',
      },
    ],
  },
  {
    id: 'asia',
    name: 'Ásia',
    callPhrase: 'Um terço da superfície da Terra está aqui.',
    description:
      'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial. A Ásia faz fronteira no lado ocidental com a África e com a Europa, e no lado oriental com o oceano Pacífico, a Oceania e, em menor proporção, com a América do Norte, pelo Estreito de Bering. O ponto extremo setentrional do continente está localizado no oceano Glacial Ártico. Mas na parte meridional, a Ásia chega ao seu final na região mais quente dos trópicos, nas imediações da linha do equador.[1] Na Ásia são encontradas algumas das montanhas mais altas do mundo; os rios mais extensos; os maiores desertos, planícies e planaltos; as selvas e florestas mais densas. A altitude máxima e a mínima está localizada na Ásia. O monte Everest, a altitude máxima do planeta, está localizada a 8 848 m acima do nível do mar; ao longo da linha fronteiriça da República Democrática Federal do Nepal com a região autônoma chinesa do Tibete. O litoral do mar Morto, a planície de menor altitude do mundo, estão localizadas a 396 m abaixo do nível do mar, na região fronteiriça do Estado de Israel com o Reino Hashemita da Jordânia.',
    callImage:
      'https://images.unsplash.com/photo-1574236170878-f66e35f83207?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    info: [
      {
        id: 0,
        description: 'países',
        count: 50,
      },
      {
        id: 1,
        description: 'línguas',
        count: 220,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 35,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Hong Kong',
        country: 'Hong Kong',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/800px-Flag_of_Hong_Kong.svg.png',
      },
      {
        id: 1,
        city: 'Macau',
        country: 'Macau',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Flag_of_Macau.svg',
      },
      {
        id: 2,
        city: 'Singapura',
        country: 'Singapura',
        flag: 'https://www.worldometers.info/img/flags/sn-flag.gif',
      },
      {
        id: 3,
        city: 'Kuala Lumpur',
        country: 'Malásia',
        flag: 'https://www.worldometers.info/img/flags/my-flag.gif',
      },
      {
        id: 4,
        city: 'Deli',
        country: 'Índia',
        flag: 'https://www.worldometers.info/img/flags/in-flag.gif',
      },
    ],
  },
  {
    id: 'africa',
    name: 'África',
    callPhrase: 'Berço do maior rio e maior deserto.',
    description:
      'A África é o terceiro continente mais extenso (depois da Ásia e da América) com cerca de 30 milhões de quilômetros quadrados, cobrindo 20,3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra (atrás da Ásia) com cerca de um bilhão de pessoas (estimativa para 2005[1]), representando cerca de um sétimo da população mundial, e 54 países independentes. Tem se transformado na ultima década em uma continente cada vez mais católico.',
    callImage:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    info: [
      {
        id: 0,
        description: 'países',
        count: 65,
      },
      {
        id: 1,
        description: 'línguas',
        count: 250,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 9,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Joanesburgo',
        country: 'África do Sul',
        flag: 'https://www.worldometers.info/img/flags/sf-flag.gif',
      },
    ],
  },
  {
    id: 'europe',
    name: 'Europa',
    callPhrase: 'O continente mais antigo.',
    description:
      'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    callImage:
      'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1240&q=80',
    info: [
      {
        id: 0,
        description: 'países',
        count: 50,
      },
      {
        id: 1,
        description: 'línguas',
        count: 60,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 27,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Londres',
        country: 'Reino Unido',
        flag: 'https://www.worldometers.info/img/flags/uk-flag.gif',
      },
      {
        id: 1,
        city: 'Paris',
        country: 'França',
        flag: 'https://www.worldometers.info/img/flags/fr-flag.gif',
      },
      {
        id: 2,
        city: 'Roma',
        country: 'Itália',
        flag: 'https://www.worldometers.info/img/flags/it-flag.gif',
      },
      {
        id: 3,
        city: 'Praga',
        country: 'República Theca',
        flag: 'https://www.worldometers.info/img/flags/ez-flag.gif',
      },
      {
        id: 4,
        city: 'Amsterdã',
        country: 'Holanda',
        flag: 'https://www.worldometers.info/img/flags/nl-flag.gif',
      },
    ],
  },
  {
    id: 'oceania',
    name: 'Oceania',
    callPhrase: 'O continente arquipelago.',
    description:
      'Austrália (também chamada Austrália-Nova Guiné, Sahul, Meganésia, Grande Austrália, Australásia, ou Australinea) é um continente que compreende a parte principal de terra da Austrália, Nova Guiné, Tasmânia, e algumas ilhas menores, todas na mesma plataforma continental. Estes territórios estão separados por vários mares e estreitos: Mar de Arafura, Estreito de Torres e Estreito de Bass.',
    callImage:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2130&q=80',
    info: [
      {
        id: 0,
        description: 'países',
        count: 14,
      },
      {
        id: 1,
        description: 'línguas',
        count: 200,
      },
      {
        id: 2,
        description: 'cidades +100',
        count: 8,
      },
    ],
    plus100Cities: [
      {
        id: 0,
        city: 'Sydney',
        country: 'Austrália',
        flag: 'https://flagicons.lipis.dev/flags/4x3/au.svg',
      },
    ],
  },
]

export { continents }
export type { Info, Continent, City }
