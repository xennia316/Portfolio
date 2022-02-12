(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[1184],{23611:function(e,t,a){"use strict";var l=a(27378);function i(){return l.createElement("svg",{viewBox:"0 0 100 100",width:"25px"},l.createElement("polygon",{points:"-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196",style:{stroke:"var(--primary-color)",fill:"var(--primary-color)",strokeWidth:"1px"},transform:"matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"}))}i.displayName="Caret",t.Z=i},55092:function(e,t,a){"use strict";a(51116);var l=a(27378),i=a(39365);function r(e){var t=(0,i.$)().t;return l.createElement(l.Fragment,null,l.createElement("svg",Object.assign({"aria-label":t("icons.passed"),height:"50",viewBox:"0 0 200 200",width:"50",xmlns:"http://www.w3.org/2000/svg"},e),l.createElement("g",{"aria-hidden":"true"},l.createElement("title",null,t("icons.passed")),l.createElement("circle",{cx:"100",cy:"99",fill:"var(--primary-color)",r:"95",stroke:"var(--primary-color)",strokeDasharray:"null"}),l.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(-45, 120, 106.321)",width:"128.85878",x:"55.57059",y:"91.32089"}),l.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(45, 66.75, 123.75)",width:"80.66548",x:"26.41726",y:"108.75"}))))}r.displayName="GreenPass",t.Z=r},19614:function(e,t,a){"use strict";a.d(t,{Z:function(){return C}});var l=a(94647),i=a.n(l),r=a(4700),n=a.n(r),c=(a(51116),a(44786)),o=a.n(c),s=a(55866),d=a.n(s),u=a(27378),m=a(86295),p=a(8736),b=a(81897),g=a(6429),k=a(35646),f=a(34164),h=a.n(f),v=a(39365);function S(e){var t=(0,v.$)().t,a=e.show,l=e.onHide,i=e.deleteFunction;return u.createElement(h(),{"aria-labelledby":"modal-title",backdrop:!0,bsSize:"lg",className:"text-center",keyboard:!0,onHide:l,show:a},u.createElement(h().Header,{closeButton:!0},u.createElement(h().Title,{id:"modal-title"},t("webhook-token.delete-title"))),u.createElement(h().Body,null,u.createElement("p",null,t("webhook-token.delete-p2")),u.createElement("p",null,t("webhook-token.delete-p3")),u.createElement("hr",null),u.createElement(o(),{block:!0,bsSize:"lg",bsStyle:"primary",className:"btn-invert",onClick:e.onHide,type:"button"},t("webhook-token.no-thanks")),u.createElement(k.oS,null),u.createElement(o(),{block:!0,bsSize:"lg",bsStyle:"danger",className:"btn-danger",onClick:i,type:"button"},t("webhook-token.yes-please"))),u.createElement(h().Footer,null,u.createElement(o(),{onClick:e.onHide},t("buttons.close"))))}S.displayName="WebhookDeleteModal";var y=S,E=(0,b.P1)(g.mF,(function(e){return{webhookToken:e}})),w={postWebhookToken:g.yW,deleteWebhookToken:g.gk},B=function(e){function t(t){var a;return(a=e.call(this,t)||this).createToken=function(){a.props.postWebhookToken()},a.deleteToken=function(){a.props.deleteWebhookToken(),a.toggleWebhookDeleteModal()},a.toggleWebhookDeleteModal=function(){return a.setState((function(e){return Object.assign({},e,{webhookDeleteModal:!e.webhookDeleteModal})}))},a.state={webhookDeleteModal:!1},a.createToken=a.createToken.bind(i()(a)),a.deleteToken=a.deleteToken.bind(i()(a)),a}return n()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.isSuperBlockPage,l=void 0!==a&&a,i=t.t,r=t.webhookToken,n=void 0===r?null:r;return l?u.createElement(u.Fragment,null,!n&&u.createElement("div",{className:"alert alert-info"},u.createElement("p",null,i("webhook-token.create-p1")),u.createElement(k.LZ,null),u.createElement(o(),{block:!0,bsSize:"lg",onClick:function(){return e.createToken()},type:"button"},i("webhook-token.create")))):u.createElement("div",{className:"webhook-token text-center"},u.createElement(k.AV,null,u.createElement(d(),{className:"webhook-panel"},u.createElement(d().Heading,null,i("webhook-token.title")),u.createElement(k.LZ,null),n?u.createElement("p",null,i("webhook-token.delete-p1")):u.createElement("p",null,i("webhook-token.create-p2")),u.createElement(k.AV,null,u.createElement("input",{"aria-label":"Webhook token",className:"webhook-token-input",readOnly:!0,type:"text",value:n||""}),u.createElement(k.oS,null),n?u.createElement(o(),{block:!0,bsSize:"lg",bsStyle:"danger",className:"btn-info",onClick:function(){return e.toggleWebhookDeleteModal()},type:"button"},i("webhook-token.delete")):u.createElement(o(),{block:!0,bsSize:"lg",bsStyle:"danger",className:"btn-info",onClick:function(){return e.createToken()},type:"button"},i("webhook-token.create")),u.createElement(k.LZ,null))),u.createElement(y,{deleteFunction:function(){return e.deleteToken()},onHide:function(){return e.toggleWebhookDeleteModal()},show:this.state.webhookDeleteModal})))},t}(u.Component);B.displayName="WebhookToken";var C=(0,p.$j)(E,w)((0,m.Z)()(B))},13761:function(e,t,a){"use strict";a.d(t,{bc:function(){return v},uU:function(){return y},Tq:function(){return E}});a(58094),a(48383);var l=a(375),i=a(52066),r=i.showNewCurriculum,n=i.showUpcomingChanges,c="/learn/responsive-web-design/responsive-web-design-projects",o="/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects",s="/learn/front-end-development-libraries/front-end-development-libraries-projects",d="/learn/data-visualization/data-visualization-projects",u="/learn/relational-databases/learn-relational-databases",m="/learn/back-end-development-and-apis/back-end-development-and-apis-projects",p="/learn/quality-assurance/quality-assurance-projects",b="/learn/information-security/information-security-projects",g="/learn/scientific-computing-with-python/scientific-computing-with-python-projects",k="/learn/data-analysis-with-python/data-analysis-with-python-projects",f="/learn/machine-learning-with-python/machine-learning-with-python-projects",h="/learn/coding-interview-prep/take-home-projects",v=[{id:"561add10cb82ac38a17513be",title:"Legacy Front End",certSlug:"legacy-front-end",flag:"isFrontEndCert",projects:[{id:"bd7158d8c242eddfaeb5bd13",title:"Build a Personal Portfolio Webpage",link:c+"/build-a-personal-portfolio-webpage",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd13",title:"Build a Random Quote Machine",link:s+"/build-a-random-quote-machine",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd0f",title:"Build a 25 + 5 Clock",link:s+"/build-a-25--5-clock",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd17",title:"Build a JavaScript Calculator",link:s+"/build-a-javascript-calculator",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd10",title:"Show the Local Weather",link:h+"/show-the-local-weather",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd1f",title:"Use the TwitchTV JSON API",link:h+"/use-the-twitch-json-api",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd18",title:"Build a Tribute Page",link:c+"/build-a-tribute-page",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd19",title:"Build a Wikipedia Viewer",link:h+"/build-a-wikipedia-viewer",certSlug:"legacy-front-end"},{id:"bd7158d8c442eedfaeb5bd1c",title:"Build a Tic Tac Toe Game",link:h+"/build-a-tic-tac-toe-game",certSlug:"legacy-front-end"},{id:"bd7158d8c442eddfaeb5bd1c",title:"Build a Simon Game",link:h+"/build-a-simon-game",certSlug:"legacy-front-end"}]},{id:"660add10cb82ac38a17513be",title:"Legacy Back End",certSlug:"legacy-back-end",flag:"isBackEndCert",projects:[{id:"bd7158d8c443edefaeb5bdef",title:"Timestamp Microservice",link:m+"/timestamp-microservice",certSlug:"legacy-back-end"},{id:"bd7158d8c443edefaeb5bdff",title:"Request Header Parser Microservice",link:m+"/request-header-parser-microservice",certSlug:"legacy-back-end"},{id:"bd7158d8c443edefaeb5bd0e",title:"URL Shortener Microservice",link:m+"/url-shortener-microservice",certSlug:"legacy-back-end"},{id:"bd7158d8c443edefaeb5bdee",title:"Image Search Abstraction Layer",link:h+"/build-an-image-search-abstraction-layer",certSlug:"legacy-back-end"},{id:"bd7158d8c443edefaeb5bd0f",title:"File Metadata Microservice",link:m+"/file-metadata-microservice",certSlug:"legacy-back-end"},{id:"bd7158d8c443eddfaeb5bdef",title:"Build a Voting App",link:h+"/build-a-voting-app",certSlug:"legacy-back-end"},{id:"bd7158d8c443eddfaeb5bdff",title:"Build a Nightlife Coordination App",link:h+"/build-a-nightlife-coordination-app",certSlug:"legacy-back-end"},{id:"bd7158d8c443eddfaeb5bd0e",title:"Chart the Stock Market",link:h+"/chart-the-stock-market",certSlug:"legacy-back-end"},{id:"bd7158d8c443eddfaeb5bd0f",title:"Manage a Book Trading Club",link:h+"/manage-a-book-trading-club",certSlug:"legacy-back-end"},{id:"bd7158d8c443eddfaeb5bdee",title:"Build a Pinterest Clone",link:h+"/build-a-pinterest-clone",certSlug:"legacy-back-end"}]},{id:"561add10cb82ac38a17213bd",title:"Legacy Full Stack",certSlug:"full-stack",flag:"isFullStackCert"},{id:"561add10cb82ac39a17513bc",title:"Legacy Data Visualization",certSlug:"legacy-data-visualization",flag:"isDataVisCert",projects:[{id:"bd7157d8c242eddfaeb5bd13",title:"Build a Markdown Previewer",link:"/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer",certSlug:"legacy-data-visualization"},{id:"bd7156d8c242eddfaeb5bd13",title:"Build a freeCodeCamp Forum Homepage",link:h+"/build-a-freecodecamp-forum-homepage",certSlug:"legacy-data-visualization"},{id:"bd7155d8c242eddfaeb5bd13",title:"Build a Recipe Box",link:h+"/build-a-recipe-box",certSlug:"legacy-data-visualization"},{id:"bd7154d8c242eddfaeb5bd13",title:"Build the Game of Life",link:h+"/build-the-game-of-life",certSlug:"legacy-data-visualization"},{id:"bd7153d8c242eddfaeb5bd13",title:"Build a Roguelike Dungeon Crawler Game",link:h+"/build-a-roguelike-dungeon-crawler-game",certSlug:"legacy-data-visualization"},{id:"bd7168d8c242eddfaeb5bd13",title:"Visualize Data with a Bar Chart",link:d+"/visualize-data-with-a-bar-chart",certSlug:"legacy-data-visualization"},{id:"bd7178d8c242eddfaeb5bd13",title:"Visualize Data with a Scatterplot Graph",link:d+"/visualize-data-with-a-scatterplot-graph",certSlug:"legacy-data-visualization"},{id:"bd7188d8c242eddfaeb5bd13",title:"Visualize Data with a Heat Map",link:d+"/visualize-data-with-a-heat-map",certSlug:"legacy-data-visualization"},{id:"bd7198d8c242eddfaeb5bd13",title:"Show National Contiguity with a Force Directed Graph",link:h+"/show-national-contiguity-with-a-force-directed-graph",certSlug:"legacy-data-visualization"},{id:"bd7108d8c242eddfaeb5bd13",title:"Map Data Across the Globe",link:h+"/map-data-across-the-globe",certSlug:"legacy-data-visualization"}]},{id:"561add10cb82ac38a17213bc",title:"Legacy Information Security and Quality Assurance",certSlug:"information-security-and-quality-assurance",flag:"isInfosecQaCert",projects:[{id:"587d8249367417b2b2512c41",title:"Metric-Imperial Converter",link:p+"/metric-imperial-converter",certSlug:"information-security-and-quality-assurance"},{id:"587d8249367417b2b2512c42",title:"Issue Tracker",link:p+"/issue-tracker",certSlug:"information-security-and-quality-assurance"},{id:"587d824a367417b2b2512c43",title:"Personal Library",link:p+"/personal-library",certSlug:"information-security-and-quality-assurance"},{id:"587d824a367417b2b2512c44",title:"Stock Price Checker",link:b+"/stock-price-checker",certSlug:"information-security-and-quality-assurance"},{id:"587d824a367417b2b2512c45",title:"Anonymous Message Board",link:b+"/anonymous-message-board",certSlug:"information-security-and-quality-assurance"}]},{id:"561add10cb82ac38a17513bc",title:"Responsive Web Design",certSlug:l.SuperBlocks.RespWebDesign,flag:"isRespWebDesignCert",projects:[{id:"587d78af367417b2b2512b03",title:"Build a Survey Form",link:S("build-a-survey-form",{showNewCurriculum:r}),certSlug:l.SuperBlocks.RespWebDesign},{id:"bd7158d8c442eddfaeb5bd18",title:"Build a Tribute Page",link:S("build-a-tribute-page",{showNewCurriculum:r}),certSlug:l.SuperBlocks.RespWebDesign},{id:"587d78b0367417b2b2512b05",title:"Build a Technical Documentation Page",link:S("build-a-technical-documentation-page",{showNewCurriculum:r}),certSlug:l.SuperBlocks.RespWebDesign},{id:"587d78af367417b2b2512b04",title:"Build a Product Landing Page",link:S("build-a-product-landing-page",{showNewCurriculum:r}),certSlug:l.SuperBlocks.RespWebDesign},{id:"bd7158d8c242eddfaeb5bd13",title:"Build a Personal Portfolio Webpage",link:S("build-a-personal-portfolio-webpage",{showNewCurriculum:r}),certSlug:l.SuperBlocks.RespWebDesign}]},{id:"561abd10cb81ac38a17513bc",title:"JavaScript Algorithms and Data Structures",certSlug:l.SuperBlocks.JsAlgoDataStruct,flag:"isJsAlgoDataStructCert",projects:[{id:"aaa48de84e1ecc7c742e1124",title:"Palindrome Checker",link:o+"/palindrome-checker",certSlug:l.SuperBlocks.JsAlgoDataStruct},{id:"a7f4d8f2483413a6ce226cac",title:"Roman Numeral Converter",link:o+"/roman-numeral-converter",certSlug:l.SuperBlocks.JsAlgoDataStruct},{id:"56533eb9ac21ba0edf2244e2",title:"Caesars Cipher",link:o+"/caesars-cipher",certSlug:l.SuperBlocks.JsAlgoDataStruct},{id:"aff0395860f5d3034dc0bfc9",title:"Telephone Number Validator",link:o+"/telephone-number-validator",certSlug:l.SuperBlocks.JsAlgoDataStruct},{id:"aa2e6f85cab2ab736c9a9b24",title:"Cash Register",link:o+"/cash-register",certSlug:l.SuperBlocks.JsAlgoDataStruct}]},{id:"561acd10cb82ac38a17513bc",title:"Front End Development Libraries",certSlug:l.SuperBlocks.FrontEndDevLibs,flag:"isFrontEndLibsCert",projects:[{id:"bd7158d8c442eddfaeb5bd13",title:"Build a Random Quote Machine",link:s+"/build-a-random-quote-machine",certSlug:l.SuperBlocks.FrontEndDevLibs},{id:"bd7157d8c242eddfaeb5bd13",title:"Build a Markdown Previewer",link:s+"/build-a-markdown-previewer",certSlug:l.SuperBlocks.FrontEndDevLibs},{id:"587d7dbc367417b2b2512bae",title:"Build a Drum Machine",link:s+"/build-a-drum-machine",certSlug:l.SuperBlocks.FrontEndDevLibs},{id:"bd7158d8c442eddfaeb5bd17",title:"Build a JavaScript Calculator",link:s+"/build-a-javascript-calculator",certSlug:l.SuperBlocks.FrontEndDevLibs},{id:"bd7158d8c442eddfaeb5bd0f",title:"Build a 25 + 5 Clock",link:s+"/build-a-25--5-clock",certSlug:l.SuperBlocks.FrontEndDevLibs}]},{id:"5a553ca864b52e1d8bceea14",title:"Data Visualization",certSlug:l.SuperBlocks.DataVis,flag:"is2018DataVisCert",projects:[{id:"bd7168d8c242eddfaeb5bd13",title:"Visualize Data with a Bar Chart",link:d+"/visualize-data-with-a-bar-chart",certSlug:l.SuperBlocks.DataVis},{id:"bd7178d8c242eddfaeb5bd13",title:"Visualize Data with a Scatterplot Graph",link:d+"/visualize-data-with-a-scatterplot-graph",certSlug:l.SuperBlocks.DataVis},{id:"bd7188d8c242eddfaeb5bd13",title:"Visualize Data with a Heat Map",link:d+"/visualize-data-with-a-heat-map",certSlug:l.SuperBlocks.DataVis},{id:"587d7fa6367417b2b2512bbf",title:"Visualize Data with a Choropleth Map",link:d+"/visualize-data-with-a-choropleth-map",certSlug:l.SuperBlocks.DataVis},{id:"587d7fa6367417b2b2512bc0",title:"Visualize Data with a Treemap Diagram",link:d+"/visualize-data-with-a-treemap-diagram",certSlug:l.SuperBlocks.DataVis}]},{id:"606243f50267e718b1e755f4",title:"Relational Databases",certSlug:l.SuperBlocks.RelationalDb,flag:"isRelationalDatabasesCert",projects:[{id:"5f1a4ef5d5d6b5ab580fc6ae",title:"Celestial Bodies Database",link:u+"/celestial-bodies-database",superBlock:l.SuperBlocks.RelationalDb},{id:"5f87ac112ae598023a42df1a",title:"Salon Appointment Scheduler",link:u+"/salon-appointment-scheduler",superBlock:l.SuperBlocks.RelationalDb},{id:"5f9771307d4d22b9d2b75a94",title:"World Cup Database",link:u+"/world-cup-database",superBlock:l.SuperBlocks.RelationalDb},{id:"602d9ff222201c65d2a019f2",title:"Periodic Table Database",link:u+"/periodic-table-database",superBlock:l.SuperBlocks.RelationalDb},{id:"602da04c22201c65d2a019f4",title:"Number Guessing Game",link:u+"/number-guessing-game",superBlock:l.SuperBlocks.RelationalDb}]},{id:"561add10cb82ac38a17523bc",title:"Back End Development and APIs",certSlug:l.SuperBlocks.BackEndDevApis,flag:"isApisMicroservicesCert",projects:[{id:"bd7158d8c443edefaeb5bdef",title:"Timestamp Microservice",link:m+"/timestamp-microservice",certSlug:l.SuperBlocks.BackEndDevApis},{id:"bd7158d8c443edefaeb5bdff",title:"Request Header Parser Microservice",link:m+"/request-header-parser-microservice",certSlug:l.SuperBlocks.BackEndDevApis},{id:"bd7158d8c443edefaeb5bd0e",title:"URL Shortener Microservice",link:m+"/url-shortener-microservice",certSlug:l.SuperBlocks.BackEndDevApis},{id:"5a8b073d06fa14fcfde687aa",title:"Exercise Tracker",link:m+"/exercise-tracker",certSlug:l.SuperBlocks.BackEndDevApis},{id:"bd7158d8c443edefaeb5bd0f",title:"File Metadata Microservice",link:m+"/file-metadata-microservice",certSlug:l.SuperBlocks.BackEndDevApis}]},{id:"5e611829481575a52dc59c0e",title:"Quality Assurance",certSlug:"quality-assurance-v7",flag:"isQaCertV7",projects:[{id:"587d8249367417b2b2512c41",title:"Metric-Imperial Converter",link:p+"/metric-imperial-converter",certSlug:"quality-assurance-v7"},{id:"587d8249367417b2b2512c42",title:"Issue Tracker",link:p+"/issue-tracker",certSlug:"quality-assurance-v7"},{id:"587d824a367417b2b2512c43",title:"Personal Library",link:p+"/personal-library",certSlug:"quality-assurance-v7"},{id:"5e601bf95ac9d0ecd8b94afd",title:"Sudoku Solver",link:p+"/sudoku-solver",certSlug:"quality-assurance-v7"},{id:"5e601c0d5ac9d0ecd8b94afe",title:"American British Translator",link:p+"/american-british-translator",certSlug:"quality-assurance-v7"}]},{id:"5e44431b903586ffb414c951",title:"Scientific Computing with Python",certSlug:"scientific-computing-with-python-v7",flag:"isSciCompPyCertV7",projects:[{id:"5e44412c903586ffb414c94c",title:"Arithmetic Formatter",link:g+"/arithmetic-formatter",certSlug:"scientific-computing-with-python-v7"},{id:"5e444136903586ffb414c94d",title:"Time Calculator",link:g+"/time-calculator",certSlug:"scientific-computing-with-python-v7"},{id:"5e44413e903586ffb414c94e",title:"Budget App",link:g+"/budget-app",certSlug:"scientific-computing-with-python-v7"},{id:"5e444147903586ffb414c94f",title:"Polygon Area Calculator",link:g+"/polygon-area-calculator",certSlug:"scientific-computing-with-python-v7"},{id:"5e44414f903586ffb414c950",title:"Probability Calculator",link:g+"/probability-calculator",certSlug:"scientific-computing-with-python-v7"}]},{id:"5e46fc95ac417301a38fb934",title:"Data Analysis with Python",certSlug:"data-analysis-with-python-v7",flag:"isDataAnalysisPyCertV7",projects:[{id:"5e46f7e5ac417301a38fb928",title:"Mean-Variance-Standard Deviation Calculator",link:k+"/mean-variance-standard-deviation-calculator",certSlug:"data-analysis-with-python-v7"},{id:"5e46f7e5ac417301a38fb929",title:"Demographic Data Analyzer",link:k+"/demographic-data-analyzer",certSlug:"data-analysis-with-python-v7"},{id:"5e46f7f8ac417301a38fb92a",title:"Medical Data Visualizer",link:k+"/medical-data-visualizer",certSlug:"data-analysis-with-python-v7"},{id:"5e46f802ac417301a38fb92b",title:"Page View Time Series Visualizer",link:k+"/page-view-time-series-visualizer",certSlug:"data-analysis-with-python-v7"},{id:"5e4f5c4b570f7e3a4949899f",title:"Sea Level Predictor",link:k+"/sea-level-predictor",certSlug:"data-analysis-with-python-v7"}]},{id:"5e6021435ac9d0ecd8b94b00",title:"Information Security",certSlug:"information-security-v7",flag:"isInfosecCertV7",projects:[{id:"587d824a367417b2b2512c44",title:"Stock Price Checker",link:b+"/stock-price-checker",certSlug:"information-security-v7"},{id:"587d824a367417b2b2512c45",title:"Anonymous Message Board",link:b+"/anonymous-message-board",certSlug:"information-security-v7"},{id:"5e46f979ac417301a38fb932",title:"Port Scanner",link:b+"/port-scanner",certSlug:"information-security-v7"},{id:"5e46f983ac417301a38fb933",title:"SHA-1 Password Cracker",link:b+"/sha-1-password-cracker",certSlug:"information-security-v7"},{id:"5e601c775ac9d0ecd8b94aff",title:"Secure Real Time Multiplayer Game",link:b+"/secure-real-time-multiplayer-game",certSlug:"information-security-v7"}]},{id:"5e46fc95ac417301a38fb935",title:"Machine Learning with Python",certSlug:"machine-learning-with-python-v7",flag:"isMachineLearningPyCertV7",projects:[{id:"5e46f8d6ac417301a38fb92d",title:"Rock Paper Scissors",link:f+"/rock-paper-scissors",certSlug:"machine-learning-with-python-v7"},{id:"5e46f8dcac417301a38fb92e",title:"Cat and Dog Image Classifier",link:f+"/cat-and-dog-image-classifier",certSlug:"machine-learning-with-python-v7"},{id:"5e46f8e3ac417301a38fb92f",title:"Book Recommendation Engine using KNN",link:f+"/book-recommendation-engine-using-knn",certSlug:"machine-learning-with-python-v7"},{id:"5e46f8edac417301a38fb930",title:"Linear Regression Health Costs Calculator",link:f+"/linear-regression-health-costs-calculator",certSlug:"machine-learning-with-python-v7"},{id:"5e46f8edac417301a38fb931",title:"Neural Network SMS Text Classifier",link:f+"/neural-network-sms-text-classifier",certSlug:"machine-learning-with-python-v7"}]}];function S(e,t){return t.showNewCurriculum&&n?"/learn/2022/responsive-web-design/"+e+"-project/"+e:c+"/"+e+"/"}v.map((function(e){return e.title}));var y={},E={};v.forEach((function(e){"Legacy Full Stack"!==e.title&&(e.title.startsWith("Legacy")?y[e.title]=e.projects:e.title.startsWith("Relational")||(E[e.title]=e.projects))}))},52202:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return ye}});var l=a(42429);var i=function(e){return e&&e.length?(0,l.Z)(e):[]},r=(a(20711),a(40703),a(58094),a(8890),a(54404)),n=a.n(r),c=a(82200),o=a.n(c),s=a(77529),d=a.n(s),u=a(27378),m=a(47326),p=a(86295),b=a(8736),g=a(27391),k=a(33140),f=a(81897),h=a(375),v=a(9442),S=a(55617),y=a(17671),E=a(35646),w=a(19614),B=a(6429),C=a(94647),N=a.n(C),D=a(4700),x=a.n(D),j=(a(51116),a(52066)),P=a(95832),T=a(23611),L=a(39365);function M(e){var t=(0,L.$)().t;return u.createElement(u.Fragment,null,u.createElement("span",{className:"sr-only"},t("icons.not-passed")),u.createElement("svg",Object.assign({height:"50",viewBox:"0 0 200 200",width:"50",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("g",null,u.createElement("title",null,t("icons.not-passed")),u.createElement("circle",{cx:"100",cy:"99",fill:"var(--primary-background)",r:"95",stroke:"var(--primary-color)",strokeDasharray:"null",strokeWidth:"10"}))))}M.displayName="GreenNotCompleted";var z=M,R=a(55092),A=a(92103),Z=a(15713),W=a(25414),F={height:"15px",marginRight:"10px",width:"15px"};function V(e){var t=e.challengesWithCompleted,a=e.executeGA,l=e.isProjectBlock,i=e.superBlock,r=function(e){return a({type:"event",data:{category:"Map Challenge Click",action:e}})},n=function(e){return e?u.createElement(R.Z,{style:F}):u.createElement(z,{style:F})};return i===h.SuperBlocks.RespWebDesignNew?u.createElement("ul",{className:"map-challenges-ul map-challenges-grid "},t.map((function(e,t){return u.createElement("li",{className:"map-challenge-title map-challenge-title-grid "+(l?"map-project-wrap":"map-challenge-wrap"),id:e.dashedName,key:"map-challenge "+e.fields.slug},l?u.createElement(W.Link,{onClick:function(){return r(e.fields.slug)},to:e.fields.slug},e.title,u.createElement("span",{className:" badge map-badge map-project-checkmark"},n(e.isCompleted))):u.createElement(W.Link,{onClick:function(){return r(e.fields.slug)},to:e.fields.slug,className:"map-grid-item "+(e.isCompleted?"challenge-completed":"")},t+1))}))):u.createElement("ul",{className:"map-challenges-ul"},t.map((function(e){return u.createElement("li",{className:"map-challenge-title "+(l?"map-project-wrap":"map-challenge-wrap"),id:e.dashedName,key:"map-challenge"+e.fields.slug},l?u.createElement(W.Link,{onClick:function(){return r(e.fields.slug)},to:e.fields.slug},e.title,u.createElement("span",{className:"badge map-badge map-project-checkmark"},n(e.isCompleted))):u.createElement(W.Link,{onClick:function(){return r(e.fields.slug)},to:e.fields.slug},u.createElement("span",{className:"badge map-badge"},n(e.isCompleted)),e.title))})))}V.displayName="Challenges";var I=(0,b.$j)(null,(function(e){return(0,k.DE)({executeGA:B.pQ},e)}))((0,p.Z)()(V)),q=j.curriculumLocale,H={height:"15px",marginRight:"10px",width:"15px"},G=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleBlockClick=a.handleBlockClick.bind(N()(a)),a}x()(t,e);var a=t.prototype;return a.handleBlockClick=function(){var e=this.props,t=e.blockDashedName,a=e.toggleBlock,l=e.executeGA;(0,A.v)("block-toggle"),l({type:"event",data:{category:"Map Block Click",action:t}}),a(t)},a.renderCheckMark=function(e){return e?u.createElement(R.Z,{style:H}):u.createElement(z,{style:H})},a.renderBlockIntros=function(e){return u.createElement("div",{className:"block-description"},e.map((function(e,t){return u.createElement("p",{dangerouslySetInnerHTML:{__html:e},key:t})})))},a.render=function(){var e=this,t=this.props,a=t.blockDashedName,l=t.completedChallengeIds,i=t.challenges,r=t.isExpanded,n=t.superBlock,c=t.t,o=0,s=i.map((function(e){var t=e.challenge,a=t.id,i=l.some((function(e){return e===a}));return i&&o++,Object.assign({},t,{isCompleted:i})})),d=i.some((function(e){var t=e.challenge,l=10===t.order&&5===t.challengeType,i=3===t.challengeType||4===t.challengeType||10===t.challengeType,r="take-home-projects"===a;return l&&!r||i&&!r})),m=c("intro:"+n+".blocks."+a),p=m?m.title:null,b=m?m.intro:[],k=c("intro:misc-text"),f=k.expand,h=k.collapse;return d?u.createElement(g.ZP,{id:a},u.createElement("div",{className:"block"},u.createElement("div",{className:"block-title-wrapper"},u.createElement("a",{className:"block-link",href:"#"+a},u.createElement("h3",{className:"big-block-title"},p,u.createElement("span",{className:"block-link-icon"},"#"))),!(0,P.h)(q,n)&&u.createElement("div",{className:"block-cta-wrapper"},u.createElement(E.rU,{className:"block-title-translation-cta",to:c("links:help-translate-link-url")},c("misc.translation-pending")))),this.renderBlockIntros(b),u.createElement(I,{challengesWithCompleted:s,isProjectBlock:d,superBlock:n}))):u.createElement(g.ZP,{id:a},u.createElement("div",{className:"block "+(r?"open":"")},u.createElement("div",{className:"block-title-wrapper"},u.createElement("a",{className:"block-link",href:"#"+a},u.createElement("h3",{className:"big-block-title"},p,u.createElement("span",{className:"block-link-icon"},"#"))),!(0,P.h)(q,n)&&u.createElement("div",{className:"block-cta-wrapper"},u.createElement(E.rU,{className:"block-title-translation-cta",to:c("links:help-translate-link-url")},c("misc.translation-pending")))),this.renderBlockIntros(b),u.createElement("button",{"aria-expanded":r,className:"map-title",onClick:function(){e.handleBlockClick()}},u.createElement(T.Z,null),u.createElement("h4",{className:"course-title"},""+(r?h:f)),u.createElement("div",{className:"map-title-completed course-title"},this.renderCheckMark(o===s.length),u.createElement("span",{className:"map-completed-count"},o+"/"+s.length))),r&&u.createElement(I,{challengesWithCompleted:s,isProjectBlock:d,superBlock:n})))},t}(u.Component);G.displayName="Block";var O=(0,b.$j)((function(e,t){var a=(0,Z.RP)(t.blockDashedName);return(0,f.P1)(a,B.Fx,(function(e,t){return{isExpanded:e,completedChallengeIds:t.map((function(e){return e.id}))}}))(e)}),(function(e){return(0,k.DE)({toggleBlock:Z.th,executeGA:B.pQ},e)}))((0,p.Z)()(G)),$=a(11504),J=a.n($),Q=(a(4196),a(66694),a(57135)),U=a.n(Q),_=a(44786),K=a.n(_),X=a(24303),Y=a(11846),ee=a(32335),te=a(78096),ae=a(13761),le=a(50513),ie={height:"15px",marginRight:"10px",width:"15px"},re=function(e){var t=e.isProjectsCompleted,a=e.i18nCertText,l=e.steps,i=e.superBlock,r=(0,L.$)().t,n=function(e){return e?u.createElement(R.Z,{style:ie}):u.createElement(z,{style:ie})},c="/settings#privacy-settings",o=l.isHonest,s=void 0!==o&&o,d=l.isShowName,m=void 0!==d&&d,p=l.isShowCerts,b=void 0!==p&&p,g=l.isShowProfile,k=void 0!==g&&g;return u.createElement("ul",{className:"map-challenges-ul","data-cy":"claim-cert-steps"},u.createElement("li",{className:"map-challenge-title map-challenge-wrap"},u.createElement(W.Link,{to:"/settings#honesty-policy"},u.createElement("span",{className:"badge map-badge"},n(s)),r("certification-card.accept-honesty"))),u.createElement("li",{className:"map-challenge-title map-challenge-wrap"},u.createElement("a",{href:"#"+i+"-projects"},u.createElement("span",{className:"badge map-badge"},n(t)),r("certification-card.complete-project",{i18nCertText:a}))),u.createElement("li",{className:"map-challenge-title map-challenge-wrap"},u.createElement(W.Link,{to:c},u.createElement("span",{className:"badge map-badge"},n(k)),r("certification-card.set-profile-public"))),u.createElement("li",{className:"map-challenge-title map-challenge-wrap"},u.createElement(W.Link,{to:c},u.createElement("span",{className:"badge map-badge"},n(b)),r("certification-card.set-certs-public"))),u.createElement("li",{className:"map-challenge-title map-challenge-wrap"},u.createElement(W.Link,{to:c},u.createElement("span",{className:"badge map-badge"},n(m)),r("certification-card.set-name"))))};re.displayName="ClaimCertSteps";var ne=(0,p.Z)()(re),ce={height:"15px",marginRight:"10px",width:"15px"},oe=function(e){var t=e.isProjectsCompleted,a=e.superBlock,l=e.i18nCertText,i=e.stepState,r=i.completedCount,n=i.numberOfSteps,c=e.steps,o=(0,L.$)().t,s=(0,u.useState)(!0),d=s[0],m=s[1],p=o("intro:misc-text"),b=p.expand,k=p.collapse;return u.createElement(g.ZP,{id:"claim-cert-block"},u.createElement("div",{className:"block "+(d?"open":"")},u.createElement("div",{className:"block-title-wrapper"},u.createElement("a",{className:"block-link",href:"#claim-cert-block"},u.createElement("h3",{className:"big-block-title"},o("certification-card.title"),u.createElement("span",{className:"block-link-icon"},"#")))),u.createElement("div",{className:"block-description"},o("certification-card.intro",{i18nCertText:l})),u.createElement("button",{"aria-expanded":d,className:"map-title",onClick:function(){m(!d)}},u.createElement(T.Z,null),u.createElement("h4",{className:"course-title"},""+(d?k:b)),u.createElement("div",{className:"map-title-completed course-title"},r===n?u.createElement(R.Z,{style:ce}):u.createElement(z,{style:ce}),u.createElement("span",{className:"map-completed-count"},r+"/"+n))),d&&u.createElement(ne,{i18nCertText:l,isProjectsCompleted:t,steps:c,superBlock:a})))};oe.displayName="CertStatus";var se=oe,de={type:"info",message:ee.b.HonestFirst},ue={createFlashMessage:Y.eW,verifyCert:te.cu},me=function(e){var t=e.certification,a=e.createFlashMessage,l=e.steps,i=void 0===l?{}:l,r=e.superBlock,n=e.t,c=e.verifyCert,o=e.title,s=e.fetchState,d=e.isSignedIn,m=e.user,p=m.isHonest,b=m.username,g=(0,u.useState)(!1),k=g[0],f=g[1],v=(0,u.useState)(""),S=v[0],y=v[1],E=(0,u.useState)(!1),w=E[0],B=E[1],C=(0,u.useState)(!1),N=C[0],D=C[1],x=(0,u.useState)(!1),j=x[0],P=x[1],T=(0,u.useState)({numberOfSteps:0,completedCount:0}),L=T[0],M=T[1],z=(0,u.useState)(!1),R=z[0],A=z[1],Z=(0,u.useState)(!1),W=Z[0],F=Z[1];(0,u.useEffect)((function(){b&&J()(U().mark((function e(){var l,i,r,n,c;return U().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,le.Do)(b,t);case 3:null!=(l=e.sent)&&l.message?(f(!1),a(l.message)):(r=null==l||null===(i=l.response)||void 0===i?void 0:i.message,n=r.status,c=r.result,f(n),y(c)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),a({type:"danger",message:ee.b.ReallyWeird});case 11:return e.prev=11,P(!0),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,7,11,14]])})))()}),[b]);var V=ae.bc.find((function(e){return e.title===o})).certSlug;(0,u.useEffect)((function(){var e=s.pending;s.complete&&!e&&D(!0)}),[s]);var I=h.certSlugTypeMap,q=h.superBlockCertTypeMap;(0,u.useEffect)((function(){var e,t,a;B(null!==(e=null==i||null===(t=i.currentCerts)||void 0===t||null===(a=t.find((function(e){return I[e.certSlug]===q[r]})))||void 0===a?void 0:a.show)&&void 0!==e&&e);var l=k||"projects-completed"===S,n=l?1:0,c=Object.values(i).filter((function(e){return"boolean"==typeof e&&e})).length+n,o=Object.keys(i).length;A(c===o),M({numberOfSteps:o,completedCount:c}),F(l)}),[i,k,S]);var H="/certification/"+b+"/"+V,G=n("intro:"+r+".title"),O=n("intro:misc-text.certification",{cert:G}),$=N&&d&&(!w||!R&&j);return u.createElement("div",{className:"block"},$&&u.createElement(se,{i18nCertText:O,isProjectsCompleted:W,steps:i,stepState:L,superBlock:r}),u.createElement(u.Fragment,null,d&&u.createElement(K(),{block:!0,bsStyle:"primary",className:"cert-btn",disabled:!k||w&&!R,href:H,onClick:function(e){return function(t){return t.preventDefault(),w?(0,X.c4)(H):p?c(e):a(de)}}(V)},n(w&&N?"buttons.show-cert":"buttons.claim-cert"))))};me.displayName="CertChallenge";var pe=(0,b.$j)((function(e){return(0,f.P1)(B.yP,B.nl,B.Qi,(function(e,t,a){return{steps:e,fetchState:t,isSignedIn:a}}))(e)}),ue)((0,p.Z)()(me)),be=a(95764),ge=a.n(be);var ke=function(e){var t=e.superBlock,a=(0,L.$)().t;return u.createElement(u.Fragment,null,t===h.SuperBlocks.RespWebDesignNew&&u.createElement(ge(),{bsStyle:"info"},u.createElement("p",null,a("intro:misc-text.viewing-upcoming-change")," ",u.createElement(E.rU,{sameTab:!1,to:"/learn/responsive-web-design"},a("intro:misc-text.go-back-to-learn")))))},fe=a(90476);function he(e){var t=(0,L.$)().t,a=e.superBlock,l=t("intro:"+a),i=l.title,r=l.intro,n=l.note;return u.createElement(u.Fragment,null,u.createElement("h1",{className:"text-center big-heading"},i),u.createElement(E.LZ,null),(0,fe.U)(a,"cert-header-icon"),u.createElement(E.LZ,null),r.map((function(e,t){return u.createElement("p",{key:t},e)})),n&&u.createElement("div",{className:"alert alert-info",style:{marginTop:"2rem"}},n))}he.displayName="SuperBlockIntro";var ve=he;(0,g.XK)({offset:-40,scrollDuration:0});var Se=function(e){(0,u.useEffect)((function(){return t(),e.tryToShowDonationModal(),setTimeout((function(){(0,g.XK)({offset:-40,scrollDuration:400})}),0),function(){(0,g.XK)({offset:-40,scrollDuration:0})}}),[]);var t=function(){var t=e.resetExpansion,a=e.toggleBlock;return t(),a(function(){var t=e.data.allChallengeNode.edges,a=e.isSignedIn,l=e.currentChallengeId,i=e.location;if(i.state&&"object"==typeof i.state&&Object.prototype.hasOwnProperty.call(i.state,"breadcrumbBlockClick"))return i.state.breadcrumbBlockClick;if(i.hash)return i.hash.replace("#","").replace("/","");var r=t[0];if(a){var n=t.find((function(e){return e.node.challenge.id===l}));return n?n.node.challenge.block:r.node.challenge.block}return r.node.challenge.block}())},a=e.data,l=a.markdownRemark.frontmatter,r=l.superBlock,c=l.title,s=l.certification,p=a.allChallengeNode.edges,b=e.isSignedIn,k=e.signInLoading,f=e.t,B=e.user,C=p.map((function(e){return e.node})),N=i(C.map((function(e){return e.challenge.block}))),D=f("intro:"+r+".title"),x=r===h.SuperBlocks.CodingInterviewPrep?D:f("intro:misc-text.certification",{cert:D}),j=N;return u.createElement(u.Fragment,null,u.createElement(m.Z,null,u.createElement("title",null,x," | freeCodeCamp.org")),u.createElement(n(),null,u.createElement(o(),{className:"super-block-intro-page"},u.createElement(d(),{md:8,mdOffset:2,sm:10,smOffset:1,xs:12},u.createElement(E.LZ,{size:2}),u.createElement(ke,{superBlock:r}),u.createElement(ve,{superBlock:r}),r===h.SuperBlocks.RelationalDb&&b&&u.createElement(w.Z,{isSuperBlockPage:!0}),u.createElement(E.LZ,{size:2}),u.createElement("h2",{className:"text-center big-subheading"},f("intro:misc-text.courses")),u.createElement(E.LZ,null),u.createElement("div",{className:"block-ui"},j.map((function(e){return u.createElement(u.Fragment,{key:e},u.createElement(O,{blockDashedName:e,challenges:C.filter((function(t){return t.challenge.block===e})),superBlock:r}),"project-euler"!==e?u.createElement(E.LZ,null):null)})),r!==h.SuperBlocks.CodingInterviewPrep&&u.createElement("div",null,u.createElement(pe,{certification:s,superBlock:r,title:c,user:B}))),!b&&!k&&u.createElement("div",null,u.createElement(E.LZ,{size:2}),u.createElement(S.Z,{block:!0},f("buttons.logged-out-cta-btn"))),u.createElement(E.LZ,{size:2}),u.createElement("h3",{className:"text-center big-block-title",style:{whiteSpace:"pre-line"}},f("intro:misc-text.browse-other")),u.createElement(E.LZ,null),u.createElement(y.Z,{currentSuperBlock:r}),u.createElement(E.LZ,{size:2})))),u.createElement(v.Z,{location:e.location}))};Se.displayName="SuperBlockIntroductionPage";var ye=(0,b.$j)((function(e){return(0,f.P1)(B.km,B.Qi,B.Kt,B.nl,B.np,(function(e,t,a,l,i){return{currentChallengeId:e,isSignedIn:t,signInLoading:a,fetchState:l,user:i}}))(e)}),(function(e){return(0,k.DE)({tryToShowDonationModal:B.dz,resetExpansion:Z._6,toggleBlock:function(e){return(0,Z.th)(e)}},e)}))((0,p.Z)()((0,u.memo)(Se)))},4196:function(e,t,a){var l=a(60881),i=a(91282).values;l({target:"Object",stat:!0},{values:function(e){return i(e)}})}}]);
//# sourceMappingURL=component---src-templates-introduction-super-block-intro-tsx-d8d242b9e7d6d4e3ad13.js.map