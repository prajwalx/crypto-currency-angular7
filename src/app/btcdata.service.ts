import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BtcdataService {
  constructor(private http: HttpClient) { 
  }
  getLatest(){
    /*Use Some API here , I am using coinmarketcap API*/    
    // return this.http.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{headers:{'X-CMC_PRO_API_KEY':'Your-api-key-here'}});    
    
    /*Sample data for testing*/
    return {
  "status": {
    "timestamp": "2019-04-15T14:55:25.734Z",
    "error_code": 0,
    "error_message": null,
    "elapsed": 15,
    "credit_count": 1
  },
  "data": [
    {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "slug": "bitcoin",
      "circulating_supply": 17646800,
      "total_supply": 17646800,
      "max_supply": 21000000,
      "date_added": "2013-04-28T00:00:00.000Z",
      "num_market_pairs": 7253,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 1,
      "last_updated": "2019-04-15T14:54:28.000Z",
      "quote": {
        "USD": {
          "price": 5179.66233792,
          "volume_24h": 11584717532.1157,
          "percent_change_1h": 0.320613,
          "percent_change_24h": 1.57803,
          "percent_change_7d": -0.731393,
          "market_cap": 91404465344.80666,
          "last_updated": "2019-04-15T14:54:28.000Z"
        }
      }
    },
    {
      "id": 1027,
      "name": "Ethereum",
      "symbol": "ETH",
      "slug": "ethereum",
      "circulating_supply": 105669814.9366,
      "total_supply": 105669814.9366,
      "max_supply": null,
      "date_added": "2015-08-07T00:00:00.000Z",
      "num_market_pairs": 5225,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 2,
      "last_updated": "2019-04-15T14:54:18.000Z",
      "quote": {
        "USD": {
          "price": 166.748747391,
          "volume_24h": 5349311129.61778,
          "percent_change_1h": 0.277258,
          "percent_change_24h": 1.44177,
          "percent_change_7d": -6.49432,
          "market_cap": 17620309277.71683,
          "last_updated": "2019-04-15T14:54:18.000Z"
        }
      }
    },
    {
      "id": 52,
      "name": "XRP",
      "symbol": "XRP",
      "slug": "ripple",
      "circulating_supply": 41792108527,
      "total_supply": 99991658131,
      "max_supply": 100000000000,
      "date_added": "2013-08-04T00:00:00.000Z",
      "num_market_pairs": 381,
      "tags": [],
      "platform": null,
      "cmc_rank": 3,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.327516077797,
          "volume_24h": 852980520.168536,
          "percent_change_1h": 0.0985473,
          "percent_change_24h": 0.519604,
          "percent_change_7d": -8.02131,
          "market_cap": 13687587467.629599,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1831,
      "name": "Bitcoin Cash",
      "symbol": "BCH",
      "slug": "bitcoin-cash",
      "circulating_supply": 17729750,
      "total_supply": 17729750,
      "max_supply": 21000000,
      "date_added": "2017-07-23T00:00:00.000Z",
      "num_market_pairs": 287,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 4,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 318.879522241,
          "volume_24h": 1692683506.27421,
          "percent_change_1h": 7.08854,
          "percent_change_24h": 13.6921,
          "percent_change_7d": 4.20018,
          "market_cap": 5653654209.45237,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2,
      "name": "Litecoin",
      "symbol": "LTC",
      "slug": "litecoin",
      "circulating_supply": 61352058.5909222,
      "total_supply": 61352058.5909222,
      "max_supply": 84000000,
      "date_added": "2013-04-28T00:00:00.000Z",
      "num_market_pairs": 558,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 5,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 81.9695988498,
          "volume_24h": 2664141731.98975,
          "percent_change_1h": 1.01072,
          "percent_change_24h": 4.18546,
          "percent_change_7d": -7.40391,
          "market_cap": 5029003631.307318,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 1765,
      "name": "EOS",
      "symbol": "EOS",
      "slug": "eos",
      "circulating_supply": 906245117.6,
      "total_supply": 1006245119.9339,
      "max_supply": null,
      "date_added": "2017-07-01T00:00:00.000Z",
      "num_market_pairs": 303,
      "tags": [],
      "platform": null,
      "cmc_rank": 6,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 5.49939325114,
          "volume_24h": 2405181427.13251,
          "percent_change_1h": 0.543922,
          "percent_change_24h": 3.09997,
          "percent_change_7d": 1.24118,
          "market_cap": 4983798283.608016,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 1839,
      "name": "Binance Coin",
      "symbol": "BNB",
      "slug": "binance-coin",
      "circulating_supply": 141175490.242,
      "total_supply": 189175490.242,
      "max_supply": null,
      "date_added": "2017-07-25T00:00:00.000Z",
      "num_market_pairs": 148,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xB8c77482e45F1F44dE1745F52C74426C631bDD52"
      },
      "cmc_rank": 7,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 19.5867798347,
          "volume_24h": 194691489.979975,
          "percent_change_1h": -0.644154,
          "percent_change_24h": 1.23108,
          "percent_change_7d": 6.94482,
          "market_cap": 2765173245.4258924,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 825,
      "name": "Tether",
      "symbol": "USDT",
      "slug": "tether",
      "circulating_supply": 2422912662.98802,
      "total_supply": 2680057493.36343,
      "max_supply": null,
      "date_added": "2015-02-25T00:00:00.000Z",
      "num_market_pairs": 2138,
      "tags": [],
      "platform": {
        "id": 83,
        "name": "Omni",
        "symbol": "OMNI",
        "slug": "omni",
        "token_address": "31"
      },
      "cmc_rank": 8,
      "last_updated": "2019-04-15T14:54:10.000Z",
      "quote": {
        "USD": {
          "price": 1.0067429138,
          "volume_24h": 11455700393.0042,
          "percent_change_1h": -0.00337587,
          "percent_change_24h": 0.071702,
          "percent_change_7d": -0.35026,
          "market_cap": 2439250154.219476,
          "last_updated": "2019-04-15T14:54:10.000Z"
        }
      }
    },
    {
      "id": 512,
      "name": "Stellar",
      "symbol": "XLM",
      "slug": "stellar",
      "circulating_supply": 19302935742.6011,
      "total_supply": 104882366061.718,
      "max_supply": null,
      "date_added": "2014-08-05T00:00:00.000Z",
      "num_market_pairs": 242,
      "tags": [],
      "platform": null,
      "cmc_rank": 9,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.11737720234,
          "volume_24h": 243272093.183061,
          "percent_change_1h": -0.0712281,
          "percent_change_24h": 1.48665,
          "percent_change_7d": -9.77956,
          "market_cap": 2265724594.4153075,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 2010,
      "name": "Cardano",
      "symbol": "ADA",
      "slug": "cardano",
      "circulating_supply": 25927070538,
      "total_supply": 31112483745,
      "max_supply": 45000000000,
      "date_added": "2017-10-01T00:00:00.000Z",
      "num_market_pairs": 73,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 10,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.0838522833914,
          "volume_24h": 77922811.2707752,
          "percent_change_1h": 0.169785,
          "percent_change_24h": 1.44611,
          "percent_change_7d": -3.30109,
          "market_cap": 2174044066.2611938,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 1958,
      "name": "TRON",
      "symbol": "TRX",
      "slug": "tron",
      "circulating_supply": 66682072191.4,
      "total_supply": 99281283754.3,
      "max_supply": null,
      "date_added": "2017-09-13T00:00:00.000Z",
      "num_market_pairs": 206,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 11,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.0271898964552,
          "volume_24h": 360781086.881479,
          "percent_change_1h": 0.0293536,
          "percent_change_24h": 2.67748,
          "percent_change_7d": -8.66566,
          "market_cap": 1813078638.3023374,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 3602,
      "name": "Bitcoin SV",
      "symbol": "BSV",
      "slug": "bitcoin-sv",
      "circulating_supply": 17727785.9169502,
      "total_supply": 17727785.9169502,
      "max_supply": 21000000,
      "date_added": "2018-11-09T00:00:00.000Z",
      "num_market_pairs": 136,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 12,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 64.5056911286,
          "volume_24h": 148471481.883395,
          "percent_change_1h": -8.28602,
          "percent_change_24h": -8.39966,
          "percent_change_7d": -22.203,
          "market_cap": 1143543082.7527347,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 328,
      "name": "Monero",
      "symbol": "XMR",
      "slug": "monero",
      "circulating_supply": 16920665.7860542,
      "total_supply": 16920665.7860542,
      "max_supply": null,
      "date_added": "2014-05-21T00:00:00.000Z",
      "num_market_pairs": 125,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 13,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 66.6882996272,
          "volume_24h": 113244973.764128,
          "percent_change_1h": 0.372852,
          "percent_change_24h": 1.90858,
          "percent_change_7d": -5.20121,
          "market_cap": 1128410429.8320942,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 131,
      "name": "Dash",
      "symbol": "DASH",
      "slug": "dash",
      "circulating_supply": 8752104.75241916,
      "total_supply": 8752104.75241916,
      "max_supply": 18900000,
      "date_added": "2014-02-14T00:00:00.000Z",
      "num_market_pairs": 218,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 14,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 121.481184772,
          "volume_24h": 264614266.416466,
          "percent_change_1h": -0.199906,
          "percent_change_24h": -0.515194,
          "percent_change_7d": -9.48088,
          "market_cap": 1063216054.5725315,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1720,
      "name": "IOTA",
      "symbol": "MIOTA",
      "slug": "iota",
      "circulating_supply": 2779530283,
      "total_supply": 2779530283,
      "max_supply": 2779530283,
      "date_added": "2017-06-13T00:00:00.000Z",
      "num_market_pairs": 38,
      "tags": [],
      "platform": null,
      "cmc_rank": 15,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.312896591646,
          "volume_24h": 15466274.1929852,
          "percent_change_1h": 0.090666,
          "percent_change_24h": 0.00309139,
          "percent_change_7d": -10.9751,
          "market_cap": 869705551.9275417,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 2011,
      "name": "Tezos",
      "symbol": "XTZ",
      "slug": "tezos",
      "circulating_supply": 663507311.833271,
      "total_supply": 790789835.300516,
      "max_supply": null,
      "date_added": "2017-10-02T00:00:00.000Z",
      "num_market_pairs": 27,
      "tags": [],
      "platform": null,
      "cmc_rank": 16,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.12051576916,
          "volume_24h": 7853757.10994815,
          "percent_change_1h": 1.50108,
          "percent_change_24h": 4.35537,
          "percent_change_7d": 18.4185,
          "market_cap": 743470405.8621417,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1376,
      "name": "NEO",
      "symbol": "NEO",
      "slug": "neo",
      "circulating_supply": 65000000,
      "total_supply": 100000000,
      "max_supply": 100000000,
      "date_added": "2016-09-08T00:00:00.000Z",
      "num_market_pairs": 170,
      "tags": [],
      "platform": null,
      "cmc_rank": 17,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 11.1951899825,
          "volume_24h": 225607071.578053,
          "percent_change_1h": 0.278451,
          "percent_change_24h": 1.35057,
          "percent_change_7d": -10.9797,
          "market_cap": 727687348.8625001,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1321,
      "name": "Ethereum Classic",
      "symbol": "ETC",
      "slug": "ethereum-classic",
      "circulating_supply": 109740246,
      "total_supply": 109740246,
      "max_supply": 210000000,
      "date_added": "2016-07-24T00:00:00.000Z",
      "num_market_pairs": 193,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 18,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 6.38985038316,
          "volume_24h": 420034819.252891,
          "percent_change_1h": 0.135651,
          "percent_change_24h": 1.6627,
          "percent_change_7d": -9.32567,
          "market_cap": 701223752.9511726,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 2566,
      "name": "Ontology",
      "symbol": "ONT",
      "slug": "ontology",
      "circulating_supply": 494854358,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2018-03-08T00:00:00.000Z",
      "num_market_pairs": 65,
      "tags": [],
      "platform": null,
      "cmc_rank": 19,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 1.34284818217,
          "volume_24h": 63011971.2075563,
          "percent_change_1h": -0.351404,
          "percent_change_24h": 0.716822,
          "percent_change_7d": -9.28507,
          "market_cap": 664514275.0792024,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 1518,
      "name": "Maker",
      "symbol": "MKR",
      "slug": "maker",
      "circulating_supply": 1000000,
      "total_supply": 1000000,
      "max_supply": null,
      "date_added": "2017-01-29T00:00:00.000Z",
      "num_market_pairs": 63,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
      },
      "cmc_rank": 20,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 646.380915876,
          "volume_24h": 1445036.74218164,
          "percent_change_1h": -0.728784,
          "percent_change_24h": 5.26826,
          "percent_change_7d": -11.6257,
          "market_cap": 646380915.876,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 873,
      "name": "NEM",
      "symbol": "XEM",
      "slug": "nem",
      "circulating_supply": 8999999999,
      "total_supply": 8999999999,
      "max_supply": null,
      "date_added": "2015-04-01T00:00:00.000Z",
      "num_market_pairs": 92,
      "tags": [],
      "platform": null,
      "cmc_rank": 21,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.0668211922841,
          "volume_24h": 25832990.3822172,
          "percent_change_1h": 0.230628,
          "percent_change_24h": 0.358797,
          "percent_change_7d": -8.70992,
          "market_cap": 601390730.4900788,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1437,
      "name": "Zcash",
      "symbol": "ZEC",
      "slug": "zcash",
      "circulating_supply": 6322706.25,
      "total_supply": 6322706.25,
      "max_supply": null,
      "date_added": "2016-10-29T00:00:00.000Z",
      "num_market_pairs": 175,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 22,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 68.8905837334,
          "volume_24h": 207782143.011854,
          "percent_change_1h": 0.12936,
          "percent_change_24h": -0.362993,
          "percent_change_7d": -4.17865,
          "market_cap": 435574924.3373166,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 3635,
      "name": "Crypto.com Chain",
      "symbol": "CRO",
      "slug": "crypto-com-chain",
      "circulating_supply": 4997716894.97717,
      "total_supply": 100000000000,
      "max_supply": null,
      "date_added": "2018-12-14T00:00:00.000Z",
      "num_market_pairs": 12,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b"
      },
      "cmc_rank": 23,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 0.0805456993004,
          "volume_24h": 998531.89165567,
          "percent_change_1h": -2.00256,
          "percent_change_24h": -2.00923,
          "percent_change_7d": 45.8764,
          "market_cap": 402544602.21135986,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 3077,
      "name": "VeChain",
      "symbol": "VET",
      "slug": "vechain",
      "circulating_supply": 55454734800,
      "total_supply": 86712634466,
      "max_supply": null,
      "date_added": "2017-08-22T00:00:00.000Z",
      "num_market_pairs": 52,
      "tags": [],
      "platform": null,
      "cmc_rank": 24,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 0.00700411160542,
          "volume_24h": 10962233.4951892,
          "percent_change_1h": 0.414321,
          "percent_change_24h": 2.4332,
          "percent_change_7d": -5.11311,
          "market_cap": 388411151.5881683,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 1697,
      "name": "Basic Attention Token",
      "symbol": "BAT",
      "slug": "basic-attention-token",
      "circulating_supply": 1249416783.15753,
      "total_supply": 1500000000,
      "max_supply": null,
      "date_added": "2017-06-01T00:00:00.000Z",
      "num_market_pairs": 97,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef"
      },
      "cmc_rank": 25,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.305942541816,
          "volume_24h": 42062273.845068,
          "percent_change_1h": -1.23251,
          "percent_change_24h": -2.46858,
          "percent_change_7d": 3.91795,
          "market_cap": 382249746.4267849,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 74,
      "name": "Dogecoin",
      "symbol": "DOGE",
      "slug": "dogecoin",
      "circulating_supply": 119086064160.517,
      "total_supply": 119086064160.517,
      "max_supply": null,
      "date_added": "2013-12-15T00:00:00.000Z",
      "num_market_pairs": 332,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 26,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.00284984561529,
          "volume_24h": 36386362.8545688,
          "percent_change_1h": -0.0945083,
          "percent_change_24h": -0.0220769,
          "percent_change_7d": -9.91508,
          "market_cap": 339376897.789993,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 2083,
      "name": "Bitcoin Gold",
      "symbol": "BTG",
      "slug": "bitcoin-gold",
      "circulating_supply": 17513923.589,
      "total_supply": 17513923.589,
      "max_supply": 21000000,
      "date_added": "2017-10-23T00:00:00.000Z",
      "num_market_pairs": 76,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 27,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 17.4238550253,
          "volume_24h": 15352832.3222337,
          "percent_change_1h": 4.49913,
          "percent_change_24h": 8.01209,
          "percent_change_7d": -3.24229,
          "market_cap": 305160065.5389179,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 1274,
      "name": "Waves",
      "symbol": "WAVES",
      "slug": "waves",
      "circulating_supply": 100000000,
      "total_supply": 100000000,
      "max_supply": null,
      "date_added": "2016-06-02T00:00:00.000Z",
      "num_market_pairs": 129,
      "tags": [],
      "platform": null,
      "cmc_rank": 28,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 2.72621837577,
          "volume_24h": 17283736.9779349,
          "percent_change_1h": -0.0124551,
          "percent_change_24h": 1.38442,
          "percent_change_7d": -7.81339,
          "market_cap": 272621837.57699996,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1808,
      "name": "OmiseGO",
      "symbol": "OMG",
      "slug": "omisego",
      "circulating_supply": 140245398.245133,
      "total_supply": 140245398.245133,
      "max_supply": null,
      "date_added": "2017-07-14T00:00:00.000Z",
      "num_market_pairs": 163,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07"
      },
      "cmc_rank": 29,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.93246544814,
          "volume_24h": 73881056.2578755,
          "percent_change_1h": -0.261221,
          "percent_change_24h": 0.0640316,
          "percent_change_7d": -16.7366,
          "market_cap": 271019386.3693538,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1684,
      "name": "Qtum",
      "symbol": "QTUM",
      "slug": "qtum",
      "circulating_supply": 89399108,
      "total_supply": 101399108,
      "max_supply": null,
      "date_added": "2017-05-24T00:00:00.000Z",
      "num_market_pairs": 144,
      "tags": [],
      "platform": null,
      "cmc_rank": 30,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 2.92917722213,
          "volume_24h": 124850313.943253,
          "percent_change_1h": 0.383555,
          "percent_change_24h": 0.730209,
          "percent_change_7d": -14.4748,
          "market_cap": 261865830.83233985,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 3408,
      "name": "USD Coin",
      "symbol": "USDC",
      "slug": "usd-coin",
      "circulating_supply": 259341082.531527,
      "total_supply": 259852835.92,
      "max_supply": null,
      "date_added": "2018-10-08T00:00:00.000Z",
      "num_market_pairs": 138,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
      },
      "cmc_rank": 31,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 1.0044383222,
          "volume_24h": 36329711.9593115,
          "percent_change_1h": 0.086186,
          "percent_change_24h": 0.0849606,
          "percent_change_7d": 0.333414,
          "market_cap": 260492121.8154987,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 1168,
      "name": "Decred",
      "symbol": "DCR",
      "slug": "decred",
      "circulating_supply": 9629824.73299306,
      "total_supply": 9629824.73299306,
      "max_supply": 21000000,
      "date_added": "2016-02-10T00:00:00.000Z",
      "num_market_pairs": 34,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 32,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 24.715443645,
          "volume_24h": 6077849.69847263,
          "percent_change_1h": 0.43759,
          "percent_change_24h": -0.584968,
          "percent_change_7d": -3.62147,
          "market_cap": 238005390.49951717,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1214,
      "name": "Lisk",
      "symbol": "LSK",
      "slug": "lisk",
      "circulating_supply": 116166046.821928,
      "total_supply": 131281177,
      "max_supply": null,
      "date_added": "2016-04-06T00:00:00.000Z",
      "num_market_pairs": 58,
      "tags": [],
      "platform": null,
      "cmc_rank": 33,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 2.02961224771,
          "volume_24h": 5770194.85700176,
          "percent_change_1h": -0.0264623,
          "percent_change_24h": 2.92131,
          "percent_change_7d": -3.02889,
          "market_cap": 235772031.39783835,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1104,
      "name": "Augur",
      "symbol": "REP",
      "slug": "augur",
      "circulating_supply": 11000000,
      "total_supply": 11000000,
      "max_supply": null,
      "date_added": "2015-10-27T00:00:00.000Z",
      "num_market_pairs": 65,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1985365e9f78359a9b6ad760e32412f4a445e862"
      },
      "cmc_rank": 34,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 20.2887048332,
          "volume_24h": 8613939.90011839,
          "percent_change_1h": -0.5233,
          "percent_change_24h": 4.33968,
          "percent_change_7d": -7.35352,
          "market_cap": 223175753.1652,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1567,
      "name": "Nano",
      "symbol": "NANO",
      "slug": "nano",
      "circulating_supply": 133248289.1965,
      "total_supply": 133248289.1965,
      "max_supply": 133248290,
      "date_added": "2017-03-06T00:00:00.000Z",
      "num_market_pairs": 40,
      "tags": [],
      "platform": null,
      "cmc_rank": 35,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 1.58322184361,
          "volume_24h": 5387091.68323687,
          "percent_change_1h": -0.833701,
          "percent_change_24h": 3.44357,
          "percent_change_7d": -1.21847,
          "market_cap": 210961602.0795612,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 2577,
      "name": "Ravencoin",
      "symbol": "RVN",
      "slug": "ravencoin",
      "circulating_supply": 3329210000,
      "total_supply": 3329210000,
      "max_supply": 21000000000,
      "date_added": "2018-03-10T00:00:00.000Z",
      "num_market_pairs": 30,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 36,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.0604458678091,
          "volume_24h": 12340248.9567871,
          "percent_change_1h": -0.623905,
          "percent_change_24h": -2.82811,
          "percent_change_7d": -8.76408,
          "market_cap": 201236987.5687338,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 2563,
      "name": "TrueUSD",
      "symbol": "TUSD",
      "slug": "trueusd",
      "circulating_supply": 199139797.12,
      "total_supply": 199139797.12,
      "max_supply": null,
      "date_added": "2018-03-06T00:00:00.000Z",
      "num_market_pairs": 159,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0000000000085d4780B73119b644AE5ecd22b376"
      },
      "cmc_rank": 37,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 1.00445210215,
          "volume_24h": 106608438.686189,
          "percent_change_1h": -0.109983,
          "percent_change_24h": -0.398335,
          "percent_change_7d": 0.0626253,
          "market_cap": 200026387.8389085,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 1896,
      "name": "0x",
      "symbol": "ZRX",
      "slug": "0x",
      "circulating_supply": 587710996.56836,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2017-08-16T00:00:00.000Z",
      "num_market_pairs": 147,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xe41d2489571d322189246dafa5ebde1f4699f498"
      },
      "cmc_rank": 38,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.326077465096,
          "volume_24h": 17923797.9073931,
          "percent_change_1h": 0.206553,
          "percent_change_24h": 2.88379,
          "percent_change_7d": -6.09159,
          "market_cap": 191639311.97005478,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2469,
      "name": "Zilliqa",
      "symbol": "ZIL",
      "slug": "zilliqa",
      "circulating_supply": 8754317427.71944,
      "total_supply": 12599999804.24,
      "max_supply": null,
      "date_added": "2018-01-25T00:00:00.000Z",
      "num_market_pairs": 97,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x05f4a42e251f2d52b8ed15e9fedaacfcef1fad27"
      },
      "cmc_rank": 39,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.0217579310003,
          "volume_24h": 15647945.0966748,
          "percent_change_1h": 0.351117,
          "percent_change_24h": 4.98249,
          "percent_change_7d": -8.16416,
          "market_cap": 190475834.54704338,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 1975,
      "name": "Chainlink",
      "symbol": "LINK",
      "slug": "chainlink",
      "circulating_supply": 350000000,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2017-09-20T00:00:00.000Z",
      "num_market_pairs": 46,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
      },
      "cmc_rank": 40,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.510316663662,
          "volume_24h": 5919004.98743368,
          "percent_change_1h": -0.274056,
          "percent_change_24h": -2.59615,
          "percent_change_7d": -8.56099,
          "market_cap": 178610832.28170002,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2099,
      "name": "ICON",
      "symbol": "ICX",
      "slug": "icon",
      "circulating_supply": 473406687.603972,
      "total_supply": 800460000,
      "max_supply": null,
      "date_added": "2017-10-27T00:00:00.000Z",
      "num_market_pairs": 49,
      "tags": [],
      "platform": null,
      "cmc_rank": 41,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.37148766878,
          "volume_24h": 9435707.77666221,
          "percent_change_1h": 0.0352406,
          "percent_change_24h": -0.469521,
          "percent_change_7d": -12.8017,
          "market_cap": 175864746.76286128,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2682,
      "name": "Holo",
      "symbol": "HOT",
      "slug": "holo",
      "circulating_supply": 133214575156,
      "total_supply": 177619433541.141,
      "max_supply": null,
      "date_added": "2018-04-29T00:00:00.000Z",
      "num_market_pairs": 43,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2"
      },
      "cmc_rank": 42,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 0.00128459941668,
          "volume_24h": 11487917.0725621,
          "percent_change_1h": -0.433571,
          "percent_change_24h": 5.65892,
          "percent_change_7d": -1.39808,
          "market_cap": 171127365.5386716,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 463,
      "name": "BitShares",
      "symbol": "BTS",
      "slug": "bitshares",
      "circulating_supply": 2707110000,
      "total_supply": 2707110000,
      "max_supply": 3600570502,
      "date_added": "2014-07-21T00:00:00.000Z",
      "num_market_pairs": 86,
      "tags": [],
      "platform": null,
      "cmc_rank": 43,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.0630532786395,
          "volume_24h": 9112458.86997302,
          "percent_change_1h": 0.0759542,
          "percent_change_24h": 0.789604,
          "percent_change_7d": -11.3565,
          "market_cap": 170692161.13777685,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 2222,
      "name": "Bitcoin Diamond",
      "symbol": "BCD",
      "slug": "bitcoin-diamond",
      "circulating_supply": 153756875,
      "total_supply": 156756875,
      "max_supply": 210000000,
      "date_added": "2017-11-24T00:00:00.000Z",
      "num_market_pairs": 22,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 44,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 1.09862143667,
          "volume_24h": 5594210.5786885,
          "percent_change_1h": 2.22701,
          "percent_change_24h": 2.89655,
          "percent_change_7d": -8.04237,
          "market_cap": 168920598.9103896,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 372,
      "name": "Bytecoin",
      "symbol": "BCN",
      "slug": "bytecoin-bcn",
      "circulating_supply": 184066828814.059,
      "total_supply": 184066828814.059,
      "max_supply": 184470000000,
      "date_added": "2014-06-17T00:00:00.000Z",
      "num_market_pairs": 12,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 45,
      "last_updated": "2019-04-15T14:54:01.000Z",
      "quote": {
        "USD": {
          "price": 0.000905858136507,
          "volume_24h": 305905.788547733,
          "percent_change_1h": -0.539436,
          "percent_change_24h": -0.729781,
          "percent_change_7d": -9.14312,
          "market_cap": 166738434.54225644,
          "last_updated": "2019-04-15T14:54:01.000Z"
        }
      }
    },
    {
      "id": 2405,
      "name": "IOST",
      "symbol": "IOST",
      "slug": "iostoken",
      "circulating_supply": 12013965608.8475,
      "total_supply": 21000000000,
      "max_supply": null,
      "date_added": "2018-01-16T00:00:00.000Z",
      "num_market_pairs": 65,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xfa1a856cfa3409cfa145fa4e20eb270df3eb21ab"
      },
      "cmc_rank": 46,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.0134606677012,
          "volume_24h": 17755586.0202924,
          "percent_change_1h": -0.926584,
          "percent_change_24h": -0.901569,
          "percent_change_7d": -12.2613,
          "market_cap": 161715998.83434114,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 109,
      "name": "DigiByte",
      "symbol": "DGB",
      "slug": "digibyte",
      "circulating_supply": 11675788534.2097,
      "total_supply": 11675788534.2097,
      "max_supply": 21000000000,
      "date_added": "2014-02-06T00:00:00.000Z",
      "num_market_pairs": 57,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 47,
      "last_updated": "2019-04-15T14:54:01.000Z",
      "quote": {
        "USD": {
          "price": 0.0130615862393,
          "volume_24h": 1607103.86915028,
          "percent_change_1h": -0.240675,
          "percent_change_24h": 1.3362,
          "percent_change_7d": -11.1599,
          "market_cap": 152504318.85141012,
          "last_updated": "2019-04-15T14:54:01.000Z"
        }
      }
    },
    {
      "id": 1700,
      "name": "Aeternity",
      "symbol": "AE",
      "slug": "aeternity",
      "circulating_supply": 259146923.5,
      "total_supply": 304967867.49932,
      "max_supply": null,
      "date_added": "2017-06-01T00:00:00.000Z",
      "num_market_pairs": 57,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 48,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.556248509072,
          "volume_24h": 41060665.8882546,
          "percent_change_1h": -0.204381,
          "percent_change_24h": 0.202917,
          "percent_change_7d": -12.2555,
          "market_cap": 144150089.82747063,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 2603,
      "name": "Pundi X",
      "symbol": "NPXS",
      "slug": "pundi-x",
      "circulating_supply": 194603096087.921,
      "total_supply": 274555193861,
      "max_supply": null,
      "date_added": "2018-03-22T00:00:00.000Z",
      "num_market_pairs": 57,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3"
      },
      "cmc_rank": 49,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 0.000705684448477,
          "volume_24h": 5440701.97431952,
          "percent_change_1h": 0.270739,
          "percent_change_24h": 1.06093,
          "percent_change_7d": -4.33286,
          "market_cap": 137328378.53472117,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 693,
      "name": "Verge",
      "symbol": "XVG",
      "slug": "verge",
      "circulating_supply": 15888360575.3803,
      "total_supply": 15888360575.3803,
      "max_supply": 16555000000,
      "date_added": "2014-10-25T00:00:00.000Z",
      "num_market_pairs": 56,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 50,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.00854629049418,
          "volume_24h": 2419839.76880923,
          "percent_change_1h": -1.69717,
          "percent_change_24h": -0.823581,
          "percent_change_7d": -18.2523,
          "market_cap": 135786544.95347694,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1230,
      "name": "Steem",
      "symbol": "STEEM",
      "slug": "steem",
      "circulating_supply": 311498966.862,
      "total_supply": 328473060.862,
      "max_supply": null,
      "date_added": "2016-04-18T00:00:00.000Z",
      "num_market_pairs": 31,
      "tags": [],
      "platform": null,
      "cmc_rank": 51,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.431370633345,
          "volume_24h": 2035844.6984836,
          "percent_change_1h": -1.0301,
          "percent_change_24h": -0.361868,
          "percent_change_7d": -12.6122,
          "market_cap": 134371506.6215741,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 3718,
      "name": "BitTorrent",
      "symbol": "BTT",
      "slug": "bittorrent",
      "circulating_supply": 170421000000,
      "total_supply": 990000000000,
      "max_supply": null,
      "date_added": "2019-01-31T00:00:00.000Z",
      "num_market_pairs": 84,
      "tags": [],
      "platform": {
        "id": 1958,
        "name": "TRON",
        "symbol": "TRX",
        "slug": "tron",
        "token_address": "1002000"
      },
      "cmc_rank": 52,
      "last_updated": "2019-04-15T14:54:10.000Z",
      "quote": {
        "USD": {
          "price": 0.000770801459143,
          "volume_24h": 144566673.217805,
          "percent_change_1h": -0.726942,
          "percent_change_24h": 2.60635,
          "percent_change_7d": -0.988793,
          "market_cap": 131360755.4686092,
          "last_updated": "2019-04-15T14:54:10.000Z"
        }
      }
    },
    {
      "id": 3115,
      "name": "Maximine Coin",
      "symbol": "MXM",
      "slug": "maximine-coin",
      "circulating_supply": 1649000000,
      "total_supply": 16000000000,
      "max_supply": null,
      "date_added": "2018-08-07T00:00:00.000Z",
      "num_market_pairs": 7,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x8e766f57f7d16ca50b4a0b90b88f6468a09b0439"
      },
      "cmc_rank": 53,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 0.0774830650699,
          "volume_24h": 28999598.2814924,
          "percent_change_1h": -2.15622,
          "percent_change_24h": 6.60964,
          "percent_change_7d": 2.31024,
          "market_cap": 127769574.3002651,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 1042,
      "name": "Siacoin",
      "symbol": "SC",
      "slug": "siacoin",
      "circulating_supply": 40286673222,
      "total_supply": 40286673222,
      "max_supply": null,
      "date_added": "2015-08-26T00:00:00.000Z",
      "num_market_pairs": 28,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 54,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.00315058147187,
          "volume_24h": 2879398.4363337,
          "percent_change_1h": -0.779282,
          "percent_change_24h": 0.737326,
          "percent_change_7d": -11.0218,
          "market_cap": 126926446.21651448,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 1866,
      "name": "Bytom",
      "symbol": "BTM",
      "slug": "bytom",
      "circulating_supply": 1002499275,
      "total_supply": 1407000000,
      "max_supply": null,
      "date_added": "2017-08-08T00:00:00.000Z",
      "num_market_pairs": 47,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 55,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.123479488164,
          "volume_24h": 7553810.19151345,
          "percent_change_1h": -0.361422,
          "percent_change_24h": 2.27418,
          "percent_change_7d": -10.9099,
          "market_cap": 123788097.36178109,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2130,
      "name": "Enjin Coin",
      "symbol": "ENJ",
      "slug": "enjin-coin",
      "circulating_supply": 767107985.064264,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2017-11-01T00:00:00.000Z",
      "num_market_pairs": 44,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c"
      },
      "cmc_rank": 56,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.156667455982,
          "volume_24h": 25215843.5386708,
          "percent_change_1h": -3.0944,
          "percent_change_24h": -6.36285,
          "percent_change_7d": 6.78748,
          "market_cap": 120180856.4834963,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2502,
      "name": "Huobi Token",
      "symbol": "HT",
      "slug": "huobi-token",
      "circulating_supply": 50000200,
      "total_supply": 500000000,
      "max_supply": null,
      "date_added": "2018-02-03T00:00:00.000Z",
      "num_market_pairs": 50,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161"
      },
      "cmc_rank": 57,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 2.37760334354,
          "volume_24h": 65431585.7656191,
          "percent_change_1h": -1.00507,
          "percent_change_24h": -5.75387,
          "percent_change_7d": -11.3238,
          "market_cap": 118880642.69766872,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 1521,
      "name": "Komodo",
      "symbol": "KMD",
      "slug": "komodo",
      "circulating_supply": 112636502.9082,
      "total_supply": 112636502.9082,
      "max_supply": 200000000,
      "date_added": "2017-02-05T00:00:00.000Z",
      "num_market_pairs": 20,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 58,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 1.05429639254,
          "volume_24h": 2025758.97141247,
          "percent_change_1h": -0.980531,
          "percent_change_24h": -2.94699,
          "percent_change_7d": -13.3565,
          "market_cap": 118752258.68443647,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1343,
      "name": "Stratis",
      "symbol": "STRAT",
      "slug": "stratis",
      "circulating_supply": 99289601.1702563,
      "total_supply": 99289601.1702563,
      "max_supply": null,
      "date_added": "2016-08-12T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 60,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 1.11138850279,
          "volume_24h": 1323811.28410381,
          "percent_change_1h": -0.502544,
          "percent_change_24h": -0.0891291,
          "percent_change_7d": -8.68986,
          "market_cap": 110349321.18722737,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 3330,
      "name": "Paxos Standard Token",
      "symbol": "PAX",
      "slug": "paxos-standard-token",
      "circulating_supply": 108437327.329581,
      "total_supply": 108756923.71,
      "max_supply": null,
      "date_added": "2018-09-27T00:00:00.000Z",
      "num_market_pairs": 83,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1"
      },
      "cmc_rank": 61,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 1.00184550495,
          "volume_24h": 62617361.8664863,
          "percent_change_1h": 0.0130141,
          "percent_change_24h": 0.0772821,
          "percent_change_7d": 0.367407,
          "market_cap": 108637448.95393251,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 2874,
      "name": "Aurora",
      "symbol": "AOA",
      "slug": "aurora",
      "circulating_supply": 6542330148.20859,
      "total_supply": 10000000000,
      "max_supply": null,
      "date_added": "2018-06-26T00:00:00.000Z",
      "num_market_pairs": 11,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x9ab165d795019b6d8b3e971dda91071421305e5a"
      },
      "cmc_rank": 59,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 0.0160407975605,
          "volume_24h": 2004035.25572858,
          "percent_change_1h": -3.52647,
          "percent_change_24h": -2.90253,
          "percent_change_7d": -1.24402,
          "market_cap": 104944193.48136994,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 2087,
      "name": "KuCoin Shares",
      "symbol": "KCS",
      "slug": "kucoin-shares",
      "circulating_supply": 89939916,
      "total_supply": 179939916,
      "max_supply": null,
      "date_added": "2017-10-24T00:00:00.000Z",
      "num_market_pairs": 10,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x039b5649a59967e3e936d7471f9c3700100ee1ab"
      },
      "cmc_rank": 62,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.16397761191,
          "volume_24h": 1770043.39703436,
          "percent_change_1h": 0.168294,
          "percent_change_24h": -2.22758,
          "percent_change_7d": -15.3555,
          "market_cap": 104688048.641066,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2416,
      "name": "THETA",
      "symbol": "THETA",
      "slug": "theta",
      "circulating_supply": 870502690,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2018-01-17T00:00:00.000Z",
      "num_market_pairs": 31,
      "tags": [],
      "platform": null,
      "cmc_rank": 63,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.118672922903,
          "volume_24h": 5678635.22646362,
          "percent_change_1h": -0.781417,
          "percent_change_24h": -2.05299,
          "percent_change_7d": -0.883324,
          "market_cap": 103305098.6172241,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 3437,
      "name": "ABBC Coin",
      "symbol": "ABBC",
      "slug": "abbc-coin",
      "circulating_supply": 505080492.343297,
      "total_supply": 1002169450.0106,
      "max_supply": null,
      "date_added": "2018-10-12T00:00:00.000Z",
      "num_market_pairs": 25,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 64,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 0.190224432683,
          "volume_24h": 57233728.7156829,
          "percent_change_1h": 5.82161,
          "percent_change_24h": -7.93735,
          "percent_change_7d": 3.50615,
          "market_cap": 96078650.11525398,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 3116,
      "name": "Insight Chain",
      "symbol": "INB",
      "slug": "insight-chain",
      "circulating_supply": 349902689.082001,
      "total_supply": 10000000000,
      "max_supply": null,
      "date_added": "2018-08-08T00:00:00.000Z",
      "num_market_pairs": 3,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x17aa18a4b64a55abed7fa543f2ba4e91f2dce482"
      },
      "cmc_rank": 65,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 0.268225214228,
          "volume_24h": 6727640.25593633,
          "percent_change_1h": 0.591099,
          "percent_change_24h": 13.2039,
          "percent_change_7d": 18.7344,
          "market_cap": 93852723.73797299,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 2349,
      "name": "Mixin",
      "symbol": "XIN",
      "slug": "mixin",
      "circulating_supply": 440348.185686766,
      "total_supply": 1000000,
      "max_supply": null,
      "date_added": "2018-01-09T00:00:00.000Z",
      "num_market_pairs": 7,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa974c709cfb4566686553a20790685a47aceaa33"
      },
      "cmc_rank": 66,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 210.828029633,
          "volume_24h": 860897.9428833,
          "percent_change_1h": -0.238266,
          "percent_change_24h": 2.98567,
          "percent_change_7d": 3.44883,
          "market_cap": 92837740.34080729,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2772,
      "name": "Digitex Futures",
      "symbol": "DGTX",
      "slug": "digitex-futures",
      "circulating_supply": 737500000,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2018-05-23T00:00:00.000Z",
      "num_market_pairs": 9,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1c83501478f1320977047008496dacbd60bb15ef"
      },
      "cmc_rank": 67,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 0.124651510207,
          "volume_24h": 1615124.239916,
          "percent_change_1h": -1.20111,
          "percent_change_24h": -1.12576,
          "percent_change_7d": 2.06237,
          "market_cap": 91930488.7776625,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 2308,
      "name": "Dai",
      "symbol": "DAI",
      "slug": "dai",
      "circulating_supply": 92198108.8834525,
      "total_supply": 92198108.8834525,
      "max_supply": null,
      "date_added": "2017-12-24T00:00:00.000Z",
      "num_market_pairs": 83,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"
      },
      "cmc_rank": 68,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.976982509032,
          "volume_24h": 43253466.627912,
          "percent_change_1h": 0.264419,
          "percent_change_24h": -0.511249,
          "percent_change_7d": -2.21558,
          "market_cap": 90075939.74496096,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 1759,
      "name": "Status",
      "symbol": "SNT",
      "slug": "status",
      "circulating_supply": 3470483788,
      "total_supply": 6804870174,
      "max_supply": null,
      "date_added": "2017-06-28T00:00:00.000Z",
      "num_market_pairs": 83,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e"
      },
      "cmc_rank": 69,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.0259484598207,
          "volume_24h": 18309874.3367088,
          "percent_change_1h": -0.467075,
          "percent_change_24h": -2.27446,
          "percent_change_7d": -7.6775,
          "market_cap": 90053709.13130873,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1925,
      "name": "Waltonchain",
      "symbol": "WTC",
      "slug": "waltonchain",
      "circulating_supply": 41070159.4106683,
      "total_supply": 70000000,
      "max_supply": 100000000,
      "date_added": "2017-08-27T00:00:00.000Z",
      "num_market_pairs": 32,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xb7cb1c96db6b22b0d3d9536e0108d062bd488f74"
      },
      "cmc_rank": 70,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 2.18679155228,
          "volume_24h": 8955101.15300984,
          "percent_change_1h": -1.88355,
          "percent_change_24h": -0.613539,
          "percent_change_7d": -1.93256,
          "market_cap": 89811877.65004237,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1455,
      "name": "Golem",
      "symbol": "GNT",
      "slug": "golem-network-tokens",
      "circulating_supply": 963622000,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2016-11-18T00:00:00.000Z",
      "num_market_pairs": 89,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa74476443119A942dE498590Fe1f2454d7D4aC0d"
      },
      "cmc_rank": 71,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.090600163458,
          "volume_24h": 1880212.50683231,
          "percent_change_1h": -0.358281,
          "percent_change_24h": -0.20594,
          "percent_change_7d": -7.36225,
          "market_cap": 87304310.71172488,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1087,
      "name": "Factom",
      "symbol": "FCT",
      "slug": "factom",
      "circulating_supply": 9434444.882,
      "total_supply": 9434444.882,
      "max_supply": null,
      "date_added": "2015-10-06T00:00:00.000Z",
      "num_market_pairs": 5,
      "tags": [],
      "platform": null,
      "cmc_rank": 72,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 9.11563142134,
          "volume_24h": 233845.762718485,
          "percent_change_1h": -1.2352,
          "percent_change_24h": 3.90538,
          "percent_change_7d": 0.183077,
          "market_cap": 86000922.20925954,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 2900,
      "name": "Project Pai",
      "symbol": "PAI",
      "slug": "project-pai",
      "circulating_supply": 1450537223,
      "total_supply": 1588579500,
      "max_supply": null,
      "date_added": "2018-07-05T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 73,
      "last_updated": "2019-04-15T14:54:07.000Z",
      "quote": {
        "USD": {
          "price": 0.0588796715488,
          "volume_24h": 3511518.77101644,
          "percent_change_1h": -0.678445,
          "percent_change_24h": 0.636512,
          "percent_change_7d": -15.9434,
          "market_cap": 85407155.25954846,
          "last_updated": "2019-04-15T14:54:07.000Z"
        }
      }
    },
    {
      "id": 1750,
      "name": "GXChain",
      "symbol": "GXC",
      "slug": "gxchain",
      "circulating_supply": 60000000,
      "total_supply": 99658447.57756,
      "max_supply": 100000000,
      "date_added": "2017-06-25T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 74,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 1.33293101381,
          "volume_24h": 5416531.60720616,
          "percent_change_1h": 0.547686,
          "percent_change_24h": 0.744461,
          "percent_change_7d": 13.294,
          "market_cap": 79975860.82859999,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1320,
      "name": "Ardor",
      "symbol": "ARDR",
      "slug": "ardor",
      "circulating_supply": 998999495,
      "total_supply": 998999495,
      "max_supply": 998999495,
      "date_added": "2016-07-23T00:00:00.000Z",
      "num_market_pairs": 16,
      "tags": [],
      "platform": null,
      "cmc_rank": 75,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.0795850953143,
          "volume_24h": 670733.125526134,
          "percent_change_1h": -0.0996654,
          "percent_change_24h": -1.5715,
          "percent_change_7d": -9.34449,
          "market_cap": 79505470.02851257,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1789,
      "name": "Populous",
      "symbol": "PPT",
      "slug": "populous",
      "circulating_supply": 53252245.9943896,
      "total_supply": 53252246,
      "max_supply": 53252246,
      "date_added": "2017-07-10T00:00:00.000Z",
      "num_market_pairs": 33,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xd4fa1460f537bb9085d22c7bccb5dd450ef28e3a"
      },
      "cmc_rank": 76,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 1.48959870212,
          "volume_24h": 5556826.21918699,
          "percent_change_1h": -0.483464,
          "percent_change_24h": -1.19019,
          "percent_change_7d": -9.69363,
          "market_cap": 79324476.51821771,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 2300,
      "name": "WAX",
      "symbol": "WAX",
      "slug": "wax",
      "circulating_supply": 942694860.702148,
      "total_supply": 1850000000,
      "max_supply": null,
      "date_added": "2017-12-21T00:00:00.000Z",
      "num_market_pairs": 29,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022"
      },
      "cmc_rank": 77,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.0835135094378,
          "volume_24h": 394173.815227786,
          "percent_change_1h": -1.31894,
          "percent_change_24h": -0.830457,
          "percent_change_7d": 3.07946,
          "market_cap": 78727756.1462144,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2027,
      "name": "Cryptonex",
      "symbol": "CNX",
      "slug": "cryptonex",
      "circulating_supply": 55686328.9619251,
      "total_supply": 107135053.921925,
      "max_supply": 210000000,
      "date_added": "2017-10-07T00:00:00.000Z",
      "num_market_pairs": 9,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 78,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.40457062363,
          "volume_24h": 9897274.23450984,
          "percent_change_1h": 0.562211,
          "percent_change_24h": 1.56928,
          "percent_change_7d": -0.703429,
          "market_cap": 78215381.79771647,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 3224,
      "name": "Qubitica",
      "symbol": "QBIT",
      "slug": "qubitica",
      "circulating_supply": 2811294.2799638,
      "total_supply": 10000000,
      "max_supply": null,
      "date_added": "2018-08-28T00:00:00.000Z",
      "num_market_pairs": 4,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1602af2C782cC03F9241992E243290Fccf73Bb13"
      },
      "cmc_rank": 79,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 26.097506701,
          "volume_24h": 37730.5825076096,
          "percent_change_1h": -1.80857,
          "percent_change_24h": 0.101639,
          "percent_change_7d": -3.0868,
          "market_cap": 73367771.30983825,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 1586,
      "name": "Ark",
      "symbol": "ARK",
      "slug": "ark",
      "circulating_supply": 109641034,
      "total_supply": 140891034,
      "max_supply": null,
      "date_added": "2017-03-22T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 80,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 0.64769036301,
          "volume_24h": 990218.437964657,
          "percent_change_1h": -1.29667,
          "percent_change_24h": -2.68712,
          "percent_change_7d": -3.30858,
          "market_cap": 71013441.11225176,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1776,
      "name": "Crypto.com",
      "symbol": "MCO",
      "slug": "crypto-com",
      "circulating_supply": 15793831.0949625,
      "total_supply": 31587682.3632061,
      "max_supply": null,
      "date_added": "2017-07-03T00:00:00.000Z",
      "num_market_pairs": 50,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xb63b606ac810a52cca15e44bb630fd42d8d1d83d"
      },
      "cmc_rank": 81,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 4.14530181383,
          "volume_24h": 6802111.17304114,
          "percent_change_1h": -0.19167,
          "percent_change_24h": 2.66428,
          "percent_change_7d": 4.41118,
          "market_cap": 65470196.6852727,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 3144,
      "name": "ThoreCoin",
      "symbol": "THR",
      "slug": "thorecoin",
      "circulating_supply": 86686.0215,
      "total_supply": 100000,
      "max_supply": null,
      "date_added": "2018-08-10T00:00:00.000Z",
      "num_market_pairs": 1,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x1cb3209d45b2a60b7fbca1ccdbf87f674237a4aa"
      },
      "cmc_rank": 82,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 747.440422543,
          "volume_24h": 91133.0488544003,
          "percent_change_1h": 0.0995027,
          "percent_change_24h": 1.37762,
          "percent_change_7d": -1.05174,
          "market_cap": 64792636.53853158,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 1903,
      "name": "HyperCash",
      "symbol": "HC",
      "slug": "hypercash",
      "circulating_supply": 43529780.865052,
      "total_supply": 43529780.865052,
      "max_supply": 84000000,
      "date_added": "2017-08-20T00:00:00.000Z",
      "num_market_pairs": 21,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 83,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.46012209455,
          "volume_24h": 1322881.01429227,
          "percent_change_1h": -0.526412,
          "percent_change_24h": -1.386,
          "percent_change_7d": -7.68932,
          "market_cap": 63558794.81198224,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1934,
      "name": "Loopring",
      "symbol": "LRC",
      "slug": "loopring",
      "circulating_supply": 828954239.778787,
      "total_supply": 1374955751.72106,
      "max_supply": null,
      "date_added": "2017-08-30T00:00:00.000Z",
      "num_market_pairs": 33,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xef68e7c694f40c8202821edf525de3782458639f"
      },
      "cmc_rank": 85,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.0756665963919,
          "volume_24h": 23870256.5182829,
          "percent_change_1h": -0.0246165,
          "percent_change_24h": -0.805311,
          "percent_change_7d": -19.9238,
          "market_cap": 62724145.88869578,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 3306,
      "name": "Gemini Dollar",
      "symbol": "GUSD",
      "slug": "gemini-dollar",
      "circulating_supply": 62206021.14,
      "total_supply": 62206021.14,
      "max_supply": null,
      "date_added": "2018-10-05T00:00:00.000Z",
      "num_market_pairs": 61,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd"
      },
      "cmc_rank": 86,
      "last_updated": "2019-04-15T14:54:08.000Z",
      "quote": {
        "USD": {
          "price": 1.00520093357,
          "volume_24h": 5154608.82923518,
          "percent_change_1h": 0.366471,
          "percent_change_24h": 0.301316,
          "percent_change_7d": 0.0977807,
          "market_cap": 62529550.52360316,
          "last_updated": "2019-04-15T14:54:08.000Z"
        }
      }
    },
    {
      "id": 3607,
      "name": "VestChain",
      "symbol": "VEST",
      "slug": "vestchain",
      "circulating_supply": 7078400000,
      "total_supply": 8848000000,
      "max_supply": null,
      "date_added": "2018-11-15T00:00:00.000Z",
      "num_market_pairs": 3,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x37f04d2c3ae075fad5483bb918491f656b12bdb6"
      },
      "cmc_rank": 84,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 0.00881076420125,
          "volume_24h": 270958.687162539,
          "percent_change_1h": 0.933979,
          "percent_change_24h": 0.374376,
          "percent_change_7d": -15.1056,
          "market_cap": 62366113.322128,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 291,
      "name": "MaidSafeCoin",
      "symbol": "MAID",
      "slug": "maidsafecoin",
      "circulating_supply": 452552412,
      "total_supply": 452552412,
      "max_supply": null,
      "date_added": "2014-04-28T00:00:00.000Z",
      "num_market_pairs": 6,
      "tags": [],
      "platform": {
        "id": 83,
        "name": "Omni",
        "symbol": "OMNI",
        "slug": "omni",
        "token_address": "3"
      },
      "cmc_rank": 87,
      "last_updated": "2019-04-15T14:54:01.000Z",
      "quote": {
        "USD": {
          "price": 0.137167898971,
          "volume_24h": 422623.830222361,
          "percent_change_1h": 0.206447,
          "percent_change_24h": 1.18538,
          "percent_change_7d": -7.21017,
          "market_cap": 62075663.52829837,
          "last_updated": "2019-04-15T14:54:01.000Z"
        }
      }
    },
    {
      "id": 2135,
      "name": "Revain",
      "symbol": "R",
      "slug": "revain",
      "circulating_supply": 484450000,
      "total_supply": 484450000,
      "max_supply": 484450000,
      "date_added": "2017-11-01T00:00:00.000Z",
      "num_market_pairs": 22,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x48f775efbe4f5ece6e0df2f7b5932df56823b990"
      },
      "cmc_rank": 89,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.127556916168,
          "volume_24h": 981816.887378511,
          "percent_change_1h": 0.222307,
          "percent_change_24h": 1.24966,
          "percent_change_7d": -16.0499,
          "market_cap": 61794948.0375876,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2092,
      "name": "NULS",
      "symbol": "NULS",
      "slug": "nuls",
      "circulating_supply": 69208761.1163485,
      "total_supply": 103803359.621466,
      "max_supply": null,
      "date_added": "2017-10-25T00:00:00.000Z",
      "num_market_pairs": 24,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 88,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.891716623633,
          "volume_24h": 100242066.920386,
          "percent_change_1h": -1.27858,
          "percent_change_24h": 8.8809,
          "percent_change_7d": -1.31847,
          "market_cap": 61714602.78849314,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 1908,
      "name": "Nebulas",
      "symbol": "NAS",
      "slug": "nebulas-token",
      "circulating_supply": 45500000,
      "total_supply": 100000000,
      "max_supply": 100000000,
      "date_added": "2017-08-23T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 90,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 1.34672853744,
          "volume_24h": 4500402.88752923,
          "percent_change_1h": 0.683891,
          "percent_change_24h": -3.9143,
          "percent_change_7d": 20.1912,
          "market_cap": 61276148.45352,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2492,
      "name": "Elastos",
      "symbol": "ELA",
      "slug": "elastos",
      "circulating_supply": 15186239.4995322,
      "total_supply": 34340649.1501011,
      "max_supply": null,
      "date_added": "2018-01-31T00:00:00.000Z",
      "num_market_pairs": 17,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 91,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 3.93337232388,
          "volume_24h": 2994119.64173097,
          "percent_change_1h": 0.799105,
          "percent_change_24h": 2.67911,
          "percent_change_7d": -7.87441,
          "market_cap": 59733134.15127322,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 1414,
      "name": "Zcoin",
      "symbol": "XZC",
      "slug": "zcoin",
      "circulating_supply": 7277330.32977799,
      "total_supply": 21400000,
      "max_supply": 21400000,
      "date_added": "2016-10-06T00:00:00.000Z",
      "num_market_pairs": 33,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 92,
      "last_updated": "2019-04-15T14:54:03.000Z",
      "quote": {
        "USD": {
          "price": 8.14437135346,
          "volume_24h": 692619.86646185,
          "percent_change_1h": -0.0477051,
          "percent_change_24h": 0.976509,
          "percent_change_7d": -6.59865,
          "market_cap": 59269280.667509474,
          "last_updated": "2019-04-15T14:54:03.000Z"
        }
      }
    },
    {
      "id": 1966,
      "name": "Decentraland",
      "symbol": "MANA",
      "slug": "decentraland",
      "circulating_supply": 1050141509.426,
      "total_supply": 2644403343.1583,
      "max_supply": null,
      "date_added": "2017-09-17T00:00:00.000Z",
      "num_market_pairs": 57,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942"
      },
      "cmc_rank": 93,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.0542365061309,
          "volume_24h": 5685058.8810148,
          "percent_change_1h": -2.86524,
          "percent_change_24h": -3.27606,
          "percent_change_7d": -7.70571,
          "market_cap": 56956006.41429583,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2457,
      "name": "TrueChain",
      "symbol": "TRUE",
      "slug": "truechain",
      "circulating_supply": 73999999.94,
      "total_supply": 100000000,
      "max_supply": null,
      "date_added": "2018-01-24T00:00:00.000Z",
      "num_market_pairs": 11,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xA4d17AB1eE0efDD23edc2869E7BA96B89eEcf9AB"
      },
      "cmc_rank": 94,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.768478306322,
          "volume_24h": 45016052.7853996,
          "percent_change_1h": 1.25416,
          "percent_change_24h": 4.09953,
          "percent_change_7d": 26.1189,
          "market_cap": 56867394.6217193,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 2062,
      "name": "Aion",
      "symbol": "AION",
      "slug": "aion",
      "circulating_supply": 300724162,
      "total_supply": 300724162,
      "max_supply": null,
      "date_added": "2017-10-18T00:00:00.000Z",
      "num_market_pairs": 23,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 95,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.18569390888,
          "volume_24h": 4799699.99343838,
          "percent_change_1h": 0.119957,
          "percent_change_24h": 0.526528,
          "percent_change_7d": -13.0983,
          "market_cap": 55842645.13644236,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    },
    {
      "id": 2588,
      "name": "Loom Network",
      "symbol": "LOOM",
      "slug": "loom-network",
      "circulating_supply": 779700517.543065,
      "total_supply": 1000000000,
      "max_supply": null,
      "date_added": "2018-03-14T00:00:00.000Z",
      "num_market_pairs": 51,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0"
      },
      "cmc_rank": 96,
      "last_updated": "2019-04-15T14:54:06.000Z",
      "quote": {
        "USD": {
          "price": 0.0711513526645,
          "volume_24h": 3126112.73200062,
          "percent_change_1h": -1.12307,
          "percent_change_24h": -0.328045,
          "percent_change_7d": -8.23597,
          "market_cap": 55476746.49639978,
          "last_updated": "2019-04-15T14:54:06.000Z"
        }
      }
    },
    {
      "id": 3657,
      "name": "Lambda",
      "symbol": "LAMB",
      "slug": "lambda",
      "circulating_supply": 500000000,
      "total_supply": 6000000000,
      "max_supply": 10000000000,
      "date_added": "2019-01-02T00:00:00.000Z",
      "num_market_pairs": 33,
      "tags": [],
      "platform": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "token_address": "0x8971f9fd7196e5cee2c1032b50f656855af7dd26"
      },
      "cmc_rank": 98,
      "last_updated": "2019-04-15T14:54:09.000Z",
      "quote": {
        "USD": {
          "price": 0.109368241509,
          "volume_24h": 16883334.3796589,
          "percent_change_1h": -0.974817,
          "percent_change_24h": 4.69733,
          "percent_change_7d": 106.221,
          "market_cap": 54684120.7545,
          "last_updated": "2019-04-15T14:54:09.000Z"
        }
      }
    },
    {
      "id": 1169,
      "name": "PIVX",
      "symbol": "PIVX",
      "slug": "pivx",
      "circulating_supply": 56781165.992094,
      "total_supply": 56781165.992094,
      "max_supply": null,
      "date_added": "2016-02-13T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [],
      "platform": null,
      "cmc_rank": 97,
      "last_updated": "2019-04-15T14:54:02.000Z",
      "quote": {
        "USD": {
          "price": 0.962449449148,
          "volume_24h": 1646395.52353897,
          "percent_change_1h": -1.95889,
          "percent_change_24h": 0.233969,
          "percent_change_7d": -6.26359,
          "market_cap": 54649001.93107203,
          "last_updated": "2019-04-15T14:54:02.000Z"
        }
      }
    },
    {
      "id": 2346,
      "name": "WaykiChain",
      "symbol": "WICC",
      "slug": "waykichain",
      "circulating_supply": 189000000,
      "total_supply": 210000000,
      "max_supply": null,
      "date_added": "2018-01-09T00:00:00.000Z",
      "num_market_pairs": 15,
      "tags": [],
      "platform": null,
      "cmc_rank": 99,
      "last_updated": "2019-04-15T14:54:05.000Z",
      "quote": {
        "USD": {
          "price": 0.285422413672,
          "volume_24h": 3736709.30482181,
          "percent_change_1h": 0.651231,
          "percent_change_24h": 0.00426512,
          "percent_change_7d": -3.46481,
          "market_cap": 53944836.184008,
          "last_updated": "2019-04-15T14:54:05.000Z"
        }
      }
    },
    {
      "id": 2137,
      "name": "Electroneum",
      "symbol": "ETN",
      "slug": "electroneum",
      "circulating_supply": 9281292914.87,
      "total_supply": 9281292914.87,
      "max_supply": 21000000000,
      "date_added": "2017-11-02T00:00:00.000Z",
      "num_market_pairs": 19,
      "tags": [
        "mineable"
      ],
      "platform": null,
      "cmc_rank": 100,
      "last_updated": "2019-04-15T14:54:04.000Z",
      "quote": {
        "USD": {
          "price": 0.00573230260137,
          "volume_24h": 211809.345534681,
          "percent_change_1h": -0.631742,
          "percent_change_24h": -1.43962,
          "percent_change_7d": -10.8215,
          "market_cap": 53203179.51998625,
          "last_updated": "2019-04-15T14:54:04.000Z"
        }
      }
    }
  ]
};    
  }
}
