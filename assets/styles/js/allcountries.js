const countriesJson = [
    {
        flag: "🇧🇴",
        countryName: "Bolivia",
        telephone_code: "+591",
    },
    {
        flag: "🇧🇪",
        countryName: "Belgium",
        telephone_code: "+32",
    },
    {
        flag: "🇳🇨",
        countryName: "New Caledonia",
        telephone_code: "+687",
    },
    {
        flag: "🇧🇻",
        countryName: "Bouvet Island",
        telephone_code: "+47",
    },
    {
        flag: "🇸🇽",
        countryName: "Sint Maarten",
        telephone_code: "+1721",
    },
    {
        flag: "🇨🇺",
        countryName: "Cuba",
        telephone_code: "+53",
    },
    {
        flag: "🇸🇩",
        countryName: "Sudan",
        telephone_code: "+249",
    },
    {
        flag: "🇸🇨",
        countryName: "Seychelles",
        telephone_code: "+248",
    },
    {
        flag: "🇧🇸",
        countryName: "Bahamas",
        telephone_code: "+1242",
    },
    {
        flag: "🇵🇸",
        countryName: "Palestine",
        telephone_code: "+970",
    },
    {
        flag: "🇳🇪",
        countryName: "Niger",
        telephone_code: "+227",
    },
    {
        flag: "🇳🇺",
        countryName: "Niue",
        telephone_code: "+683",
    },
    {
        flag: "🇬🇮",
        countryName: "Gibraltar",
        telephone_code: "+350",
    },
    {
        flag: "🇨🇦",
        countryName: "Canada",
        telephone_code: "+1",
    },
    {
        flag: "🇧🇩",
        countryName: "Bangladesh",
        telephone_code: "+880",
    },
    {
        flag: "🇰🇷",
        countryName: "South Korea",
        telephone_code: "+82",
    },
    {
        flag: "🇱🇮",
        countryName: "Liechtenstein",
        telephone_code: "+423",
    },
    {
        flag: "🇧🇲",
        countryName: "Bermuda",
        telephone_code: "+1441",
    },
    {
        flag: "🇰🇪",
        countryName: "Kenya",
        telephone_code: "+254",
    },
    {
        flag: "🇻🇮",
        countryName: "United States Virgin Islands",
        telephone_code: "+1340",
    },
    {
        flag: "🇬🇪",
        countryName: "Georgia",
        telephone_code: "+995",
    },
    {
        flag: "🇵🇹",
        countryName: "Portugal",
        telephone_code: "+351",
    },
    {
        flag: "🇧🇼",
        countryName: "Botswana",
        telephone_code: "+267",
    },
    {
        flag: "🇦🇷",
        countryName: "Argentina",
        telephone_code: "+54",
    },
    {
        flag: "🇨🇻",
        countryName: "Cape Verde",
        telephone_code: "+238",
    },
    {
        flag: "🇨🇳",
        countryName: "China",
        telephone_code: "+86",
    },
    {
        flag: "🇲🇱",
        countryName: "Mali",
        telephone_code: "+223",
    },
    {
        flag: "🇰🇭",
        countryName: "Cambodia",
        telephone_code: "+855",
    },
    {
        flag: "🇳🇦",
        countryName: "Namibia",
        telephone_code: "+264",
    },
    {
        flag: "🇯🇵",
        countryName: "Japan",
        telephone_code: "+81",
    },
    {
        flag: "🇧🇧",
        countryName: "Barbados",
        telephone_code: "+1246",
    },
    {
        flag: "🇬🇱",
        countryName: "Greenland",
        telephone_code: "+299",
    },
    {
        flag: "🇸🇿",
        countryName: "Eswatini",
        telephone_code: "+268",
    },
    {
        flag: "🇬🇾",
        countryName: "Guyana",
        telephone_code: "+592",
    },
    {
        flag: "🇬🇶",
        countryName: "Equatorial Guinea",
        telephone_code: "+240",
    },
    {
        flag: "🇨🇽",
        countryName: "Christmas Island",
        telephone_code: "+61",
    },
    {
        flag: "🇲🇹",
        countryName: "Malta",
        telephone_code: "+356",
    },
    {
        flag: "🇵🇾",
        countryName: "Paraguay",
        telephone_code: "+595",
    },
    {
        flag: "🇸🇻",
        countryName: "El Salvador",
        telephone_code: "+503",
    },
    {
        flag: "🇸🇪",
        countryName: "Sweden",
        telephone_code: "+46",
    },
    {
        flag: "🇦🇪",
        countryName: "United Arab Emirates",
        telephone_code: "+971",
    },
    {
        flag: "🇨🇷",
        countryName: "Costa Rica",
        telephone_code: "+506",
    },
    {
        flag: "🇧🇱",
        countryName: "Saint Barthélemy",
        telephone_code: "+590",
    },
    {
        flag: "🇱🇰",
        countryName: "Sri Lanka",
        telephone_code: "+94",
    },
    {
        flag: "🇹🇬",
        countryName: "Togo",
        telephone_code: "+228",
    },
    {
        flag: "🇵🇦",
        countryName: "Panama",
        telephone_code: "+507",
    },
    {
        flag: "🇨🇲",
        countryName: "Cameroon",
        telephone_code: "+237",
    },
    {
        flag: "🇭🇺",
        countryName: "Hungary",
        telephone_code: "+36",
    },
    {
        flag: "🇹🇯",
        countryName: "Tajikistan",
        telephone_code: "+992",
    },
    {
        flag: "🇯🇲",
        countryName: "Jamaica",
        telephone_code: "+1876",
    },
    {
        flag: "🇮🇱",
        countryName: "Israel",
        telephone_code: "+972",
    },
    {
        flag: "🇨🇮",
        countryName: "Ivory Coast",
        telephone_code: "+225",
    },
    {
        flag: "🇳🇱",
        countryName: "Netherlands",
        telephone_code: "+31",
    },
    {
        flag: "🇱🇾",
        countryName: "Libya",
        telephone_code: "+218",
    },
    {
        flag: "🇦🇼",
        countryName: "Aruba",
        telephone_code: "+297",
    },
    {
        flag: "🇸🇹",
        countryName: "São Tomé and Príncipe",
        telephone_code: "+239",
    },
    {
        flag: "🇩🇲",
        countryName: "Dominica",
        telephone_code: "+1767",
    },
    {
        flag: "🇬🇫",
        countryName: "French Guiana",
        telephone_code: "+594",
    },
    {
        flag: "🇷🇼",
        countryName: "Rwanda",
        telephone_code: "+250",
    },
    {
        flag: "🇻🇦",
        countryName: "Vatican City",
        telephone_code: "+3906698,79",
    },
    {
        flag: "🇲🇭",
        countryName: "Marshall Islands",
        telephone_code: "+692",
    },
    {
        flag: "🇹🇰",
        countryName: "Tokelau",
        telephone_code: "+690",
    },
    {
        flag: "🇧🇬",
        countryName: "Bulgaria",
        telephone_code: "+359",
    },
    {
        flag: "🇫🇴",
        countryName: "Faroe Islands",
        telephone_code: "+298",
    },
    {
        flag: "🇲🇽",
        countryName: "Mexico",
        telephone_code: "+52",
    },
    {
        flag: "🇲🇰",
        countryName: "North Macedonia",
        telephone_code: "+389",
    },
    {
        flag: "🇪🇷",
        countryName: "Eritrea",
        telephone_code: "+291",
    },
    {
        flag: "🇲🇬",
        countryName: "Madagascar",
        telephone_code: "+261",
    },
    {
        flag: "🇫🇷",
        countryName: "France",
        telephone_code: "+33",
    },
    {
        flag: "🇲🇳",
        countryName: "Mongolia",
        telephone_code: "+976",
    },
    {
        flag: "🇸🇬",
        countryName: "Singapore",
        telephone_code: "+65",
    },
    {
        flag: "🇺🇬",
        countryName: "Uganda",
        telephone_code: "+256",
    },
    {
        flag: "🇬🇸",
        countryName: "South Georgia",
        telephone_code: "+500",
    },
    {
        flag: "🇸🇳",
        countryName: "Senegal",
        telephone_code: "+221",
    },
    {
        flag: "🇹🇹",
        countryName: "Trinidad and Tobago",
        telephone_code: "+1868",
    },
    {
        flag: "🇫🇯",
        countryName: "Fiji",
        telephone_code: "+679",
    },
    {
        flag: "🇭🇹",
        countryName: "Haiti",
        telephone_code: "+509",
    },
    {
        flag: "🇮🇷",
        countryName: "Iran",
        telephone_code: "+98",
    },
    {
        flag: "🇮🇩",
        countryName: "Indonesia",
        telephone_code: "+62",
    },
    {
        flag: "🇩🇪",
        countryName: "Germany",
        telephone_code: "+49",
    },
    {
        flag: "🇧🇹",
        countryName: "Bhutan",
        telephone_code: "+975",
    },
    {
        flag: "🇹🇿",
        countryName: "Tanzania",
        telephone_code: "+255",
    },
    {
        flag: "🇺🇿",
        countryName: "Uzbekistan",
        telephone_code: "+998",
    },
    {
        flag: "🇲🇼",
        countryName: "Malawi",
        telephone_code: "+265",
    },
    {
        flag: "🇲🇨",
        countryName: "Monaco",
        telephone_code: "+377",
    },
    {
        flag: "🇲🇾",
        countryName: "Malaysia",
        telephone_code: "+60",
    },
    {
        flag: "🇸🇧",
        countryName: "Solomon Islands",
        telephone_code: "+677",
    },
    {
        flag: "🇬🇷",
        countryName: "Greece",
        telephone_code: "+30",
    },
    {
        flag: "🇨🇼",
        countryName: "Curaçao",
        telephone_code: "+599",
    },
    {
        flag: "🇺🇸",
        countryName: "United States",
        telephone_code: "+1",
    },
    {
        flag: "🇮🇸",
        countryName: "Iceland",
        telephone_code: "+354",
    },
    {
        flag: "🇨🇿",
        countryName: "Czechia",
        telephone_code: "+420",
    },
    {
        flag: "🇸🇸",
        countryName: "South Sudan",
        telephone_code: "+211",
    },
    {
        flag: "🇵🇱",
        countryName: "Poland",
        telephone_code: "+48",
    },
    {
        flag: "🇨🇩",
        countryName: "DR Congo",
        telephone_code: "+243",
    },
    {
        flag: "🇲🇿",
        countryName: "Mozambique",
        telephone_code: "+258",
    },
    {
        flag: "🇬🇹",
        countryName: "Guatemala",
        telephone_code: "+502",
    },
    {
        flag: "🇮🇪",
        countryName: "Ireland",
        telephone_code: "+353",
    },
    {
        flag: "🇰🇲",
        countryName: "Comoros",
        telephone_code: "+269",
    },
    {
        flag: "🇦🇬",
        countryName: "Antigua and Barbuda",
        telephone_code: "+1268",
    },
    {
        flag: "🇸🇲",
        countryName: "San Marino",
        telephone_code: "+378",
    },
    {
        flag: "🇦🇲",
        countryName: "Armenia",
        telephone_code: "+374",
    },
    {
        flag: "🇽🇰",
        countryName: "Kosovo",
        telephone_code: "+383",
    },
    {
        flag: "🇱🇸",
        countryName: "Lesotho",
        telephone_code: "+266",
    },
    {
        flag: "🇹🇲",
        countryName: "Turkmenistan",
        telephone_code: "+993",
    },
    {
        flag: "🇦🇫",
        countryName: "Afghanistan",
        telephone_code: "+93",
    },
    {
        flag: "🇦🇽",
        countryName: "Åland Islands",
        telephone_code: "+35818",
    },
    {
        flag: "🇲🇦",
        countryName: "Morocco",
        telephone_code: "+212",
    },
    {
        flag: "🇸🇯",
        countryName: "Svalbard and Jan Mayen",
        telephone_code: "+4779",
    },
    {
        flag: "🇩🇰",
        countryName: "Denmark",
        telephone_code: "+45",
    },
    {
        flag: "🇬🇦",
        countryName: "Gabon",
        telephone_code: "+241",
    },
    {
        flag: "🇼🇸",
        countryName: "Samoa",
        telephone_code: "+685",
    },
    {
        flag: "🇧🇿",
        countryName: "Belize",
        telephone_code: "+501",
    },
    {
        flag: "🇭🇰",
        countryName: "Hong Kong",
        telephone_code: "+852",
    },
    {
        flag: "🇲🇷",
        countryName: "Mauritania",
        telephone_code: "+222",
    },
    {
        flag: "🇸🇦",
        countryName: "Saudi Arabia",
        telephone_code: "+966",
    },
    {
        flag: "🇲🇺",
        countryName: "Mauritius",
        telephone_code: "+230",
    },
    {
        flag: "🇹🇻",
        countryName: "Tuvalu",
        telephone_code: "+688",
    },
    {
        flag: "🇸🇱",
        countryName: "Sierra Leone",
        telephone_code: "+232",
    },
    {
        flag: "🇴🇲",
        countryName: "Oman",
        telephone_code: "+968",
    },
    {
        flag: "🇯🇴",
        countryName: "Jordan",
        telephone_code: "+962",
    },
    {
        flag: "🇲🇻",
        countryName: "Maldives",
        telephone_code: "+960",
    },
    {
        flag: "🇵🇭",
        countryName: "Philippines",
        telephone_code: "+63",
    },
    {
        flag: "🇹🇭",
        countryName: "Thailand",
        telephone_code: "+66",
    },
    {
        flag: "🇷🇴",
        countryName: "Romania",
        telephone_code: "+40",
    },
    {
        flag: "🇭🇲",
        countryName: "Heard Island and McDonald Islands",
        telephone_code: "undefinedundefined",
    },
    {
        flag: "🇸🇾",
        countryName: "Syria",
        telephone_code: "+963",
    },
    {
        flag: "🇱🇺",
        countryName: "Luxembourg",
        telephone_code: "+352",
    },
    {
        flag: "🇱🇦",
        countryName: "Laos",
        telephone_code: "+856",
    },
    {
        flag: "🇰🇿",
        countryName: "Kazakhstan",
        telephone_code: "+76,7",
    },
    {
        flag: "🇼🇫",
        countryName: "Wallis and Futuna",
        telephone_code: "+681",
    },
    {
        flag: "🇨🇨",
        countryName: "Cocos (Keeling) Islands",
        telephone_code: "+61",
    },
    {
        flag: "🇻🇪",
        countryName: "Venezuela",
        telephone_code: "+58",
    },
    {
        flag: "🇦🇿",
        countryName: "Azerbaijan",
        telephone_code: "+994",
    },
    {
        flag: "🇾🇹",
        countryName: "Mayotte",
        telephone_code: "+262",
    },
    {
        flag: "🇻🇳",
        countryName: "Vietnam",
        telephone_code: "+84",
    },
    {
        flag: "🇲🇵",
        countryName: "Northern Mariana Islands",
        telephone_code: "+1670",
    },
    {
        flag: "🇿🇼",
        countryName: "Zimbabwe",
        telephone_code: "+263",
    },
    {
        flag: "🇮🇳",
        countryName: "India",
        telephone_code: "+91",
    },
    {
        flag: "🇰🇾",
        countryName: "Cayman Islands",
        telephone_code: "+1345",
    },
    {
        flag: "🇵🇼",
        countryName: "Palau",
        telephone_code: "+680",
    },
    {
        flag: "🇬🇺",
        countryName: "Guam",
        telephone_code: "+1671",
    },
    {
        flag: "🇬🇭",
        countryName: "Ghana",
        telephone_code: "+233",
    },
    {
        flag: "🇧🇯",
        countryName: "Benin",
        telephone_code: "+229",
    },
    {
        flag: "🇨🇰",
        countryName: "Cook Islands",
        telephone_code: "+682",
    },
    {
        flag: "🇵🇷",
        countryName: "Puerto Rico",
        telephone_code: "+1787,939",
    },
    {
        flag: "🇲🇸",
        countryName: "Montserrat",
        telephone_code: "+1664",
    },
    {
        flag: "🇳🇴",
        countryName: "Norway",
        telephone_code: "+47",
    },
    {
        flag: "🇹🇳",
        countryName: "Tunisia",
        telephone_code: "+216",
    },
    {
        flag: "🇧🇫",
        countryName: "Burkina Faso",
        telephone_code: "+226",
    },
    {
        flag: "🇵🇳",
        countryName: "Pitcairn Islands",
        telephone_code: "+64",
    },
    {
        flag: "🇧🇾",
        countryName: "Belarus",
        telephone_code: "+375",
    },
    {
        flag: "🇪🇪",
        countryName: "Estonia",
        telephone_code: "+372",
    },
    {
        flag: "🇰🇵",
        countryName: "North Korea",
        telephone_code: "+850",
    },
    {
        flag: "🇵🇰",
        countryName: "Pakistan",
        telephone_code: "+92",
    },
    {
        flag: "🇲🇩",
        countryName: "Moldova",
        telephone_code: "+373",
    },
    {
        flag: "🇲🇲",
        countryName: "Myanmar",
        telephone_code: "+95",
    },
    {
        flag: "🇫🇮",
        countryName: "Finland",
        telephone_code: "+358",
    },
    {
        flag: "🇬🇼",
        countryName: "Guinea-Bissau",
        telephone_code: "+245",
    },
    {
        flag: "🇷🇺",
        countryName: "Russia",
        telephone_code: "+73,4,5,8,9",
    },
    {
        flag: "🇦🇸",
        countryName: "American Samoa",
        telephone_code: "+1684",
    },
    {
        flag: "🇪🇹",
        countryName: "Ethiopia",
        telephone_code: "+251",
    },
    {
        flag: "🇬🇲",
        countryName: "Gambia",
        telephone_code: "+220",
    },
    {
        flag: "🇩🇿",
        countryName: "Algeria",
        telephone_code: "+213",
    },
    {
        flag: "🇭🇳",
        countryName: "Honduras",
        telephone_code: "+504",
    },
    {
        flag: "🇱🇷",
        countryName: "Liberia",
        telephone_code: "+231",
    },
    {
        flag: "🇳🇵",
        countryName: "Nepal",
        telephone_code: "+977",
    },
    {
        flag: "🇲🇴",
        countryName: "Macau",
        telephone_code: "+853",
    },
    {
        flag: "🇦🇩",
        countryName: "Andorra",
        telephone_code: "+376",
    },
    {
        flag: "🇦🇴",
        countryName: "Angola",
        telephone_code: "+244",
    },
    {
        flag: "🇾🇪",
        countryName: "Yemen",
        telephone_code: "+967",
    },
    {
        flag: "🇹🇼",
        countryName: "Taiwan",
        telephone_code: "+886",
    },
    {
        flag: "🇸🇭",
        countryName: "Saint Helena, Ascension and Tristan da Cunha",
        telephone_code: "+290,47",
    },
    {
        flag: "🇸🇷",
        countryName: "SuricountryName",
        telephone_code: "+597",
    },
    {
        flag: "🇨🇱",
        countryName: "Chile",
        telephone_code: "+56",
    },
    {
        flag: "🇪🇬",
        countryName: "Egypt",
        telephone_code: "+20",
    },
    {
        flag: "🇨🇾",
        countryName: "Cyprus",
        telephone_code: "+357",
    },
    {
        flag: "🇦🇱",
        countryName: "Albania",
        telephone_code: "+355",
    },
    {
        flag: "🇹🇨",
        countryName: "Turks and Caicos Islands",
        telephone_code: "+1649",
    },
    {
        flag: "🇺🇦",
        countryName: "Ukraine",
        telephone_code: "+380",
    },
    {
        flag: "🇳🇫",
        countryName: "Norfolk Island",
        telephone_code: "+672",
    },
    {
        flag: "🇹🇱",
        countryName: "Timor-Leste",
        telephone_code: "+670",
    },
    {
        flag: "🇻🇨",
        countryName: "Saint Vincent and the Grenadines",
        telephone_code: "+1784",
    },
    {
        flag: "🇪🇸",
        countryName: "Spain",
        telephone_code: "+34",
    },
    {
        flag: "🇪🇭",
        countryName: "Western Sahara",
        telephone_code: "+2125288,125289",
    },
    {
        flag: "🇺🇾",
        countryName: "Uruguay",
        telephone_code: "+598",
    },
    {
        flag: "🇦🇮",
        countryName: "Anguilla",
        telephone_code: "+1264",
    },
    {
        flag: "🇬🇬",
        countryName: "Guernsey",
        telephone_code: "+44",
    },
    {
        flag: "🇳🇿",
        countryName: "New Zealand",
        telephone_code: "+64",
    },
    {
        flag: "🇹🇫",
        countryName: "French Southern and Antarctic Lands",
        telephone_code: "+262",
    },
    {
        flag: "🇵🇫",
        countryName: "French Polynesia",
        telephone_code: "+689",
    },
    {
        flag: "🇿🇲",
        countryName: "Zambia",
        telephone_code: "+260",
    },
    {
        flag: "🇮🇴",
        countryName: "British Indian Ocean Territory",
        telephone_code: "+246",
    },
    {
        flag: "🇰🇼",
        countryName: "Kuwait",
        telephone_code: "+965",
    },
    {
        flag: "🇹🇷",
        countryName: "Turkey",
        telephone_code: "+90",
    },
    {
        flag: "🇰🇮",
        countryName: "Kiribati",
        telephone_code: "+686",
    },
    {
        flag: "🇮🇶",
        countryName: "Iraq",
        telephone_code: "+964",
    },
    {
        flag: "🇨🇭",
        countryName: "Switzerland",
        telephone_code: "+41",
    },
    {
        flag: "🇲🇪",
        countryName: "Montenegro",
        telephone_code: "+382",
    },
    {
        flag: "🇦🇺",
        countryName: "Australia",
        telephone_code: "+61",
    },
    {
        flag: "🇷🇪",
        countryName: "Réunion",
        telephone_code: "+262",
    },
    {
        flag: "🇹🇴",
        countryName: "Tonga",
        telephone_code: "+676",
    },
    {
        flag: "🇬🇳",
        countryName: "Guinea",
        telephone_code: "+224",
    },
    {
        flag: "🇱🇧",
        countryName: "Lebanon",
        telephone_code: "+961",
    },
    {
        flag: "🇦🇶",
        countryName: "Antarctica",
        telephone_code: "undefinedundefined",
    },
    {
        flag: "🇨🇬",
        countryName: "Republic of the Congo",
        telephone_code: "+242",
    },
    {
        flag: "🇫🇰",
        countryName: "Falkland Islands",
        telephone_code: "+500",
    },
    {
        flag: "🇮🇹",
        countryName: "Italy",
        telephone_code: "+39",
    },
    {
        flag: "🇧🇮",
        countryName: "Burundi",
        telephone_code: "+257",
    },
    {
        flag: "🇨🇴",
        countryName: "Colombia",
        telephone_code: "+57",
    },
    {
        flag: "🇫🇲",
        countryName: "Micronesia",
        telephone_code: "+691",
    },
    {
        flag: "🇰🇳",
        countryName: "Saint Kitts and Nevis",
        telephone_code: "+1869",
    },
    {
        flag: "🇪🇨",
        countryName: "Ecuador",
        telephone_code: "+593",
    },
    {
        flag: "🇵🇲",
        countryName: "Saint Pierre and Miquelon",
        telephone_code: "+508",
    },
    {
        flag: "🇳🇮",
        countryName: "Nicaragua",
        telephone_code: "+505",
    },
    {
        flag: "🇿🇦",
        countryName: "South Africa",
        telephone_code: "+27",
    },
    {
        flag: "🇧🇭",
        countryName: "Bahrain",
        telephone_code: "+973",
    },
    {
        flag: "🇬🇧",
        countryName: "United Kingdom",
        telephone_code: "+44",
    },
    {
        flag: "🇬🇵",
        countryName: "Guadeloupe",
        telephone_code: "+590",
    },
    {
        flag: "🇲🇫",
        countryName: "Saint Martin",
        telephone_code: "+590",
    },
    {
        flag: "🇻🇬",
        countryName: "British Virgin Islands",
        telephone_code: "+1284",
    },
    {
        flag: "🇧🇦",
        countryName: "Bosnia and Herzegovina",
        telephone_code: "+387",
    },
    {
        flag: "🇰🇬",
        countryName: "Kyrgyzstan",
        telephone_code: "+996",
    },
    {
        flag: "🇧🇷",
        countryName: "Brazil",
        telephone_code: "+55",
    },
    {
        flag: "🇱🇻",
        countryName: "Latvia",
        telephone_code: "+371",
    },
    {
        flag: "🇵🇪",
        countryName: "Peru",
        telephone_code: "+51",
    },
    {
        flag: "🇩🇴",
        countryName: "Dominican Republic",
        telephone_code: "+1809,829,849",
    },
    {
        flag: "🇱🇨",
        countryName: "Saint Lucia",
        telephone_code: "+1758",
    },
    {
        flag: "🇶🇦",
        countryName: "Qatar",
        telephone_code: "+974",
    },
    {
        flag: "🇬🇩",
        countryName: "Grenada",
        telephone_code: "+1473",
    },
    {
        flag: "🇸🇮",
        countryName: "Slovenia",
        telephone_code: "+386",
    },
    {
        flag: "",
        countryName: "Caribbean Netherlands",
        telephone_code: "+599",
    },
    {
        flag: "🇩🇯",
        countryName: "Djibouti",
        telephone_code: "+253",
    },
    {
        flag: "🇧🇳",
        countryName: "Brunei",
        telephone_code: "+673",
    },
    {
        flag: "🇳🇷",
        countryName: "Nauru",
        telephone_code: "+674",
    },
    {
        flag: "🇸🇰",
        countryName: "Slovakia",
        telephone_code: "+421",
    },
    {
        flag: "🇺🇲",
        countryName: "United States Minor Outlying Islands",
        telephone_code: "+268",
    },
    {
        flag: "🇸🇴",
        countryName: "Somalia",
        telephone_code: "+252",
    },
    {
        flag: "🇳🇬",
        countryName: "Nigeria",
        telephone_code: "+234",
    },
    {
        flag: "🇨🇫",
        countryName: "Central African Republic",
        telephone_code: "+236",
    },
    {
        flag: "🇯🇪",
        countryName: "Jersey",
        telephone_code: "+44",
    },
    {
        flag: "🇭🇷",
        countryName: "Croatia",
        telephone_code: "+385",
    },
    {
        flag: "🇻🇺",
        countryName: "Vanuatu",
        telephone_code: "+678",
    },
    {
        flag: "🇲🇶",
        countryName: "Martinique",
        telephone_code: "+596",
    },
    {
        flag: "🇹🇩",
        countryName: "Chad",
        telephone_code: "+235",
    },
    {
        flag: "🇮🇲",
        countryName: "Isle of Man",
        telephone_code: "+44",
    },
    {
        flag: "🇱🇹",
        countryName: "Lithuania",
        telephone_code: "+370",
    },
    {
        flag: "🇦🇹",
        countryName: "Austria",
        telephone_code: "+43",
    },
    {
        flag: "🇵🇬",
        countryName: "Papua New Guinea",
        telephone_code: "+675",
    },
    {
        flag: "🇷🇸",
        countryName: "Serbia",
        telephone_code: "+381",
    },
];
