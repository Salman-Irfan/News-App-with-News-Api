import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {

    static defaultProps = {
        country: "us",
        pageSize: 9,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    articles = [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin traders like their options - Reuters",
            "description": "Cryptoverse: Bitcoin traders like their options  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiXWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtYml0Y29pbi10cmFkZXJzLWxpa2UtdGhlaXItb3B0aW9ucy0yMDIzLTA0LTA0L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-04-04T05:18:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin, USDC stablecoin rally after US intervenes on SVB - Reuters.com",
            "description": "Bitcoin, USDC stablecoin rally after US intervenes on SVB  Reuters.com",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi11c2RjLXN0YWJsZWNvaW4tcmFsbHktYWZ0ZXItdXMtaW50ZXJ2ZW5lcy1zdmItMjAyMy0wMy0xMy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-13T00:55:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin steadies near lows hit after fall of Silvergate - Reuters.com",
            "description": "Bitcoin steadies near lows hit after fall of Silvergate  Reuters.com",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1zdGVhZGllcy1uZWFyLWxvd3MtaGl0LWFmdGVyLWZhbGwtc2lsdmVyZ2F0ZS0yMDIzLTAzLTA5L9IBAA?oc%3D5&gl=FR&hl=en-US&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-09T11:10:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin rises to highest level since June 2022 - Reuters",
            "description": "Bitcoin rises to highest level since June 2022  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9iaXRjb2luLXJpc2VzLWhpZ2hlc3QtbGV2ZWwtc2luY2UtanVuZS0yMDIyLTIwMjMtMDMtMTQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-14T13:22:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Carla Mozée",
            "title": "Michael Saylor's MicroStrategy adds to its bitcoin trove, purchasing 1,045 coins for $24 million",
            "description": "The business software maker now holds 140,000 bitcoin and the value of that stash was nearly $4 billion with bitcoin trading above $28,000.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-cryptocurrency-michael-saylor-coins-buys-holding-value-mstr-2023-4",
            "urlToImage": "https://i.insider.com/631133643fe7c40019e4f2fd?width=1200&format=jpeg",
            "publishedAt": "2023-04-05T16:47:03Z",
            "content": "Michael Saylor is facing a $100 million lawsuit for tax evasionMarco Bello/Getty Images\r\n<ul>\n<li>MicroStrategy continued to build its bitcoin stash in early April, buying 1,045 coins. </li>\n<li>It b… [+1587 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Bitcoin near 9-month high as bank turmoil sparks rally - Reuters.com",
            "description": "Bitcoin near 9-month high as bank turmoil sparks rally  Reuters.com",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9iaXRjb2luLW5lYXItOS1tb250aC1oaWdoLWJhbmstdHVybW9pbC1zcGFya3MtcmFsbHktMjAyMy0wMy0yMC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-20T06:52:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens - Reuters",
            "description": "Cryptoverse: Hooked on growth, bitcoin investors turn to smart tokens  Reuters",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMibGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvY3J5cHRvdmVyc2UtaG9va2VkLWdyb3d0aC1iaXRjb2luLWludmVzdG9ycy10dXJuLXNtYXJ0LXRva2Vucy0yMDIzLTAzLTA3L9IBAA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-07T06:16:00Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Bitcoin storms toward its strongest quarter in 2 years with a 72% jump, outperforming the Nasdaq and gold",
            "description": "The world's largest cryptocurrency is enjoying massive gains even though just a few months ago, some experts warned of a further crash.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-today-q1-nasdaq-gold-fed-rate-hikes-crypto-2023-3",
            "urlToImage": "https://i.insider.com/6424307ded593e00183f0aad?width=1200&format=jpeg",
            "publishedAt": "2023-03-29T13:10:39Z",
            "content": "Bitcoin has stormed to a 72% gain over the last three months and is on track for its strongest quarter in two years.\r\nThe token has outperformed both the Nasdaq 100 and gold, which are up 15% and 9%,… [+1167 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "Jeremy Siegel says bitcoin's rush higher will fizzle out once people trust banks again",
            "description": "",
            "url": "https://markets.businessinsider.com/news/currencies/jeremy-siegel-bitcoin-crypto-rally-will-fade-banking-crisis-2023-3",
            "urlToImage": "https://i.insider.com/52ed527cecad049a6d4ad89c?width=1200&format=jpeg",
            "publishedAt": "2023-03-22T13:38:59Z",
            "content": "Wharton professor Jeremy Siegel has weighed in on bitcoin's recent rally, spurred on by the recent banking crisis. \r\n\"My feeling is when people feel they're safe in the banks again, bitcoin will go b… [+1226 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "Bitcoin notches 9-month high after inflation data bolsters speculation of smaller rate hike",
            "description": "Bitcoin soared to $26,500 shortly after the CPI report was released, surging more than 15% to hit a multi-month high.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-inflation-data-cpi-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg",
            "publishedAt": "2023-03-14T15:32:23Z",
            "content": "Bitcoin jumped to a nearly nine-month high on Tuesday as traders mulled over key inflation data that could bolster odds the Federal Reserve will slow interest rate hikes. \r\nThe rally follows the rele… [+1992 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Bitcoin soars to a 9-month high after Credit Suisse takeover fails to calm banking fears",
            "description": "Fundstrat said bitcoin's outperformance is a testament to its \"outright resiliency\" when you consider the failures of Signature Bank and Silvergate.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-9-month-high-credit-suisse-ubs-bank-crisis-2023-3",
            "urlToImage": "https://i.insider.com/64185980718b5300194b17d2?width=1200&format=jpeg",
            "publishedAt": "2023-03-20T13:46:19Z",
            "content": "Bitcoin surged as much as 4% on Monday amid fears of an ongoing banking crisis that started with the downfall of Silicon Valley Bank earlier this month and has now led to the takeover of Credit Suiss… [+2301 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "insider@insider.com (Carla Mozée)",
            "title": "Bitcoin plunges under $20,000 to its lowest point in 2 months as Silvergate blow-up and bank fears rattle risk assets",
            "description": "Bitcoin is veering toward a weekly loss as a fresh pain point for the crypto sector emerged from the failure of crypto-friendly Silvergate Bank.",
            "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-20000-silvergate-ether-silicon-valley-bank-turmoil-markets-2023-3",
            "urlToImage": "https://i.insider.com/5d669bfb2e22af0e7c65d5e8?width=1200&format=jpeg",
            "publishedAt": "2023-03-10T16:22:49Z",
            "content": "Bitcoin slumped to its lowest price in two months Friday as the collapse of crypto depositor Silvergate Bank and the blow-up of tech startup lender Silicon Valley Bank fueled a retreat by investors f… [+2141 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Michael Saylor's MicroStrategy snaps up another 6,455 bitcoin as token rallies, bringing its total holdings to $3.88 billion",
            "description": "Saylor's software company also paid off the remaining principal on a $205 million loan from failed crypto-friendly bank Silvergate.",
            "url": "https://markets.businessinsider.com/news/currencies/microstrategy-bitcoin-crypto-markets-investing-finance-michael-saylor-silvergate-loan-2023-3",
            "urlToImage": "https://i.insider.com/624c4d26c4cd0500195a1381?width=1200&format=jpeg",
            "publishedAt": "2023-03-27T16:42:50Z",
            "content": "Michael Saylor's MicroStrategy bought 6,455 bitcoins over the last five weeks, according to a Friday SEC filing.\r\nThe purchases were made at an average price of about $23,238 per token, and totaled r… [+1307 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Morgan Chittum",
            "title": "Ethereum jumps to its highest price in 8 months ahead of highly anticipated network upgrade",
            "description": "Crypto markets have been on a tear despite murky macro conditions from the Fed's rate hikes and turmoil in the global banking sector.",
            "url": "https://markets.businessinsider.com/news/currencies/ethereum-price-crypto-market-outlook-shanghai-network-upgrade-bitcoin-eth-2023-4",
            "urlToImage": "https://i.insider.com/642c23e3fcb86b0018030c9f?width=1200&format=jpeg",
            "publishedAt": "2023-04-04T14:33:47Z",
            "content": "Ethereum's cryptocurrency ether rose 35% in March, Kraken said.Dado Ruvic/Reuters\r\n<ul>\n<li>Ethereum traded at a 24-hour high of $1,884, price levels not seen since August 2022.</li>\n<li>The Shanghai… [+2274 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks fall as investors brace for further impacts of Silicon Valley Bank's collapse",
            "description": "Goldman Sachs now expects the Fed to pause its rate hikes at next week's FOMC meeting as uncertainty related to the SVB's collapse soars.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-digest-silicon-valley-bank-collapse-2023-3",
            "urlToImage": "https://i.insider.com/6348425ff900fa001814c580?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T13:43:37Z",
            "content": "US stocks were lower on Monday after the Federal Reserve and US Treasury announced emergency measures to stop the spread of potential bank runs following the collapse of Silicon Valley Bank.\r\nThe mea… [+1210 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "htan@insider.com (Huileng Tan)",
            "title": "Asian shares open slightly lower, Bitcoin rallies after Switzerland's UBS seals deal to acquire Credit Suisse",
            "description": "Investors are still looking to the Federal Reserve's interest rate decision later this week for further cues.",
            "url": "https://markets.businessinsider.com/news/stocks/ubs-acquires-credit-suisse-bank-asian-shares-lower-bitcoin-crisis-2023-3",
            "urlToImage": "https://i.insider.com/6417b59ffa3bcb001907f1a8?width=1200&format=jpeg",
            "publishedAt": "2023-03-20T02:28:38Z",
            "content": "Asian shares are slightly lower early on Monday after Switzerland's UBS struck a deal to take over peer Credit Suisse. The deal values Credit Suisse at around $3.25 billion.\r\nThe development in Europ… [+1614 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "Bitcoin rises and crypto market tops $1 trillion again after US regulators bail out SVB customers",
            "description": "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-bitcoin-silicon-valley-bank-svb-customer-bailout-regulators-2023-3",
            "urlToImage": "https://i.insider.com/63cea91bb9a04b0019eda8e3?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T11:44:18Z",
            "content": "Bitcoin's price jumped in a broad-based rally for cryptocurrencies Monday, after US regulators stepped in to bail out customers with money in Silicon Valley Bank. \r\nCryptos were staging a comeback fr… [+1897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Dogecoin Jumps After Token's Symbol Replaces Blue Bird as Twitter Logo",
            "description": "Dogecoin (DOGE) rose 12% after the Shiba Inu symbol representing the token replaced the familiar blue bird atop the Twitter homepage. From a report: Elon Musk in the past has suggested the meme coin may offer better payments functionality than bitcoin.\n\n\n\n\n\n\r…",
            "url": "https://slashdot.org/story/23/04/03/182219/dogecoin-jumps-after-tokens-symbol-replaces-blue-bird-as-twitter-logo",
            "urlToImage": "https://a.fsdn.com/sd/topics/twitter_64.png",
            "publishedAt": "2023-04-03T18:02:00Z",
            "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
        },
        {
            "source": {
                "id": null,
                "name": "Boing Boing"
            },
            "author": "Mark Frauenfelder",
            "title": "How scammers are using AI voice cloning to trick victims into sending money",
            "description": "The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.\n\n\n\nOne example in the article is about the parents of a man named …",
            "url": "https://boingboing.net/2023/03/06/how-scammers-are-using-ai-voice-cloning-to-trick-victims-into-sending-money.html",
            "urlToImage": "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/03/clone.jpg?fit=1200%2C832&ssl=1",
            "publishedAt": "2023-03-06T18:53:31Z",
            "content": "The Washington Post reports that scammers are using high-quality AI-generated voice technology to impersonate loved ones and persuade victims that they are in distress and need money urgently.One exa… [+1269 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "Judge Lets AT&T Off the Hook for Crypto Investor SIM Swap Attack",
            "description": "One early crypto investor’s hopes to see a major telecom provider pay up for a 2017 crypto heist have been all but dashed. According to unsealed court documents filed last Thursday, the U.S. District Court for the Central District of California shared that AT…",
            "url": "https://gizmodo.com/at-t-crypto-hack-sim-card-ellis-pinsky-1850299709",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2d2e74d1994ed1e52cb6ff198f3a04a7.jpg",
            "publishedAt": "2023-04-04T20:10:00Z",
            "content": "One early crypto investors hopes to see a major telecom provider pay up for a 2017 crypto heist have been all but dashed. According to unsealed court documents filed last Thursday, the U.S. District … [+3124 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "DeFi Lender Euler Finance Hit By $197 Million Hack, Experts Say",
            "description": "Decentralized lending protocol Euler Finance was hit by an attack that drained $197 million in cryptocurrencies from its platform on Monday, making it the largest hack in its corner of the digital-assets market this year. From a report: The bulk of the hacker…",
            "url": "https://it.slashdot.org/story/23/03/13/161224/defi-lender-euler-finance-hit-by-197-million-hack-experts-say",
            "urlToImage": "https://a.fsdn.com/sd/topics/security_64.png",
            "publishedAt": "2023-03-13T16:01:00Z",
            "content": "The bulk of the hacker's loot -- worth roughly $135 million -- was denominated in staked Ether tokens (stETH), while the remainder was held in wrapped Bitcoin and stablecoins DAI and USDC, according … [+790 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks rise as bank shares rebound and CPI shows inflation continues to cool",
            "description": "Regional bank stocks surged Tuesday after cratering on SVB concerns a day earlier. Meanwhile, Moody's downgraded its outlook for the US banking sector.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-recession-dow-snaps-losing-streak-sp-2023-3",
            "urlToImage": "https://i.insider.com/63e2c1fd96242f0019e7d91e?width=1200&format=jpeg",
            "publishedAt": "2023-03-14T20:19:18Z",
            "content": "US stocks climbed Tuesday as traders focused on the latest inflation data and continued to assess the fallout from the collapse of Silicon Valley Bank. The Dow Jones Industrial Average closed in the … [+1816 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Morgan Chittum",
            "title": "Mike Novogratz says it's crypto's moment to shine as markets watch trillions of bad debt spark a global banking fiasco",
            "description": "Banks have been sitting on an \"orgy of debt,\" Galaxy CEO Mike Novogratz said, leaving customers exposed to financial losses.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-market-outlook-global-bank-crisis-mike-novogratz-galaxy-digital-2023-3",
            "urlToImage": "https://i.insider.com/6138995c2534ab0018534131?width=1200&format=jpeg",
            "publishedAt": "2023-03-31T16:00:06Z",
            "content": "Galaxy Digital CEO Mike Novogratz.Lucas Jackson/Reuters\r\n<ul>\n<li>As chaos rips through the banking sector, Mike Novogratz said the case for crypto is more prominent now.</li>\n<li>Banks have been sit… [+2346 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hackaday"
            },
            "author": "Jonathan Bennett",
            "title": "This Week in Security: USB Boom! Acropalypse, and a Bitcoin Heist",
            "description": "We’ve covered a lot of sketchy USB devices over the years. And surely you know by now, if you find a USB drive, don’t plug it in to your computer. There’s more that could go wrong…",
            "url": "https://hackaday.com/2023/03/24/this-week-in-security-usb-boom-acropalypse-and-a-bitcoin-heist/",
            "urlToImage": "https://hackaday.com/wp-content/uploads/2016/01/darkarts.jpg",
            "publishedAt": "2023-03-24T14:00:23Z",
            "content": "We’ve covered a lot of sketchy USB devices over the years. And surely you know by now, if you find a USB drive, don’t plug it in to your computer. There’s more that could go wrong than just a malicio… [+9006 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Thomas Eaton",
            "title": "Which songwriter was musical director for Marlene Dietrich? The Saturday quiz",
            "description": "From Jack Black to Hakuhō Shō, test your knowledge with the Saturday quiz1 Three-year-old Eliza Armstrong was the first patient at which hospital?2 What is the world’s largest trade book fair?3 Marduk was the chief god of which city?4 Which songwriter was mus…",
            "url": "https://www.theguardian.com/lifeandstyle/2023/mar/18/which-songwriter-was-musical-director-for-marlene-dietrich-the-saturday-quiz",
            "urlToImage": "https://i.guim.co.uk/img/media/ca52a7817ef6ed000332b0e99dd9036b7f6edc70/0_224_3626_2174/master/3626.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1c1aaf32499d029a262596f4d77fb73c",
            "publishedAt": "2023-03-18T07:00:06Z",
            "content": "The questions\r\n1 Three-year-old Eliza Armstrong was the first patient at which hospital?2 What is the worlds largest trade book fair?3 Marduk was the chief god of which city?4 Which songwriter was mu… [+1309 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "SVB Financial Goes Bankrupt - Bloomberg Television",
            "description": "<ol><li>SVB Financial Goes Bankrupt  Bloomberg Television\r\n</li><li>SVB Financial Group files for Chapter 11 bankruptcy protection  BNN Bloomberg\r\n</li><li>Parent of Silicon Valley Bank seeks bankruptcy protection - Business News  Castanet.net\r\n</li><li>SVB p…",
            "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CCAiC2J2b3Zub1QxXzZBmAEB?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
            "urlToImage": null,
            "publishedAt": "2023-03-17T18:06:30Z",
            "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Dan Milmo and agency",
            "title": "Crypto bank Silvergate announces liquidation amid sector turmoil",
            "description": "Wind-down and liquidation plan follows mass withdrawal of deposits after collapse of FTX exchange The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange…",
            "url": "https://www.theguardian.com/technology/2023/mar/09/crypto-bank-silvergate-liquidation-sector-turmoil-wind-down-ftx-exchange",
            "urlToImage": "https://i.guim.co.uk/img/media/80cbc9fe9d08482d4bd817d00996cb7931d1b177/0_0_3888_2333/master/3888.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b65d8993a2a83c39065eb43558101253",
            "publishedAt": "2023-03-09T14:45:15Z",
            "content": "The cryptocurrency-focused US lender Silvergate is to wind down its operations after it was hit by customer withdrawals following the collapse of crypto exchange FTX.\r\nThe California-based bank had w… [+3223 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks snap 4-day winning streak as job openings fall and JPMorgan boss warns of more bank turmoil",
            "description": "There are 1.7 job openings for every unemployed American looking for a job, down from a peak of 2.0 just a few months ago.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-job-opening-fall-suggesting-weaker-economy-2023-4",
            "urlToImage": "https://i.insider.com/642c767cd335200018dd9e63?width=1200&format=jpeg",
            "publishedAt": "2023-04-04T20:18:13Z",
            "content": "US stocks fell on Tuesday, ending a four-day win streak after new data hints at a slowing economy.\r\nJob openings in the US unexpectedly fell 632,000 to 9.93 million, representing the lowest level sin… [+1020 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mollywhite.net"
            },
            "author": "Molly White",
            "title": "No, Bitcoin isn’t pumping because it’s a “safe haven” from banks",
            "description": "There are more reasonable explanations for the price increase, and more than a few flaws with the \"safe haven\" narrative.",
            "url": "https://newsletter.mollywhite.net/p/no-bitcoin-isnt-pumping-because-its",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37c2d065-d293-4189-8162-d35974c4f4de_1218x745.png",
            "publishedAt": "2023-03-22T02:00:17Z",
            "content": "As Silvergate Bank, Silicon Valley Bank, and Signature Bank all collapsed in short succession, the price of Bitcoin surged.\r\nAs one group of insufferable multimillionaires was coming down from the pa… [+12038 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Eliza Bavin",
            "title": "Man has two more chances before $232M in Bitcoin is lost forever",
            "description": "After misplacing his digital wallet password, this man has only two more attempts before his millions are lost forever.",
            "url": "https://au.finance.yahoo.com/news/man-has-two-more-chances-before-232-million-is-lost-forever-222045101.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-07/8de88490-eda3-11eb-aefe-da5c70e019cd",
            "publishedAt": "2023-03-05T23:55:37Z",
            "content": "The German-born man has used eight of his 10 attempts to access his Bitcoin. (Source: Getty)\r\nBack when Bitcoin was worth only $5 a coin, Stefan Thomas was paid 7,002 of them for making a video expla… [+1554 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Kalyeena Makortoff Banking correspondent",
            "title": "City regulator joins Met in raids on suspected crypto ATM operations",
            "description": "Joint investigation with police in London follows similar one in Leeds as part of wider crackdown on sectorThe City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of …",
            "url": "https://www.theguardian.com/technology/2023/mar/08/city-regulator-met-raids-suspected-crypto-atm-operations-police-london-leeds-crackdown-fca",
            "urlToImage": "https://i.guim.co.uk/img/media/f2e32f3b1abdf154154e4d021b13facc51d838b5/0_0_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=84b77443e4ec015e06f4a4ef30c9b2f5",
            "publishedAt": "2023-03-08T12:22:28Z",
            "content": "The City watchdog and local police have raided several sites in east London suspected of housing illegal ATMs distributing cryptocurrencies, as part of a widening crackdown on the sector.\r\nThe joint … [+1974 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "The Associated Press",
            "title": "German investigators take down crypto money laundering site",
            "description": "German investigators say they have taken down a major online money laundering operation, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten cryptocurrency",
            "url": "https://abcnews.go.com/Business/wireStory/german-investigators-crypto-money-laundering-site-97880159",
            "urlToImage": "https://s.abcnews.com/images/US/abc_news_default_2000x2000_update_16x9_992.jpg",
            "publishedAt": "2023-03-15T15:08:50Z",
            "content": "BERLIN -- German investigators said they took down a major online money laundering operation on Wednesday, seizing the Germany-based server infrastructure of a platform that dealt in ill-gotten crypt… [+1285 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "US stocks rise as investors assess softer employment data and brace for key jobs report",
            "description": "Weekly jobless claims totaled 211,000, an increase of 21,000 from the previous week and ahead of estimates for 195,000.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-jobless-claims-jerome-powell-rate-hikes-2023-3",
            "urlToImage": "https://i.insider.com/61afa5886531110019cef403?width=1200&format=jpeg",
            "publishedAt": "2023-03-09T14:36:51Z",
            "content": "US stocks rose Thursday following higher-than-expected jobless claims data and ahead of Friday's key nonfarm payrolls report. \r\nInitial filings for unemployment clocked in at 211,000 last week, up by… [+860 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks climb as investors shake off bank concerns ahead of new economic data",
            "description": "Jobless claims on Thursday will give investors a sense of how strong the job market is, while PCE data on Friday will show what inflation is doing.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-shake-off-bank-contagion-fears-2023-3",
            "urlToImage": "https://i.insider.com/5f3ac652ea6ce0002839ac80?width=1200&format=jpeg",
            "publishedAt": "2023-03-29T20:08:54Z",
            "content": "US stocks surged on Wednesday as investors got more comfortable with the idea that the US banking system is not on the brink of a crisis following the collapse of Silicon Valley Bank.\r\nTechnology sto… [+1202 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks rise as traders assess jobs data and bet bank crisis has faded",
            "description": "Applications for US unemployment benefits ticked higher last week, but have stayed low in a still-tight labor market.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-fed-interest-rates-bonds-jobs-report-2023-3",
            "urlToImage": "https://i.insider.com/642584b9b643e80019df7933?width=1200&format=jpeg",
            "publishedAt": "2023-03-30T13:39:28Z",
            "content": "US stocks climbed on Thursday as traders mulled fresh jobs data and continued to move past concerns around the state of the banking sector following this month's string of bank failures. \r\nApplicatio… [+1037 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "jsor@insider.com (Jennifer Sor)",
            "title": "US stocks jump as investors prepare for interest rate decision from the Fed",
            "description": "The Fed is expected to address the banking turmoil and inflation when delivering its interest rate decision on Wednesday.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-fed-meeting-rates-banks-2023-03",
            "urlToImage": "https://i.insider.com/640f6c76f724e7001800caf6?width=1200&format=jpeg",
            "publishedAt": "2023-03-21T20:05:53Z",
            "content": "US stocks rose on Tuesday as investors prepared for the Fed's next interest rate decision while the bank sector rallied on prospects for more deposit insurance.\r\nCentral bankers began their two-day F… [+982 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks fall as bank worries linger after firms borrow $165 billion from Fed to shore up liquidity",
            "description": "The Federal Reserve lent $165 billion to US banks as they took advantage of their emergency backstop policies in a bid to shore up liquidity.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bank-worries-linger-fed-borrow-facility-2023-3",
            "urlToImage": "https://i.insider.com/639ccfcbb5600000185b2286?width=1200&format=jpeg",
            "publishedAt": "2023-03-17T13:38:31Z",
            "content": "US stocks edged lower on Friday as investors continued to worry about the current state of the US banking industry.\r\nThe Federal Reserve said late Thursday that it lent a combined $165 billion to var… [+1118 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "jsor@insider.com (Jennifer Sor)",
            "title": "US stocks climb as banking fears ease and investors focus on key Fed meeting",
            "description": "Regional bank stocks continued to recover after Treasury Secretary Janet Yellen said the government could protect customer deposits at smaller banks.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-fed-banking-fears-ease-2023-3",
            "urlToImage": "https://i.insider.com/5f3533deb4bb1c001df52fe2?width=1200&format=jpeg",
            "publishedAt": "2023-03-21T13:44:06Z",
            "content": "US stocks rose on Tuesday as banking fears eased and investors turned their attention to the Federal Open Markets Committee meeting. \r\nTreasury Secretary Janet Yellen said the government is ready to … [+1048 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks end higher in volatile session as traders assess rate outlook and bank concerns",
            "description": "Volatile trading on Thursday saw the S&P 500 erase a gain of nearly 2% as investors geared up for more comments from Treasury Secretary Janet Yellen.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-traders-assess-bank-concerns-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/640a33ef08f27b0018488f24?width=1200&format=jpeg",
            "publishedAt": "2023-03-23T20:04:27Z",
            "content": "US stocks suffered severe whiplash on Thursday as investors continued to digest the Federal Reserve's latest interest rate hike and fresh concerns of a US banking crisis.\r\nThe Fed hiked interest rate… [+1242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Elvis Gwaro",
            "title": "What Is the Bitcoin Liquid Sidechain and How Does It Work?",
            "description": "Bitcoin isn't fast enough, but the Bitcoin Liquid sidechain could be the resolution.",
            "url": "https://www.makeuseof.com/what-is-bitcoin-liquid-sidechain/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/person-wearing-glasses-with-bitcoin-lenses-feature.jpg",
            "publishedAt": "2023-03-27T13:45:16Z",
            "content": "One of the biggest issues facing Bitcoin is scalability and speed. Bitcoin's underlying technology isn't particularly fast and cannot process many transactions simultaneously. That's a problem for th… [+8512 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Elon Musk says there are similarities between the Silicon Valley Bank crisis and the 1929 Wall Street crash",
            "description": "\"Lot of current year similarities to 1929,\" Musk tweeted Tuesday in response to a thread by Ark Invest CIO Cathie Wood.",
            "url": "https://markets.businessinsider.com/news/stocks/elon-musk-stock-market-crash-svb-silicon-valley-bank-crisis-2023-3",
            "urlToImage": "https://i.insider.com/6411a389b6d9f200189125d9?width=1200&format=jpeg",
            "publishedAt": "2023-03-15T13:16:37Z",
            "content": "Elon Musk has warned that there are similarities between the collapse of Silicon Valley Bank last week and the crisis that sparked the 1929 Wall Street crash.\r\n\"Lot of current year similarities to 19… [+1660 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks shake off contagion fears to trade mixed amid hopes SVB crisis spurs Fed policy shift",
            "description": "\"We are looking at a historic 2-day drop in the 2-year yield, the largest since right after the 1987 crash,\" Carson Group's Ryan Detrick told Insider.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-regional-bank-contagion-fears-crisis-svb-2023-3",
            "urlToImage": "https://i.insider.com/624c427316e2c400196663ce?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T20:13:41Z",
            "content": "US stocks proved resilient on Monday, trading mixed despite the continued fallout from the collapse of Silicon Valley Bank and Signature Bank at the end of last week. \r\nHelping stocks recover from an… [+1297 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "The banking turmoil is a win for stocks as the Fed is opening the cash spigot, a top fund manager says",
            "description": "Chaos in the US banking system is actually a good thing for stocks because investors are pricing in Fed cash injections into the economy, Unlimited Funds' Bob Elliott said.",
            "url": "https://markets.businessinsider.com/news/stocks/us-stock-market-outlook-banking-turmoil-fed-liquidity-injection-2023-3",
            "urlToImage": "https://i.insider.com/635b0b3c6c9ef4001812f889?width=1200&format=jpeg",
            "publishedAt": "2023-03-27T15:33:05Z",
            "content": "The US banking turmoil is a win for stocks because it has prompted the Federal Reserve to pump more cash into the financial system, according to a top fund manager. \r\nIn a CNBC interview on Friday, B… [+1419 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks close higher as markets assess fresh bank woes and recession fears",
            "description": "Key government bond yields tumbled to six-month lows as traders wager the Fed is nearing the end of its tightening cycle.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-wall-street-bonds-bank-crisis-equities-2023-3",
            "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            "publishedAt": "2023-03-24T20:18:02Z",
            "content": "US stocks ended higher on Friday as investors rallied to end the day in the green, throwing off new banking fears out of Europe.\r\nAll three major indexes ended the day higher, capping off another tum… [+1407 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "XRP surges 10% on speculation the CFTC's Binance suit could impact the token developer's monumental SEC case",
            "description": "A win against the agency would be a big victory for Ripple, and would also offer some further clarity on future regulatory treatment for many tokens.",
            "url": "https://markets.businessinsider.com/news/currencies/xrp-price-crypto-ripple-sec-case-binance-lawsuit-cftc-news-2023-3",
            "urlToImage": "https://i.insider.com/60265f2e2edd0f001a8d5727?width=1200&format=jpeg",
            "publishedAt": "2023-03-29T15:35:04Z",
            "content": "XRP, the cryptocurrency issued by Ripple, is surging on rumors surrounding outcome of its long-running legal fight with the Securities and Exchange Commission. \r\nThe crypto is up 10% in the past 24 h… [+1581 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Tech rally leads US stocks higher as investors refocus on rates after bank fears recede",
            "description": "The market is expecting at least two interest rate cuts from the Federal Reserve by the end of this year following the banking crisis.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-tech-stocks-lead-interest-rates-outlook-2023-3",
            "urlToImage": "https://i.insider.com/5fecc995a644880018193e20?width=1200&format=jpeg",
            "publishedAt": "2023-03-29T13:39:53Z",
            "content": "US stocks surged on Wednesday, led by technology shares, as investors refocus away from the US banking crisis and towards the direction of interest rates through the rest of the year.\r\nFollowing the … [+1357 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "Cathie Wood's Ark Invest dumps $13.5 million of Coinbase stock as crypto exchange notches 7-month highs",
            "description": "The famed money manager now holds a 7% stake in Coinbase worth $837 million, after shares jumped 30% in the last week.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-picks-cathie-woods-ark-invest-coinbase-crypto-exchange-2023-3",
            "urlToImage": "https://i.insider.com/633c32e96427060019ef2f65?width=1200&format=jpeg",
            "publishedAt": "2023-03-22T14:03:06Z",
            "content": "Cathie Wood's Ark Invest sold $13.5 million worth of Coinbase stock, dumping 160,887 shares from the firm's Ark Fintech Innovation exchange-traded fund Tuesday.\r\nThe famed money manager now holds $83… [+1428 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks trade mixed as investors assess banking turmoil after UBS takeover of Credit Suisse",
            "description": "Regional bank shares remained under pressure as investors eye further contagion risk. First Republic stock fell after its credit rating was slashed again.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banking-crisis-ubs-credit-suisse-2023-3",
            "urlToImage": "https://i.insider.com/64185991718b5300194b17da?width=1200&format=jpeg",
            "publishedAt": "2023-03-20T13:48:31Z",
            "content": "US stocks were mostly higher on Monday following a takeover deal of Credit Suisse by UBS over the weekend in an effort to calm concerns of a global banking crisis. \r\nOn Sunday, UBS bought its smaller… [+1597 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Frances Yue",
            "title": "Crypto: Bitcoin falls after Fed chair Powell said interest rate cuts in 2023 are not likely",
            "description": "Bitcoin fell Wednesday as the Fed raised its key interest rate by a quarter of a percentage point, as widely expected, while the Fed chairman Jerome Powell said it’s “the most likely case” that the central bank would refrain from cutting its key interest rate…",
            "url": "https://www.marketwatch.com/story/bitcoin-falls-after-fed-chair-powell-said-interest-rate-cuts-in-2023-are-not-likely-b6001999",
            "urlToImage": "https://images.mktw.net/im-701580/social",
            "publishedAt": "2023-03-22T18:50:00Z",
            "content": "Bitcoin fell Wednesday after the Federal Reserve raised its key interest rate by a quarter of a percentage point, as widely expected, while the Fed chairman Jerome Powell said its the most likely cas… [+1339 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Substack.com"
            },
            "author": "Noah Smith",
            "title": "In which Balaji gives away at least a million dollars",
            "description": "Also, the dollar is not going to collapse.",
            "url": "https://noahpinion.substack.com/p/in-which-balaji-gives-away-at-least",
            "urlToImage": "https://substackcdn.com/image/fetch/w_1200,h_600,c_limit,f_jpg,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6c1453d0-cafc-44a4-aaec-b13f36c2431f_1200x720.jpeg",
            "publishedAt": "2023-03-20T16:49:00Z",
            "content": "Having known Balaji Srinivasan for more than half of my life, I can attest that he is a man of deeply held beliefs who is bold in his business dealings. Thus, if anyone I know was going to bet some p… [+2326 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Block.xyz"
            },
            "author": null,
            "title": "Block's Response to Inaccurate Short Seller Report",
            "description": "We intend to work with the SEC and explore legal action against Hindenburg Research for the factually inaccurate and misleading report they shared about our Cash App business today. Hindenburg is known for these types of attacks, which are designed solely to …",
            "url": "https://investors.block.xyz/news/news-details/2023/Blocks-Response-to-Inaccurate-Short-Seller-Report/default.aspx",
            "urlToImage": null,
            "publishedAt": "2023-03-23T17:34:45Z",
            "content": "DISTRIBUTED-WORK-MODEL/SAN FRANCISCO--(BUSINESS WIRE)-- \r\nWe intend to work with the SEC and explore legal action against Hindenburg Research for the factually inaccurate and misleading report they s… [+1284 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AppleInsider"
            },
            "author": "news@appleinsider.com (Wesley Hilliard)",
            "title": "Bitcoin whitepaper found hidden in macOS with unknown 'Virtual Scanner II' app",
            "description": "Satoshi Nakamoto's Bitcoin whitepaper can be found in any Mac running macOS Catalina or newer, but no one knows why.The Bitcoin whitepaper his hidden within macOSThere are a lot of hidden files on macOS that won't appear unless the user is performing a specif…",
            "url": "https://appleinsider.com/articles/23/04/05/bitcoin-whitepaper-found-hidden-in-macos-with-unknown-virtual-scanner-ii-app",
            "urlToImage": "https://photos5.appleinsider.com/gallery/53841-108287-bitcoin-xl.jpg",
            "publishedAt": "2023-04-05T23:03:29Z",
            "content": "The Bitcoin whitepaper his hidden within macOS\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nSatoshi Nakamoto's Bitcoin whitepaper can be found in any M… [+1839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mullvad.net"
            },
            "author": null,
            "title": "Mullvad campaign against EU chat control",
            "description": "Mullvad is a VPN service that helps keep your online activity, identity, and location private. Only €5/month - We accept Bitcoin, cash, bank wire, credit card, PayPal, and Swish.",
            "url": "https://mullvad.net/en/chatcontrol/campaign",
            "urlToImage": "https://mullvad.net/press/MullvadVPN_logo_Round_RGB_Color_positive.png",
            "publishedAt": "2023-03-10T14:25:48Z",
            "content": "A democratic society is built upon discussions, before law proposals become reality. We started the conversation on the streets of Sweden, during the countrys EU presidency."
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Top economist David Rosenberg said the Fed should put bigger rate hikes back on the table after bouts of 'speculative lunacy'",
            "description": "\"I am starting to wonder if 50 basis points shouldn't be back on the table,\" Rosenberg said, referring to the Fed's upcoming interest-rate decision.",
            "url": "https://markets.businessinsider.com/news/stocks/david-rosenberg-top-economist-stock-market-news-fed-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/641acdc4956507001988eb68?width=1200&format=jpeg",
            "publishedAt": "2023-03-22T11:54:12Z",
            "content": "The Federal Reserve should consider bringing in a bigger-than-expected rate hike Wednesday to crush a recent bout of speculation in markets, according to top economist David Rosenberg.\r\n\"After this r… [+1834 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Morgan Chittum",
            "title": "US stocks end mixed as soft jobs data revives fears of a looming recession",
            "description": "UBS Global Wealth Management's CIO said recession risks have increased. Meanwhile, the Nasdaq shed over 1%, while gold traded near all-time highs.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-inflation-recession-nasdaq-jobs-data-bonds-dow-2023-4",
            "urlToImage": "https://i.insider.com/642dcd432a659a0019a6910d?width=1200&format=jpeg",
            "publishedAt": "2023-04-05T20:13:52Z",
            "content": "Photo by TIMOTHY A. CLARY/AFP via Getty Images)\r\n<ul>\n<li>US stocks were mixed on Wednesday as traders digested weak jobs data. </li>\n<li>The Nasdaq Composite fell 1% as traders retreated on recessio… [+2401 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "gglover@insider.com (George Glover)",
            "title": "Crypto giant Tether faked key documents to set up bank accounts – and terrorists then used one of them to launder money, report says",
            "description": "Tether is a key player in crypto because it is the issuer of a dollar-pegged stablecoin with a $71 billion valuation.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-tether-stablecoin-issuer-money-laundering-turkish-terrorists-shell-companies-2023-3",
            "urlToImage": "https://i.insider.com/6405c031934c2c001802b4b2?width=1200&format=jpeg",
            "publishedAt": "2023-03-06T12:06:05Z",
            "content": "Crypto giant Tether used faked documents and shell companies to set up bank accounts in 2018  and one of those was then accessed by terrorists, according to a report.\r\nThe Wall Street Journal said Fr… [+2344 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mchittum@insider.com (Morgan Chittum)",
            "title": "US stocks jump as traders hope worst of banking crisis has passed",
            "description": "Morgan Stanley's top strategist said the fallout in the banking sector starts what's likely to be the \"vicious\" end to the bear market in stocks.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-bank-crisis-credit-suisse-ubs-svb-2023-3",
            "urlToImage": "https://i.insider.com/63dba59ee33c4000193aa450?width=1200&format=jpeg",
            "publishedAt": "2023-03-20T20:17:28Z",
            "content": "US stocks rallied on Monday as traders digested efforts to contain a banking crisis and braced for the next policy decision from Federal Open Market Committee meeting this week.\r\nOver the weekend, UB… [+2029 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "US stocks rise as fresh jobs data continues to show no sign of labor market weakness",
            "description": "The strength in the labor market continues even as high-profile tech companies like Amazon and Meta Platforms announce more deep job cuts.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-us-jobs-market-resilience-jobless-claims-2023-3",
            "urlToImage": "https://i.insider.com/641c4f0fb7834100191aeb53?width=1200&format=jpeg",
            "publishedAt": "2023-03-23T13:35:35Z",
            "content": "US stocks jumped on Thursday as the US labor market continued to show signs of remarkable resilience despite ongoing rate hikes from the Federal Reserve and a recent banking crisis.\r\nWeekly jobless c… [+2211 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Morgan Chittum",
            "title": "US stocks jump as traders put bank crisis behind them and brace for more inflation data",
            "description": "Investors are preparing for key market data on Friday that will help gauge inflationary pressures on the US economy.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-bank-crisis-sp500-nasdaq-inflation-recession-fed-2023-3",
            "urlToImage": "https://i.insider.com/62bad7662224c3001813f01e?width=1200&format=jpeg",
            "publishedAt": "2023-03-30T20:05:22Z",
            "content": "Traders on the floor of the New York Stock Exchange (NYSE)Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks marched higher on hopes that global banking turmoil has finally settled. </li>\n<li>The S&P 500… [+2387 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Jennifer Sor",
            "title": "Dow jumps 400 points to end tumultuous first quarter as markets move on from bank crisis",
            "description": "The S&P 500 and Nasdaq Composite saw a winning quarter, gaining 6% and 17%, respectively, since the start of the year.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-sp500-nasdaq-dow-bull-rally-q1-2023-3",
            "urlToImage": "https://i.insider.com/5e70c0d9c4854064de57e3f2?width=1200&format=jpeg",
            "publishedAt": "2023-03-31T20:07:43Z",
            "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York City, New York, U.S., March 10, 2020.Andrew Kelly/Reuters\r\n<ul>\n<li>US stocks jumped on Friday, ending the first quarter on… [+2374 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Matthew Fox",
            "title": "US stocks extend gains as volatility recedes amid softer rate forecasts",
            "description": "The VIX fell below 19 on Monday, marking its seventh consecutive daily decline as rate fears and banking jitters recede.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-volatility-drops-seventh-consecutive-day-vix-2023-4",
            "urlToImage": "https://i.insider.com/5f5792abe6ff30001d4e771f?width=1200&format=jpeg",
            "publishedAt": "2023-04-04T13:37:53Z",
            "content": "Traders work on the floor of the New York Stock Exchange shortly after the opening bell in New York, U.S., March 17, 2020.Lucas Jackson/Reuters\r\n<ul><li>US stocks extended their gains on Tuesday as m… [+2309 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Morgan Chittum",
            "title": "US stocks drop as traders digest jobs data that shows hiring slowed in March",
            "description": "The Federal Reserve's year-long campaign to cool down the economy may finally be weighing on the labor market.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-traders-jobs-data-inflation-recession-bonds-oil-2023-4",
            "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            "publishedAt": "2023-04-05T13:48:14Z",
            "content": "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks edge lower on Wednesday as traders worry about the direction of the overall economy.</li>\n<li>The S&P 500 and Dow Jones Industrial Average ended their fou… [+2125 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "An end to Fed rate hikes is just one reason why technology stocks are holding up amid the broader market chaos",
            "description": "The market now expects the Fed to cut interest rates by at least 100 basis points between now and the end of the year, according to the FedWatch Tool.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-analysis-end-fed-rate-hikes-technology-resilience-inflation-2023-3",
            "urlToImage": "https://i.insider.com/5fac4c2a7f8f4200182a65c2?width=1200&format=jpeg",
            "publishedAt": "2023-03-24T14:19:50Z",
            "content": "Despite a banking crisis that led to the biggest bank failure since 2008, technology stocks are doing just fine.\r\nSince Silicon Valley Bank was taken over by the FDIC on March 10, the technology sect… [+2158 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "Nvidia says crypto 'doesn't bring anything useful for society' as it turns its focus to artificial intelligence",
            "description": "\"They bought a lot of stuff, and then eventually it collapsed, because it doesn't bring anything useful for society,\" Nvidia's CTO said.",
            "url": "https://markets.businessinsider.com/news/stocks/nvidia-crypto-doesnt-bring-anything-useful-for-society-ai-focus-2023-3",
            "urlToImage": "https://i.insider.com/6421aec7b50c2900186414bc?width=1200&format=jpeg",
            "publishedAt": "2023-03-27T16:16:26Z",
            "content": "Nvidia is looking beyond crypto as it shifts its focus to artificial intelligence, according to a recent interview with Nvidia CTO Michael Kagan.\r\nCrypto miners feverishly bought GPUs from Nvidia dur… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "VentureBeat"
            },
            "author": "Dmitry Ivanov, CoinsPaid",
            "title": "Why this ‘winter’ won’t stop the growing crypto e-commerce adoption",
            "description": "From fast and inexpensive fees to secure transactions and a lack of chargebacks, crypto payments offer a multitude of benefits for retailers.",
            "url": "https://venturebeat.com/virtual/why-this-winter-wont-stop-the-growing-crypto-e-commerce-adoption/",
            "urlToImage": "https://venturebeat.com/wp-content/uploads/2018/02/crypto-2-e1619080181909.jpg?w=1200&strip=all",
            "publishedAt": "2023-03-15T20:07:00Z",
            "content": "From flight tickets, salaries, and tuition fees to Subway sandwiches and Elon Musks perfume these days you can use crypto to cover most of your everyday expenses. Microsoft, Google, Starbucks and num… [+6857 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Nick Wolny",
            "title": "Can You Write Off Crypto Losses on Your Taxes? - CNET",
            "description": "Capital losses can help you lower your taxable income, but only under certain circumstances.",
            "url": "https://www.cnet.com/personal-finance/taxes/crypto-loss-tax-tips/",
            "urlToImage": "https://www.cnet.com/a/img/resize/1515e0687dffcafe9a451aef43f0838ef8a1eae4/hub/2023/02/14/3d4a9a9c-1451-47f0-8198-42cd658157e9/cash-money-stack-100s-green-grid.png?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2023-03-10T01:48:31Z",
            "content": "This story is part of Taxes 2023, CNET's coverage of the best tax software, tax tips and everything else you need to file your return and track your refund. \r\nLet's just say 2022 wasn't the best year… [+7248 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "bnguyen@insider.com (Britney Nguyen)",
            "title": "A couple in Canada were reportedly scammed out of $21,000 after getting a call from an AI-generated voice pretending to be their son",
            "description": "The couple reportedly received a call from someone claiming to be a lawyer, saying their son was in jail for killing a diplomat in a car accident.",
            "url": "https://www.businessinsider.com/couple-canada-reportedly-lost-21000-in-ai-generated-voice-scam-2023-3",
            "urlToImage": "https://i.insider.com/64063842934c2c001802c680?width=1200&format=jpeg",
            "publishedAt": "2023-03-06T19:40:27Z",
            "content": "A couple in Canada were reportedly scammed out of $21,000 after they received a call from someone claiming to be a lawyer who said their son was in jail for killing a diplomat in a car accident.\r\nBen… [+3094 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "hbullock@insider.com (Hallam Bullock)",
            "title": "Signature Bank and Silicon Valley Bank's turmoil is what happens when easy money runs out - and this could be just the beginning",
            "description": "Insider's Phil Rosen breaks down the collapse of two banks in three days and what Wall Street experts are saying about the turmoil.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-signature-fed-inflation-monetary-policy-financial-markets-2023-3",
            "urlToImage": "https://i.insider.com/640ba50cd81e7e0018be117d?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T11:00:00Z",
            "content": "Phew. Hey there. Senior reporter Phil Rosen here. Before we jump into the newsletter, the Silicon Valley Bank saga is continuing to unfold, so let's quickly break down the latest.\r\nThe big story this… [+6426 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Carla Mozée",
            "title": "US stocks trade mixed as oil surges on unexpected production cut by OPEC+",
            "description": "The second quarter kicked off with an announcement by OPEC+ stating production cuts of 1.6 million a barrels a day would begin next month.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-oil-prices-opec-tech-nasdaq-dow-2023-4",
            "urlToImage": "https://i.insider.com/634992172f7a5a00185286f9?width=1200&format=jpeg",
            "publishedAt": "2023-04-03T13:39:54Z",
            "content": "Traders work on the New York Stock Exchange floor in New York City.AP Photo/Ted Shaffrey\r\n<ul>\n<li>US stocks were mixed Monday, with oil prices in focus. </li>\n<li>Yields rose with oil prices surging… [+2625 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@insider.com (Theron Mohamed)",
            "title": "'Big Short' investor Michael Burry says Jerome Powell should butt out and let markets set asset prices",
            "description": "Michael Burry called for Fed Chair Jerome Powell to stop sharing his thoughts and interfering in markets, suggesting that distorts asset prices.",
            "url": "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-fed-powell-asset-prices-interest-rates-2023-3",
            "urlToImage": "https://i.insider.com/64109b5f9aa2e6001956d8d4?width=1200&format=jpeg",
            "publishedAt": "2023-03-27T15:16:56Z",
            "content": "Jerome Powell should stop sharing his views and interfering in markets, Michael Burry has said.\r\n\"Powell should have just said 'I don't know,'\" the investor of \"The Big Short\" fame tweeted on Saturda… [+2983 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Carla Mozée",
            "title": "Block gave a 'robust' response to brutal short-seller report, and shares of the CashApp parent are looking at 40% upside, Bank of America says",
            "description": "Block stock could climb to $96 on fundamentals as well as the Cash App parent's response to Hindenburg Research's report, says BofA.",
            "url": "https://markets.businessinsider.com/news/stocks/cash-app-block-stock-price-outlook-short-seller-hindenburg-report-2023-3",
            "urlToImage": "https://i.insider.com/5df2ac22fd9db217471a1a66?width=1200&format=jpeg",
            "publishedAt": "2023-03-31T17:31:19Z",
            "content": "Square\r\n<ul>\n<li>Shares of Block could rise 40% from recent levels, Bank of America said Friday. </li>\n<li>Block gave a \"robust\" response to Hindenburg Research's report raising fraud concerns at the… [+2753 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Phil Rosen",
            "title": "US stocks climb on cooler inflation data as the S&P 500 heads for a winning quarter",
            "description": "The Fed's preferred inflation gauge came in cooler than expected on Friday, giving investors reason to cheer at the end of a chaotic first quarter.",
            "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-economy-winning-quarter-fed-rate-hikes-2023-3",
            "urlToImage": "https://i.insider.com/63b4716edb9ee80019386a2e?width=1200&format=jpeg",
            "publishedAt": "2023-03-31T13:36:40Z",
            "content": "Traders work on the floor at the New York Stock Exchange (NYSE) in New York, U.S., March 2, 2020.Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks climbed on Friday, with the S&P 500 and Nasdaq on pace fo… [+2881 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "mfox@businessinsider.com (Matthew Fox)",
            "title": "The SEC's recent moves against Coinbase and celebrity endorsers show the agency is getting serious about clamping down on crypto",
            "description": "The SEC said it's \"neutral about the technologies at issue\" but added it's \"anything but neutral when it comes to investor protection.\"",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-industry-sec-investigations-coinbase-lindsay-lohan-jake-paul-charges-2023-3",
            "urlToImage": "https://i.insider.com/641c5a87b7834100191aedd4?width=1200&format=jpeg",
            "publishedAt": "2023-03-23T15:21:53Z",
            "content": "A flurry of action in a single day this week show the Securities and Exchange Commission is getting serious about regulating the cryptocurrency industry. \r\nThe SEC charged Justin Son of Tron, BitTorr… [+3248 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DIYphotography"
            },
            "author": "Dunja Djudjic",
            "title": "Photographer builds 11-foot electronic waste skull to show Bitcoin’s impact on climate change",
            "description": "Photographer and activist Benjamin (Ben) Von Wong is well known for his work that raises awareness of various environmental and sociological issues. In his latest project Skull of Satoshi, Ben points out to the massive impact Bitcoin has had on climate change…",
            "url": "https://www.diyphotography.net/skull-of-satoshi-benjamin-von-wong-bitcoin/",
            "urlToImage": "https://www.diyphotography.net/wp-content/uploads/2023/03/VonWong_SkullOfSatoshi_Greenpeace_Bitcoin_Horizontal-5-1920x1280.jpg",
            "publishedAt": "2023-03-23T14:10:54Z",
            "content": "Photographer and activist Benjamin (Ben) Von Wong is well known for his work that raises awareness of various environmental and sociological issues. In his latest project Skull of Satoshi, Ben points… [+4627 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Katie Rees",
            "title": "$1.5 Million in Crypto Stolen via General Bytes Bitcoin ATM Hack",
            "description": "Hackers have stolen over $1.5 million in crypto from General Bytes ATMs.",
            "url": "https://www.makeuseof.com/1-5-million-in-crypto-stolen-general-bytes-bitcoin-atm-hack/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/yellow-bitcoin-atm.jpg",
            "publishedAt": "2023-03-21T09:12:22Z",
            "content": "Over $1.5 million in crypto has been stolen via a General Bytes Bitcoin ATM exploit. Hackers abused a zero-day flaw in order to steal the funds. \r\n General Bytes Bitcoin ATMs Have Been Hacked \r\nOn Ma… [+3094 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Space.com"
            },
            "author": "stingrayghost@gmail.com (Jeff Spry)",
            "title": "Launch of private moon rover this year will kick off lunar Bitcoin treasure hunt",
            "description": "LunarCrush plans to send a Bitcoin bounty to the moon aboard Lunar Outpost's MAPP rover in 2023.",
            "url": "https://www.space.com/bitcoin-treasure-hunt-moon-lunar-rover",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/kZhYcJ4CrE5eBgEk2Jt69D-1200-80.jpg",
            "publishedAt": "2023-04-03T13:00:49Z",
            "content": "Cryptocurrency is going to the moon.\r\nPartnering with the planetary mobility firm Lunar Outpost, the California-based social intelligence company LunarCrush plans to deliver a treasure chest of 62 Bi… [+3510 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Steve Goldstein",
            "title": ": Cathie Wood’s internet fund make its first Microsoft purchase",
            "description": "Cathie Wood on Monday bought a stock she doesn't trade very much -- Microsoft.",
            "url": "https://www.marketwatch.com/story/cathie-woods-internet-fund-make-its-first-microsoft-purchase-edafe7a",
            "urlToImage": "https://images.mktw.net/im-745473/social",
            "publishedAt": "2023-03-21T07:52:00Z",
            "content": "Cathie Wood on Monday bought a stock she doesnt trade very much Microsoft \r\n MSFT,\r\n -2.58%\r\n.The ARK Next Generation Internet ETF \r\n ARKW,\r\n -0.88%\r\nbought $11 million worth of Microsoft, selling th… [+720 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "PetaPixel"
            },
            "author": "Jeremy Gray",
            "title": "Von Wong’s Giant ‘Skull of Satoshi’ Aims to Expose Bitcoin’s Dangers",
            "description": "Benjamin Von Wong, acclaimed photographer, multimedia artist, and activist, built an 11-foot tall skull, the \"Skull of Satoshi,\" covered in electronic waste (E-waste) to \"expose Bitcoin's impact on climate change.\"\n[Read More]",
            "url": "https://petapixel.com/2023/03/23/von-wongs-giant-skull-of-satoshi-aims-to-expose-bitcoins-dangers/",
            "urlToImage": "https://petapixel.com/assets/uploads/2023/03/skull-of-satoshi-von-wong-featured.jpg",
            "publishedAt": "2023-03-23T16:20:11Z",
            "content": "Benjamin Von Wong, acclaimed photographer, multimedia artist, and activist, built an 11-foot tall skull, the “Skull of Satoshi,” covered in electronic waste (E-waste) to “expose Bitcoin’s impact on c… [+3386 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Theregister.com"
            },
            "author": "Jeff Burt",
            "title": "Attackers hit Bitcoin ATMs to steal $1.5 million in crypto cash",
            "description": "Terminal maker General Bytes shutters its cloud business after second breach in seven months\nUnidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.…<!…",
            "url": "https://www.theregister.com/2023/03/23/general_bytes_crypto_atm/",
            "urlToImage": "https://regmedia.co.uk/2019/10/21/shutterstock_bitcoin_atm.jpg",
            "publishedAt": "2023-03-23T09:02:06Z",
            "content": "Unidentified miscreants have siphoned cryptocurrency valued at more than $1.5 million from Bitcoin ATMs by exploiting an unknown flaw in digicash delivery systems.\r\nAccording to General Bytes, the ou… [+4494 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "David Lyangenda",
            "title": "8 Crowdfunding Platforms That Accept Crypto Payments",
            "description": "Many online platforms accept crypto as a payment method, but how about crowdfunding sites? Here are eight crowdfunding platforms that accept crypto.",
            "url": "https://www.makeuseof.com/crowdfunding-platforms-accept-crypto/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/hands-holding-various-cryptocurrency-coins.jpg",
            "publishedAt": "2023-03-31T12:30:17Z",
            "content": "Cryptocurrency has been gaining more and more popularity in recent years, not only as a form of investment but also as a means of payment for goods and services. Crowdfunding, on the other hand, has … [+10200 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Oluwademilade Afolabi",
            "title": "What Is Double Spending in Blockchain and How Is It Prevented?",
            "description": "Double spending can erode all trust in a cryptocurrency, which is why so much effort has gone into making sure this type of fraud doesn't happen.",
            "url": "https://www.makeuseof.com/what-is-double-spending-in-blockchain-and-how-is-it-prevented/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/blockchain-1.jpg",
            "publishedAt": "2023-03-24T14:00:17Z",
            "content": "Cryptocurrency transactions are secure and trustworthy thanks to blockchain technology. However, as with most innovative systems, the blockchain has exploitable vulnerabilities, which can lead to dou… [+7645 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MacRumors"
            },
            "author": "Tim Hardwick",
            "title": "Apple Has Included Bitcoin Whitepaper in Every Version of macOS Since 2018",
            "description": "In every copy of macOS that has shipped since 2018, Apple has included the original Bitcoin whitepaper by Satoshi Nakamoto. But why?\n\n\n\n\n\nThe baffling discovery (or rediscovery - see below) was recently made by developer and waxy.org writer Andy Baio, who stu…",
            "url": "https://www.macrumors.com/2023/04/06/macos-includes-bitcoin-whitepaper/",
            "urlToImage": "https://images.macrumors.com/t/20FlNNhHoggoDgosXqCzX6i29Do=/1920x/article-new/2020/07/apple-bitcoin-hack.jpg",
            "publishedAt": "2023-04-06T09:38:50Z",
            "content": "In every copy of macOS that has shipped since 2018, Apple has included the original Bitcoin whitepaper by Satoshi Nakamoto, but no-one seems to know why. \r\nThe baffling discovery (or rediscovery - se… [+1880 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marginalrevolution.com"
            },
            "author": "Alex Tabarrok",
            "title": "Balaji and White on the Banks",
            "description": "An excellent discussion between Balaji and my colleague Larry White. I don’t think Balaji is going to win his bet but he has been ahead of the crowd on the banking crisis. It’s now obvious, for example, that what was important about SVB was not Silicon Valley…",
            "url": "https://marginalrevolution.com/marginalrevolution/2023/04/balaji-and-white-on-the-banks.html",
            "urlToImage": "https://marginalrevolution.com/wp-content/uploads/2016/10/MR-logo-thumbnail.png",
            "publishedAt": "2023-04-02T11:25:20Z",
            "content": "An excellent discussion between Balaji and my colleague Larry White. I don’t think Balaji is going to win his bet but he has been ahead of the crowd on the banking crisis. It’s now obvious, for examp… [+636 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Bram Berkowitz)",
            "title": "Why Bitcoin, Ethereum, and Bitcoin Cash Are Surging This Week",
            "description": "Cryptocurrencies bucked the broader market this week and zoomed higher.",
            "url": "https://www.fool.com/investing/2023/03/16/why-bitcoin-ethereum-and-bitcoin-cash-are-surging/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724907/generic-upward-15.jpg",
            "publishedAt": "2023-03-16T18:15:28Z",
            "content": "What happened\r\nCryptocurrencies are having a banner week, despite chaos in the broader market, especially in the banking sector, which is likely due to the fact that many see cryptocurrencies as an a… [+2987 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Anders Bylund)",
            "title": "Why Bitcoin Miner Stocks Soared This Week",
            "description": "Bitcoin mining company stocks have soared this week, amplifying the gains of Bitcoin itself. Here's what's going on.",
            "url": "https://www.fool.com/investing/2023/03/17/why-bitcoin-miner-stocks-soared-this-week/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724983/assembling-bitcoin-mining-rig.jpeg",
            "publishedAt": "2023-03-17T11:00:00Z",
            "content": "What happened\r\nCryptocurrencies soared this week. According to data from S&amp;P Global Market Intelligence, Bitcoin(BTC 7.52%) led the way, with a 22.2% price gain from the stock market's closing be… [+3392 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Do Kwon: Fugitive crypto mogul believed caught in Montenegro",
            "description": "Police believe they have arrested Do Kwon, the crypto boss accused of a multibillion-dollar fraud.",
            "url": "https://www.bbc.co.uk/news/technology-65058533",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/13999/production/_126718208_25b317ef-e2a4-47d9-bff5-e14c1ef783c9.jpg",
            "publishedAt": "2023-03-23T19:24:17Z",
            "content": "Police in Montenegro say they have arrested a man who they believe is the fugitive crypto mogul Do Kwon.\r\nHe is wanted in connection with the collapse of his company Terraform, which is estimated to … [+1692 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "HYPEBEAST"
            },
            "author": "info@hypebeast.com (Hypebeast)",
            "title": "Linus Tech Tips YouTube Hacked by Crypto Scammers, Channel Deleted",
            "description": "Amidst a market full of shills, the world of cryptocurrency has seen a recent uptick in crypto scams as the concept of decentralized digital currency still remains new to many. Unexpectedly, the popular tech YouTube channel Linus Tech Tips was targeted by cry…",
            "url": "https://hypebeast.com/2023/3/linus-tech-tips-youtube-crypto-scammers-hack-channel-deleted-info",
            "urlToImage": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F03%2Flinus-tech-tips-youtube-crypto-scammers-hack-channel-deleted-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
            "publishedAt": "2023-03-24T02:53:34Z",
            "content": "Amidst a market full of shills, the world of cryptocurrency has seen a recent uptick in crypto scams as the concept of decentralized digital currency still remains new to many. Unexpectedly, the popu… [+1135 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ddefrancesco@businessinsider.com (Dan DeFrancesco)",
            "title": "The winners and losers of the Silicon Valley Bank failure",
            "description": "Silicon Valley Bank's failure set off waves of knock-on effects and also left a massive hole in the industry. Here's who is up and down as a result.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-failure-bailout-winners-losers-2023-3",
            "urlToImage": "https://i.insider.com/640c62ec8b8d9b0018cacdc3?width=1200&format=jpeg",
            "publishedAt": "2023-03-13T19:23:50Z",
            "content": "In times of crisis on Wall Street, one must ask: Who is winning, and who is losing?\r\nDepending on where you stand, the unfortunate/fortunate reality of finance is that it is a zero-sum game. When one… [+5497 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "madams@businessinsider.com (Max Adams)",
            "title": "The stock market is going to be trading flat as long as risk-free assets offer much more yield",
            "description": "The stock market doesn't have a lot going for it at the moment. Risk-free yields of around 5% aren't helping.",
            "url": "https://www.businessinsider.com/stock-market-returns-flat-cash-risk-free-bonds-yields-goldman-2023-3",
            "urlToImage": "https://i.insider.com/5f492f4260bf1f002807931d?width=1200&format=jpeg",
            "publishedAt": "2023-03-20T10:15:00Z",
            "content": "Good morning. I'm senior editor, Max Adams, standing in for Phil Rosen. \r\nIt's official:UBS will take over Credit Suisse in a historic deal. \r\nThe Swiss National Bank made the announcement Sunday, sa… [+5444 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "prosen@insider.com (Phil Rosen)",
            "title": "Silicon Valley Bank and inflation complicate the Fed’s next move",
            "description": "Insider's Phil Rosen explains how the latest CPI data and ongoing bank crisis impact the Fed's policy path.",
            "url": "https://www.businessinsider.com/silicon-valley-bank-inflation-cpi-fed-rate-hike-signature-crisis-2023-3",
            "urlToImage": "https://i.insider.com/63650f01ff27460018ed955a?width=1200&format=jpeg",
            "publishedAt": "2023-03-15T10:20:00Z",
            "content": "Howdy team. Senior reporter Phil Rosen here. \r\nEveryday now we've been talking about Silicon Valley Bank SVB and I've had to catch myself several times from saying SBF Sam Bankman-Fried the guy behin… [+5016 chars]"
        },
        {
            "source": {
                "id": "time",
                "name": "Time"
            },
            "author": "Allyson Versprille and Lydia Beyoud / Bloomberg",
            "title": "Lindsay Lohan, Soulja Boy Accused by SEC of Illegally Touting Crypto Token",
            "description": "The SEC said eight celebrities including Lindsay Lohan and the artist known as Soulja Boy illegally touted tokens.",
            "url": "https://time.com/6265382/lindsay-lohan-soulja-boy-crypto-sec/",
            "urlToImage": "https://api.time.com/wp-content/uploads/2023/03/GettyImages-1248249583.jpg?quality=85&w=810&h=579&crop=1",
            "publishedAt": "2023-03-22T21:56:19Z",
            "content": "The U.S. Securities and Exchange Commission sued crypto mogul Justin Sun for allegedly violating securities rules, and said eight celebrities including Lindsay Lohan and the artist known as Soulja Bo… [+3181 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Dominic Basulto)",
            "title": "What Do New Crypto Mining Taxes Mean For Bitcoin?",
            "description": "While Bitcoin miners would likely suffer from a new 30% tax on operations, the outlook is much more uncertain for the price of Bitcoin.",
            "url": "https://www.fool.com/investing/2023/03/14/what-do-new-crypto-mining-taxes-mean-for-bitcoin/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724432/bitcoin-hit-by-lightning-crypto.jpg",
            "publishedAt": "2023-03-14T09:13:00Z",
            "content": "In early March, the U.S. Treasury announced plans to impose a 30% tax on U.S.-based crypto mining operations. Moreover, the U.S. Treasury signaled that, moving forward, all crypto mining companies wi… [+5496 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Marginalrevolution.com"
            },
            "author": "Tyler Cowen",
            "title": "Not your grandfather’s crypto?",
            "description": "“Crypto prices soar on support for depositors” (FT) Bitcoin and ether jump 20% in the last three days after US authorities intervene I’ve said it before and I’ll say it again.  Crypto is a “luxury,” long-term financial intermediation project which may or may …",
            "url": "https://marginalrevolution.com/marginalrevolution/2023/03/not-your-grandfathers-crypto.html",
            "urlToImage": "https://marginalrevolution.com/wp-content/uploads/2016/10/MR-logo-thumbnail.png",
            "publishedAt": "2023-03-15T06:28:11Z",
            "content": "“Crypto prices soar on support for depositors” (FT)\r\nBitcoin and ether jump 20% in the last three days after US authorities intervene\r\nI’ve said it before and I’ll say it again.  Crypto is a “luxury,… [+210 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (David Moadel)",
            "title": "Do This Before Bitcoin Skyrockets",
            "description": "Just because an asset is already pricey doesn't mean it can't make a multibagger move.",
            "url": "https://www.fool.com/investing/2023/03/07/do-this-before-bitcoin-skyrockets/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/723217/btc-bitcoin-coin-cryptocurrency-crypto-digital-assets-cryptocurrencies-cryptos-electronic-currency.jpg",
            "publishedAt": "2023-03-07T18:49:00Z",
            "content": "Bracing for a crypto comeback? Consider buying the granddaddy of cryptocurrencies, Bitcoin (BTC -0.48%), if you're bullish on blockchain-based tokens generally. After all, crypto is already volatile … [+4155 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "MakeUseOf"
            },
            "author": "Adaeze Uche",
            "title": "How Can You Avoid Crypto Ponzi and Pyramid Schemes?",
            "description": "Heard of the classic Ponzi and pyramid schemes that scam you out of serious cash? There's now a cryptocurrency variation you need to know about...",
            "url": "https://www.makeuseof.com/how-to-avoid-crypto-ponzi-pyramid-schemes/",
            "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/crypto-ponzi-and-pyramid-scams.jpg",
            "publishedAt": "2023-04-03T18:00:17Z",
            "content": "Since the launch of Bitcoin (BTC) in 2009, cryptocurrencies have grown considerably and been adopted by the masses. However, the rise of digital assets has led to various scams, including Ponzi and p… [+8035 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Carly Wanna",
            "title": "Bitcoin Thrives in Chaos, Breaks Above $28,000 For First Time Since June",
            "description": "(Bloomberg) -- Turmoil in the banking sector, hotter-than expected inflation data, and renewed hopes for a dovish Federal Reserve has Bitcoin reaching levels...",
            "url": "https://finance.yahoo.com/news/bitcoin-thrives-chaos-breaks-above-181104262.html",
            "urlToImage": "https://media.zenfs.com/en/bloomberg_technology_68/6a26017e0a549b9427e8c31fe0740a11",
            "publishedAt": "2023-03-19T18:11:04Z",
            "content": "(Bloomberg) -- Turmoil in the banking sector, hotter-than expected inflation data, and renewed hopes for a dovish Federal Reserve has Bitcoin reaching levels not seen in about nine months.\r\nMost Read… [+2395 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (Leo Sun)",
            "title": "Where Will Marathon Digital Stock Be in 1 Year?",
            "description": "The Bitcoin mining company faces some near-term challenges.",
            "url": "https://www.fool.com/investing/2023/03/15/where-will-marathon-digital-stock-be-in-1-year/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/724692/bitcoin-tokens.jpg",
            "publishedAt": "2023-03-15T13:03:20Z",
            "content": "In late 2020, Marathon Digital(MARA 6.42%) transformed from a patent holding company into a Bitcoin(BTC -3.08%) mining one. It abandoned its original business model, poured all of its cash into Bitco… [+4766 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (RJ Fulton)",
            "title": "3 Reasons Bitcoin Might Have Thawed This Crypto Winter",
            "description": "As spring approaches, it seems Bitcoin is warming up, too.",
            "url": "https://www.fool.com/investing/2023/03/28/3-reasons-bitcoin-might-have-thawed-this-crypto-wi/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/725986/futuristic-rocketship-blasting-through-space-to-the-moon.jpg",
            "publishedAt": "2023-03-28T11:45:00Z",
            "content": "Bitcoin (BTC -3.61%), which is up more than 60% this year, just experienced its best week since December 2020. While stretches like this often lead investors to anticipate some sort of correction, th… [+2902 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Motley Fool"
            },
            "author": "newsfeedback@fool.com (RJ Fulton)",
            "title": "Is the Banking Fiasco a Boon for Bitcoin? Cathie Wood Thinks So",
            "description": "While banks stumbled, Bitcoin proved why it's a viable alternative.",
            "url": "https://www.fool.com/investing/2023/03/24/is-the-banking-fiasco-a-boon-for-bitcoin-cathie-wo/",
            "urlToImage": "https://g.foolcdn.com/editorial/images/725667/futuristic-rocketship-blasting-through-space-to-the-moon.jpg",
            "publishedAt": "2023-03-24T10:59:00Z",
            "content": "With the recent turmoil in the banking industry as a backdrop, Cathie Wood and her team at Ark Invest believe Bitcoin (BTC 1.69%) is displaying traits usually only seen in safe-haven assets such as g… [+3056 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "AndroidGuys"
            },
            "author": "AndroidGuys",
            "title": "Best Bitcoin casinos in the UK: Top crypto online casinos for UK players (Exclusive games & BTC bonuses)",
            "description": "Bitcoin is the safest way to fund your online casino account and the fastest option when it comes to withdrawals — one of the many reasons UK players prefer to play at Bitcoin casinos. But, before you join the very first crypto gambling site you come across, …",
            "url": "https://www.androidguys.com/promoted-news/best-bitcoin-casinos-uk/",
            "urlToImage": "https://www.androidguys.com/wp-content/uploads/2023/03/best-bitcoin-casino-uk-2.jpg",
            "publishedAt": "2023-03-24T13:00:00Z",
            "content": "Bitcoin is the safest way to fund your online casino account and the fastest option when it comes to withdrawals one of the many reasons UK players prefer to play at Bitcoin casinos.\r\nBut, before you… [+29445 chars]"
        }
    ]
    
    constructor(props) {
        super(props)
        console.log("i am a constructor from news component")
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `News App - ${this.props.category.charAt(0).toUpperCase()}${this.props.category.slice(1)}`
    }

    async updateNews(){
        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(30)
        let parsedData = await data.json()
        this.props.setProgress(70)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
        })
        this.props.setProgress(100)
    }

    async componentDidMount() {
        this.updateNews()
    }

    fetchMoreData = async() => {
        this.setState({
            page: this.state.page + 1,
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pageSize}`
        // this.setState({ loading: true })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>News App - Top {this.props.category.charAt(0).toUpperCase()}{this.props.category.slice(1)} Headlines </h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length < this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return (
                                    <div className="col-md-4" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 45) : ""}
                                            description={element.description ? element.description.slice(0, 80) : ""}
                                            imageUrl={element.urlToImage ? element.urlToImage : "https://i.insider.com/640f6c76f724e7001800caf6?width=1200&format=jpeg"}
                                            newsUrl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                
                </InfiniteScroll>
                
            </>
        )
    }
}

export default News
