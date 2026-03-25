// ═══════════════════════════════════════════════════════
//  DONNÉES RÉELLES — vehicule_enrichi.parquet (5 638 lignes)
//  Enrichi avec couleur_voiture + categorie_vehicule + categorie_reprise
//  Généré automatiquement — NE PAS MODIFIER À LA MAIN
// ═══════════════════════════════════════════════════════

export const BRANDS = [
  {
    "id": "citroen",
    "name": "Citroen",
    "count": 3716
  },
  {
    "id": "opel",
    "name": "OPEL",
    "count": 372
  },
  {
    "id": "volkswagen",
    "name": "Volkswagen",
    "count": 279
  },
  {
    "id": "hyundai",
    "name": "Hyundai",
    "count": 139
  },
  {
    "id": "cupra",
    "name": "CUPRA",
    "count": 79
  },
  {
    "id": "ds",
    "name": "DS",
    "count": 75
  },
  {
    "id": "seat",
    "name": "Seat",
    "count": 69
  },
  {
    "id": "fiat",
    "name": "Fiat",
    "count": 42
  },
  {
    "id": "skoda",
    "name": "Skoda",
    "count": 38
  },
  {
    "id": "audi",
    "name": "AUDI",
    "count": 33
  },
  {
    "id": "kia",
    "name": "KIA",
    "count": 26
  },
  {
    "id": "alfaromeo",
    "name": "AlfaRomeo",
    "count": 18
  },
  {
    "id": "honda",
    "name": "Honda",
    "count": 6
  },
  {
    "id": "vw_utilitaires",
    "name": "VW Utilitaires",
    "count": 3
  },
  {
    "id": "renault_annalect",
    "name": "Renault Annalect",
    "count": 1
  },
  {
    "id": "dacia",
    "name": "Dacia",
    "count": 1
  },
  {
    "id": "toyota",
    "name": "Toyota",
    "count": 1
  }
];

export const ENERGIES = ["essence", "diesel", "hybride", "electrique"];

export const CATEGORIES = ["citadine", "berline", "SUV", "familiale", "sport", "cabriolet", "utilitaire", "autre"];

export const COULEURS = ["Gris", "Bleu", "Rouge", "Noir", "Blanc", "Beige", "Vert", "Jaune", "Marron", "Orange", "Violet", "Turquoise"];

export const DEPARTMENTS_GEO = [
  {
    "code": "13",
    "lat": 43.297,
    "lng": 5.37,
    "total": 342
  },
  {
    "code": "59",
    "lat": 50.629,
    "lng": 3.057,
    "total": 239
  },
  {
    "code": "93",
    "lat": 48.91,
    "lng": 2.48,
    "total": 210
  },
  {
    "code": "69",
    "lat": 45.764,
    "lng": 4.836,
    "total": 168
  },
  {
    "code": "94",
    "lat": 48.778,
    "lng": 2.464,
    "total": 154
  },
  {
    "code": "33",
    "lat": 44.838,
    "lng": -0.579,
    "total": 150
  },
  {
    "code": "83",
    "lat": 43.124,
    "lng": 6.013,
    "total": 148
  },
  {
    "code": "62",
    "lat": 50.43,
    "lng": 2.83,
    "total": 141
  },
  {
    "code": "78",
    "lat": 48.802,
    "lng": 1.988,
    "total": 141
  },
  {
    "code": "34",
    "lat": 43.611,
    "lng": 3.877,
    "total": 138
  },
  {
    "code": "77",
    "lat": 48.619,
    "lng": 2.883,
    "total": 132
  },
  {
    "code": "95",
    "lat": 49.085,
    "lng": 2.162,
    "total": 131
  },
  {
    "code": "91",
    "lat": 48.531,
    "lng": 2.212,
    "total": 131
  },
  {
    "code": "31",
    "lat": 43.605,
    "lng": 1.444,
    "total": 130
  },
  {
    "code": "76",
    "lat": 49.443,
    "lng": 1.099,
    "total": 130
  },
  {
    "code": "06",
    "lat": 43.71,
    "lng": 7.262,
    "total": 117
  },
  {
    "code": "92",
    "lat": 48.828,
    "lng": 2.218,
    "total": 112
  },
  {
    "code": "66",
    "lat": 42.699,
    "lng": 2.896,
    "total": 107
  },
  {
    "code": "57",
    "lat": 49.119,
    "lng": 6.176,
    "total": 89
  },
  {
    "code": "44",
    "lat": 47.218,
    "lng": -1.554,
    "total": 78
  },
  {
    "code": "75",
    "lat": 48.857,
    "lng": 2.352,
    "total": 75
  },
  {
    "code": "38",
    "lat": 45.189,
    "lng": 5.725,
    "total": 74
  },
  {
    "code": "64",
    "lat": 43.3,
    "lng": -0.37,
    "total": 73
  },
  {
    "code": "30",
    "lat": 43.837,
    "lng": 4.36,
    "total": 72
  },
  {
    "code": "60",
    "lat": 49.43,
    "lng": 2.08,
    "total": 66
  },
  {
    "code": "74",
    "lat": 46.067,
    "lng": 6.406,
    "total": 64
  },
  {
    "code": "40",
    "lat": 43.895,
    "lng": -0.499,
    "total": 61
  },
  {
    "code": "27",
    "lat": 49.027,
    "lng": 1.152,
    "total": 61
  },
  {
    "code": "84",
    "lat": 43.949,
    "lng": 4.806,
    "total": 60
  },
  {
    "code": "67",
    "lat": 48.573,
    "lng": 7.752,
    "total": 57
  },
  {
    "code": "45",
    "lat": 47.903,
    "lng": 1.909,
    "total": 56
  },
  {
    "code": "35",
    "lat": 48.117,
    "lng": -1.678,
    "total": 55
  },
  {
    "code": "71",
    "lat": 46.8,
    "lng": 4.45,
    "total": 54
  },
  {
    "code": "42",
    "lat": 45.434,
    "lng": 4.39,
    "total": 54
  },
  {
    "code": "17",
    "lat": 46.159,
    "lng": -1.152,
    "total": 54
  },
  {
    "code": "73",
    "lat": 45.565,
    "lng": 5.918,
    "total": 52
  },
  {
    "code": "51",
    "lat": 49.258,
    "lng": 3.621,
    "total": 50
  },
  {
    "code": "68",
    "lat": 47.751,
    "lng": 7.336,
    "total": 48
  },
  {
    "code": "54",
    "lat": 48.692,
    "lng": 6.184,
    "total": 48
  },
  {
    "code": "07",
    "lat": 44.736,
    "lng": 4.596,
    "total": 47
  },
  {
    "code": "01",
    "lat": 46.205,
    "lng": 5.225,
    "total": 46
  },
  {
    "code": "56",
    "lat": 47.759,
    "lng": -2.765,
    "total": 44
  },
  {
    "code": "02",
    "lat": 49.564,
    "lng": 3.622,
    "total": 44
  },
  {
    "code": "11",
    "lat": 43.213,
    "lng": 2.349,
    "total": 43
  },
  {
    "code": "87",
    "lat": 45.835,
    "lng": 1.262,
    "total": 42
  },
  {
    "code": "85",
    "lat": 46.67,
    "lng": -1.43,
    "total": 42
  },
  {
    "code": "26",
    "lat": 44.933,
    "lng": 4.893,
    "total": 42
  },
  {
    "code": "80",
    "lat": 49.894,
    "lng": 2.296,
    "total": 41
  },
  {
    "code": "47",
    "lat": 44.203,
    "lng": 0.617,
    "total": 41
  },
  {
    "code": "21",
    "lat": 47.322,
    "lng": 5.042,
    "total": 37
  },
  {
    "code": "24",
    "lat": 45.183,
    "lng": 0.718,
    "total": 36
  },
  {
    "code": "29",
    "lat": 48.39,
    "lng": -4.486,
    "total": 36
  },
  {
    "code": "22",
    "lat": 48.514,
    "lng": -2.761,
    "total": 36
  },
  {
    "code": "63",
    "lat": 45.783,
    "lng": 3.083,
    "total": 36
  },
  {
    "code": "14",
    "lat": 49.183,
    "lng": -0.371,
    "total": 35
  },
  {
    "code": "88",
    "lat": 48.174,
    "lng": 6.451,
    "total": 34
  },
  {
    "code": "43",
    "lat": 45.043,
    "lng": 3.885,
    "total": 34
  },
  {
    "code": "37",
    "lat": 47.394,
    "lng": 0.685,
    "total": 34
  },
  {
    "code": "49",
    "lat": 47.478,
    "lng": -0.563,
    "total": 33
  },
  {
    "code": "16",
    "lat": 45.65,
    "lng": 0.156,
    "total": 33
  },
  {
    "code": "50",
    "lat": 48.884,
    "lng": -1.178,
    "total": 30
  },
  {
    "code": "82",
    "lat": 44.018,
    "lng": 1.355,
    "total": 30
  },
  {
    "code": "72",
    "lat": 47.996,
    "lng": 0.2,
    "total": 30
  },
  {
    "code": "10",
    "lat": 48.297,
    "lng": 4.074,
    "total": 29
  },
  {
    "code": "19",
    "lat": 45.267,
    "lng": 1.772,
    "total": 29
  },
  {
    "code": "81",
    "lat": 43.897,
    "lng": 2.15,
    "total": 28
  },
  {
    "code": "25",
    "lat": 47.238,
    "lng": 6.024,
    "total": 28
  },
  {
    "code": "86",
    "lat": 46.58,
    "lng": 0.34,
    "total": 27
  },
  {
    "code": "03",
    "lat": 46.341,
    "lng": 3.412,
    "total": 26
  },
  {
    "code": "65",
    "lat": 43.233,
    "lng": 0.08,
    "total": 24
  },
  {
    "code": "04",
    "lat": 44.093,
    "lng": 6.236,
    "total": 23
  },
  {
    "code": "58",
    "lat": 47.001,
    "lng": 3.159,
    "total": 20
  },
  {
    "code": "12",
    "lat": 44.35,
    "lng": 2.575,
    "total": 20
  },
  {
    "code": "89",
    "lat": 47.799,
    "lng": 3.567,
    "total": 19
  },
  {
    "code": "79",
    "lat": 46.325,
    "lng": -0.46,
    "total": 19
  },
  {
    "code": "08",
    "lat": 49.762,
    "lng": 4.721,
    "total": 16
  },
  {
    "code": "32",
    "lat": 43.645,
    "lng": 0.586,
    "total": 16
  },
  {
    "code": "09",
    "lat": 42.967,
    "lng": 1.605,
    "total": 16
  },
  {
    "code": "36",
    "lat": 46.81,
    "lng": 1.691,
    "total": 15
  },
  {
    "code": "61",
    "lat": 48.43,
    "lng": 0.09,
    "total": 14
  },
  {
    "code": "55",
    "lat": 48.773,
    "lng": 5.168,
    "total": 14
  },
  {
    "code": "48",
    "lat": 44.519,
    "lng": 3.501,
    "total": 14
  },
  {
    "code": "05",
    "lat": 44.559,
    "lng": 6.08,
    "total": 14
  },
  {
    "code": "90",
    "lat": 47.633,
    "lng": 6.867,
    "total": 14
  },
  {
    "code": "18",
    "lat": 47.081,
    "lng": 2.399,
    "total": 13
  },
  {
    "code": "15",
    "lat": 44.931,
    "lng": 2.444,
    "total": 13
  },
  {
    "code": "41",
    "lat": 47.586,
    "lng": 1.336,
    "total": 13
  },
  {
    "code": "70",
    "lat": 47.62,
    "lng": 6.15,
    "total": 12
  },
  {
    "code": "39",
    "lat": 46.675,
    "lng": 5.551,
    "total": 12
  },
  {
    "code": "28",
    "lat": 48.444,
    "lng": 1.487,
    "total": 11
  },
  {
    "code": "46",
    "lat": 44.45,
    "lng": 1.441,
    "total": 10
  },
  {
    "code": "52",
    "lat": 48.112,
    "lng": 5.139,
    "total": 9
  },
  {
    "code": "23",
    "lat": 46.175,
    "lng": 1.872,
    "total": 8
  },
  {
    "code": "53",
    "lat": 48.073,
    "lng": -0.773,
    "total": 7
  }
];

export const MODELES_PAR_MARQUE = {
  "citroen": [
    "C3a",
    "C3",
    "C5a",
    "Ëc4",
    "Ëc3",
    "Ami",
    "C5a phev",
    "C5 x phev",
    "Ëc4 x",
    "Kamiq 2020"
  ],
  "opel": [
    "Mokka-e",
    "Crossland",
    "Corsa-e",
    "Vivaro",
    "Astra-e",
    "Corsa",
    "Grandland",
    "Combo",
    "Corsa ",
    "Frontera hev"
  ],
  "volkswagen": [
    "T-roc 2025",
    "Id.3 id. 2025",
    "Polo 2025",
    "Id.4 id. 2025",
    "Tiguan 2025",
    "T-roc",
    "Taigo 2026",
    "T-cross life 2025",
    "T-cross vo",
    "Polo 2026"
  ],
  "hyundai": [
    "Kona hybrid",
    "Kona electric",
    "Tucson hybrid facelift",
    "Bayon facelift",
    "Inster electric",
    "Kona",
    "I20",
    "C5 x phev",
    "Ëc4",
    "Ëc3"
  ],
  "cupra": [
    "Cupra born 204 ch batterie l",
    "Cupra formentor",
    "Cupra tavascan",
    "Cupra leon",
    "Cupra born 230 ch batterie xl",
    "Terramar",
    "Ëc4",
    "C3"
  ],
  "ds": [
    "Ds 3",
    "Ds 7",
    "Ds 4"
  ],
  "seat": [
    "Seat arona",
    "Seat ibiza",
    "Arona",
    "Ibiza edition",
    "Arona copa",
    "Arona edition",
    "Ibiza",
    "Ibiza fr",
    "Seat nouvelle ateca",
    "Ateca xperience"
  ],
  "fiat": [
    "Topolino berline",
    "500e berline",
    "600 hybrid",
    "600e",
    "Ami",
    "Topolino dolcevita"
  ],
  "skoda": [
    "Kamiq 2020",
    "Fabia 2021",
    "Karoq 2018",
    "Kodiaq 2019",
    "Enyaq 2020",
    "Octavia 2024",
    "Elroq 2025",
    "C3",
    "Elroq",
    "Kodiaq 2021"
  ],
  "audi": [
    "Audi q2",
    "Q4 e-tron",
    "Audi q5",
    "Audi q4 e-tron",
    "C3",
    "C5a",
    "A1 sportback",
    "A3 sportback",
    "A3 sportback tfsie",
    "Audi q3"
  ],
  "kia": [
    "Ev3 100% électrique",
    "Sportage hybride",
    "Stonic",
    "Niro",
    "\"ceed \"",
    "Picanto",
    "Ev6 100% électrique"
  ],
  "alfaromeo": [
    "Tonale hybride",
    "Junior elettrica"
  ],
  "honda": [
    "Jazz",
    "HR-V"
  ],
  "vw_utilitaires": [
    "Transporter 6.1",
    "Transporter combi 6.1"
  ],
  "renault_annalect": [
    "Captur"
  ],
  "dacia": [
    "C3"
  ],
  "toyota": [
    "Yaris"
  ]
};

export const CONCURRENTS = {
  "citroen": [
    "Volkswagen",
    "Hyundai",
    "Skoda",
    "Peugeot",
    "NC"
  ],
  "opel": [
    "Citroën",
    "Peugeot",
    "Volkswagen",
    "NC",
    "Skoda"
  ],
  "volkswagen": [
    "Citroën",
    "Cupra",
    "Volkswagen",
    "Hyundai",
    "Audi"
  ],
  "hyundai": [
    "Citroën",
    "Volkswagen",
    "Toyota",
    "Skoda",
    "Opel"
  ],
  "cupra": [
    "Citroën",
    "Volkswagen",
    "Audi",
    "Toyota",
    "Renault"
  ],
  "ds": [
    "Skoda",
    "Volkswagen",
    "Toyota",
    "Lexus",
    "Opel"
  ],
  "seat": [
    "Volkswagen",
    "Citroën",
    "Seat",
    "Peugeot",
    "Audi"
  ],
  "fiat": [
    "Citroën",
    "Fiat",
    "Volkswagen",
    "Opel"
  ],
  "skoda": [
    "Citroën",
    "Hyundai",
    "Volkswagen",
    "Audi",
    "Opel"
  ],
  "audi": [
    "Volkswagen",
    "Citroën",
    "Cupra",
    "Hyundai",
    "Skoda"
  ],
  "kia": [
    "Hyundai",
    "Citroën",
    "Volkswagen",
    "Peugeot",
    "Seat"
  ],
  "alfaromeo": [
    "Volkswagen",
    "Opel",
    "Citroën",
    "Hyundai"
  ],
  "honda": [
    "Citroën"
  ],
  "vw_utilitaires": [
    "Toyota"
  ],
  "renault_annalect": [
    "Citroën"
  ],
  "dacia": [
    "Dacia"
  ],
  "toyota": []
};

export const DATA_PAR_BRAND = {
  "citroen": {
    "kpis": {
      "totalVentes": 3716,
      "reprises": 3716,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "C3a",
      "topCategorie": "citadine",
      "tauxConcurrence": 34,
      "pctHomme": 67,
      "pctFemme": 33
    },
    "energie": {
      "essence": 3714,
      "hybride": 2
    },
    "couleurVoiture": {
      "Gris": 822,
      "Bleu": 665,
      "Rouge": 523,
      "Noir": 414,
      "Beige": 355,
      "Jaune": 251,
      "Blanc": 241,
      "Vert": 239,
      "Marron": 111,
      "Violet": 58,
      "Orange": 37
    },
    "couleurReprise": {
      "gris": 1323,
      "noir": 734,
      "blanc": 656,
      "bleu": 360,
      "rouge": 230,
      "vert": 127,
      "marron": 114,
      "beige": 103,
      "jaune": 28,
      "orange": 25,
      "violet": 12,
      "rose": 4
    },
    "categorieVehicule": {
      "citadine": 2833,
      "berline": 881,
      "SUV": 2
    },
    "categorieReprise": {
      "citadine": 1298,
      "autre": 701,
      "berline": 669,
      "SUV": 594,
      "familiale": 415,
      "sport": 34,
      "cabriolet": 3,
      "utilitaire": 2
    },
    "civilite": {
      "monsieur": 2476,
      "madame": 1240
    },
    "monthlySales": [
      {
        "label": "2023-11",
        "total": 1
      },
      {
        "label": "2024-01",
        "total": 1
      },
      {
        "label": "2024-02",
        "total": 254
      },
      {
        "label": "2024-03",
        "total": 266
      },
      {
        "label": "2024-04",
        "total": 167
      },
      {
        "label": "2024-05",
        "total": 220
      },
      {
        "label": "2024-06",
        "total": 212
      },
      {
        "label": "2024-07",
        "total": 128
      },
      {
        "label": "2024-08",
        "total": 22
      },
      {
        "label": "2024-09",
        "total": 116
      },
      {
        "label": "2024-10",
        "total": 68
      },
      {
        "label": "2024-11",
        "total": 75
      },
      {
        "label": "2025-01",
        "total": 149
      },
      {
        "label": "2025-02",
        "total": 169
      },
      {
        "label": "2025-03",
        "total": 172
      },
      {
        "label": "2025-04",
        "total": 184
      },
      {
        "label": "2025-05",
        "total": 132
      },
      {
        "label": "2025-06",
        "total": 262
      },
      {
        "label": "2025-07",
        "total": 246
      },
      {
        "label": "2025-08",
        "total": 76
      },
      {
        "label": "2025-09",
        "total": 222
      },
      {
        "label": "2025-10",
        "total": 156
      },
      {
        "label": "2025-11",
        "total": 192
      },
      {
        "label": "2025-12",
        "total": 226
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2023-11",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-01",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-02",
        "essence": 254,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-03",
        "essence": 266,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-04",
        "essence": 167,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-05",
        "essence": 220,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-06",
        "essence": 212,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-07",
        "essence": 128,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-08",
        "essence": 22,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-09",
        "essence": 116,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-10",
        "essence": 68,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 75,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 149,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 169,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 170,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 184,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 132,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 262,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 246,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 76,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 222,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 156,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 192,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 226,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2023-11",
        "Rouge": 1
      },
      {
        "label": "2024-01",
        "Gris": 1
      },
      {
        "label": "2024-02",
        "Beige": 25,
        "Blanc": 16,
        "Bleu": 54,
        "Gris": 50,
        "Jaune": 13,
        "Marron": 13,
        "Noir": 25,
        "Rouge": 40,
        "Vert": 16,
        "Violet": 2
      },
      {
        "label": "2024-03",
        "Beige": 29,
        "Blanc": 15,
        "Bleu": 46,
        "Gris": 58,
        "Jaune": 17,
        "Marron": 9,
        "Noir": 20,
        "Orange": 2,
        "Rouge": 42,
        "Vert": 25,
        "Violet": 3
      },
      {
        "label": "2024-04",
        "Beige": 13,
        "Blanc": 12,
        "Bleu": 28,
        "Gris": 45,
        "Jaune": 9,
        "Marron": 4,
        "Noir": 12,
        "Rouge": 28,
        "Vert": 12,
        "Violet": 4
      },
      {
        "label": "2024-05",
        "Beige": 18,
        "Blanc": 18,
        "Bleu": 38,
        "Gris": 46,
        "Jaune": 12,
        "Marron": 5,
        "Noir": 28,
        "Rouge": 36,
        "Vert": 11,
        "Violet": 8
      },
      {
        "label": "2024-06",
        "Beige": 17,
        "Blanc": 18,
        "Bleu": 40,
        "Gris": 44,
        "Jaune": 12,
        "Marron": 6,
        "Noir": 30,
        "Orange": 1,
        "Rouge": 23,
        "Vert": 18,
        "Violet": 3
      },
      {
        "label": "2024-07",
        "Beige": 12,
        "Blanc": 6,
        "Bleu": 21,
        "Gris": 32,
        "Jaune": 5,
        "Marron": 3,
        "Noir": 17,
        "Orange": 2,
        "Rouge": 21,
        "Vert": 9
      },
      {
        "label": "2024-08",
        "Beige": 2,
        "Blanc": 1,
        "Bleu": 5,
        "Gris": 4,
        "Jaune": 3,
        "Marron": 1,
        "Noir": 2,
        "Rouge": 3,
        "Violet": 1
      },
      {
        "label": "2024-09",
        "Beige": 12,
        "Blanc": 6,
        "Bleu": 15,
        "Gris": 33,
        "Jaune": 10,
        "Marron": 5,
        "Noir": 9,
        "Orange": 2,
        "Rouge": 17,
        "Vert": 6,
        "Violet": 1
      },
      {
        "label": "2024-10",
        "Beige": 5,
        "Blanc": 4,
        "Bleu": 18,
        "Gris": 18,
        "Jaune": 7,
        "Noir": 5,
        "Orange": 1,
        "Rouge": 6,
        "Vert": 2,
        "Violet": 2
      },
      {
        "label": "2024-11",
        "Beige": 13,
        "Blanc": 7,
        "Bleu": 14,
        "Gris": 14,
        "Jaune": 5,
        "Marron": 1,
        "Noir": 10,
        "Orange": 1,
        "Rouge": 9,
        "Vert": 1
      },
      {
        "label": "2025-01",
        "Beige": 6,
        "Blanc": 6,
        "Bleu": 30,
        "Gris": 35,
        "Jaune": 5,
        "Marron": 10,
        "Noir": 21,
        "Rouge": 23,
        "Vert": 11,
        "Violet": 2
      },
      {
        "label": "2025-02",
        "Beige": 16,
        "Blanc": 9,
        "Bleu": 27,
        "Gris": 34,
        "Jaune": 7,
        "Marron": 10,
        "Noir": 16,
        "Orange": 3,
        "Rouge": 28,
        "Vert": 16,
        "Violet": 3
      },
      {
        "label": "2025-03",
        "Beige": 16,
        "Blanc": 15,
        "Bleu": 27,
        "Gris": 46,
        "Jaune": 11,
        "Marron": 4,
        "Noir": 19,
        "Orange": 2,
        "Rouge": 18,
        "Vert": 13,
        "Violet": 1
      },
      {
        "label": "2025-04",
        "Beige": 20,
        "Blanc": 6,
        "Bleu": 32,
        "Gris": 40,
        "Jaune": 16,
        "Marron": 8,
        "Noir": 25,
        "Orange": 4,
        "Rouge": 20,
        "Vert": 9,
        "Violet": 4
      },
      {
        "label": "2025-05",
        "Beige": 13,
        "Blanc": 8,
        "Bleu": 22,
        "Gris": 32,
        "Jaune": 7,
        "Marron": 3,
        "Noir": 12,
        "Orange": 1,
        "Rouge": 27,
        "Vert": 7
      },
      {
        "label": "2025-06",
        "Beige": 22,
        "Blanc": 15,
        "Bleu": 50,
        "Gris": 59,
        "Jaune": 21,
        "Marron": 4,
        "Noir": 38,
        "Orange": 3,
        "Rouge": 29,
        "Vert": 14,
        "Violet": 7
      },
      {
        "label": "2025-07",
        "Beige": 34,
        "Blanc": 13,
        "Bleu": 50,
        "Gris": 44,
        "Jaune": 24,
        "Marron": 4,
        "Noir": 30,
        "Orange": 2,
        "Rouge": 22,
        "Vert": 16,
        "Violet": 7
      },
      {
        "label": "2025-08",
        "Beige": 6,
        "Blanc": 7,
        "Bleu": 14,
        "Gris": 20,
        "Jaune": 5,
        "Marron": 2,
        "Noir": 6,
        "Orange": 2,
        "Rouge": 10,
        "Vert": 3,
        "Violet": 1
      },
      {
        "label": "2025-09",
        "Beige": 22,
        "Blanc": 15,
        "Bleu": 37,
        "Gris": 45,
        "Jaune": 22,
        "Marron": 5,
        "Noir": 20,
        "Orange": 3,
        "Rouge": 40,
        "Vert": 11,
        "Violet": 2
      },
      {
        "label": "2025-10",
        "Beige": 14,
        "Blanc": 13,
        "Bleu": 29,
        "Gris": 31,
        "Jaune": 15,
        "Marron": 1,
        "Noir": 16,
        "Orange": 2,
        "Rouge": 29,
        "Vert": 5,
        "Violet": 1
      },
      {
        "label": "2025-11",
        "Beige": 18,
        "Blanc": 17,
        "Bleu": 25,
        "Gris": 44,
        "Jaune": 12,
        "Marron": 7,
        "Noir": 27,
        "Orange": 2,
        "Rouge": 18,
        "Vert": 17,
        "Violet": 5
      },
      {
        "label": "2025-12",
        "Beige": 22,
        "Blanc": 14,
        "Bleu": 43,
        "Gris": 47,
        "Jaune": 13,
        "Marron": 6,
        "Noir": 26,
        "Orange": 4,
        "Rouge": 33,
        "Vert": 17,
        "Violet": 1
      }
    ],
    "competition": [
      {
        "name": "Volkswagen",
        "weight": 395
      },
      {
        "name": "Hyundai",
        "weight": 120
      },
      {
        "name": "Skoda",
        "weight": 111
      },
      {
        "name": "Peugeot",
        "weight": 77
      },
      {
        "name": "NC",
        "weight": 73
      },
      {
        "name": "Dacia",
        "weight": 72
      },
      {
        "name": "Audi",
        "weight": 66
      },
      {
        "name": "Cupra",
        "weight": 57
      },
      {
        "name": "Seat",
        "weight": 55
      },
      {
        "name": "Renault",
        "weight": 41
      }
    ],
    "modeleStats": [
      {
        "name": "C3a",
        "ventes": 1846,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C3",
        "ventes": 512,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C5a",
        "ventes": 426,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Ëc4",
        "ventes": 300,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Ëc3",
        "ventes": 267,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ami",
        "ventes": 208,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C5a phev",
        "ventes": 96,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "C5 x phev",
        "ventes": 30,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Ëc4 x",
        "ventes": 29,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Kamiq 2020",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 194,
        "essence": 194,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 55
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 181,
        "essence": 181,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 67
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 127,
        "essence": 127,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 104,
        "essence": 104,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 103,
        "essence": 103,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 100,
        "essence": 100,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 57
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 93,
        "essence": 93,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 78
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 91,
        "essence": 91,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 70
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 91,
        "essence": 91,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 66
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 86,
        "essence": 86,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 66
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 84,
        "essence": 84,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 69
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 82,
        "essence": 82,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 61
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 82,
        "essence": 82,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 81,
        "essence": 81,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 53
      },
      {
        "code": "92",
        "lat": 48.828,
        "lng": 2.218,
        "total": 81,
        "essence": 81,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 76,
        "essence": 76,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 74
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 75,
        "essence": 75,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 69
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 60,
        "essence": 60,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 60
      },
      {
        "code": "57",
        "lat": 49.119,
        "lng": 6.176,
        "total": 56,
        "essence": 56,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 84
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 56,
        "essence": 56,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 54,
        "essence": 54,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 70
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 53,
        "essence": 53,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 50,
        "essence": 50,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 62
      },
      {
        "code": "60",
        "lat": 49.43,
        "lng": 2.08,
        "total": 46,
        "essence": 46,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 44,
        "essence": 44,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 44,
        "essence": 44,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 66
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 43,
        "essence": 43,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 77
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 41,
        "essence": 41,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 49
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 41,
        "essence": 41,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 56
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 41,
        "essence": 41,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 63
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 39,
        "essence": 39,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 67
      },
      {
        "code": "54",
        "lat": 48.692,
        "lng": 6.184,
        "total": 38,
        "essence": 36,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 74
      },
      {
        "code": "45",
        "lat": 47.903,
        "lng": 1.909,
        "total": 38,
        "essence": 38,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 58
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 37,
        "essence": 37,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 68
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 36,
        "essence": 36,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 39
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 36,
        "essence": 36,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 33,
        "essence": 33,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 79
      },
      {
        "code": "11",
        "lat": 43.213,
        "lng": 2.349,
        "total": 32,
        "essence": 32,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 62
      },
      {
        "code": "56",
        "lat": 47.759,
        "lng": -2.765,
        "total": 30,
        "essence": 30,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 80
      },
      {
        "code": "22",
        "lat": 48.514,
        "lng": -2.761,
        "total": 30,
        "essence": 30,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 63
      },
      {
        "code": "02",
        "lat": 49.564,
        "lng": 3.622,
        "total": 29,
        "essence": 29,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 66
      },
      {
        "code": "85",
        "lat": 46.67,
        "lng": -1.43,
        "total": 29,
        "essence": 29,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 29,
        "essence": 29,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "21",
        "lat": 47.322,
        "lng": 5.042,
        "total": 29,
        "essence": 29,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 52
      },
      {
        "code": "51",
        "lat": 49.258,
        "lng": 3.621,
        "total": 29,
        "essence": 29,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 69
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 28,
        "essence": 28,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 75
      },
      {
        "code": "68",
        "lat": 47.751,
        "lng": 7.336,
        "total": 28,
        "essence": 28,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 79
      },
      {
        "code": "29",
        "lat": 48.39,
        "lng": -4.486,
        "total": 28,
        "essence": 28,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 75
      },
      {
        "code": "26",
        "lat": 44.933,
        "lng": 4.893,
        "total": 28,
        "essence": 28,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 79
      },
      {
        "code": "63",
        "lat": 45.783,
        "lng": 3.083,
        "total": 27,
        "essence": 27,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 78
      },
      {
        "code": "14",
        "lat": 49.183,
        "lng": -0.371,
        "total": 27,
        "essence": 27,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 63
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 26,
        "essence": 26,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 69
      },
      {
        "code": "88",
        "lat": 48.174,
        "lng": 6.451,
        "total": 24,
        "essence": 24,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 75
      },
      {
        "code": "49",
        "lat": 47.478,
        "lng": -0.563,
        "total": 24,
        "essence": 24,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 79
      },
      {
        "code": "80",
        "lat": 49.894,
        "lng": 2.296,
        "total": 23,
        "essence": 23,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 87
      },
      {
        "code": "24",
        "lat": 45.183,
        "lng": 0.718,
        "total": 23,
        "essence": 23,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 48
      },
      {
        "code": "37",
        "lat": 47.394,
        "lng": 0.685,
        "total": 23,
        "essence": 23,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 61
      },
      {
        "code": "16",
        "lat": 45.65,
        "lng": 0.156,
        "total": 23,
        "essence": 23,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 35
      },
      {
        "code": "43",
        "lat": 45.043,
        "lng": 3.885,
        "total": 22,
        "essence": 22,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "82",
        "lat": 44.018,
        "lng": 1.355,
        "total": 22,
        "essence": 22,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 55
      },
      {
        "code": "19",
        "lat": 45.267,
        "lng": 1.772,
        "total": 22,
        "essence": 22,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 73
      },
      {
        "code": "50",
        "lat": 48.884,
        "lng": -1.178,
        "total": 21,
        "essence": 21,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C5a",
        "pctHomme": 52
      },
      {
        "code": "03",
        "lat": 46.341,
        "lng": 3.412,
        "total": 20,
        "essence": 20,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 85
      },
      {
        "code": "86",
        "lat": 46.58,
        "lng": 0.34,
        "total": 20,
        "essence": 20,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 60
      },
      {
        "code": "10",
        "lat": 48.297,
        "lng": 4.074,
        "total": 19,
        "essence": 19,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 47
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 19,
        "essence": 19,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 53
      },
      {
        "code": "58",
        "lat": 47.001,
        "lng": 3.159,
        "total": 18,
        "essence": 18,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 72
      },
      {
        "code": "72",
        "lat": 47.996,
        "lng": 0.2,
        "total": 18,
        "essence": 18,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 67
      },
      {
        "code": "12",
        "lat": 44.35,
        "lng": 2.575,
        "total": 17,
        "essence": 17,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 41
      },
      {
        "code": "81",
        "lat": 43.897,
        "lng": 2.15,
        "total": 16,
        "essence": 16,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 44
      },
      {
        "code": "25",
        "lat": 47.238,
        "lng": 6.024,
        "total": 16,
        "essence": 16,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 88
      },
      {
        "code": "04",
        "lat": 44.093,
        "lng": 6.236,
        "total": 15,
        "essence": 15,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 53
      },
      {
        "code": "09",
        "lat": 42.967,
        "lng": 1.605,
        "total": 14,
        "essence": 14,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 64
      },
      {
        "code": "89",
        "lat": 47.799,
        "lng": 3.567,
        "total": 13,
        "essence": 13,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 92
      },
      {
        "code": "36",
        "lat": 46.81,
        "lng": 1.691,
        "total": 13,
        "essence": 13,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 62
      },
      {
        "code": "55",
        "lat": 48.773,
        "lng": 5.168,
        "total": 13,
        "essence": 13,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 69
      },
      {
        "code": "65",
        "lat": 43.233,
        "lng": 0.08,
        "total": 12,
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 67
      },
      {
        "code": "15",
        "lat": 44.931,
        "lng": 2.444,
        "total": 12,
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "79",
        "lat": 46.325,
        "lng": -0.46,
        "total": 12,
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 33
      },
      {
        "code": "18",
        "lat": 47.081,
        "lng": 2.399,
        "total": 12,
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 50
      },
      {
        "code": "08",
        "lat": 49.762,
        "lng": 4.721,
        "total": 12,
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "05",
        "lat": 44.559,
        "lng": 6.08,
        "total": 11,
        "essence": 11,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 82
      },
      {
        "code": "28",
        "lat": 48.444,
        "lng": 1.487,
        "total": 10,
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 60
      },
      {
        "code": "48",
        "lat": 44.519,
        "lng": 3.501,
        "total": 10,
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 60
      },
      {
        "code": "41",
        "lat": 47.586,
        "lng": 1.336,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 89
      },
      {
        "code": "52",
        "lat": 48.112,
        "lng": 5.139,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 78
      },
      {
        "code": "46",
        "lat": 44.45,
        "lng": 1.441,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 89
      },
      {
        "code": "61",
        "lat": 48.43,
        "lng": 0.09,
        "total": 8,
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 50
      },
      {
        "code": "23",
        "lat": 46.175,
        "lng": 1.872,
        "total": 7,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 71
      },
      {
        "code": "53",
        "lat": 48.073,
        "lng": -0.773,
        "total": 7,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 86
      },
      {
        "code": "70",
        "lat": 47.62,
        "lng": 6.15,
        "total": 7,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 71
      },
      {
        "code": "39",
        "lat": 46.675,
        "lng": 5.551,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 33
      },
      {
        "code": "90",
        "lat": 47.633,
        "lng": 6.867,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 83
      },
      {
        "code": "32",
        "lat": 43.645,
        "lng": 0.586,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "berline",
        "value": 202
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 392
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 1
      },
      {
        "source": "autre",
        "target": "berline",
        "value": 128
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 572
      },
      {
        "source": "berline",
        "target": "berline",
        "value": 212
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 457
      },
      {
        "source": "cabriolet",
        "target": "berline",
        "value": 2
      },
      {
        "source": "cabriolet",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 195
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 1102
      },
      {
        "source": "familiale",
        "target": "berline",
        "value": 133
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 282
      },
      {
        "source": "sport",
        "target": "berline",
        "value": 9
      },
      {
        "source": "sport",
        "target": "citadine",
        "value": 25
      },
      {
        "source": "utilitaire",
        "target": "citadine",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "beige",
        "target": "Beige",
        "value": 12
      },
      {
        "source": "beige",
        "target": "Blanc",
        "value": 8
      },
      {
        "source": "beige",
        "target": "Bleu",
        "value": 15
      },
      {
        "source": "beige",
        "target": "Gris",
        "value": 25
      },
      {
        "source": "beige",
        "target": "Jaune",
        "value": 6
      },
      {
        "source": "beige",
        "target": "Noir",
        "value": 13
      },
      {
        "source": "beige",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "beige",
        "target": "Rouge",
        "value": 12
      },
      {
        "source": "beige",
        "target": "Vert",
        "value": 6
      },
      {
        "source": "beige",
        "target": "Violet",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Beige",
        "value": 59
      },
      {
        "source": "blanc",
        "target": "Blanc",
        "value": 46
      },
      {
        "source": "blanc",
        "target": "Bleu",
        "value": 109
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 145
      },
      {
        "source": "blanc",
        "target": "Jaune",
        "value": 44
      },
      {
        "source": "blanc",
        "target": "Marron",
        "value": 19
      },
      {
        "source": "blanc",
        "target": "Noir",
        "value": 76
      },
      {
        "source": "blanc",
        "target": "Orange",
        "value": 8
      },
      {
        "source": "blanc",
        "target": "Rouge",
        "value": 95
      },
      {
        "source": "blanc",
        "target": "Vert",
        "value": 44
      },
      {
        "source": "blanc",
        "target": "Violet",
        "value": 11
      },
      {
        "source": "bleu",
        "target": "Beige",
        "value": 25
      },
      {
        "source": "bleu",
        "target": "Blanc",
        "value": 28
      },
      {
        "source": "bleu",
        "target": "Bleu",
        "value": 69
      },
      {
        "source": "bleu",
        "target": "Gris",
        "value": 82
      },
      {
        "source": "bleu",
        "target": "Jaune",
        "value": 19
      },
      {
        "source": "bleu",
        "target": "Marron",
        "value": 12
      },
      {
        "source": "bleu",
        "target": "Noir",
        "value": 39
      },
      {
        "source": "bleu",
        "target": "Rouge",
        "value": 58
      },
      {
        "source": "bleu",
        "target": "Vert",
        "value": 16
      },
      {
        "source": "bleu",
        "target": "Violet",
        "value": 11
      },
      {
        "source": "gris",
        "target": "Beige",
        "value": 135
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 79
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 239
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 308
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 97
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 44
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 136
      },
      {
        "source": "gris",
        "target": "Orange",
        "value": 8
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 179
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 81
      },
      {
        "source": "gris",
        "target": "Violet",
        "value": 17
      },
      {
        "source": "jaune",
        "target": "Beige",
        "value": 2
      },
      {
        "source": "jaune",
        "target": "Bleu",
        "value": 7
      },
      {
        "source": "jaune",
        "target": "Gris",
        "value": 10
      },
      {
        "source": "jaune",
        "target": "Jaune",
        "value": 3
      },
      {
        "source": "jaune",
        "target": "Rouge",
        "value": 3
      },
      {
        "source": "marron",
        "target": "Beige",
        "value": 5
      },
      {
        "source": "marron",
        "target": "Blanc",
        "value": 5
      },
      {
        "source": "marron",
        "target": "Bleu",
        "value": 17
      },
      {
        "source": "marron",
        "target": "Gris",
        "value": 27
      },
      {
        "source": "marron",
        "target": "Jaune",
        "value": 9
      },
      {
        "source": "marron",
        "target": "Noir",
        "value": 15
      },
      {
        "source": "marron",
        "target": "Orange",
        "value": 3
      },
      {
        "source": "marron",
        "target": "Rouge",
        "value": 20
      },
      {
        "source": "marron",
        "target": "Vert",
        "value": 10
      },
      {
        "source": "marron",
        "target": "Violet",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Beige",
        "value": 74
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 52
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 132
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 149
      },
      {
        "source": "noir",
        "target": "Jaune",
        "value": 44
      },
      {
        "source": "noir",
        "target": "Marron",
        "value": 24
      },
      {
        "source": "noir",
        "target": "Noir",
        "value": 87
      },
      {
        "source": "noir",
        "target": "Orange",
        "value": 7
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 102
      },
      {
        "source": "noir",
        "target": "Vert",
        "value": 51
      },
      {
        "source": "noir",
        "target": "Violet",
        "value": 12
      },
      {
        "source": "orange",
        "target": "Bleu",
        "value": 8
      },
      {
        "source": "orange",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "orange",
        "target": "Jaune",
        "value": 4
      },
      {
        "source": "orange",
        "target": "Rouge",
        "value": 5
      },
      {
        "source": "orange",
        "target": "Vert",
        "value": 3
      },
      {
        "source": "rouge",
        "target": "Beige",
        "value": 33
      },
      {
        "source": "rouge",
        "target": "Blanc",
        "value": 13
      },
      {
        "source": "rouge",
        "target": "Bleu",
        "value": 36
      },
      {
        "source": "rouge",
        "target": "Gris",
        "value": 48
      },
      {
        "source": "rouge",
        "target": "Jaune",
        "value": 11
      },
      {
        "source": "rouge",
        "target": "Marron",
        "value": 3
      },
      {
        "source": "rouge",
        "target": "Noir",
        "value": 32
      },
      {
        "source": "rouge",
        "target": "Orange",
        "value": 5
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 31
      },
      {
        "source": "rouge",
        "target": "Vert",
        "value": 17
      },
      {
        "source": "vert",
        "target": "Beige",
        "value": 10
      },
      {
        "source": "vert",
        "target": "Blanc",
        "value": 8
      },
      {
        "source": "vert",
        "target": "Bleu",
        "value": 30
      },
      {
        "source": "vert",
        "target": "Gris",
        "value": 21
      },
      {
        "source": "vert",
        "target": "Jaune",
        "value": 13
      },
      {
        "source": "vert",
        "target": "Marron",
        "value": 5
      },
      {
        "source": "vert",
        "target": "Noir",
        "value": 13
      },
      {
        "source": "vert",
        "target": "Orange",
        "value": 3
      },
      {
        "source": "vert",
        "target": "Rouge",
        "value": 16
      },
      {
        "source": "vert",
        "target": "Vert",
        "value": 7
      },
      {
        "source": "violet",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "violet",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "violet",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "violet",
        "target": "Vert",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 2833,
        "reprise": 1298
      },
      {
        "axis": "berline",
        "achat": 881,
        "reprise": 669
      },
      {
        "axis": "SUV",
        "achat": 2,
        "reprise": 594
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 415
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 34
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 3
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 2
      }
    ]
  },
  "opel": {
    "kpis": {
      "totalVentes": 372,
      "reprises": 372,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Mokka-e",
      "topCategorie": "SUV",
      "tauxConcurrence": 17,
      "pctHomme": 76,
      "pctFemme": 24
    },
    "energie": {
      "essence": 372
    },
    "couleurVoiture": {
      "Gris": 99,
      "Bleu": 80,
      "Blanc": 45,
      "Rouge": 39,
      "Vert": 34,
      "Marron": 17,
      "Noir": 17,
      "Beige": 16,
      "Jaune": 12,
      "Orange": 10,
      "Violet": 2,
      "Turquoise": 1
    },
    "couleurReprise": {
      "gris": 143,
      "noir": 66,
      "blanc": 65,
      "bleu": 44,
      "rouge": 22,
      "marron": 18,
      "beige": 5,
      "jaune": 4,
      "vert": 3,
      "orange": 1,
      "violet": 1
    },
    "categorieVehicule": {
      "SUV": 209,
      "citadine": 89,
      "autre": 41,
      "berline": 22,
      "familiale": 11
    },
    "categorieReprise": {
      "citadine": 146,
      "autre": 73,
      "SUV": 68,
      "berline": 55,
      "familiale": 28,
      "sport": 1,
      "utilitaire": 1
    },
    "civilite": {
      "monsieur": 281,
      "madame": 91
    },
    "monthlySales": [
      {
        "label": "2024-03",
        "total": 41
      },
      {
        "label": "2024-04",
        "total": 42
      },
      {
        "label": "2024-05",
        "total": 57
      },
      {
        "label": "2024-06",
        "total": 60
      },
      {
        "label": "2024-07",
        "total": 27
      },
      {
        "label": "2024-08",
        "total": 12
      },
      {
        "label": "2024-09",
        "total": 21
      },
      {
        "label": "2024-10",
        "total": 9
      },
      {
        "label": "2024-11",
        "total": 17
      },
      {
        "label": "2025-01",
        "total": 2
      },
      {
        "label": "2025-02",
        "total": 8
      },
      {
        "label": "2025-03",
        "total": 12
      },
      {
        "label": "2025-04",
        "total": 8
      },
      {
        "label": "2025-05",
        "total": 4
      },
      {
        "label": "2025-06",
        "total": 20
      },
      {
        "label": "2025-08",
        "total": 2
      },
      {
        "label": "2025-09",
        "total": 10
      },
      {
        "label": "2025-10",
        "total": 4
      },
      {
        "label": "2025-11",
        "total": 16
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-03",
        "essence": 41,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-04",
        "essence": 42,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-05",
        "essence": 57,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-06",
        "essence": 60,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-07",
        "essence": 27,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-08",
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-09",
        "essence": 21,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-10",
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 17,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 20,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 16,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-03",
        "Beige": 1,
        "Blanc": 2,
        "Bleu": 11,
        "Gris": 14,
        "Jaune": 2,
        "Marron": 3,
        "Orange": 1,
        "Rouge": 3,
        "Vert": 4
      },
      {
        "label": "2024-04",
        "Beige": 3,
        "Blanc": 4,
        "Bleu": 9,
        "Gris": 10,
        "Jaune": 2,
        "Marron": 1,
        "Noir": 2,
        "Orange": 2,
        "Rouge": 7,
        "Vert": 2
      },
      {
        "label": "2024-05",
        "Beige": 2,
        "Blanc": 7,
        "Bleu": 9,
        "Gris": 20,
        "Jaune": 1,
        "Marron": 4,
        "Noir": 1,
        "Orange": 2,
        "Rouge": 7,
        "Vert": 3,
        "Violet": 1
      },
      {
        "label": "2024-06",
        "Beige": 3,
        "Blanc": 6,
        "Bleu": 14,
        "Gris": 12,
        "Jaune": 4,
        "Marron": 1,
        "Noir": 5,
        "Orange": 1,
        "Rouge": 6,
        "Vert": 8
      },
      {
        "label": "2024-07",
        "Beige": 2,
        "Blanc": 3,
        "Bleu": 8,
        "Gris": 6,
        "Marron": 1,
        "Noir": 2,
        "Rouge": 3,
        "Turquoise": 1,
        "Vert": 1
      },
      {
        "label": "2024-08",
        "Beige": 1,
        "Bleu": 4,
        "Gris": 5,
        "Marron": 1,
        "Vert": 1
      },
      {
        "label": "2024-09",
        "Beige": 1,
        "Blanc": 2,
        "Bleu": 6,
        "Gris": 6,
        "Marron": 1,
        "Noir": 2,
        "Rouge": 2,
        "Vert": 1
      },
      {
        "label": "2024-10",
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 2,
        "Noir": 1,
        "Rouge": 2,
        "Vert": 1
      },
      {
        "label": "2024-11",
        "Beige": 1,
        "Blanc": 3,
        "Bleu": 1,
        "Gris": 7,
        "Jaune": 1,
        "Rouge": 1,
        "Vert": 3
      },
      {
        "label": "2025-01",
        "Beige": 1,
        "Gris": 1
      },
      {
        "label": "2025-02",
        "Beige": 1,
        "Blanc": 2,
        "Bleu": 1,
        "Gris": 2,
        "Marron": 1,
        "Orange": 1
      },
      {
        "label": "2025-03",
        "Blanc": 1,
        "Bleu": 3,
        "Gris": 4,
        "Jaune": 1,
        "Noir": 1,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-04",
        "Blanc": 2,
        "Gris": 1,
        "Marron": 1,
        "Rouge": 2,
        "Vert": 1,
        "Violet": 1
      },
      {
        "label": "2025-05",
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 2
      },
      {
        "label": "2025-06",
        "Blanc": 4,
        "Bleu": 3,
        "Gris": 5,
        "Marron": 1,
        "Rouge": 3,
        "Vert": 4
      },
      {
        "label": "2025-08",
        "Bleu": 1,
        "Gris": 1
      },
      {
        "label": "2025-09",
        "Blanc": 2,
        "Bleu": 4,
        "Marron": 1,
        "Noir": 1,
        "Vert": 2
      },
      {
        "label": "2025-10",
        "Blanc": 2,
        "Orange": 2
      },
      {
        "label": "2025-11",
        "Blanc": 3,
        "Bleu": 3,
        "Gris": 1,
        "Jaune": 1,
        "Marron": 1,
        "Noir": 2,
        "Rouge": 2,
        "Vert": 3
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 14
      },
      {
        "name": "Peugeot",
        "weight": 12
      },
      {
        "name": "Volkswagen",
        "weight": 7
      },
      {
        "name": "NC",
        "weight": 5
      },
      {
        "name": "Skoda",
        "weight": 3
      },
      {
        "name": "Mg",
        "weight": 3
      },
      {
        "name": "Hyundai",
        "weight": 3
      },
      {
        "name": "Toyota",
        "weight": 3
      },
      {
        "name": "Renault",
        "weight": 2
      },
      {
        "name": "Jeep",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Mokka-e",
        "ventes": 110,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Crossland",
        "ventes": 72,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Corsa-e",
        "ventes": 41,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Vivaro",
        "ventes": 38,
        "categorie": "autre",
        "partElec": 0
      },
      {
        "name": "Astra-e",
        "ventes": 19,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Corsa",
        "ventes": 16,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Grandland",
        "ventes": 15,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Combo",
        "ventes": 11,
        "categorie": "familiale",
        "partElec": 0
      },
      {
        "name": "Corsa ",
        "ventes": 8,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Frontera hev",
        "ventes": 6,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Grandland-e",
        "ventes": 6,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Movano",
        "ventes": 3,
        "categorie": "autre",
        "partElec": 0
      },
      {
        "name": "4x4",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Astra-",
        "ventes": 2,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Bayon facelift",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 25,
        "essence": 25,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 60
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 21,
        "essence": 21,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 62
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 19,
        "essence": 19,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 68
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 16,
        "essence": 16,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 81
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 13,
        "essence": 13,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 77
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 11,
        "essence": 11,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 73
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 11,
        "essence": 11,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 82
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 10,
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 80
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 10,
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 90
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "92",
        "lat": 48.828,
        "lng": 2.218,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 78
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 8,
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 88
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 8,
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 75
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 8,
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Grandland-e",
        "pctHomme": 100
      },
      {
        "code": "65",
        "lat": 43.233,
        "lng": 0.08,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 67
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 83
      },
      {
        "code": "51",
        "lat": 49.258,
        "lng": 3.621,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 83
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa",
        "pctHomme": 100
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 83
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 80
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 80
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 60
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 80
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Combo",
        "pctHomme": 80
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 40
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 20
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 40
      },
      {
        "code": "80",
        "lat": 49.894,
        "lng": 2.296,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa ",
        "pctHomme": 50
      },
      {
        "code": "45",
        "lat": 47.903,
        "lng": 1.909,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 100
      },
      {
        "code": "54",
        "lat": 48.692,
        "lng": 6.184,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Frontera-hev",
        "pctHomme": 100
      },
      {
        "code": "37",
        "lat": 47.394,
        "lng": 0.685,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "56",
        "lat": 47.759,
        "lng": -2.765,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 75
      },
      {
        "code": "39",
        "lat": 46.675,
        "lng": 5.551,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 100
      },
      {
        "code": "10",
        "lat": 48.297,
        "lng": 4.074,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "86",
        "lat": 46.58,
        "lng": 0.34,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 100
      },
      {
        "code": "90",
        "lat": 47.633,
        "lng": 6.867,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 50
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 75
      },
      {
        "code": "25",
        "lat": 47.238,
        "lng": 6.024,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 0
      },
      {
        "code": "81",
        "lat": 43.897,
        "lng": 2.15,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Combo",
        "pctHomme": 67
      },
      {
        "code": "26",
        "lat": 44.933,
        "lng": 4.893,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 33
      },
      {
        "code": "63",
        "lat": 45.783,
        "lng": 3.083,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 67
      },
      {
        "code": "60",
        "lat": 49.43,
        "lng": 2.08,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "49",
        "lat": 47.478,
        "lng": -0.563,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 67
      },
      {
        "code": "68",
        "lat": 47.751,
        "lng": 7.336,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 67
      },
      {
        "code": "14",
        "lat": 49.183,
        "lng": -0.371,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "22",
        "lat": 48.514,
        "lng": -2.761,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 50
      },
      {
        "code": "16",
        "lat": 45.65,
        "lng": 0.156,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Combo",
        "pctHomme": 0
      },
      {
        "code": "05",
        "lat": 44.559,
        "lng": 6.08,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Grandland",
        "pctHomme": 100
      },
      {
        "code": "19",
        "lat": 45.267,
        "lng": 1.772,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 100
      },
      {
        "code": "02",
        "lat": 49.564,
        "lng": 3.622,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Mokka-e",
        "pctHomme": 100
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 50
      },
      {
        "code": "88",
        "lat": 48.174,
        "lng": 6.451,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "57",
        "lat": 49.119,
        "lng": 6.176,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 0
      },
      {
        "code": "50",
        "lat": 48.884,
        "lng": -1.178,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 100
      },
      {
        "code": "11",
        "lat": 43.213,
        "lng": 2.349,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "03",
        "lat": 46.341,
        "lng": 3.412,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 100
      },
      {
        "code": "82",
        "lat": 44.018,
        "lng": 1.355,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 50
      },
      {
        "code": "61",
        "lat": 48.43,
        "lng": 0.09,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Grandland",
        "pctHomme": 50
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Frontera hev",
        "pctHomme": 100
      },
      {
        "code": "41",
        "lat": 47.586,
        "lng": 1.336,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 100
      },
      {
        "code": "21",
        "lat": 47.322,
        "lng": 5.042,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 100
      },
      {
        "code": "29",
        "lat": 48.39,
        "lng": -4.486,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Vivaro",
        "pctHomme": 100
      },
      {
        "code": "04",
        "lat": 44.093,
        "lng": 6.236,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa-e",
        "pctHomme": 100
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa",
        "pctHomme": 0
      },
      {
        "code": "24",
        "lat": 45.183,
        "lng": 0.718,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Corsa",
        "pctHomme": 0
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "72",
        "lat": 47.996,
        "lng": 0.2,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "23",
        "lat": 46.175,
        "lng": 1.872,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Astra-e",
        "pctHomme": 100
      },
      {
        "code": "43",
        "lat": 45.043,
        "lng": 3.885,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bigster",
        "pctHomme": 100
      },
      {
        "code": "18",
        "lat": 47.081,
        "lng": 2.399,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "08",
        "lat": 49.762,
        "lng": 4.721,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 100
      },
      {
        "code": "85",
        "lat": 46.67,
        "lng": -1.43,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Crossland",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 45
      },
      {
        "source": "SUV",
        "target": "autre",
        "value": 8
      },
      {
        "source": "SUV",
        "target": "berline",
        "value": 6
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "SUV",
        "target": "familiale",
        "value": 3
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 42
      },
      {
        "source": "autre",
        "target": "autre",
        "value": 13
      },
      {
        "source": "autre",
        "target": "berline",
        "value": 1
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "autre",
        "target": "familiale",
        "value": 1
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 30
      },
      {
        "source": "berline",
        "target": "autre",
        "value": 6
      },
      {
        "source": "berline",
        "target": "berline",
        "value": 7
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 12
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 75
      },
      {
        "source": "citadine",
        "target": "autre",
        "value": 12
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 6
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 48
      },
      {
        "source": "citadine",
        "target": "familiale",
        "value": 5
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 17
      },
      {
        "source": "familiale",
        "target": "autre",
        "value": 1
      },
      {
        "source": "familiale",
        "target": "berline",
        "value": 2
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "familiale",
        "target": "familiale",
        "value": 2
      },
      {
        "source": "sport",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "utilitaire",
        "target": "autre",
        "value": 1
      }
    ],
    "sankeyCouleur": [
      {
        "source": "beige",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Beige",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Blanc",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Bleu",
        "value": 14
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 20
      },
      {
        "source": "blanc",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Marron",
        "value": 5
      },
      {
        "source": "blanc",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Vert",
        "value": 10
      },
      {
        "source": "bleu",
        "target": "Beige",
        "value": 3
      },
      {
        "source": "bleu",
        "target": "Blanc",
        "value": 6
      },
      {
        "source": "bleu",
        "target": "Bleu",
        "value": 9
      },
      {
        "source": "bleu",
        "target": "Gris",
        "value": 13
      },
      {
        "source": "bleu",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "bleu",
        "target": "Marron",
        "value": 2
      },
      {
        "source": "bleu",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "bleu",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "bleu",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "bleu",
        "target": "Vert",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Beige",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 19
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 32
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 34
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 6
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 8
      },
      {
        "source": "gris",
        "target": "Orange",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 16
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 15
      },
      {
        "source": "marron",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "marron",
        "target": "Bleu",
        "value": 4
      },
      {
        "source": "marron",
        "target": "Gris",
        "value": 5
      },
      {
        "source": "marron",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Beige",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 12
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 15
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 15
      },
      {
        "source": "noir",
        "target": "Jaune",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Marron",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 9
      },
      {
        "source": "noir",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "rouge",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "rouge",
        "target": "Bleu",
        "value": 4
      },
      {
        "source": "rouge",
        "target": "Gris",
        "value": 7
      },
      {
        "source": "rouge",
        "target": "Noir",
        "value": 4
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "vert",
        "target": "Bleu",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 89,
        "reprise": 146
      },
      {
        "axis": "berline",
        "achat": 22,
        "reprise": 55
      },
      {
        "axis": "SUV",
        "achat": 209,
        "reprise": 68
      },
      {
        "axis": "familiale",
        "achat": 11,
        "reprise": 28
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 1
      }
    ]
  },
  "volkswagen": {
    "kpis": {
      "totalVentes": 279,
      "reprises": 279,
      "partEssence": 47,
      "partElectrique": 0,
      "partHybride": 9,
      "topModele": "T-roc 2025",
      "topCategorie": "SUV",
      "tauxConcurrence": 76,
      "pctHomme": 61,
      "pctFemme": 39
    },
    "energie": {
      "essence": 130,
      "électrique": 73,
      "diesel": 33,
      "hybride": 24,
      "non_déterminé": 19
    },
    "couleurVoiture": {
      "Gris": 162,
      "Bleu": 28,
      "Orange": 23,
      "Vert": 22,
      "Rouge": 12,
      "Blanc": 10,
      "Jaune": 7,
      "Beige": 5,
      "Marron": 5,
      "Noir": 4,
      "Violet": 1
    },
    "couleurReprise": {
      "gris": 105,
      "noir": 54,
      "blanc": 44,
      "bleu": 31,
      "rouge": 21,
      "marron": 8,
      "vert": 6,
      "beige": 5,
      "rose": 3,
      "orange": 1,
      "violet": 1
    },
    "categorieVehicule": {
      "SUV": 164,
      "citadine": 62,
      "berline": 52,
      "autre": 1
    },
    "categorieReprise": {
      "citadine": 100,
      "berline": 55,
      "SUV": 47,
      "autre": 40,
      "familiale": 35,
      "sport": 2
    },
    "civilite": {
      "monsieur": 169,
      "madame": 110
    },
    "monthlySales": [
      {
        "label": "2024-04",
        "total": 7
      },
      {
        "label": "2024-05",
        "total": 1
      },
      {
        "label": "2024-08",
        "total": 1
      },
      {
        "label": "2024-09",
        "total": 1
      },
      {
        "label": "2024-10",
        "total": 2
      },
      {
        "label": "2024-11",
        "total": 5
      },
      {
        "label": "2025-01",
        "total": 19
      },
      {
        "label": "2025-02",
        "total": 13
      },
      {
        "label": "2025-03",
        "total": 24
      },
      {
        "label": "2025-04",
        "total": 18
      },
      {
        "label": "2025-05",
        "total": 17
      },
      {
        "label": "2025-06",
        "total": 7
      },
      {
        "label": "2025-07",
        "total": 25
      },
      {
        "label": "2025-08",
        "total": 14
      },
      {
        "label": "2025-09",
        "total": 17
      },
      {
        "label": "2025-10",
        "total": 28
      },
      {
        "label": "2025-11",
        "total": 38
      },
      {
        "label": "2025-12",
        "total": 42
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-04",
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-05",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-08",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-09",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-10",
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 0,
        "diesel": 1,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 8,
        "diesel": 7,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 6,
        "diesel": 1,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 14,
        "diesel": 3,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 11,
        "diesel": 2,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 6,
        "diesel": 5,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 5,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 7,
        "diesel": 5,
        "hybride": 4,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 7,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 9,
        "diesel": 3,
        "hybride": 3,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 11,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 16,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 22,
        "diesel": 0,
        "hybride": 10,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-04",
        "Blanc": 2,
        "Gris": 2,
        "Jaune": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2024-05",
        "Gris": 1
      },
      {
        "label": "2024-08",
        "Gris": 1
      },
      {
        "label": "2024-09",
        "Orange": 1
      },
      {
        "label": "2024-10",
        "Gris": 2
      },
      {
        "label": "2024-11",
        "Gris": 4,
        "Rouge": 1
      },
      {
        "label": "2025-01",
        "Beige": 1,
        "Bleu": 1,
        "Gris": 13,
        "Noir": 2,
        "Orange": 1,
        "Vert": 1
      },
      {
        "label": "2025-02",
        "Bleu": 2,
        "Gris": 10,
        "Vert": 1
      },
      {
        "label": "2025-03",
        "Blanc": 1,
        "Bleu": 5,
        "Gris": 13,
        "Jaune": 1,
        "Noir": 1,
        "Orange": 2,
        "Vert": 1
      },
      {
        "label": "2025-04",
        "Beige": 2,
        "Bleu": 5,
        "Gris": 5,
        "Orange": 2,
        "Vert": 3,
        "Violet": 1
      },
      {
        "label": "2025-05",
        "Blanc": 2,
        "Bleu": 2,
        "Gris": 6,
        "Orange": 2,
        "Rouge": 3,
        "Vert": 2
      },
      {
        "label": "2025-06",
        "Bleu": 1,
        "Gris": 5,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Blanc": 1,
        "Gris": 21,
        "Marron": 1,
        "Rouge": 2
      },
      {
        "label": "2025-08",
        "Bleu": 1,
        "Gris": 12,
        "Orange": 1
      },
      {
        "label": "2025-09",
        "Gris": 11,
        "Orange": 1,
        "Rouge": 1,
        "Vert": 4
      },
      {
        "label": "2025-10",
        "Beige": 1,
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 10,
        "Jaune": 2,
        "Marron": 3,
        "Noir": 1,
        "Orange": 5,
        "Rouge": 1,
        "Vert": 2
      },
      {
        "label": "2025-11",
        "Beige": 1,
        "Blanc": 1,
        "Bleu": 5,
        "Gris": 20,
        "Jaune": 3,
        "Orange": 3,
        "Rouge": 2,
        "Vert": 3
      },
      {
        "label": "2025-12",
        "Blanc": 2,
        "Bleu": 4,
        "Gris": 26,
        "Marron": 1,
        "Orange": 5,
        "Rouge": 1,
        "Vert": 3
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 95
      },
      {
        "name": "Cupra",
        "weight": 33
      },
      {
        "name": "Volkswagen",
        "weight": 22
      },
      {
        "name": "Hyundai",
        "weight": 20
      },
      {
        "name": "Audi",
        "weight": 12
      },
      {
        "name": "Peugeot",
        "weight": 5
      },
      {
        "name": "Skoda",
        "weight": 4
      },
      {
        "name": "Seat",
        "weight": 3
      },
      {
        "name": "Opel",
        "weight": 3
      },
      {
        "name": "Nissan",
        "weight": 3
      }
    ],
    "modeleStats": [
      {
        "name": "T-roc 2025",
        "ventes": 44,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Id.3 id. 2025",
        "ventes": 40,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Polo 2025",
        "ventes": 40,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Id.4 id. 2025",
        "ventes": 18,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Tiguan 2025",
        "ventes": 14,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "T-roc",
        "ventes": 12,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "T-cross life 2025",
        "ventes": 10,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Taigo 2026",
        "ventes": 10,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "T-cross vo",
        "ventes": 9,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Polo 2026",
        "ventes": 8,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Polo",
        "ventes": 6,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "T-roc vo",
        "ventes": 6,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Tiguan",
        "ventes": 6,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "T-cross vw edition 2025",
        "ventes": 5,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "T-cross 2022",
        "ventes": 4,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 25,
        "essence": 11,
        "diesel": 2,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 48
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 17,
        "essence": 7,
        "diesel": 3,
        "hybride": 4,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 53
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 14,
        "essence": 8,
        "diesel": 2,
        "hybride": 1,
        "electrique": 0,
        "topModele": "T-roc",
        "pctHomme": 71
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 12,
        "essence": 6,
        "diesel": 2,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 83
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 9,
        "essence": 2,
        "diesel": 2,
        "hybride": 2,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 78
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 9,
        "essence": 3,
        "diesel": 1,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Volkswagen e-up!",
        "pctHomme": 78
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 9,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross",
        "pctHomme": 67
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 8,
        "essence": 2,
        "diesel": 2,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 75
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 7,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 86
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 7,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 86
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 7,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 57
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 7,
        "essence": 3,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 71
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 7,
        "essence": 2,
        "diesel": 1,
        "hybride": 2,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 86
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 6,
        "essence": 1,
        "diesel": 1,
        "hybride": 2,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 83
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 6,
        "essence": 2,
        "diesel": 3,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc vo",
        "pctHomme": 83
      },
      {
        "code": "02",
        "lat": 49.564,
        "lng": 3.622,
        "total": 6,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 67
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross 2022",
        "pctHomme": 20
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 5,
        "essence": 1,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 80
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 5,
        "essence": 4,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc style 2025",
        "pctHomme": 40
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 5,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q4 e-tron",
        "pctHomme": 80
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 4,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 0
      },
      {
        "code": "26",
        "lat": 44.933,
        "lng": 4.893,
        "total": 4,
        "essence": 2,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Tiguan 2023",
        "pctHomme": 0
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 4,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 0
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 4,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 75
      },
      {
        "code": "68",
        "lat": 47.751,
        "lng": 7.336,
        "total": 3,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 67
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 3,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 33
      },
      {
        "code": "43",
        "lat": 45.043,
        "lng": 3.885,
        "total": 3,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tiguan 2025",
        "pctHomme": 67
      },
      {
        "code": "45",
        "lat": 47.903,
        "lng": 1.909,
        "total": 3,
        "essence": 2,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Taigo 2026",
        "pctHomme": 100
      },
      {
        "code": "85",
        "lat": 46.67,
        "lng": -1.43,
        "total": 3,
        "essence": 1,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 67
      },
      {
        "code": "57",
        "lat": 49.119,
        "lng": 6.176,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tiguan 2025",
        "pctHomme": 100
      },
      {
        "code": "16",
        "lat": 45.65,
        "lng": 0.156,
        "total": 3,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2026",
        "pctHomme": 0
      },
      {
        "code": "50",
        "lat": 48.884,
        "lng": -1.178,
        "total": 3,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2026",
        "pctHomme": 33
      },
      {
        "code": "10",
        "lat": 48.297,
        "lng": 4.074,
        "total": 3,
        "essence": 1,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2021",
        "pctHomme": 67
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Taigo 2026",
        "pctHomme": 100
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 50
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc",
        "pctHomme": 50
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Taigo 2026",
        "pctHomme": 100
      },
      {
        "code": "04",
        "lat": 44.093,
        "lng": 6.236,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross 2022",
        "pctHomme": 0
      },
      {
        "code": "14",
        "lat": 49.183,
        "lng": -0.371,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.4 id. 2025",
        "pctHomme": 0
      },
      {
        "code": "80",
        "lat": 49.894,
        "lng": 2.296,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 100
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Taigo 2026",
        "pctHomme": 0
      },
      {
        "code": "72",
        "lat": 47.996,
        "lng": 0.2,
        "total": 2,
        "essence": 0,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tiguan allspace 2023",
        "pctHomme": 0
      },
      {
        "code": "48",
        "lat": 44.519,
        "lng": 3.501,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 2026",
        "pctHomme": 0
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 2,
        "essence": 0,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Golf 2025",
        "pctHomme": 50
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo",
        "pctHomme": 50
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo",
        "pctHomme": 50
      },
      {
        "code": "25",
        "lat": 47.238,
        "lng": 6.024,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Polo",
        "pctHomme": 100
      },
      {
        "code": "37",
        "lat": 47.394,
        "lng": 0.685,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 50
      },
      {
        "code": "32",
        "lat": 43.645,
        "lng": 0.586,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 100
      },
      {
        "code": "56",
        "lat": 47.759,
        "lng": -2.765,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 vo",
        "pctHomme": 100
      },
      {
        "code": "61",
        "lat": 48.43,
        "lng": 0.09,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2021",
        "pctHomme": 0
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross life 2025",
        "pctHomme": 50
      },
      {
        "code": "11",
        "lat": 43.213,
        "lng": 2.349,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross vw edition 2025",
        "pctHomme": 50
      },
      {
        "code": "81",
        "lat": 43.897,
        "lng": 2.15,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross life 2025",
        "pctHomme": 100
      },
      {
        "code": "92",
        "lat": 48.828,
        "lng": 2.218,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 100
      },
      {
        "code": "55",
        "lat": 48.773,
        "lng": 5.168,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Id.3 id. 2025",
        "pctHomme": 0
      },
      {
        "code": "29",
        "lat": 48.39,
        "lng": -4.486,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross",
        "pctHomme": 100
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2025",
        "pctHomme": 0
      },
      {
        "code": "22",
        "lat": 48.514,
        "lng": -2.761,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Tiguan 2025",
        "pctHomme": 100
      },
      {
        "code": "60",
        "lat": 49.43,
        "lng": 2.08,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-roc 2025",
        "pctHomme": 100
      },
      {
        "code": "19",
        "lat": 45.267,
        "lng": 1.772,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross vo",
        "pctHomme": 100
      },
      {
        "code": "51",
        "lat": 49.258,
        "lng": 3.621,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Polo 2023",
        "pctHomme": 0
      },
      {
        "code": "86",
        "lat": 46.58,
        "lng": 0.34,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "T-cross vw edition 2025",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 38
      },
      {
        "source": "SUV",
        "target": "berline",
        "value": 4
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 5
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 22
      },
      {
        "source": "autre",
        "target": "berline",
        "value": 7
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 11
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 24
      },
      {
        "source": "berline",
        "target": "autre",
        "value": 1
      },
      {
        "source": "berline",
        "target": "berline",
        "value": 14
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 50
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 23
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 27
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 28
      },
      {
        "source": "familiale",
        "target": "berline",
        "value": 4
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 3
      },
      {
        "source": "sport",
        "target": "SUV",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "beige",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Bleu",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 27
      },
      {
        "source": "blanc",
        "target": "Orange",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Vert",
        "value": 3
      },
      {
        "source": "bleu",
        "target": "Blanc",
        "value": 4
      },
      {
        "source": "bleu",
        "target": "Bleu",
        "value": 4
      },
      {
        "source": "bleu",
        "target": "Gris",
        "value": 19
      },
      {
        "source": "bleu",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 8
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 62
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Orange",
        "value": 10
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 11
      },
      {
        "source": "marron",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "marron",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 11
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 29
      },
      {
        "source": "noir",
        "target": "Jaune",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Vert",
        "value": 3
      },
      {
        "source": "rouge",
        "target": "Gris",
        "value": 12
      },
      {
        "source": "rouge",
        "target": "Orange",
        "value": 4
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "vert",
        "target": "Gris",
        "value": 5
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 62,
        "reprise": 100
      },
      {
        "axis": "berline",
        "achat": 52,
        "reprise": 55
      },
      {
        "axis": "SUV",
        "achat": 164,
        "reprise": 47
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 35
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 2
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "hyundai": {
    "kpis": {
      "totalVentes": 139,
      "reprises": 139,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Kona hybrid",
      "topCategorie": "SUV",
      "tauxConcurrence": 82,
      "pctHomme": 71,
      "pctFemme": 29
    },
    "energie": {
      "essence": 139
    },
    "couleurVoiture": {
      "Gris": 40,
      "Bleu": 24,
      "Rouge": 22,
      "Blanc": 19,
      "Beige": 9,
      "Marron": 8,
      "Vert": 7,
      "Jaune": 5,
      "Noir": 3,
      "Violet": 1,
      "Orange": 1
    },
    "couleurReprise": {
      "gris": 43,
      "noir": 32,
      "blanc": 18,
      "bleu": 15,
      "rouge": 14,
      "vert": 6,
      "marron": 5,
      "beige": 5,
      "orange": 1
    },
    "categorieVehicule": {
      "SUV": 115,
      "citadine": 20,
      "berline": 4
    },
    "categorieReprise": {
      "citadine": 50,
      "autre": 27,
      "berline": 23,
      "SUV": 23,
      "familiale": 15,
      "sport": 1
    },
    "civilite": {
      "monsieur": 99,
      "madame": 40
    },
    "monthlySales": [
      {
        "label": "2024-08",
        "total": 1
      },
      {
        "label": "2024-09",
        "total": 1
      },
      {
        "label": "2024-11",
        "total": 6
      },
      {
        "label": "2025-01",
        "total": 19
      },
      {
        "label": "2025-02",
        "total": 8
      },
      {
        "label": "2025-03",
        "total": 9
      },
      {
        "label": "2025-04",
        "total": 7
      },
      {
        "label": "2025-05",
        "total": 10
      },
      {
        "label": "2025-06",
        "total": 5
      },
      {
        "label": "2025-07",
        "total": 25
      },
      {
        "label": "2025-08",
        "total": 6
      },
      {
        "label": "2025-09",
        "total": 10
      },
      {
        "label": "2025-10",
        "total": 8
      },
      {
        "label": "2025-11",
        "total": 10
      },
      {
        "label": "2025-12",
        "total": 14
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-08",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-09",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 19,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 25,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 14,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-08",
        "Blanc": 1
      },
      {
        "label": "2024-09",
        "Bleu": 1
      },
      {
        "label": "2024-11",
        "Beige": 1,
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 1,
        "Jaune": 1,
        "Noir": 1
      },
      {
        "label": "2025-01",
        "Blanc": 5,
        "Bleu": 1,
        "Gris": 8,
        "Marron": 1,
        "Rouge": 2,
        "Vert": 2
      },
      {
        "label": "2025-02",
        "Beige": 1,
        "Blanc": 1,
        "Gris": 1,
        "Marron": 2,
        "Rouge": 3
      },
      {
        "label": "2025-03",
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 3,
        "Marron": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-04",
        "Bleu": 3,
        "Gris": 4
      },
      {
        "label": "2025-05",
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 1,
        "Jaune": 1,
        "Rouge": 6
      },
      {
        "label": "2025-06",
        "Beige": 1,
        "Bleu": 1,
        "Gris": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Beige": 2,
        "Blanc": 4,
        "Bleu": 6,
        "Gris": 10,
        "Marron": 1,
        "Noir": 1,
        "Orange": 1
      },
      {
        "label": "2025-08",
        "Bleu": 2,
        "Gris": 2,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-09",
        "Beige": 3,
        "Blanc": 2,
        "Bleu": 2,
        "Gris": 1,
        "Rouge": 2
      },
      {
        "label": "2025-10",
        "Beige": 1,
        "Blanc": 1,
        "Gris": 2,
        "Marron": 1,
        "Rouge": 2,
        "Vert": 1
      },
      {
        "label": "2025-11",
        "Blanc": 2,
        "Bleu": 2,
        "Gris": 3,
        "Jaune": 1,
        "Marron": 2
      },
      {
        "label": "2025-12",
        "Bleu": 2,
        "Gris": 3,
        "Jaune": 2,
        "Noir": 1,
        "Rouge": 4,
        "Vert": 1,
        "Violet": 1
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 63
      },
      {
        "name": "Volkswagen",
        "weight": 20
      },
      {
        "name": "Toyota",
        "weight": 7
      },
      {
        "name": "Skoda",
        "weight": 5
      },
      {
        "name": "Opel",
        "weight": 3
      },
      {
        "name": "Audi",
        "weight": 3
      },
      {
        "name": "Suzuki",
        "weight": 2
      },
      {
        "name": "Dacia",
        "weight": 2
      },
      {
        "name": "Hyundai",
        "weight": 2
      },
      {
        "name": "Cupra",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Kona hybrid",
        "ventes": 35,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Kona electric",
        "ventes": 28,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Tucson hybrid facelift",
        "ventes": 27,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Bayon facelift",
        "ventes": 21,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Inster electric",
        "ventes": 14,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Kona",
        "ventes": 4,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "I20",
        "ventes": 3,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C5 x phev",
        "ventes": 2,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Ëc3",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ëc4",
        "ventes": 2,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "I10",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 9,
        "essence": 9,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 33
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 7,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ëc4",
        "pctHomme": 86
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 83
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 6,
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 80
      },
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 80
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 100
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 75
      },
      {
        "code": "88",
        "lat": 48.174,
        "lng": 6.451,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 100
      },
      {
        "code": "79",
        "lat": 46.325,
        "lng": -0.46,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 50
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 50
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C5 x phev",
        "pctHomme": 100
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 67
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 33
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 67
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "72",
        "lat": 47.996,
        "lng": 0.2,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 67
      },
      {
        "code": "68",
        "lat": 47.751,
        "lng": 7.336,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 0
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 100
      },
      {
        "code": "80",
        "lat": 49.894,
        "lng": 2.296,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 50
      },
      {
        "code": "32",
        "lat": 43.645,
        "lng": 0.586,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 100
      },
      {
        "code": "50",
        "lat": 48.884,
        "lng": -1.178,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 0
      },
      {
        "code": "48",
        "lat": 44.519,
        "lng": 3.501,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 0
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "I10",
        "pctHomme": 0
      },
      {
        "code": "85",
        "lat": 46.67,
        "lng": -1.43,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 50
      },
      {
        "code": "89",
        "lat": 47.799,
        "lng": 3.567,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona",
        "pctHomme": 100
      },
      {
        "code": "61",
        "lat": 48.43,
        "lng": 0.09,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 0
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 0
      },
      {
        "code": "56",
        "lat": 47.759,
        "lng": -2.765,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "51",
        "lat": 49.258,
        "lng": 3.621,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "63",
        "lat": 45.783,
        "lng": 3.083,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "25",
        "lat": 47.238,
        "lng": 6.024,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ëc3",
        "pctHomme": 100
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 100
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "92",
        "lat": 48.828,
        "lng": 2.218,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 100
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 0
      },
      {
        "code": "04",
        "lat": 44.093,
        "lng": 6.236,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "I20",
        "pctHomme": 100
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 0
      },
      {
        "code": "05",
        "lat": 44.559,
        "lng": 6.08,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 100
      },
      {
        "code": "10",
        "lat": 48.297,
        "lng": 4.074,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "I20",
        "pctHomme": 0
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 100
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Bayon facelift",
        "pctHomme": 100
      },
      {
        "code": "70",
        "lat": 47.62,
        "lng": 6.15,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona hybrid",
        "pctHomme": 100
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kona electric",
        "pctHomme": 0
      },
      {
        "code": "22",
        "lat": 48.514,
        "lng": -2.761,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tucson hybrid facelift",
        "pctHomme": 100
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Inster electric",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 17
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 24
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 3
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 22
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 37
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 4
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 9
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 14
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "sport",
        "target": "SUV",
        "value": 1
      }
    ],
    "sankeyCouleur": [
      {
        "source": "beige",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Blanc",
        "value": 7
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 6
      },
      {
        "source": "bleu",
        "target": "Bleu",
        "value": 3
      },
      {
        "source": "bleu",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "bleu",
        "target": "Rouge",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Beige",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 9
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 9
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 7
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 6
      },
      {
        "source": "marron",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Beige",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 9
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 7
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 6
      },
      {
        "source": "rouge",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "rouge",
        "target": "Gris",
        "value": 5
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 3
      },
      {
        "source": "vert",
        "target": "Gris",
        "value": 4
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 20,
        "reprise": 50
      },
      {
        "axis": "berline",
        "achat": 4,
        "reprise": 23
      },
      {
        "axis": "SUV",
        "achat": 115,
        "reprise": 23
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 15
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "cupra": {
    "kpis": {
      "totalVentes": 79,
      "reprises": 79,
      "partEssence": 11,
      "partElectrique": 0,
      "partHybride": 18,
      "topModele": "Cupra born 204 ch batterie l",
      "topCategorie": "citadine",
      "tauxConcurrence": 87,
      "pctHomme": 66,
      "pctFemme": 34
    },
    "energie": {
      "électrique": 46,
      "hybride": 14,
      "essence": 9,
      "diesel": 8,
      "non_déterminé": 2
    },
    "couleurVoiture": {
      "Rouge": 15,
      "Bleu": 15,
      "Gris": 12,
      "Beige": 8,
      "Vert": 7,
      "Jaune": 7,
      "Blanc": 6,
      "Noir": 4,
      "Orange": 3,
      "Marron": 2
    },
    "couleurReprise": {
      "gris": 33,
      "noir": 21,
      "bleu": 9,
      "blanc": 5,
      "rouge": 5,
      "rose": 2,
      "marron": 2,
      "vert": 2
    },
    "categorieVehicule": {
      "citadine": 42,
      "SUV": 33,
      "berline": 4
    },
    "categorieReprise": {
      "citadine": 35,
      "berline": 14,
      "autre": 13,
      "familiale": 9,
      "SUV": 7,
      "sport": 1
    },
    "civilite": {
      "monsieur": 52,
      "madame": 27
    },
    "monthlySales": [
      {
        "label": "2024-08",
        "total": 1
      },
      {
        "label": "2025-01",
        "total": 15
      },
      {
        "label": "2025-02",
        "total": 3
      },
      {
        "label": "2025-03",
        "total": 4
      },
      {
        "label": "2025-04",
        "total": 6
      },
      {
        "label": "2025-05",
        "total": 3
      },
      {
        "label": "2025-06",
        "total": 3
      },
      {
        "label": "2025-07",
        "total": 5
      },
      {
        "label": "2025-08",
        "total": 2
      },
      {
        "label": "2025-10",
        "total": 5
      },
      {
        "label": "2025-11",
        "total": 20
      },
      {
        "label": "2025-12",
        "total": 12
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-08",
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 3,
        "diesel": 3,
        "hybride": 4,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 1,
        "diesel": 1,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 0,
        "diesel": 2,
        "hybride": 4,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-08",
        "Rouge": 1
      },
      {
        "label": "2025-01",
        "Beige": 1,
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 2,
        "Jaune": 2,
        "Marron": 1,
        "Noir": 2,
        "Rouge": 2,
        "Vert": 2
      },
      {
        "label": "2025-02",
        "Beige": 1,
        "Bleu": 1,
        "Noir": 1
      },
      {
        "label": "2025-03",
        "Bleu": 2,
        "Gris": 2
      },
      {
        "label": "2025-04",
        "Bleu": 2,
        "Gris": 1,
        "Jaune": 1,
        "Rouge": 2
      },
      {
        "label": "2025-05",
        "Blanc": 1,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-06",
        "Gris": 1,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-07",
        "Beige": 1,
        "Bleu": 4
      },
      {
        "label": "2025-08",
        "Beige": 1,
        "Blanc": 1
      },
      {
        "label": "2025-10",
        "Blanc": 1,
        "Bleu": 1,
        "Rouge": 1,
        "Vert": 2
      },
      {
        "label": "2025-11",
        "Beige": 4,
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 3,
        "Jaune": 3,
        "Orange": 1,
        "Rouge": 4,
        "Vert": 3
      },
      {
        "label": "2025-12",
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 3,
        "Jaune": 1,
        "Marron": 1,
        "Noir": 1,
        "Rouge": 3
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 39
      },
      {
        "name": "Volkswagen",
        "weight": 20
      },
      {
        "name": "Audi",
        "weight": 2
      },
      {
        "name": "Toyota",
        "weight": 2
      },
      {
        "name": "Renault",
        "weight": 1
      },
      {
        "name": "Peugeot",
        "weight": 1
      },
      {
        "name": "Hyundai",
        "weight": 1
      },
      {
        "name": "Honda",
        "weight": 1
      },
      {
        "name": "Seat",
        "weight": 1
      },
      {
        "name": "Opel",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Cupra born 204 ch batterie l",
        "ventes": 35,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Cupra formentor",
        "ventes": 27,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Cupra tavascan",
        "ventes": 6,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Cupra born 230 ch batterie xl",
        "ventes": 3,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Cupra leon",
        "ventes": 3,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Terramar",
        "ventes": 3,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C3",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ëc4",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 9,
        "essence": 0,
        "diesel": 3,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 56
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 6,
        "essence": 0,
        "diesel": 0,
        "hybride": 4,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 67
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 4,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 50
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 4,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 230 ch batterie xl",
        "pctHomme": 100
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 4,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 25
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 3,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 3,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 3,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "88",
        "lat": 48.174,
        "lng": 6.451,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 2,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 0
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "50",
        "lat": 48.884,
        "lng": -1.178,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Terramar",
        "pctHomme": 100
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra tavascan",
        "pctHomme": 100
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "10",
        "lat": 48.297,
        "lng": 4.074,
        "total": 2,
        "essence": 0,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "14",
        "lat": 49.183,
        "lng": -0.371,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      },
      {
        "code": "28",
        "lat": 48.444,
        "lng": 1.487,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 0
      },
      {
        "code": "26",
        "lat": 44.933,
        "lng": 4.893,
        "total": 1,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra leon",
        "pctHomme": 100
      },
      {
        "code": "45",
        "lat": 47.903,
        "lng": 1.909,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 0
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra tavascan",
        "pctHomme": 100
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 0
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Cupra formentor",
        "pctHomme": 0
      },
      {
        "code": "24",
        "lat": 45.183,
        "lng": 0.718,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 100
      },
      {
        "code": "58",
        "lat": 47.001,
        "lng": 3.159,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra born 204 ch batterie l",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 3
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 8
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 5
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 3
      },
      {
        "source": "berline",
        "target": "berline",
        "value": 1
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 10
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 16
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 3
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 3
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "sport",
        "target": "citadine",
        "value": 1
      }
    ],
    "sankeyCouleur": [
      {
        "source": "bleu",
        "target": "Bleu",
        "value": 3
      },
      {
        "source": "bleu",
        "target": "Rouge",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Beige",
        "value": 6
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 7
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 7
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 5
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Vert",
        "value": 4
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 42,
        "reprise": 35
      },
      {
        "axis": "berline",
        "achat": 4,
        "reprise": 14
      },
      {
        "axis": "SUV",
        "achat": 33,
        "reprise": 7
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 9
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "ds": {
    "kpis": {
      "totalVentes": 75,
      "reprises": 75,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Ds 3",
      "topCategorie": "citadine",
      "tauxConcurrence": 21,
      "pctHomme": 85,
      "pctFemme": 15
    },
    "energie": {
      "essence": 75
    },
    "couleurVoiture": {
      "Gris": 22,
      "Bleu": 13,
      "Blanc": 8,
      "Noir": 6,
      "Beige": 6,
      "Jaune": 5,
      "Vert": 5,
      "Marron": 5,
      "Rouge": 4,
      "Orange": 1
    },
    "couleurReprise": {
      "gris": 28,
      "noir": 20,
      "blanc": 14,
      "rouge": 4,
      "marron": 3,
      "jaune": 2,
      "beige": 2,
      "bleu": 2
    },
    "categorieVehicule": {
      "citadine": 52,
      "SUV": 13,
      "berline": 10
    },
    "categorieReprise": {
      "SUV": 25,
      "berline": 21,
      "citadine": 18,
      "autre": 8,
      "sport": 2,
      "familiale": 1
    },
    "civilite": {
      "monsieur": 64,
      "madame": 11
    },
    "monthlySales": [
      {
        "label": "2024-06",
        "total": 11
      },
      {
        "label": "2025-04",
        "total": 20
      },
      {
        "label": "2025-05",
        "total": 16
      },
      {
        "label": "2025-06",
        "total": 24
      },
      {
        "label": "2025-07",
        "total": 4
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-06",
        "essence": 11,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 20,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 16,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 24,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-06",
        "Bleu": 2,
        "Gris": 6,
        "Jaune": 1,
        "Noir": 1,
        "Rouge": 1
      },
      {
        "label": "2025-04",
        "Beige": 1,
        "Blanc": 3,
        "Bleu": 4,
        "Gris": 6,
        "Jaune": 1,
        "Noir": 2,
        "Orange": 1,
        "Vert": 2
      },
      {
        "label": "2025-05",
        "Beige": 4,
        "Bleu": 3,
        "Gris": 2,
        "Jaune": 1,
        "Marron": 1,
        "Noir": 1,
        "Rouge": 2,
        "Vert": 2
      },
      {
        "label": "2025-06",
        "Beige": 1,
        "Blanc": 4,
        "Bleu": 4,
        "Gris": 6,
        "Jaune": 2,
        "Marron": 4,
        "Noir": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Blanc": 1,
        "Gris": 2,
        "Noir": 1
      }
    ],
    "competition": [
      {
        "name": "Skoda",
        "weight": 4
      },
      {
        "name": "Volkswagen",
        "weight": 4
      },
      {
        "name": "Toyota",
        "weight": 2
      },
      {
        "name": "Lexus",
        "weight": 2
      },
      {
        "name": "Opel",
        "weight": 2
      },
      {
        "name": "Citroën",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Ds 3",
        "ventes": 52,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ds 7",
        "ventes": 13,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Ds 4",
        "ventes": 10,
        "categorie": "berline",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 5,
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 50
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "32",
        "lat": 43.645,
        "lng": 0.586,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 33
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "90",
        "lat": 47.633,
        "lng": 6.867,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 100
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 100
      },
      {
        "code": "80",
        "lat": 49.894,
        "lng": 2.296,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 0
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 0
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "29",
        "lat": 48.39,
        "lng": -4.486,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 100
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 100
      },
      {
        "code": "82",
        "lat": 44.018,
        "lng": 1.355,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 3",
        "pctHomme": 0
      },
      {
        "code": "68",
        "lat": 47.751,
        "lng": 7.336,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 100
      },
      {
        "code": "12",
        "lat": 44.35,
        "lng": 2.575,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 4",
        "pctHomme": 0
      },
      {
        "code": "46",
        "lat": 44.45,
        "lng": 1.441,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 4",
        "pctHomme": 100
      },
      {
        "code": "08",
        "lat": 49.762,
        "lng": 4.721,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 4",
        "pctHomme": 100
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 7",
        "pctHomme": 100
      },
      {
        "code": "15",
        "lat": 44.931,
        "lng": 2.444,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ds 4",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 8
      },
      {
        "source": "SUV",
        "target": "berline",
        "value": 3
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 14
      },
      {
        "source": "autre",
        "target": "berline",
        "value": 2
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 2
      },
      {
        "source": "berline",
        "target": "berline",
        "value": 3
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "familiale",
        "target": "berline",
        "value": 1
      },
      {
        "source": "sport",
        "target": "SUV",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "blanc",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Beige",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 6
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 9
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Marron",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 3
      },
      {
        "source": "rouge",
        "target": "Gris",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 52,
        "reprise": 18
      },
      {
        "axis": "berline",
        "achat": 10,
        "reprise": 21
      },
      {
        "axis": "SUV",
        "achat": 13,
        "reprise": 25
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 2
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "seat": {
    "kpis": {
      "totalVentes": 69,
      "reprises": 69,
      "partEssence": 93,
      "partElectrique": 0,
      "partHybride": 1,
      "topModele": "Seat arona",
      "topCategorie": "SUV",
      "tauxConcurrence": 70,
      "pctHomme": 62,
      "pctFemme": 38
    },
    "energie": {
      "essence": 64,
      "diesel": 2,
      "non_déterminé": 2,
      "hybride": 1
    },
    "couleurVoiture": {
      "Gris": 22,
      "Bleu": 12,
      "Rouge": 9,
      "Vert": 8,
      "Noir": 5,
      "Beige": 5,
      "Marron": 2,
      "Jaune": 2,
      "Orange": 2,
      "Blanc": 2
    },
    "couleurReprise": {
      "gris": 28,
      "noir": 12,
      "blanc": 10,
      "rouge": 5,
      "bleu": 5,
      "beige": 4,
      "marron": 2,
      "vert": 2,
      "orange": 1
    },
    "categorieVehicule": {
      "SUV": 41,
      "citadine": 27,
      "berline": 1
    },
    "categorieReprise": {
      "citadine": 28,
      "berline": 16,
      "autre": 9,
      "SUV": 9,
      "familiale": 7
    },
    "civilite": {
      "monsieur": 43,
      "madame": 26
    },
    "monthlySales": [
      {
        "label": "2024-08",
        "total": 1
      },
      {
        "label": "2024-11",
        "total": 5
      },
      {
        "label": "2025-01",
        "total": 13
      },
      {
        "label": "2025-02",
        "total": 4
      },
      {
        "label": "2025-03",
        "total": 9
      },
      {
        "label": "2025-04",
        "total": 5
      },
      {
        "label": "2025-05",
        "total": 4
      },
      {
        "label": "2025-06",
        "total": 2
      },
      {
        "label": "2025-07",
        "total": 5
      },
      {
        "label": "2025-09",
        "total": 5
      },
      {
        "label": "2025-10",
        "total": 4
      },
      {
        "label": "2025-11",
        "total": 8
      },
      {
        "label": "2025-12",
        "total": 4
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-08",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-01",
        "essence": 12,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 3,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 8,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 3,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 5,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-08",
        "Gris": 1
      },
      {
        "label": "2024-11",
        "Gris": 2,
        "Marron": 1,
        "Noir": 1,
        "Vert": 1
      },
      {
        "label": "2025-01",
        "Beige": 2,
        "Blanc": 2,
        "Bleu": 1,
        "Gris": 4,
        "Noir": 1,
        "Rouge": 2,
        "Vert": 1
      },
      {
        "label": "2025-02",
        "Bleu": 2,
        "Jaune": 1,
        "Marron": 1
      },
      {
        "label": "2025-03",
        "Bleu": 1,
        "Gris": 2,
        "Rouge": 4,
        "Vert": 2
      },
      {
        "label": "2025-04",
        "Beige": 1,
        "Gris": 2,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-05",
        "Bleu": 2,
        "Orange": 1,
        "Vert": 1
      },
      {
        "label": "2025-06",
        "Gris": 1,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Beige": 1,
        "Gris": 2,
        "Noir": 1,
        "Rouge": 1
      },
      {
        "label": "2025-09",
        "Beige": 1,
        "Gris": 3,
        "Vert": 1
      },
      {
        "label": "2025-10",
        "Bleu": 3,
        "Noir": 1
      },
      {
        "label": "2025-11",
        "Bleu": 2,
        "Gris": 3,
        "Jaune": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-12",
        "Bleu": 1,
        "Gris": 2,
        "Noir": 1
      }
    ],
    "competition": [
      {
        "name": "Volkswagen",
        "weight": 20
      },
      {
        "name": "Citroën",
        "weight": 18
      },
      {
        "name": "Seat",
        "weight": 4
      },
      {
        "name": "Peugeot",
        "weight": 2
      },
      {
        "name": "Audi",
        "weight": 1
      },
      {
        "name": "Hyundai",
        "weight": 1
      },
      {
        "name": "Opel",
        "weight": 1
      },
      {
        "name": "NC",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Seat arona",
        "ventes": 19,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Seat ibiza",
        "ventes": 13,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Arona",
        "ventes": 12,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Ibiza edition",
        "ventes": 6,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Arona copa",
        "ventes": 3,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Arona edition",
        "ventes": 3,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Ibiza",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ibiza fr",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Seat nouvelle ateca",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Arona fr",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Ateca xperience",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "C3a",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Cupra ateca phase 1",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ibiza copa",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Polo 2025",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 7,
        "essence": 7,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat ibiza",
        "pctHomme": 14
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 100
      },
      {
        "code": "81",
        "lat": 43.897,
        "lng": 2.15,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza",
        "pctHomme": 100
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 100
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 67
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 33
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona edition",
        "pctHomme": 0
      },
      {
        "code": "04",
        "lat": 44.093,
        "lng": 6.236,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 0
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 100
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 100
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Seat nouvelle leon",
        "pctHomme": 50
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza edition",
        "pctHomme": 100
      },
      {
        "code": "74",
        "lat": 46.067,
        "lng": 6.406,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza edition",
        "pctHomme": 50
      },
      {
        "code": "02",
        "lat": 49.564,
        "lng": 3.622,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona",
        "pctHomme": 100
      },
      {
        "code": "57",
        "lat": 49.119,
        "lng": 6.176,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 100
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 50
      },
      {
        "code": "03",
        "lat": 46.341,
        "lng": 3.412,
        "total": 2,
        "essence": 1,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Cupra ateca phase 1",
        "pctHomme": 100
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 2,
        "essence": 1,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ateca xperience",
        "pctHomme": 50
      },
      {
        "code": "86",
        "lat": 46.58,
        "lng": 0.34,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3a",
        "pctHomme": 0
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza edition",
        "pctHomme": 100
      },
      {
        "code": "42",
        "lat": 45.434,
        "lng": 4.39,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat nouvelle ateca",
        "pctHomme": 100
      },
      {
        "code": "58",
        "lat": 47.001,
        "lng": 3.159,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat ibiza",
        "pctHomme": 100
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 0
      },
      {
        "code": "07",
        "lat": 44.736,
        "lng": 4.596,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 0
      },
      {
        "code": "43",
        "lat": 45.043,
        "lng": 3.885,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat ibiza",
        "pctHomme": 100
      },
      {
        "code": "37",
        "lat": 47.394,
        "lng": 0.685,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat ibiza",
        "pctHomme": 0
      },
      {
        "code": "83",
        "lat": 43.124,
        "lng": 6.013,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 100
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 0
      },
      {
        "code": "40",
        "lat": 43.895,
        "lng": -0.499,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona copa",
        "pctHomme": 100
      },
      {
        "code": "87",
        "lat": 45.835,
        "lng": 1.262,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat arona",
        "pctHomme": 0
      },
      {
        "code": "21",
        "lat": 47.322,
        "lng": 5.042,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Seat ibiza",
        "pctHomme": 100
      },
      {
        "code": "44",
        "lat": 47.218,
        "lng": -1.554,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza edition",
        "pctHomme": 0
      },
      {
        "code": "32",
        "lat": 43.645,
        "lng": 0.586,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ibiza fr",
        "pctHomme": 100
      },
      {
        "code": "11",
        "lat": 43.213,
        "lng": 2.349,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona copa",
        "pctHomme": 0
      },
      {
        "code": "84",
        "lat": 43.949,
        "lng": 4.806,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Arona copa",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 8
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 5
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 10
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 14
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 13
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 4
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 3
      }
    ],
    "sankeyCouleur": [
      {
        "source": "beige",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 6
      },
      {
        "source": "bleu",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 6
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 5
      },
      {
        "source": "marron",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Vert",
        "value": 2
      },
      {
        "source": "rouge",
        "target": "Bleu",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 27,
        "reprise": 28
      },
      {
        "axis": "berline",
        "achat": 1,
        "reprise": 16
      },
      {
        "axis": "SUV",
        "achat": 41,
        "reprise": 9
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 7
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "fiat": {
    "kpis": {
      "totalVentes": 42,
      "reprises": 42,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Topolino berline",
      "topCategorie": "citadine",
      "tauxConcurrence": 52,
      "pctHomme": 67,
      "pctFemme": 33
    },
    "energie": {
      "essence": 42
    },
    "couleurVoiture": {
      "Bleu": 11,
      "Rouge": 9,
      "Gris": 5,
      "Blanc": 4,
      "Noir": 3,
      "Orange": 3,
      "Jaune": 2,
      "Marron": 2,
      "Vert": 2,
      "Beige": 1
    },
    "couleurReprise": {
      "gris": 12,
      "blanc": 12,
      "noir": 8,
      "bleu": 4,
      "beige": 2,
      "rouge": 2,
      "vert": 2
    },
    "categorieVehicule": {
      "citadine": 36,
      "autre": 6
    },
    "categorieReprise": {
      "autre": 20,
      "berline": 6,
      "citadine": 6,
      "sport": 4,
      "SUV": 4,
      "familiale": 2
    },
    "civilite": {
      "monsieur": 28,
      "madame": 14
    },
    "monthlySales": [
      {
        "label": "2025-01",
        "total": 8
      },
      {
        "label": "2025-02",
        "total": 4
      },
      {
        "label": "2025-03",
        "total": 8
      },
      {
        "label": "2025-04",
        "total": 14
      },
      {
        "label": "2025-06",
        "total": 4
      },
      {
        "label": "2025-07",
        "total": 2
      },
      {
        "label": "2025-09",
        "total": 2
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-01",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 14,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-01",
        "Bleu": 1,
        "Gris": 1,
        "Marron": 1,
        "Orange": 1,
        "Rouge": 4
      },
      {
        "label": "2025-02",
        "Bleu": 1,
        "Jaune": 1,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-03",
        "Beige": 1,
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 3,
        "Rouge": 2
      },
      {
        "label": "2025-04",
        "Blanc": 2,
        "Bleu": 7,
        "Gris": 1,
        "Marron": 1,
        "Noir": 1,
        "Orange": 1,
        "Rouge": 1
      },
      {
        "label": "2025-06",
        "Noir": 1,
        "Rouge": 1,
        "Vert": 2
      },
      {
        "label": "2025-07",
        "Blanc": 1,
        "Bleu": 1
      },
      {
        "label": "2025-09",
        "Jaune": 1,
        "Noir": 1
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 16
      },
      {
        "name": "Fiat",
        "weight": 2
      },
      {
        "name": "Volkswagen",
        "weight": 2
      },
      {
        "name": "Opel",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Topolino berline",
        "ventes": 14,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "500e berline",
        "ventes": 12,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "600 hybrid",
        "ventes": 6,
        "categorie": "autre",
        "partElec": 0
      },
      {
        "name": "600e",
        "ventes": 4,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ami",
        "ventes": 4,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Topolino dolcevita",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 8,
        "essence": 8,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Topolino berline",
        "pctHomme": 50
      },
      {
        "code": "75",
        "lat": 48.857,
        "lng": 2.352,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 50
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "600 hybrid",
        "pctHomme": 100
      },
      {
        "code": "19",
        "lat": 45.267,
        "lng": 1.772,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "600 hybrid",
        "pctHomme": 0
      },
      {
        "code": "36",
        "lat": 46.81,
        "lng": 1.691,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Topolino berline",
        "pctHomme": 0
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Topolino berline",
        "pctHomme": 100
      },
      {
        "code": "45",
        "lat": 47.903,
        "lng": 1.909,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ami",
        "pctHomme": 100
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Topolino dolcevita",
        "pctHomme": 100
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 100
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 0
      },
      {
        "code": "73",
        "lat": 45.565,
        "lng": 5.918,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "600e",
        "pctHomme": 100
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 100
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 100
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Topolino berline",
        "pctHomme": 100
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "600e",
        "pctHomme": 0
      },
      {
        "code": "27",
        "lat": 49.027,
        "lng": 1.152,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "500e berline",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "autre",
        "target": "autre",
        "value": 4
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 16
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 6
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 2
      },
      {
        "source": "sport",
        "target": "autre",
        "value": 2
      },
      {
        "source": "sport",
        "target": "citadine",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "blanc",
        "target": "Bleu",
        "value": 2
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "blanc",
        "target": "Rouge",
        "value": 3
      },
      {
        "source": "bleu",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Orange",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 2
      },
      {
        "source": "noir",
        "target": "Bleu",
        "value": 6
      },
      {
        "source": "rouge",
        "target": "Rouge",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 36,
        "reprise": 6
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 6
      },
      {
        "axis": "SUV",
        "achat": 0,
        "reprise": 4
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 2
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 4
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "skoda": {
    "kpis": {
      "totalVentes": 38,
      "reprises": 38,
      "partEssence": 82,
      "partElectrique": 0,
      "partHybride": 5,
      "topModele": "Kamiq 2020",
      "topCategorie": "SUV",
      "tauxConcurrence": 74,
      "pctHomme": 66,
      "pctFemme": 34
    },
    "energie": {
      "essence": 31,
      "électrique": 3,
      "hybride": 2,
      "diesel": 2
    },
    "couleurVoiture": {
      "Bleu": 9,
      "Rouge": 8,
      "Blanc": 7,
      "Gris": 5,
      "Vert": 2,
      "Marron": 2,
      "Jaune": 2,
      "Noir": 1,
      "Orange": 1,
      "Violet": 1
    },
    "couleurReprise": {
      "gris": 14,
      "blanc": 8,
      "noir": 6,
      "marron": 4,
      "bleu": 2,
      "rouge": 2,
      "orange": 1,
      "vert": 1
    },
    "categorieVehicule": {
      "SUV": 22,
      "citadine": 15,
      "berline": 1
    },
    "categorieReprise": {
      "citadine": 12,
      "berline": 11,
      "SUV": 8,
      "familiale": 4,
      "autre": 3
    },
    "civilite": {
      "monsieur": 25,
      "madame": 13
    },
    "monthlySales": [
      {
        "label": "2024-06",
        "total": 1
      },
      {
        "label": "2024-08",
        "total": 1
      },
      {
        "label": "2024-10",
        "total": 1
      },
      {
        "label": "2024-11",
        "total": 1
      },
      {
        "label": "2025-02",
        "total": 1
      },
      {
        "label": "2025-03",
        "total": 1
      },
      {
        "label": "2025-05",
        "total": 3
      },
      {
        "label": "2025-06",
        "total": 4
      },
      {
        "label": "2025-07",
        "total": 4
      },
      {
        "label": "2025-08",
        "total": 3
      },
      {
        "label": "2025-09",
        "total": 6
      },
      {
        "label": "2025-10",
        "total": 2
      },
      {
        "label": "2025-11",
        "total": 4
      },
      {
        "label": "2025-12",
        "total": 6
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-06",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-08",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-10",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2024-11",
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 2,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 2,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 5,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 6,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-06",
        "Rouge": 1
      },
      {
        "label": "2024-08",
        "Noir": 1
      },
      {
        "label": "2024-10",
        "Gris": 1
      },
      {
        "label": "2024-11",
        "Vert": 1
      },
      {
        "label": "2025-02",
        "Bleu": 1
      },
      {
        "label": "2025-03",
        "Blanc": 1
      },
      {
        "label": "2025-05",
        "Jaune": 1,
        "Marron": 1,
        "Violet": 1
      },
      {
        "label": "2025-06",
        "Bleu": 1,
        "Gris": 1,
        "Orange": 1,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Blanc": 1,
        "Bleu": 1,
        "Rouge": 2
      },
      {
        "label": "2025-08",
        "Blanc": 1,
        "Bleu": 1,
        "Rouge": 1
      },
      {
        "label": "2025-09",
        "Blanc": 2,
        "Bleu": 1,
        "Gris": 2,
        "Rouge": 1
      },
      {
        "label": "2025-10",
        "Blanc": 1,
        "Bleu": 1
      },
      {
        "label": "2025-11",
        "Bleu": 1,
        "Gris": 1,
        "Marron": 1,
        "Rouge": 1
      },
      {
        "label": "2025-12",
        "Blanc": 1,
        "Bleu": 2,
        "Jaune": 1,
        "Rouge": 2
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 12
      },
      {
        "name": "Hyundai",
        "weight": 7
      },
      {
        "name": "Volkswagen",
        "weight": 3
      },
      {
        "name": "Audi",
        "weight": 2
      },
      {
        "name": "Opel",
        "weight": 2
      },
      {
        "name": "Skoda",
        "weight": 1
      },
      {
        "name": "Dacia",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Kamiq 2020",
        "ventes": 15,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Fabia 2021",
        "ventes": 12,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Enyaq 2020",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Karoq 2018",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Kodiaq 2019",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "C3",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Elroq",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Elroq 2025",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Kodiaq 2021",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Octavia 2024",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kodiaq 2019",
        "pctHomme": 50
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 100
      },
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 100
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 3,
        "essence": 3,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 33
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 3,
        "essence": 2,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 100
      },
      {
        "code": "47",
        "lat": 44.203,
        "lng": 0.617,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 0
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Enyaq 2020",
        "pctHomme": 100
      },
      {
        "code": "66",
        "lat": 42.699,
        "lng": 2.896,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 50
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 100
      },
      {
        "code": "24",
        "lat": 45.183,
        "lng": 0.718,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 100
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 0
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 0
      },
      {
        "code": "86",
        "lat": 46.58,
        "lng": 0.34,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 100
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Fabia 2021",
        "pctHomme": 0
      },
      {
        "code": "25",
        "lat": 47.238,
        "lng": 6.024,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 100
      },
      {
        "code": "79",
        "lat": 46.325,
        "lng": -0.46,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Elroq",
        "pctHomme": 0
      },
      {
        "code": "02",
        "lat": 49.564,
        "lng": 3.622,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 0
      },
      {
        "code": "62",
        "lat": 50.43,
        "lng": 2.83,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Octavia 2024",
        "pctHomme": 100
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 0
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 1,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Karoq 2018",
        "pctHomme": 100
      },
      {
        "code": "85",
        "lat": 46.67,
        "lng": -1.43,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 100
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Kamiq 2020",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 4
      },
      {
        "source": "SUV",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 2
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 1
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 8
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 3
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 4
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 1
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 7
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 4
      }
    ],
    "sankeyCouleur": [
      {
        "source": "blanc",
        "target": "Marron",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Bleu",
        "value": 5
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Blanc",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 15,
        "reprise": 12
      },
      {
        "axis": "berline",
        "achat": 1,
        "reprise": 11
      },
      {
        "axis": "SUV",
        "achat": 22,
        "reprise": 8
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 4
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "audi": {
    "kpis": {
      "totalVentes": 33,
      "reprises": 33,
      "partEssence": 42,
      "partElectrique": 0,
      "partHybride": 6,
      "topModele": "Audi q2",
      "topCategorie": "SUV",
      "tauxConcurrence": 64,
      "pctHomme": 58,
      "pctFemme": 42
    },
    "energie": {
      "essence": 14,
      "électrique": 9,
      "diesel": 7,
      "hybride": 2,
      "non_déterminé": 1
    },
    "couleurVoiture": {
      "Gris": 10,
      "Blanc": 6,
      "Noir": 4,
      "Marron": 4,
      "Bleu": 3,
      "Jaune": 3,
      "Vert": 2,
      "Orange": 1
    },
    "couleurReprise": {
      "noir": 12,
      "gris": 11,
      "blanc": 6,
      "bleu": 2,
      "marron": 1,
      "vert": 1
    },
    "categorieVehicule": {
      "SUV": 23,
      "berline": 6,
      "citadine": 4
    },
    "categorieReprise": {
      "citadine": 15,
      "autre": 8,
      "SUV": 6,
      "berline": 3,
      "familiale": 1
    },
    "civilite": {
      "monsieur": 19,
      "madame": 14
    },
    "monthlySales": [
      {
        "label": "2025-01",
        "total": 5
      },
      {
        "label": "2025-02",
        "total": 5
      },
      {
        "label": "2025-03",
        "total": 1
      },
      {
        "label": "2025-05",
        "total": 3
      },
      {
        "label": "2025-06",
        "total": 3
      },
      {
        "label": "2025-07",
        "total": 3
      },
      {
        "label": "2025-08",
        "total": 1
      },
      {
        "label": "2025-09",
        "total": 1
      },
      {
        "label": "2025-10",
        "total": 1
      },
      {
        "label": "2025-11",
        "total": 8
      },
      {
        "label": "2025-12",
        "total": 2
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-01",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-02",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-05",
        "essence": 1,
        "diesel": 1,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 0,
        "diesel": 3,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 6,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-01",
        "Gris": 3,
        "Jaune": 1,
        "Vert": 1
      },
      {
        "label": "2025-02",
        "Blanc": 1,
        "Bleu": 1,
        "Gris": 2,
        "Marron": 1
      },
      {
        "label": "2025-03",
        "Blanc": 1
      },
      {
        "label": "2025-05",
        "Blanc": 1,
        "Gris": 1,
        "Noir": 1
      },
      {
        "label": "2025-06",
        "Blanc": 1,
        "Gris": 1,
        "Vert": 1
      },
      {
        "label": "2025-07",
        "Gris": 1,
        "Jaune": 1,
        "Marron": 1
      },
      {
        "label": "2025-08",
        "Jaune": 1
      },
      {
        "label": "2025-09",
        "Blanc": 1
      },
      {
        "label": "2025-10",
        "Noir": 1
      },
      {
        "label": "2025-11",
        "Blanc": 1,
        "Bleu": 2,
        "Gris": 1,
        "Marron": 2,
        "Noir": 1,
        "Orange": 1
      },
      {
        "label": "2025-12",
        "Gris": 1,
        "Noir": 1
      }
    ],
    "competition": [
      {
        "name": "Volkswagen",
        "weight": 9
      },
      {
        "name": "Citroën",
        "weight": 7
      },
      {
        "name": "Cupra",
        "weight": 3
      },
      {
        "name": "Hyundai",
        "weight": 1
      },
      {
        "name": "Skoda",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Audi q2",
        "ventes": 8,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Q4 e-tron",
        "ventes": 6,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Audi q5",
        "ventes": 3,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "A1 sportback",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Audi q4 e-tron",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "C3",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "C5a",
        "ventes": 2,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "A3 sportback",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "A3 sportback tfsie",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "A6 berline tfsie",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Audi a3 sportback",
        "ventes": 1,
        "categorie": "berline",
        "partElec": 0
      },
      {
        "name": "Audi q3",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Q2",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Q3 tfsie",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Q5",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "13",
        "lat": 43.297,
        "lng": 5.37,
        "total": 5,
        "essence": 3,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "Audi q2",
        "pctHomme": 40
      },
      {
        "code": "72",
        "lat": 47.996,
        "lng": 0.2,
        "total": 2,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q5",
        "pctHomme": 50
      },
      {
        "code": "57",
        "lat": 49.119,
        "lng": 6.176,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q5",
        "pctHomme": 100
      },
      {
        "code": "76",
        "lat": 49.443,
        "lng": 1.099,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q2",
        "pctHomme": 100
      },
      {
        "code": "06",
        "lat": 43.71,
        "lng": 7.262,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 0
      },
      {
        "code": "08",
        "lat": 49.762,
        "lng": 4.721,
        "total": 2,
        "essence": 0,
        "diesel": 2,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C5a",
        "pctHomme": 100
      },
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 1,
        "electrique": 0,
        "topModele": "A3 sportback tfsie",
        "pctHomme": 0
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 2,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Q4 e-tron",
        "pctHomme": 100
      },
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 2,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q2",
        "pctHomme": 50
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Q4 e-tron",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q4 e-tron",
        "pctHomme": 100
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Q3 tfsie",
        "pctHomme": 0
      },
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Q5",
        "pctHomme": 100
      },
      {
        "code": "78",
        "lat": 48.802,
        "lng": 1.988,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Q4 e-tron",
        "pctHomme": 100
      },
      {
        "code": "30",
        "lat": 43.837,
        "lng": 4.36,
        "total": 1,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "A3 sportback",
        "pctHomme": 0
      },
      {
        "code": "43",
        "lat": 45.043,
        "lng": 3.885,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "A1 sportback",
        "pctHomme": 0
      },
      {
        "code": "31",
        "lat": 43.605,
        "lng": 1.444,
        "total": 1,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q2",
        "pctHomme": 0
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "A1 sportback",
        "pctHomme": 100
      },
      {
        "code": "16",
        "lat": 45.65,
        "lng": 0.156,
        "total": 1,
        "essence": 0,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Audi q2",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 6
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 7
      },
      {
        "source": "autre",
        "target": "berline",
        "value": 1
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 3
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 6
      },
      {
        "source": "citadine",
        "target": "berline",
        "value": 5
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 1
      }
    ],
    "sankeyCouleur": [
      {
        "source": "blanc",
        "target": "Blanc",
        "value": 3
      },
      {
        "source": "blanc",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Blanc",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 3
      },
      {
        "source": "gris",
        "target": "Jaune",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Marron",
        "value": 3
      },
      {
        "source": "noir",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "noir",
        "target": "Noir",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 4,
        "reprise": 15
      },
      {
        "axis": "berline",
        "achat": 6,
        "reprise": 3
      },
      {
        "axis": "SUV",
        "achat": 23,
        "reprise": 6
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "kia": {
    "kpis": {
      "totalVentes": 26,
      "reprises": 26,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Ev3 100% électrique",
      "topCategorie": "citadine",
      "tauxConcurrence": 54,
      "pctHomme": 77,
      "pctFemme": 23
    },
    "energie": {
      "essence": 26
    },
    "couleurVoiture": {
      "Blanc": 6,
      "Vert": 6,
      "Rouge": 5,
      "Bleu": 3,
      "Gris": 3,
      "Beige": 1,
      "Jaune": 1,
      "Violet": 1
    },
    "couleurReprise": {
      "gris": 16,
      "blanc": 4,
      "rouge": 2,
      "noir": 2,
      "marron": 2
    },
    "categorieVehicule": {
      "citadine": 20,
      "SUV": 6
    },
    "categorieReprise": {
      "berline": 10,
      "familiale": 4,
      "citadine": 4,
      "autre": 4,
      "SUV": 2,
      "sport": 2
    },
    "civilite": {
      "monsieur": 20,
      "madame": 6
    },
    "monthlySales": [
      {
        "label": "2025-02",
        "total": 2
      },
      {
        "label": "2025-04",
        "total": 4
      },
      {
        "label": "2025-06",
        "total": 2
      },
      {
        "label": "2025-07",
        "total": 4
      },
      {
        "label": "2025-09",
        "total": 10
      },
      {
        "label": "2025-10",
        "total": 4
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-02",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-04",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-09",
        "essence": 10,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-02",
        "Gris": 1,
        "Rouge": 1
      },
      {
        "label": "2025-04",
        "Bleu": 1,
        "Rouge": 1,
        "Vert": 2
      },
      {
        "label": "2025-06",
        "Blanc": 1,
        "Violet": 1
      },
      {
        "label": "2025-07",
        "Blanc": 1,
        "Gris": 1,
        "Rouge": 1,
        "Vert": 1
      },
      {
        "label": "2025-09",
        "Beige": 1,
        "Blanc": 2,
        "Bleu": 1,
        "Gris": 1,
        "Jaune": 1,
        "Rouge": 2,
        "Vert": 2
      },
      {
        "label": "2025-10",
        "Blanc": 2,
        "Bleu": 1,
        "Vert": 1
      }
    ],
    "competition": [
      {
        "name": "Hyundai",
        "weight": 4
      },
      {
        "name": "Citroën",
        "weight": 4
      },
      {
        "name": "Volkswagen",
        "weight": 2
      },
      {
        "name": "Peugeot",
        "weight": 2
      },
      {
        "name": "Seat",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Ev3 100% électrique",
        "ventes": 8,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Sportage hybride",
        "ventes": 6,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Stonic",
        "ventes": 4,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "\"ceed \"",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Ev6 100% électrique",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "Niro",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Picanto",
        "ventes": 2,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "95",
        "lat": 49.085,
        "lng": 2.162,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "\"ceed \"",
        "pctHomme": 100
      },
      {
        "code": "69",
        "lat": 45.764,
        "lng": 4.836,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Niro",
        "pctHomme": 100
      },
      {
        "code": "64",
        "lat": 43.3,
        "lng": -0.37,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Stonic",
        "pctHomme": 100
      },
      {
        "code": "79",
        "lat": 46.325,
        "lng": -0.46,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Sportage hybride",
        "pctHomme": 100
      },
      {
        "code": "21",
        "lat": 47.322,
        "lng": 5.042,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Picanto",
        "pctHomme": 100
      },
      {
        "code": "94",
        "lat": 48.778,
        "lng": 2.464,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ev3 100% électrique",
        "pctHomme": 100
      },
      {
        "code": "59",
        "lat": 50.629,
        "lng": 3.057,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Sportage hybride",
        "pctHomme": 100
      },
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Stonic",
        "pctHomme": 0
      },
      {
        "code": "82",
        "lat": 44.018,
        "lng": 1.355,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ev3 100% électrique",
        "pctHomme": 0
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ev6 100% électrique",
        "pctHomme": 100
      },
      {
        "code": "17",
        "lat": 46.159,
        "lng": -1.152,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Sportage hybride",
        "pctHomme": 100
      },
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Ev3 100% électrique",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "citadine",
        "value": 2
      },
      {
        "source": "autre",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "berline",
        "target": "SUV",
        "value": 6
      },
      {
        "source": "berline",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "citadine",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "familiale",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "sport",
        "target": "citadine",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "gris",
        "target": "Blanc",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Gris",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Vert",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 20,
        "reprise": 4
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 10
      },
      {
        "axis": "SUV",
        "achat": 6,
        "reprise": 2
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 4
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 2
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "alfaromeo": {
    "kpis": {
      "totalVentes": 18,
      "reprises": 18,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Tonale hybride",
      "topCategorie": "SUV",
      "tauxConcurrence": 67,
      "pctHomme": 67,
      "pctFemme": 33
    },
    "energie": {
      "essence": 18
    },
    "couleurVoiture": {
      "Gris": 6,
      "Bleu": 3,
      "Marron": 2,
      "Rouge": 2,
      "Noir": 2,
      "Jaune": 2,
      "Vert": 1
    },
    "couleurReprise": {
      "gris": 8,
      "bleu": 6,
      "beige": 2,
      "vert": 2
    },
    "categorieVehicule": {
      "SUV": 12,
      "sport": 6
    },
    "categorieReprise": {
      "citadine": 6,
      "familiale": 6,
      "SUV": 4,
      "autre": 2
    },
    "civilite": {
      "monsieur": 12,
      "madame": 6
    },
    "monthlySales": [
      {
        "label": "2025-04",
        "total": 2
      },
      {
        "label": "2025-06",
        "total": 2
      },
      {
        "label": "2025-07",
        "total": 2
      },
      {
        "label": "2025-08",
        "total": 2
      },
      {
        "label": "2025-10",
        "total": 2
      },
      {
        "label": "2025-11",
        "total": 4
      },
      {
        "label": "2025-12",
        "total": 4
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-04",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-07",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-10",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-11",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-12",
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-04",
        "Noir": 1,
        "Rouge": 1
      },
      {
        "label": "2025-06",
        "Gris": 1,
        "Jaune": 1
      },
      {
        "label": "2025-07",
        "Bleu": 1,
        "Gris": 1
      },
      {
        "label": "2025-08",
        "Bleu": 1,
        "Marron": 1
      },
      {
        "label": "2025-10",
        "Bleu": 1,
        "Gris": 1
      },
      {
        "label": "2025-11",
        "Jaune": 1,
        "Marron": 1,
        "Noir": 1,
        "Vert": 1
      },
      {
        "label": "2025-12",
        "Gris": 3,
        "Rouge": 1
      }
    ],
    "competition": [
      {
        "name": "Volkswagen",
        "weight": 6
      },
      {
        "name": "Opel",
        "weight": 2
      },
      {
        "name": "Citroën",
        "weight": 2
      },
      {
        "name": "Hyundai",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Tonale hybride",
        "ventes": 12,
        "categorie": "SUV",
        "partElec": 0
      },
      {
        "name": "Junior elettrica",
        "ventes": 6,
        "categorie": "sport",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "01",
        "lat": 46.205,
        "lng": 5.225,
        "total": 4,
        "essence": 4,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Junior elettrica",
        "pctHomme": 100
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 0
      },
      {
        "code": "11",
        "lat": 43.213,
        "lng": 2.349,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Junior elettrica",
        "pctHomme": 100
      },
      {
        "code": "34",
        "lat": 43.611,
        "lng": 3.877,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 100
      },
      {
        "code": "35",
        "lat": 48.117,
        "lng": -1.678,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 0
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 100
      },
      {
        "code": "26",
        "lat": 44.933,
        "lng": 4.893,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 0
      },
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Tonale hybride",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "SUV",
        "value": 4
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 2
      },
      {
        "source": "citadine",
        "target": "SUV",
        "value": 4
      },
      {
        "source": "citadine",
        "target": "sport",
        "value": 2
      },
      {
        "source": "familiale",
        "target": "SUV",
        "value": 2
      },
      {
        "source": "familiale",
        "target": "sport",
        "value": 4
      }
    ],
    "sankeyCouleur": [
      {
        "source": "bleu",
        "target": "Gris",
        "value": 4
      },
      {
        "source": "gris",
        "target": "Noir",
        "value": 2
      },
      {
        "source": "gris",
        "target": "Rouge",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 0,
        "reprise": 6
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 12,
        "reprise": 4
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 6
      },
      {
        "axis": "sport",
        "achat": 6,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "honda": {
    "kpis": {
      "totalVentes": 6,
      "reprises": 6,
      "partEssence": 0,
      "partElectrique": 0,
      "partHybride": 100,
      "topModele": "Jazz",
      "topCategorie": "citadine",
      "tauxConcurrence": 33,
      "pctHomme": 100,
      "pctFemme": 0
    },
    "energie": {
      "hybride": 6
    },
    "couleurVoiture": {
      "Gris": 3,
      "Vert": 1,
      "Blanc": 1,
      "Rouge": 1
    },
    "couleurReprise": {
      "blanc": 4,
      "marron": 2
    },
    "categorieVehicule": {
      "citadine": 4,
      "SUV": 2
    },
    "categorieReprise": {
      "SUV": 4,
      "autre": 2
    },
    "civilite": {
      "monsieur": 6
    },
    "monthlySales": [
      {
        "label": "2025-04",
        "total": 2
      },
      {
        "label": "2025-06",
        "total": 2
      },
      {
        "label": "2025-08",
        "total": 2
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-04",
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-06",
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      },
      {
        "label": "2025-08",
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-04",
        "Gris": 2
      },
      {
        "label": "2025-06",
        "Blanc": 1,
        "Rouge": 1
      },
      {
        "label": "2025-08",
        "Gris": 1,
        "Vert": 1
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 2
      }
    ],
    "modeleStats": [
      {
        "name": "Jazz",
        "ventes": 4,
        "categorie": "citadine",
        "partElec": 0
      },
      {
        "name": "HR-V",
        "ventes": 2,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "71",
        "lat": 46.8,
        "lng": 4.45,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Jazz",
        "pctHomme": 100
      },
      {
        "code": "67",
        "lat": 48.573,
        "lng": 7.752,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "HR-V",
        "pctHomme": 100
      },
      {
        "code": "33",
        "lat": 44.838,
        "lng": -0.579,
        "total": 2,
        "essence": 0,
        "diesel": 0,
        "hybride": 2,
        "electrique": 0,
        "topModele": "Jazz",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "SUV",
        "target": "citadine",
        "value": 4
      },
      {
        "source": "autre",
        "target": "SUV",
        "value": 2
      }
    ],
    "sankeyCouleur": [
      {
        "source": "blanc",
        "target": "Gris",
        "value": 3
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 4,
        "reprise": 0
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 2,
        "reprise": 4
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "vw_utilitaires": {
    "kpis": {
      "totalVentes": 3,
      "reprises": 3,
      "partEssence": 67,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Transporter 6.1",
      "topCategorie": "utilitaire",
      "tauxConcurrence": 33,
      "pctHomme": 100,
      "pctFemme": 0
    },
    "energie": {
      "essence": 2,
      "diesel": 1
    },
    "couleurVoiture": {
      "Blanc": 2,
      "Rouge": 1
    },
    "couleurReprise": {
      "noir": 2,
      "bleu": 1
    },
    "categorieVehicule": {
      "utilitaire": 3
    },
    "categorieReprise": {
      "autre": 3
    },
    "civilite": {
      "monsieur": 3
    },
    "monthlySales": [
      {
        "label": "2024-11",
        "total": 1
      },
      {
        "label": "2025-03",
        "total": 2
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-11",
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0
      },
      {
        "label": "2025-03",
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-11",
        "Rouge": 1
      },
      {
        "label": "2025-03",
        "Blanc": 2
      }
    ],
    "competition": [
      {
        "name": "Toyota",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Transporter 6.1",
        "ventes": 2,
        "categorie": "utilitaire",
        "partElec": 0
      },
      {
        "name": "Transporter combi 6.1",
        "ventes": 1,
        "categorie": "utilitaire",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "37",
        "lat": 47.394,
        "lng": 0.685,
        "total": 2,
        "essence": 2,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Transporter 6.1",
        "pctHomme": 100
      },
      {
        "code": "38",
        "lat": 45.189,
        "lng": 5.725,
        "total": 1,
        "essence": 0,
        "diesel": 1,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Transporter combi 6.1",
        "pctHomme": 100
      }
    ],
    "sankeyCategorie": [
      {
        "source": "autre",
        "target": "utilitaire",
        "value": 3
      }
    ],
    "sankeyCouleur": [
      {
        "source": "noir",
        "target": "Blanc",
        "value": 2
      }
    ],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 3,
        "reprise": 0
      }
    ]
  },
  "renault_annalect": {
    "kpis": {
      "totalVentes": 1,
      "reprises": 1,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Captur",
      "topCategorie": "SUV",
      "tauxConcurrence": 100,
      "pctHomme": 0,
      "pctFemme": 100
    },
    "energie": {
      "essence": 1
    },
    "couleurVoiture": {
      "Orange": 1
    },
    "couleurReprise": {
      "gris": 1
    },
    "categorieVehicule": {
      "SUV": 1
    },
    "categorieReprise": {
      "citadine": 1
    },
    "civilite": {
      "madame": 1
    },
    "monthlySales": [
      {
        "label": "2024-04",
        "total": 1
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-04",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-04",
        "Orange": 1
      }
    ],
    "competition": [
      {
        "name": "Citroën",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "Captur",
        "ventes": 1,
        "categorie": "SUV",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "91",
        "lat": 48.531,
        "lng": 2.212,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Captur",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "citadine",
        "target": "SUV",
        "value": 1
      }
    ],
    "sankeyCouleur": [],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 0,
        "reprise": 1
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 1,
        "reprise": 0
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "dacia": {
    "kpis": {
      "totalVentes": 1,
      "reprises": 1,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "C3",
      "topCategorie": "citadine",
      "tauxConcurrence": 100,
      "pctHomme": 0,
      "pctFemme": 100
    },
    "energie": {
      "essence": 1
    },
    "couleurVoiture": {
      "Bleu": 1
    },
    "couleurReprise": {
      "noir": 1
    },
    "categorieVehicule": {
      "citadine": 1
    },
    "categorieReprise": {
      "autre": 1
    },
    "civilite": {
      "madame": 1
    },
    "monthlySales": [
      {
        "label": "2024-09",
        "total": 1
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2024-09",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2024-09",
        "Bleu": 1
      }
    ],
    "competition": [
      {
        "name": "Dacia",
        "weight": 1
      }
    ],
    "modeleStats": [
      {
        "name": "C3",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "93",
        "lat": 48.91,
        "lng": 2.48,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "C3",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "autre",
        "target": "citadine",
        "value": 1
      }
    ],
    "sankeyCouleur": [],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 1,
        "reprise": 0
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  },
  "toyota": {
    "kpis": {
      "totalVentes": 1,
      "reprises": 1,
      "partEssence": 100,
      "partElectrique": 0,
      "partHybride": 0,
      "topModele": "Yaris",
      "topCategorie": "citadine",
      "tauxConcurrence": 0,
      "pctHomme": 0,
      "pctFemme": 100
    },
    "energie": {
      "essence": 1
    },
    "couleurVoiture": {
      "Gris": 1
    },
    "couleurReprise": {
      "rouge": 1
    },
    "categorieVehicule": {
      "citadine": 1
    },
    "categorieReprise": {
      "citadine": 1
    },
    "civilite": {
      "madame": 1
    },
    "monthlySales": [
      {
        "label": "2025-01",
        "total": 1
      }
    ],
    "monthlyEnergie": [
      {
        "label": "2025-01",
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0
      }
    ],
    "monthlyCouleur": [
      {
        "label": "2025-01",
        "Gris": 1
      }
    ],
    "competition": [],
    "modeleStats": [
      {
        "name": "Yaris",
        "ventes": 1,
        "categorie": "citadine",
        "partElec": 0
      }
    ],
    "deptData": [
      {
        "code": "77",
        "lat": 48.619,
        "lng": 2.883,
        "total": 1,
        "essence": 1,
        "diesel": 0,
        "hybride": 0,
        "electrique": 0,
        "topModele": "Yaris",
        "pctHomme": 0
      }
    ],
    "sankeyCategorie": [
      {
        "source": "citadine",
        "target": "citadine",
        "value": 1
      }
    ],
    "sankeyCouleur": [],
    "radarData": [
      {
        "axis": "citadine",
        "achat": 1,
        "reprise": 1
      },
      {
        "axis": "berline",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "SUV",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "familiale",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "sport",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "cabriolet",
        "achat": 0,
        "reprise": 0
      },
      {
        "axis": "utilitaire",
        "achat": 0,
        "reprise": 0
      }
    ]
  }
};


// ── Fonctions d'accès aux données réelles ────────────────

const ENERGY_COLORS = {
  essence: "#EF4444", diesel: "#3B82F6", hybride: "#10B981",
  electrique: "#F59E0B", "électrique": "#F59E0B",
  non_determine: "#9CA3AF", "non_déterminé": "#9CA3AF",
};

const COLOR_MAP = {
  Gris: "#9E9E9E", Noir: "#212121", Blanc: "#E0E0E0", Bleu: "#1565C0",
  Rouge: "#C62828", Vert: "#2E7D32", Beige: "#D7CCC8", Marron: "#6D4C41",
  Orange: "#E65100", Jaune: "#F9A825", Violet: "#6A1B9A", Turquoise: "#00897B",
  gris: "#9E9E9E", noir: "#212121", blanc: "#E0E0E0", bleu: "#1565C0",
  rouge: "#C62828", vert: "#2E7D32", beige: "#D7CCC8", marron: "#6D4C41",
  orange: "#E65100", jaune: "#F9A825", violet: "#6A1B9A", rose: "#EC407A",
};

export { COLOR_MAP, ENERGY_COLORS };

export function getRealKPIs(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  return d ? { ...d.kpis } : null;
}

export function getRealMonthlySales(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlySales || [];
}

export function getRealMonthlyEnergie(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlyEnergie || [];
}

export function getRealMonthlyCouleur(brandId) {
  return DATA_PAR_BRAND[brandId]?.monthlyCouleur || [];
}

export function getRealDeptData(brandId) {
  return DATA_PAR_BRAND[brandId]?.deptData || [];
}

export function getRealCompetitionData(brandId) {
  return DATA_PAR_BRAND[brandId]?.competition || [];
}

export function getRealEnergyBreakdown(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  return Object.entries(d.energie).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
    color: ENERGY_COLORS[name.toLowerCase()] || "#6B7280",
  }));
}

export function getRealColorBreakdown(brandId, type = "voiture") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  const colors = type === "voiture" ? d.couleurVoiture : d.couleurReprise;
  return Object.entries(colors).map(([name, value]) => ({
    name,
    value,
    color: COLOR_MAP[name] || "#BDBDBD",
  }));
}

export function getRealCategorieBreakdown(brandId, type = "vehicule") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  const cats = type === "vehicule" ? d.categorieVehicule : d.categorieReprise;
  return Object.entries(cats).map(([name, value]) => ({ name, value }));
}

export function getRealModeleStats(brandId) {
  return DATA_PAR_BRAND[brandId]?.modeleStats || [];
}

export function getRealSankeyData(brandId, type = "categorie") {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return { nodes: [], links: [] };
  const flows = type === "categorie" ? d.sankeyCategorie : d.sankeyCouleur;
  const nodeSet = new Set();
  flows.forEach(f => { nodeSet.add(f.source); nodeSet.add(f.target); });
  const nodes = [...nodeSet].map(n => ({ name: n }));
  const links = flows.map(f => ({
    source: nodes.findIndex(n => n.name === f.source),
    target: nodes.findIndex(n => n.name === f.target),
    value: f.value,
  }));
  return { nodes, links };
}

export function getRealRadarData(brandId) {
  return DATA_PAR_BRAND[brandId]?.radarData || [];
}

export function getRealCiviliteData(brandId) {
  const d = DATA_PAR_BRAND[brandId];
  if (!d) return [];
  return Object.entries(d.civilite).map(([name, value]) => ({ name, value }));
}
