export type Bird = {
	id: string;
	nameFi: string;
	nameSv: string;
	scientificName: string;
	averageSizeCm: number;
	description: {
		appearance: string;
		location: string;
		sound: string;
		other: string;
		size: string;
	};
	imageUrl: string;
	audioUrl: string;
};

// Lähde: https://www.birdlife.fi/lintuharrastus/100lintulajia/opi-tuntemaan/
export const BIRDS: Bird[] = [
	{
		nameFi: "Sinitiainen",
		nameSv: "Blåmes",
		averageSizeCm: 11.5,
		description: {
			appearance:
				"Keltainen vatsa, sininen päälaki, niska, siivet (siivellä valkea juova) ja pyrstö. Valkeat posket ja vihertävä selkä. Tumma kurkkulappu ja silmän yli ulottuva juova.",
			location:
				"Pohjoisessa Pohjois-Pohjanmaalle ja Kainuuseen saakka yleinen pihoilla sekä lehti- ja sekametsissä. Viihtyy syksyisin myös ruovikoissa.",
			sound:
				"Kevätlaulu korkea heleä ”tii-tii-tililililili” , kutsuäänenä muun muassa ”tsäsäsäsä”.",
			other:
				"Koiras on hieman kirkkaamman värinen kuin naaras. Satakunnan maakuntalintu.",
			size: "11–12 cm, talitiaista pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/sinitiainen_petri-vainio-800x440.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/sinitiainen-copyright-birdlife.mp3",
		id: "sinitiainen",
		scientificName: "Cyanistes caeruleus",
	},
	{
		nameFi: "Talitiainen",
		nameSv: "Talgoxe",
		averageSizeCm: 15,
		description: {
			appearance:
				"Keltainen vatsa, jossa musta pystyjuova (koiraalla leveämpi kuin naaraalla), musta päälaki, valkeat posket ja vihertävä selkä, siivellä valkea juova.",
			location:
				"Yleinen koko maassa (Lapissa laikuttaisesti) pihoilla, puistoissa ja metsissä.",
			sound:
				"Tavallisin laulutyyppi ”ti-tyy ti-tyy” tai yhä harvemmin kuuluva ”titi-tyy”.",
			other: "Talviruokintapaikkojen yleisin laji. Viikko 2",
			size: "14–16 cm, sinitiaista suurempi, vähän varpusta pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/talitiainen_pertti-rasp-800x445.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/talitiainen-copyright-birdlife.mp3",
		id: "talitiainen",
		scientificName: "Parus major",
	},
	{
		nameFi: "Harakka",
		nameSv: "Skata",
		averageSizeCm: 45,
		description: {
			appearance:
				"Mustavalkoinen, hyvin pitkäpyrstöinen. Höyhenpuvun musta väri voi kiiltää sinisen ja vihreän eri sävyissä.",
			location: "Koko maassa, pohjoisimmassa Suomessa harvinaisempi.",
			sound: "Tavallisin ääni käheä naurahtava sarja.",
			other:
				"Pysyttelee pienellä alueella ympäri vuoden. Suurin osa harakoista elää koko ikänsä alle 10 kilometrin sisällä synnyinpaikastaan.",
			size: "40–50 cm, mistä pyrstön osuus on noin puolet.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-harakka-micha-fager-800x490.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/harakka-copyright-birdlife.mp3",
		id: "harakka",
		scientificName: "Pica pica",
	},
	{
		nameFi: "Varis",
		nameSv: "Kråka",
		averageSizeCm: 47.5,
		description: {
			appearance:
				"Pää, kurkku rintaa myöten sekä siivet ja pyrstö mustat, muuten harmaa. Nokka jykevä.",
			location: "Yleinen koko maassa monenlaisissa ympäristöissä.",
			sound: "Venähtävä raakkuva, käheä ”kraa kraa”.",
			other:
				"Suuri osa variksista muuttaa talveksi pois Suomesta, vaikka laji on talvellakin yleinen. Viikko 3",
			size: "Noin 45–50 cm (suurimpia varpuslintujamme), selvästi suurempi kuin naakka tai kesykyyhky.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-varis-petri-vainio-800x452.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/varis-copyright-birdlife.mp3",
		id: "varis",
		scientificName: "Corvus corone",
	},
	{
		nameFi: "Harmaapäätikka",
		nameSv: "Gråspett",
		averageSizeCm: 30,
		description: {
			appearance:
				"Vihreä selkä, harmaa pää ja vihreänharmaa vatsapuoli. Millään muulla Suomessa pesivällä tikalla ei ole vihreää väriä. Koiraalla on pieni punainen otsalaikku, naaraan (kuvassa) päälaki on kokonaan harmaa. Nokan tyvellä on musta viiksijuova.",
			location:
				"Vankin kanta Lounais-Suomen lehtimetsissä, mutta leviää pohjoiseen, satunnaisesti Lapissa saakka.",
			sound:
				"Soidinhuuto muodostuu muutaman laskevan vihellyksen sarjasta, jota on helppo matkia viheltäen.",
			other:
				"Harmaapäätikka on kesällä melko arka, mutta tulee talvella hanakasti rasvaruokinnalle.",
			size: "Noin 30 cm, selvästi suurempi kuin käpytikka.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-harmaapaatikka-jyrki-makela-800x363.jpg",
		audioUrl:
			"https://asiakas.kotisivukone.com/files/pirhonenj.kotisivukone.com/piccanrausong1903112.mp3",
		id: "harmaapaatikka",
		scientificName: "Picus canus",
	},
	{
		nameFi: "Käpytikka",
		nameSv: "Större Hackspett",
		averageSizeCm: 25,
		description: {
			appearance:
				"Yleisväriltään mustavalkoinen, hartioilla on laaja valkoinen laikku. Alapuoli valkea, mutta pyrstön tyvellä laajalti kirkkaanpunainen alue. Koiraalla on lisäksi punainen laikku niskassa. Nokka pitkä ja voimakas.",
			location: "Yleinen koko maassa pohjoisinta Lappia lukuun ottamatta.",
			sound:
				"Kutsu- ja varoitusääni kuuluva ”gyk” . Lyhyt ja nopea rummutus kuuluu kauas.",
			other: "Yleisin tikkamme, tavallinen talviruokintapaikoilla. Viikko 4",
			size: "Noin 25 cm, suunnilleen musta- tai räkättirastaan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kapytikka-petri-vainio-800x423.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kapytikka-copyright-birdlife.mp3",
		id: "kapytikka",
		scientificName: "Dendrocopos major",
	},
	{
		nameFi: "Pikkuvarpunen",
		nameSv: "Pilfink",
		averageSizeCm: 14,
		description: {
			appearance:
				"Muistuttaa varpusta, mutta päälaki on suklaanruskea, ja valkealla poskella on musta täplä. Koiras ja naaras ovat samannäköiset.",
			location:
				"Lähes koko maassa, yleinen Oulu-Joensuu-linjan eteläpuolella. Runsastunut voimakkaasti.",
			sound:
				"Samantyyppistä silputusta kuin varpusella, mutta välillä nenäsointisempaa säksätystä ja sointuvampaa kutsuääntä. Lennossa kuiva ”tsäk”.",
			other:
				"Pesii mielellään vaakamalliseen pönttöön. Sellaisen voi helposti rakentaa itse.",
			size: "Noin 14 cm, vähän varpusta pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-pikkuvarpunen-petri-vainio-800x435.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/pasmon.mp3",
		id: "pikkuvarpunen",
		scientificName: "Passer montanus",
	},
	{
		nameFi: "Varpunen",
		nameSv: "Gråsparv",
		averageSizeCm: 15,
		description: {
			appearance:
				"Ruskean ja harmaan kirjava, tukeva. Vatsapuoli on harmaa ja selkä ruskeankirjava. Koiras on värikkäämpi: sillä on harmaa päälaki ja posket, silmän takana punaruskea alue sekä mustaa nokan ja silmän ympärillä sekä kurkussa (kesällä laajemmin kuin talvella). Nokka on tukeva.",
			location:
				"Yleinen lähes koko maassa sekä kaupungeissa että maaseudulla. Kanta taantunut kuitenkin noin puoleen 30 vuodessa.",
			sound: "Verkkainen silputus ”tsilp tsilp” tai ”tsrip tsrip”.",
			other:
				"Parvet viihtyvät erityisesti tiheissä orapihlaja-aidoissa. Viikko 5",
			size: "Noin 15 cm, peipon ja viherpeipon kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-varpunen-micha-fager-800x477.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/varpunen-copyright-birdlife.mp3",
		id: "varpunen",
		scientificName: "Passer domesticus",
	},
	{
		nameFi: "Koskikara",
		nameSv: "Strömstare",
		averageSizeCm: 20,
		description: {
			appearance:
				"Pääosin tummanruskea, mutta kurkku ja rinta laajalti valkoinen. Palleromainen ja melko lyhytpyrstöinen. Niiailee hermostuneen tuntuisesti ja sukeltaa kokonaan veteen.",
			location:
				"Suomessa – pääosin Lapissa – pesii vain muutama sata paria. Talvella lajin voi nähdä koko maassa.",
			sound: "Kutsuääni voimakas ”tsrit” , laulu kireää visertelyä.",
			other:
				"Talvehtii virtaavien jokien ja purojen äärellä. Suomessa talvehtivat linnut tulevat pääosin Pohjois-Norjasta.",
			size: "Noin 20 cm, suunnilleen kottaraisen tai tilhen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-koskikara-pertti-rasp-800x443.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/cincin.mp3",
		id: "koskikara",
		scientificName: "Cinclus cinclus",
	},
	{
		nameFi: "Kesykyyhky",
		nameSv: "Tamduva",
		averageSizeCm: 32.5,
		description: {
			appearance:
				"Tavallisesti harmaankirjava, mutta väritys vaihtelee valkoisesta hailakan rusehtavaan. Siiven alapinnat hyvin vaaleat.",
			location:
				"Yleinen kaupungeissa ja suurimmissa asutuskeskuksissa, erityisesti Etelä-Suomessa. Pohjoisin kanta Inarissa.",
			sound: "Kujertava tai kurnuttava, pehmeä ”krjuu krjuu”.",
			other:
				"Polveutuu kalliokyyhkystä. Pesii rakennuksissa lähes ympäri vuoden. Viikko 6",
			size: "30–35 cm, naakan kokoinen, varista pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kesykyyhky-micha-fager-800x445.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/colliv.mp3",
		id: "kesykyyhky",
		scientificName: "Columba livia",
	},
	{
		nameFi: "Keltasirkku",
		nameSv: "Gulsparv",
		averageSizeCm: 17,
		description: {
			appearance:
				"Koiraalla runsaasti keltaista päässä ja vatsassa, naaras hailakamman kellanruskea. Pyrstön tyvellä laajemmin punaruskeaa väriä.",
			location:
				"Yleinen lähes koko maassa (puuttuu Tunturi-Lapista) pellonreunoilla. Talvella liikkuu parvissa, erityisesti maaseudulla.",
			sound:
				"Laulu yksinkertainen ”tsi-tsi-tsi-tsi-tsi-tsi-tsyyy” , kutsuääni kuiva ”tsip”.",
			other:
				"Suosii ruokinnalla kauraa ja syö sitä mieluiten lyhteestä tai maasta.",
			size: "Noin 17 cm, vähän suurempi kuin talitiainen tai viherpeippo.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-keltasirkku-micha-fager-1-800x415.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/keltasirkku-copyright-birdlife.mp3",
		id: "keltasirkku",
		scientificName: "Emberiza citrinella",
	},
	{
		nameFi: "Viherpeippo",
		nameSv: "Grönfink",
		averageSizeCm: 15,
		description: {
			appearance:
				"Koiras yleisväriltään vihreä, naaras harmaanvihreä. Molemmilla on siipien etureunassa ja pyrstön reunoilla kirkkaankeltaista. Tukeva nokka.",
			location:
				"Yleinen ja levinnyt jokseenkin koko maahan, suosii kulttuuriympäristöjä.",
			sound:
				"Laulu sointuva ”djydjydjy…” , jonka katkaisee välillä tyypillinen ryystäävä ”dsryyy”.",
			other:
				"Viherpeipon löytää usein ruusuistutuksissa syömässä ruusunkiulukoiden siemeniä. Viikko 7",
			size: "Noin 15 cm, varpusen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-viherpeippo-petri-vainio-1-800x390.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/viherpeippo-copyright-birdlife.mp3",
		id: "viherpeippo",
		scientificName: "Chloris chloris",
	},
	{
		nameFi: "Fasaani",
		nameSv: "Fasan",
		averageSizeCm: 80,
		description: {
			appearance:
				"Koiraalla laaja punainen alue pään sivulla, muuten kuparinruskean kirjava. Naaras hailakanruskea, täplikäs. Molemmilla hyvin pitkä poikkiraitainen pyrstö.",
			location:
				"Lounais-Suomessa, istutettuna muuallakin. Alueelliset ja vuosien väliset erot voivat olla suuria.",
			sound:
				"Koiraalla kaksitavuinen käheä kiekaisu, jota seuraa siipien pärrytys.",
			other:
				"Fasaani on aasialainen laji, joka tuotiin Suomeen vasta vuonna 1901.",
			size: "Pyrstö mukaan lukien 70–90 cm (josta pyrstön osuus noin puolet).",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-fasaani-micha-fager-800x319.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/fasaani-copyright-birdlife.mp3",
		id: "fasaani",
		scientificName: "Phasianus colchicus",
	},
	{
		nameFi: "Sinisorsa",
		nameSv: "Gräsand",
		averageSizeCm: 55,
		description: {
			appearance:
				"Koiraalla juhlapuvussa sinivihreä pää ja keltainen nokka, kapea valkoinen kauluri ja tummanruskea rinta. Naaras ruskeankirjava.",
			location:
				"Yleinen joka paikan sorsa koko maassa, talvella suurina parvina sorsien ruokintapaikoilla.",
			sound: "Ankkamainen rääpätys.",
			other:
				"Sinisorsa on kesyankan kantamuoto. Luonnossakin sinisorsilla näkee suhteellisen usein erilaisia värimuunnoksia. Viikko 8",
			size: "50–60 cm, vähän varista suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-sinisorsa-pertti-rasp-1-800x335.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/anapla.mp3",
		id: "sinisorsa",
		scientificName: "Anas platyrhynchos",
	},
	{
		nameFi: "Töyhtötiainen",
		nameSv: "Tofsmes",
		averageSizeCm: 11.5,
		description: {
			appearance:
				"Päälaella selvä mustavalkoraidallinen kartiomainen töyhtö. Selkä ruskea, vatsa likaisenvalkoinen, kurkku musta.",
			location:
				"Havumetsissä Etelä-Suomesta pohjoiseen Perämeren pohjukan korkeudelle.",
			sound: "Korkea, pirteä ”tsirririririt” tai ”siii siii tsirririririt”.",
			other:
				"Töyhtötiainen on paikkalintu ja liikkuu vähemmän kuin muut tiaisemme. Se poikkeaa kuitenkin talvella lähellä metsää olevilla ruokintapaikoilla.",
			size: "11–12 cm, sinitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-toyhtotiainen-petri-vainio-1-800x468.jpg",
		audioUrl: "http://www.birdphoto.fi/aanet/parcri.mp3",
		id: "toyhtotiainen",
		scientificName: "Lophophanes cristatus",
	},
	{
		nameFi: "Harmaalokki",
		nameSv: "Gråtrut",
		averageSizeCm: 57.5,
		description: {
			appearance:
				"Aikuisella linnulla harmaa selkä ja siivet ja siipien kärjissä mustaa, muuten valkoinen. Nokka tukeva ja keltainen, alanokassa punainen täplä. Jalat hailakanpunaiset tai keltaiset.",
			location:
				"Yleinen lähes koko maassa merensaaristossa ja sisäjärvillä, Pohjois-Lapissa vain harvakseltaan.",
			sound: "Kuuluva kailotus ”kjau” ja nopeampi ”ga-ga-ga”.",
			other:
				"Harmaalokki pitää hallussaan Suomessa rengastettujen lintujen ikäennätystä. Kesäkuussa 1987 pesäpoikasena rengastettu lintu löytyi kuolleena 35 vuotta myöhemmin kesäkuussa 2022. Viikko 9",
			size: "55–60 cm, varista suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-harmaalokki-hannu-kekkonen-1-800x577.jpg",
		audioUrl: "http://www.birdphoto.fi/aanet/lararg.mp3",
		id: "harmaalokki",
		scientificName: "Larus argentatus",
	},
	{
		nameFi: "Mustarastas",
		nameSv: "Koltrast",
		averageSizeCm: 25,
		description: {
			appearance:
				"Koiraan höyhenpuku musta, nokka ja kapea silmärengas keltaiset, naaras pääosin lämpimänruskea. Melko pitkäpyrstöinen.",
			location:
				"Yleinen Oulun korkeudelle saakka, pohjoisempana harvalukuinen.",
			sound:
				"Laulaa erityisesti aamu- ja iltahämärissä. Rauhalliset huilumaiset säkeet päättyvät pehmeään liverrykseen.",
			other:
				"Mustarastas on Uudenmaan maakuntalintu, ja vuonna 2015 se valittiin Ruotsin kansallislinnuksi.",
			size: "Noin 25 cm, räkättirastaan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-mustarastas-petri-vainio-pasi-parkkinen-800x351.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/mustarastas-copyright-birdlife.mp3",
		id: "mustarastas",
		scientificName: "Turdus merula",
	},
	{
		nameFi: "Palokärki",
		nameSv: "Spillkråka",
		averageSizeCm: 45,
		description: {
			appearance:
				"Hiilenmusta lukuun ottamatta päälaella olevaa punaista väriä; koiraalla koko päälaki punainen, naaraalla punaista vain päälaen takaosassa. Nokka ja silmä vaaleat.",
			location: "Ýleinen koko maassa pohjoisinta Lappia lukuun ottamatta.",
			sound:
				"Valittava, melko nopea ”kui-kui-kui…” ja venyvä ”kryy” , rummutus kauas kuuluva konekiväärimäinen sarja.",
			other:
				"Palokärki kovertaa tavallisesti joka vuosi uuden pesäkolon ja on siten tärkeä pesänikkari isommille kolopesijöille. Viikko 10",
			size: "Noin 45 cm, suurin tikkamme, suunnilleen variksen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-palokarki-micha-fager-800x579.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/palokarki-copyright-birdlife.mp3",
		id: "palokarki",
		scientificName: "Dryocopus martius",
	},
	{
		nameFi: "Helmipöllö",
		nameSv: "Pärluggla",
		averageSizeCm: 25,
		description: {
			appearance:
				"Ruskeassa selkäpuolessa vaaleita helmimäisiä täpliä, vaalealla vatsapuolella harmaanruskeaa kuviointia. Iso pää, pistävän keltaiset silmät.",
			location: "Monenlaisissa metsissä lähes koko maassa.",
			sound:
				"Yöllä kuuluvan puputussarjan rytmi voi vaihdella ”pupupupupu” tai ”pu-pu-pu-pu-pu” ., kutsuääni kuiva tiuskiva ”tsji”.",
			other:
				"Runsaus vaihtelee suuresti vuodesta toiseen myyrätilanteen mukaan.",
			size: "Noin 25 cm, vain räkätti- tai mustarastaan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-helmipollo-micha-fager-800x456.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/helmipollo-copyright-birdlife.mp3",
		id: "helmipollo",
		scientificName: "Aegolius funereus",
	},
	{
		nameFi: "Lehtopöllö",
		nameSv: "Kattuggla",
		averageSizeCm: 40,
		description: {
			appearance:
				"Yleisväri harmaa tai punaruskea, hartioilla valkea täplärivi. Iso pää, sysimustat silmät.",
			location:
				"Lounais-Suomessa yleisin pöllömme, Pirkanmaan pohjoispuolella harvinainen. Elää lehti- ja sekametsissä.",
			sound:
				"Yöllä kuuluva soidinääni aavemaisena värisevä ”huu hu-hu-hu-huuuu” , kutsuääni terävä ”ki-vitt”.",
			other:
				"Punaruskealla värimuodolla on vilkkaampi aineenvaihdunta. Tämä aiemmin harvinaisempi värimuoto on runsastunut talvien muututtua leudommiksi. Viikko 11",
			size: "Noin 40 cm, vähän varista pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-lehtopollo-micha-fager-800x462.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/lehtopollo-copyright-birdlife.mp3",
		id: "lehtopollo",
		scientificName: "Strix aluco",
	},
	{
		nameFi: "Kiuru",
		nameSv: "Sånglärka",
		averageSizeCm: 18,
		description: {
			appearance:
				"Vaatimattoman harmaanruskea. Leveäsiipinen, lennossa siiven takareunalla näkyy kapea valkea juova.",
			location:
				"Yleinen pelloilla ja niityillä Etelä-Suomesta Lapin eteläosiin saakka.",
			sound:
				"Laulu riemukas pitkä livertely, joka yleensä esitetään lennossa. Kutsuääni ”drliu”.",
			other: "Kiuru on Keski-Pohjanmaan maakuntalintu.",
			size: "Noin 18 cm, varpusta suurempi mutta kottaraista pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kiuru_micha-fager-800x380.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kiuru-copyright-birdlife.mp3",
		id: "kiuru",
		scientificName: "Alauda arvensis",
	},
	{
		nameFi: "Töyhtöhyyppä",
		nameSv: "Tofsvipa",
		averageSizeCm: 30,
		description: {
			appearance:
				"Yleisväri mustavalkoinen, joskin selkä voi hohtaa vihreän tai violetin sävyissä. Päälaella muutaman höyhenen töyhtö, joka koiraalla on pitempi kuin naaraalla. Lento nykivää, siivet pyöreäpäiset.",
			location:
				"Melko yleinen pelloilla ja niityillä maan eteläpuoliskolla, pohjoisempana harvalukuinen.",
			sound:
				"Soitimella naukuvasti sointuva ”vii-uu-i viu viu” , siivistä kuuluu pumppaava humina.",
			other:
				"Kevään ensimmäisiä muuttolintuja. Voi kuitenkin muuttaa takaisin pakkasen tai lumisateen tieltä. Viikko 12",
			size: "noin 30 cm, naakan tai kyyhkyn kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-toyhtohyyppa_micha-fager-800x470.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/toyhtohyyppa-copyright-birdlife.mp3",
		id: "toyhtohyyppa",
		scientificName: "Vanellus vanellus",
	},
	{
		nameFi: "Pulmunen",
		nameSv: "Snösparv",
		averageSizeCm: 18,
		description: {
			appearance:
				"Koiras keväällä mustavalkoinen, naaraassa valkoista ja kellanruskeaa. Siivet lennossa laajalti valkoiset.",
			location:
				"Pesii vain Tunturi-Lapissa, mutta kevätmuutolla lumienlähdön aikaan suurinakin parvina peltoaukeilla muualla maassa. Syysmuutolla näkyy harvemmin.",
			sound: ". Lennossa pehmeä ”piy” ja nopea helisevä ”pililili”.",
			other:
				"Pulmusen valkoinen väri on erinomainen suoja lumisessa rakkakivikossa. Puhtaanvalkoista pidetään myös viattomuuden värinä. Olet varmaan kuullut sanonnan ”puhdas kuin pulmunen”.",
			size: "Noin 18 cm, kiurun kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-pulmunen_pertti-rasp-800x328.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/pulmunen-copyright-birdlife.mp3",
		id: "pulmunen",
		scientificName: "Plectrophenax nivalis",
	},
	{
		nameFi: "Telkkä",
		nameSv: "Knipa",
		averageSizeCm: 45,
		description: {
			appearance:
				"Koiras näyttää mustavalkoiselta. Sillä on korkea kulmikas sinivihreä pää ja poskella valkoinen laikku. Naaras on harmaa ja ruskeapäinen, siivellä valkoiset laikut.",
			location:
				"Yleinen lähes koko maassa monenlaisilla vesillä, pienilläkin lammilla.",
			sound:
				"Soitimella karkeaa narinaa. Tyypillisempi ääni on koiraan siivistä kuuluva viuhuva ääni.",
			other:
				"Pesii pöntöissä tai luonnonkoloissa, jotka voivat olla jopa kilometrien päässä lähimmältä lammelta tai järveltä. Pesästälähdön jälkeen emo johdattaa poikaset veteen. Viikko 13",
			size: "Noin 45 cm, sinisorsaa pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-telkka_hannu-eskonen-800x438.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/telkka-copyright-birdlife.mp3",
		id: "telkka",
		scientificName: "Bucephala clangula",
	},
	{
		nameFi: "Kyhmyjoutsen",
		nameSv: "Knölsvan",
		averageSizeCm: 150,
		description: {
			appearance:
				"Höyhenpuku kokonaan valkoinen, voi nostaa uidessa siivet purjemaisesti ylös sivuille. Oranssin nokan tyvellä musta kyhmy.",
			location:
				"Koko rannikkoalueella ja paikoin Etelä-Suomen rehevillä järvenlahdilla.",
			sound:
				"Siivistä kuuluu lennossa omaleimainen viuhuva ääni, muuten vain vaimeaa jupinaa.",
			other:
				"Painavin Euroopassa elävä lintu: aikuinen koiras voi painaa yli 14 kg. Tanskan kansallislintu.",
			size: "Noin 150 cm, laulujoutsenen kokoinen, hanhia selvästi suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kyhmyjoutsen-pertti-rasp-800x413.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/cygolo.mp3",
		id: "kyhmyjoutsen",
		scientificName: "Cygnus olor",
	},
	{
		nameFi: "Laulujoutsen",
		nameSv: "Sångsvan",
		averageSizeCm: 150,
		description: {
			appearance:
				"Höyhenpuku kokonaan valkoinen. Nokan tyvi laajalti kirkkaankeltainen, kärki musta.",
			location:
				"Melko yleinen koko maassa lammilla ja järvenlahdilla, harvemmin merellä.",
			sound: "Voimakas, kauaskuuluva trumpettimainen joiku.",
			other:
				"Suomen kansallislintu. Hyvin pariuskollinen: Puolisot pysyttelevät yleensä yhdessä niin kauan kuin molemmat ovat elossa. Viikko 14",
			size: "Noin 150 cm, kyhmyjoutsenen kokoinen, hanhia selvästi suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-laulujoutsen-pertti-rasp-1-800x310.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/laulujoutsen-copyright-birdlife.mp3",
		id: "laulujoutsen",
		scientificName: "Cygnus cygnus",
	},
	{
		nameFi: "Västäräkki",
		nameSv: "Sädesärla",
		averageSizeCm: 18,
		description: {
			appearance:
				"Selkä harmaa, muuten pääosin mustavalkoinen. Koiraalla musta päälaki ja niska, naaraalla pää himmeämmän värinen. Keikuttaa pitkää pyrstöään kulkiessaan.",
			location: "Yleinen koko maassa, yleensä ihmisasutuksen tuntumassa.",
			sound:
				"Helskyvä kirkas ”tsi-lit” , joka toistuu myös yksinkertaisessa lauliussa.",
			other:
				"”Västäräkistä vähäsen”, sanotaan. Sen saapumisesta ei pitäisi olla pitkä aika kesään. Pirkanmaan maakuntalintu.",
			size: "Noin 18 cm, suurempi kuin talitiainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-vastarakki-pertti-rasp-1-800x278.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/vastarakki-copyright-birdlife.mp3",
		id: "vastarakki",
		scientificName: "Motacilla alba",
	},
	{
		nameFi: "Kottarainen",
		nameSv: "Stare",
		averageSizeCm: 20,
		description: {
			appearance:
				"Metallinkiiltoisessa mustassa höyhenpuvussa on vaaleita pilkkuja, jotka kesällä kuluvat pois. Nokka on keltainen ja pyrstö lyhyt. Astelee vuoroaskelin toisin kuin tasajalkaa hyppivät rastaat.",
			location:
				"Pesii pihoissa ja puistoissa lpohjoisinta Suomea lukuun ottamatta.",
			sound:
				"Taitava matkija. Laulussa voi olla aiheita monen tutun linnun äänistä.",
			other:
				"Kottarainen on levinnyt ihmisen mukana Euroopasta ja Länsi-Aasiasta muille mantereille, ja se luokitellaan yhdeksi maailman sadasta haitallisimmasta vieraslajista. Viikko 15",
			size: "Noin 20 cm, pienempi kuin mustarastas.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kottarainen-micha-fager-1-800x430.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kottarainen-copyright-birdlife.mp3",
		id: "kottarainen",
		scientificName: "Sturnus vulgaris",
	},
	{
		nameFi: "Merihanhi",
		nameSv: "Grågås",
		averageSizeCm: 80,
		description: {
			appearance:
				"Harmaanruskea. Jalat vaaleanpunaiset, Oranssinkeltaisessa tai punertavassa nokassa ei mustaa.",
			location:
				"Pesii merialueilla rannikolla ja saaristossa, sisämaassa harvinainen.",
			sound: "Matala honotus samanlainen kuin kesyhanhella.",
			other:
				"Kotieläimeksi jalostettu kesyhanhi polveutuu pääosin merihanhesta.",
			size: "Noin 80 cm, sinisorsaa suurempi, laulujoutsenta pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-merihanhi-pertti-rasp-800x406.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/merihanhi-copyright-birdlife.mp3",
		id: "merihanhi",
		scientificName: "Anser anser",
	},
	{
		nameFi: "Metsähanhi",
		nameSv: "Sädgås",
		averageSizeCm: 80,
		description: {
			appearance:
				"Ruskea, tummempi kuin merihanhi. Jalat oranssit, nokassa vaihtelevasti oranssia ja mustaa.",
			location:
				"Pesii harvakseltaan Pohjois-Suomen soilla, muuttoaikoina yleinen Etelä-Suomessa.",
			sound: "Matala kaakattava pajatus.",
			other:
				"Metsähanhi on riistalintu, mutta meillä pesivä kanta on voimakkaasti taantunut. Suomessa pesii kaksi alalajia. Pohjoisimmassa Lapissa pesivä tundrametsähanhi on luokiteltu erittäin uhanalaiseksi ja taigametsähanhi vaarantuneeksi. Viikko 16",
			size: "Noin 80 cm, sinisorsaa suurempi, laulujoutsenta pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-metsahanhi-petri-vainio-2-800x397.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/metsahanhi-copyright-birdlife.mp3",
		id: "metsahanhi",
		scientificName: "Anser fabalis",
	},
	{
		nameFi: "Metso",
		nameSv: "Tjäder",
		averageSizeCm: 75,
		description: {
			appearance:
				"Koiras hyvin kookas ja tumma, nokka hailakankeltainen. Naaras punaruskea, kurkku ja rinta laajalti ruosteenpunainen. Molemmilla pyöreäpäinen pyrstö.",
			location:
				"Vanhoissa havumetsissä lähes koko maassa, monin paikoin harvinainen.",
			sound:
				"Soitimella kiihtyvä kumea näppäilysarja, jota seuraa suhiseva ääni.",
			other:
				"Soidinpaikkojen pirstoutuessa yksinäiset kukot voivat uhitella ihmisille ja yksinäiset koppelot eli naarasmetsot voivat herättää hämmästystä vaikka koulun pihalla tai kylän keskustassa. Keski-Suomen maakuntalintu.",
			size: "Koiras 75-90 cm, naaras noin 60 cm, suurin kanalinnuistamme.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-metso-pertti-rasp-petri-vainio-800x363.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/teturo.mp3",
		id: "metso",
		scientificName: "Tetrao urogallus",
	},
	{
		nameFi: "Kurki",
		nameSv: "Trana",
		averageSizeCm: 74,
		description: {
			appearance:
				"Pitkäjalkainen ja -kaulainen. Yleisväri vaaleanharmaa. Päässä mustaa, valkoista ja vähän punaista, peräpäässä tuuhea strutsimainen puuhka. Lentää jalat ja kaula suorana.",
			location:
				"Lähes koko maassa soilla, rantaniityillä ja ruovikoissa, Lapissa harvalukuinen.",
			sound: "Voimakas trumpettimainen ”krruu”.",
			other:
				"Ennen muinoin kuviteltiin, että pikkulintuja muuttaa syksyisin kurkien siivellä etelään. Tämä johtuu siitä, että nuorilla kurjilla on aivan erilainen ääni: heikko piiskutus. Pohjois-Pohjanmaan maakuntalintu. Viikko 17",
			size: "100–120 cm (siipienväli noin 2 metriä), maassa seisten pisin lintumme.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kurki-pekka-komi-800x394.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kurki-copyright-birdlife.mp3",
		id: "kurki",
		scientificName: "Grus grus",
	},
	{
		nameFi: "Järripeippo",
		nameSv: "Bergfink",
		averageSizeCm: 15,
		description: {
			appearance:
				"Valkea laikku pyrstön tyvellä, vaaleat siipijuovat, rinta oranssinsävyinen. Koiraalla keväällä harmaan- ja mustankirjava pää ja selkä. Naaras himmeämmän värinen, poski harmaanruskea.",
			location:
				"Havumetsissä ja tunturikoivikoissa. Yleinen Pohjois-Suomessa, ei pesi eteläisimmässä Suomessa.",
			sound:
				"Laulu unettavan yksitoikkoinen ryystäys, kutsuääni nenäsointinen ”tsjää”.",
			other:
				"Järripeippokoiraan pää on kesällä kiiltävän sinimusta, kun tuoreiden höyhenien vaaleammat kärjet ovat kuluneet pois.",
			size: "Noin 15 cm, varpusen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-jarripeippo-pertti-rasp-micha-fager-800x351.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/jarripeippo-copyright-birdlife.mp3",
		id: "jarripeippo",
		scientificName: "Fringilla montifringilla",
	},
	{
		nameFi: "Peippo",
		nameSv: "Bofink",
		averageSizeCm: 15,
		description: {
			appearance:
				"Kaksi valkeaa siipijuovaa. Koiraalla vatsapuoli ja päänsivut punertavat, päälaki ja niska siniharmaat. Naaras harmaanruskea vailla punaista väriä.",
			location:
				"Yleinen metsissä, puistoissa ja pihoilla. Pohjois-Suomessa harvalukuisempi kuin järripeippo.",
			sound: "Pirteä samanlaisena toistuva säe, kutsuääni ”tvink”.",
			other:
				"Peippo on Suomen runsain lintulaji. Pajulintuja on suunnilleen yhtä paljon. Viikko 18",
			size: "Noin 15 cm, varpusen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-peippo-pekka-komi-micha-fager-800x335.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/peippo-copyright-birdlife.mp3",
		id: "peippo",
		scientificName: "Fringilla coelebs",
	},
	{
		nameFi: "Taivaanvuohi",
		nameSv: "Enkelbeckasin",
		averageSizeCm: 16,
		description: {
			appearance:
				"Maastonvärisen ruskeankirjavan suojavärin vuoksi vaikea nähdä. Pyylevä ruumis, hyvin pitkä suora nokka ja melko lyhyet jalat.",
			location: "Koko Suomessa erilaisilla kosteikoilla.",
			sound:
				"Soidinääni erikoinen värisevä mäkätys ja yksitoikkoinen kitkutus ”tik-kot tik-kot tik-kot”.",
			other:
				"Erikoinen soidinääni syntyy uloimmista pyrstösulista, kun taivaanvuohi syöksyy alaspäin pyrstö levitettynä.",
			size: "Noin 25 cm (josta nokka noin 7 cm), suurempi kuin rantasipi, pienempi kuin töyhtöhyyppä.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-taivaanvuohi-pekka-komi-800x449.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/galgal.mp3",
		id: "taivaanvuohi",
		scientificName: "Gallinago gallinago",
	},
	{
		nameFi: "Suokukko",
		nameSv: "Brushane",
		averageSizeCm: 27.5,
		description: {
			appearance:
				"Koiraalla soidinaikana touko-kesäkuussa leveä värikäs kauluri ja tupsut. Näiden väri vaihtelee mustasta ja oranssinruskeasta valkoiseen. Naaras on ruskea ja vaihtelevasti tummatäpläinen.",
			location:
				"Pesii Pohjois-Suomen soilla ja järvenrantaniityillä, muuttoaikoina koko maassa.",
			sound: "Ei juuri ääntele.",
			other:
				"Suokukoilla on monimutkainen ryhmäsoidin, jossa erinäköisillä koirailla on erilainen asema. Useimmat koiraat tappelevat herruudesta, mutta ylinnä hierarkiassa ovat valkokauluksiset satelliittikoiraat. On myös koiraita, jotka ”hiiviskelevät” soidinpaikalla naaraan näköisinä. Viikko 19",
			size: "Koiras noin 30 cm, naaras selvästi pienempi – noin 25 cm.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-suokukko-micha-fager-800x442.jpg",
		audioUrl: "",
		id: "suokukko",
		scientificName: "Philomachus pugnax",
	},
	{
		nameFi: "Alli",
		nameSv: "Alfågel",
		averageSizeCm: 23.333333333333332,
		description: {
			appearance:
				"Mustan, valkoisen ja ruskean kirjava. Ulkonäkö vaihtelee vuodenajan mukaan; talvella paljon vaaleampi puku.",
			location:
				"Pesii harvalukuisena Tunturi-Lapin pikkujärvillä. Muuttoaikoina toukokuussa ja lokakuussa erityisesti Suomenlahdella ja Itä-Suomessa.",
			sound: "Nenäsointinen, rytmikäs ”a-al-li”.",
			other:
				"Alli on keväällä runsain laji arktikan eli arktisten vesilintujen muutossa. Huippupäivinä yhdestä Suomenlahden havaintopisteestä on laskettu yli 300 000 muuttavaa allia.",
			size: "Noin 45 cm, suunnilleen telkän kokoinen. Koiraalla lisäksi 10–15 cm pituiset pyrstöjouhet.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-alli-micha-fager-800x441.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/clahye.mp3",
		id: "alli",
		scientificName: "Clangula hyemalis",
	},
	{
		nameFi: "Haahka",
		nameSv: "Ejder",
		averageSizeCm: 65,
		description: {
			appearance:
				"Roteva. Iso pää ja kiilamainen nokka. Koiraalla juhlapuvussa vaaleanvihreät niskansivut, muuten mustavalkoinen. Naaras ruskeankirjava.",
			location:
				"Koko rannikkoalueellamme, harvalukuinen Merenkurkusta pohjoiseen.",
			sound:
				"Koiraalla kumea, ihmettelevä tai ihastunut huudahdus ”auu-uu” , naaraalla tasainen kaakatus.",
			other:
				"Haahkanuntuvia on kerätty pesistä takkien ja peittojen täytteeksi pesinnän jälkeen. Naaras on vuorannut pesän untuvilla, joita se on nyppinyt rinnastaan. Viikko 20",
			size: "60–70 cm, sinisorsaa isompi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-haahka-petri-vainio-800x465.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/sommol.mp3",
		id: "haahka",
		scientificName: "Somateria mollissima",
	},
	{
		nameFi: "Kirjosieppo",
		nameSv: "Svartvit Flugsnappare",
		averageSizeCm: 12.5,
		description: {
			appearance:
				"Koiras mustavalkoinen, naaralla mustan sijasta ruskeaa. Siivillä selvä valkea laikku.",
			location: "Koko maassa, yleinen pohjoisinta Lappia lukuun ottamatta.",
			sound:
				"Pirteä jammaileva laulunsäe alkaa yleensä ”tsi tsi tsi…” tai ”tsiro tsiro…” , rytmi voi muuttua yllättäen.",
			other:
				"Tavallinen pihapönttöjen asukas. Poikasille syötetään parin viikon pesäpoikasaikana noin 15 000 hyönteistä.",
			size: "12–13 cm, pienempi kuin talitiainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kirjosieppo-micha-fager-800x403.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kirjosieppo-copyright-birdlife.mp3",
		id: "kirjosieppo",
		scientificName: "Ficedula hypoleuca",
	},
	{
		nameFi: "Pajulintu",
		nameSv: "Lövsångare",
		averageSizeCm: 11.5,
		description: {
			appearance:
				"Pieni ja hento. Selkäpuoli kellanvihreä, vatsapuoli kellanvalkea, silmän yläpuolella kellanvalkea juova.",
			location: "Yleinen koko maassa.",
			sound:
				"Laulu hieman surumielinen, loppua kohti laskeva säe. Kutsuääni pehmeä ”hyyit”.",
			other:
				"Peipon ohella Suomen runsain lintulaji: pesimäkannaksi arvioidaan 6–9 miljoonaa paria. Viikko 21",
			size: "11–12 cm, sinitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-pajulintu-micha-fager-800x420.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/pajulintu-copyright-birdlife.mp3",
		id: "pajulintu",
		scientificName: "Phylloscopus trochilus",
	},
	{
		nameFi: "Lehtokerttu",
		nameSv: "Trädgårdssångare",
		averageSizeCm: 14,
		description: {
			appearance:
				"Harmaanruskea. Vanhojen lintukirjojen mukaan tunnettavissa siitä, ettei siinä ole mainittavia tuntomerkkejä. Kaulan sivulla erottuu usein harmahtava alue.",
			location:
				"Yleinen lehtipuuvaltaisissa metsissä ja puistoissa Etelä-Lappiin saakka.",
			sound: "Kaunis, pulppuileva lavertelu, jota on verrattu puron solinaan.",
			other:
				"Kertuistamme yleisin; Suomen kannaksi arvioidaan noin 660 000 paria.",
			size: "Noin 14 cm, suunnilleen talitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-lehtokerttu-micha-fager-800x431.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/lehtokerttu-copyright-birdlife.mp3",
		id: "lehtokerttu",
		scientificName: "Sylvia borin",
	},
	{
		nameFi: "Satakieli",
		nameSv: "Näktergal",
		averageSizeCm: 16,
		description: {
			appearance:
				"Harmaanruskea. Vatsapuoli vaaleampi, pyrstössä punertavanruskea sävy.",
			location:
				"Etelä-Suomessa tiheissä pensaikoissa ja nuorissa metsiköissä, yleensä lähellä rantaa.",
			sound:
				"Voimakas, yksinkertainen laulu, jossa huilumaisia vihellyksiä ja teräviä näppäilyjä.",
			other:
				"Laulaa aktiivisimmin yöllä. Laulun voimakkuus on yli 70 desibeliä, ja se voi kuulua yli kilometrin päähän. Etelä-Karjalan maakuntalintu. Viikko 22",
			size: "Noin 16 cm, suurempi kuin talitiainen, pienempi kuin kottarainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-satakieli-micha-fager-800x446.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/satakieli-copyright-birdlife.mp3",
		id: "satakieli",
		scientificName: "Luscinia luscinia",
	},
	{
		nameFi: "Leppälintu",
		nameSv: "Rödstjärt",
		averageSizeCm: 14,
		description: {
			appearance:
				"Koiraalla musta kurkku ja naama, valkoinen otsapanta, harmaa selkä ja punaruskea rinta. Naaras on lämpimänruskea. Molemmilla on punaruskea pyrstö.",
			location:
				"Yleinen koko maassa valoisissa kangasmetsissä, usein asutuksen liepeillä. Pesii myös pihapöntöissä.",
			sound: "Lyhyt, kirkas säe, jota voisi kuvata ”tii-ryi-ryi” Kuuntele .",
			other:
				"Leppälinnun nimi juontaa juuri katkaistun lepän punaruskeasta väristä.",
			size: "Noin 14 cm, talitiaisen tai peipon kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/leppalintu-pr-mf-800x365.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/leppalintu-copyright-birdlife.mp3",
		id: "leppalintu",
		scientificName: "Phoenicurus phoenicurus",
	},
	{
		nameFi: "Sinirinta",
		nameSv: "Blåhake",
		averageSizeCm: 14,
		description: {
			appearance:
				"Koiraalla kesällä kirkkaansininen kurkkulappu, jonka keskellä on tiilenpunainen laikku. Naaras värittömämpi, rinnan kuviointi vaihtelee. Pyrstön sivuilla punaruskeaa.",
			location: "Pensaikoissa ja tunturikoivikoissa Metsä- ja Tunturi-Lapissa.",
			sound:
				"Monipuolinen laulu sisältä monenlaisia matkintoja, maiskahtava kutsuääni muistuttaa lipputankoon osuvaa narua.",
			other: "Sinirinta on Lapin maakuntalintu. Viikko 23",
			size: "Noin 14 cm, talitiaisen tai peipon kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/lussve-mf-800x500.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/sinirinta-copyright-birdlife.mp3",
		id: "sinirinta",
		scientificName: "Luscinia svecica",
	},
	{
		nameFi: "Viitakerttunen",
		nameSv: "Busksångare",
		averageSizeCm: 13,
		description: {
			appearance:
				"Vaatimattoman värinen päältä, tasaisen oliviinruskea ja alta kellertävä kerttunen.",
			location:
				"Pensaikoissa, matalakasvustoisissa rehevissä puutarhoissa, peltoalueilla ja rehevillä niityillä",
			sound:
				"Laulu rauhallista ja kaunista paljon viheltelyjä sisältävää. ”hidelidyy hii tsäk tsäk” -säe tunnusomainen.",
			other:
				"Eroaa muista samannäköisistä kerttusista (luhta- ja rytikerttunen) parhaiten laulun perusteella.",
			size: "Noin 13 cm, kirjosiepon kokoluokkaa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/viitakerttunen-fager-micha-800x591.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/viitakerttunen-copyright-birdlife.mp3",
		id: "viitakerttunen",
		scientificName: "Acrocephalus schoenobaenus",
	},
	{
		nameFi: "Ruokokerttunen",
		nameSv: "Sävsångare",
		averageSizeCm: 12,
		description: {
			appearance:
				"Kirjava, alta kellanvalkea kerttunen, jolla voimakkaat päänkuviot, selässä kuviointia ja punaruskea yläperä.",
			location:
				"Kosteilla runsaskasvustoisilla paikoilla, erityisesti lintujärvien korkeissa ruoko- ja osmankäämikasvustoissa.",
			sound:
				"Laulu kiireistä, paljon karheita rätinöitä sisältävää. Helppo erottaa muista kerttusista.",
			other:
				"Laulaa usein näkyvällä paikalla, mutta piilottelee muulloin kasvillisuuden kätköissä. Viikko 24",
			size: "Noin 12 cm, pieni, kirjosiepon kokoluokkaa",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/ruokokerttunen-vainio-petri-800x553.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/ruokokerttunen-copyright-birdlife.mp3",
		id: "ruokokerttunen",
		scientificName: "Acrocephalus palustris",
	},
	{
		nameFi: "Kalatiira",
		nameSv: "Fisktärna",
		averageSizeCm: 35,
		description: {
			appearance:
				"Siro, vaalea (harmaanvalkea) kapeasiipinen ja pitkäpyrstöinen lokkilintu. Eroaa samannäköisestä lapintiirasta parhaiten suuremman kärjestä tumman nokkansa ansiosta (lapintiiralla kokopunainen)",
			location: "Kaikenlaiset vesistöt.",
			sound:
				"Toistaa varsinkin varoitellessa omaa nimeään ”tiir-ra” , yleisesti kovia ”ti-ti” -ääniä.",
			other:
				"Lekuttaa usein paikallaan veden päällä ja syöksyy veteen pikkukalan perään.",
			size: "Noin 35 cm, selvästi tavanomaisia lokkilajeja pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/kalatiira-vainio-petri-800x592.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kalatiira-copyright-birdlife.mp3",
		id: "kalatiira",
		scientificName: "Sterna hirundo",
	},
	{
		nameFi: "Ruisrääkkä",
		nameSv: "Kornknarr",
		averageSizeCm: 25,
		description: {
			appearance:
				"Harvoin nähty. Ruskeankirjava harmaapäinen kanamainen ja lyhytpyrstöinen. Lennossa voimakkaan punaruskeat siivet.",
			location:
				"Pelloilla, erityisesti heinämailla ja matalakasvustoisilla kuivahkoilla kosteikoilla.",
			sound:
				"Yksitoikkoinen kauaskuuluva ”kree kree” , joka voi toistua loppumattomana läpi yön. Laulaa toisinaan myös päiväsaikaan.",
			other:
				"Piilotteleva, yleensä vain laulu paljastaa esiintymisen. Juoksee karkuun mieluummin kuin lentää. Viikko 25",
			size: "Noin 25 cm, hieman räkättirastasta suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/ruisraakka-fager-micha-800x580.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/crecre.mp3",
		id: "ruisraakka",
		scientificName: "Crex crex",
	},
	{
		nameFi: "Käki",
		nameSv: "Gök",
		averageSizeCm: 35,
		description: {
			appearance:
				"Hoikka ja pitkäpyrstöinen, ehkä aavistuksen varpushaukkaa muistuttava pääosin harmaa (toisinaan myös ruskea) pieninokkainen lintu.",
			location:
				"Monenlaisissa ympäristöissä, pihoilla, metsissä, kosteikoilla, soilla.",
			sound:
				"Tavallisin ääni on tuttu ”kuk-kuu” , jota toistelee muutamasta muutamaan kymmeneen kertaan peräkkäin.",
			other:
				"Ei rakenna itse pesää, vaan munii toisten lintujen pesään ja jättää poikasen kasvatuksen toisen lajin vanhempien tehtäväksi. Pohjois-Karjalan maakuntalintu.",
			size: "Noin 35 cm eli selvästi mustarastasta suurempi, mutta harakkaa pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/kaki-rasp-pertti.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kaki-copyright-birdlife.mp3",
		id: "kaki",
		scientificName: "Cuculus canorus",
	},
	{
		nameFi: "Kuovi",
		nameSv: "Storspov",
		averageSizeCm: 55,
		description: {
			appearance:
				"Varsin suurikokoinnen ja ruskeankirjava kahlaajalintu. Erittäin pitkä ja alaspäin käyrä nokka tekevät kuovista helposti tunnistettavan.",
			location: "Pelloilla, erityisesti laitumilla ja heinämailla, avosoilla.",
			sound:
				"Tavallisimmin toistaa nimeään ”kuu-vi” . Muuttoaikaan yleisesti ”kyi-kyi-kyi” -ääntä, joka kuuluu kesällä etelää kohti matkaavista parvista.",
			other:
				"Syysmuutto alkaa monien kahlaajalajien tavoin jo aikaisin kesäkuussa. Naaraat jättävät poikasista huolehtimisen koiraiden tehtäväksi. Etelä-Pohjanmaan maakuntalintu. Viikko 26",
			size: "Noin 55 cm, variksen kokoluokkaa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/06/kuovi-fager-micha.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kuovi-copyright-birdlife.mp3",
		id: "kuovi",
		scientificName: "Numenius arquata",
	},
	{
		nameFi: "Liro",
		nameSv: "Grönbena",
		averageSizeCm: 20,
		description: {
			appearance:
				"Kellertäväjalkainen ruskeankirjava ”peruskahlaaja”, jolla selvä vaalea silmäkulmanjuova ja ruskealla selkäpuolella vaaleita täpliä. Rantasipiä selvästi pitkäjalkaisempi.",
			location:
				"Suot ja matalakasvuiset kosteikot, peltoaukeiden tulvalammikot.",
			sound:
				"Perusääni nopea ”jif-jif” . Soidinlaulussa huutaa omaa nimeään ”liro-liro-liro”.",
			other:
				"Suomen runsain pesivä kahlaajalaji. Pesiminen painottuu pohjoiseen, muuttoaikoihin yleinen koko maassa.",
			size: "Noin 20 cm eli kottaraisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/07/liro-fager-micha.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/liro-copyright-birdlife.mp3",
		id: "liro",
		scientificName: "Tringa nebularia",
	},
	{
		nameFi: "Rantasipi",
		nameSv: "Drillsnäppa",
		averageSizeCm: 20,
		description: {
			appearance:
				"Pieni lyhytjalkainen yläpuolelta tasaisen ruskea ja alapuolelta valkea kahlaaja, jolla voimakas jyrkkä väriraja rinnassa.",
			location: "Karujen vesistöjen rannat. Tavallinen myös mökkirannoilla.",
			sound:
				"Varoittaa kirkkaalla ”hiip” -äänellä ja veden pintaa lentäessään huutaa usein mukavaa ”hi-di-dii hi-di-dii” -sarjaa.",
			other: "Keikuttaa luonteenomaisesti pyrstöään liikkuessaan. Viikko 27",
			size: "Noin 20 cm eli kottaraisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/07/rantasipi-fager-micha.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/rantasipi-copyright-birdlife.mp3",
		id: "rantasipi",
		scientificName: "Actitis hypoleucos",
	},
	{
		nameFi: "Silkkiuikku",
		nameSv: "Skäggdopping",
		averageSizeCm: 48,
		description: {
			appearance:
				"Hyvin pitkäkaulainen ja siro vesilintu, jolla näyttäisi olevan oranssinmusta polkkatukka ja mustat korvatupsut. Kaula valkoinen.",
			location: "Monenlaiset vesistöt, runsain rehevissä lahdissa.",
			sound:
				"Varsin äänekäs, mutta ei kaunisääninen. Äänivalikoima koostuu monenlaisista karheista korinoista.",
			other:
				"Poikaset päästä raidallisia. Viihtyvät emojen selässä siipien suojassa.",
			size: "Noin 48 cm eli sinisorsaa hieman pienempi, mutta selvästi sirompi ja lyhyempiruumiinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/07/silkkiuikku-vainio-petri-800x551.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/silkkiuikku-copyright-birdlife.mp3",
		id: "silkkiuikku",
		scientificName: "Podiceps cristatus",
	},
	{
		nameFi: "Kuikka",
		nameSv: "Storlom",
		averageSizeCm: 70,
		description: {
			appearance:
				"Suuri ja pitkäkaulainen, mustan ja valkean kirjava, harmaapäinen ja tikarinokkainen vesilintu. Lähisukulaisesta kaakkurista sen erottaa mustasta kurkusta ja valkeista selkäkuvioista.",
			location:
				"Karuilla kirkasvesisillä järvillä. Suurilla selkävesillä, mutta myös pienehköillä metsäjärvillä.",
			sound:
				"Monenlaisia voimakkaita kirkkaita ja korisevia ääniä. Luonteenomainen helposti tunnettava ääni on kuikan ”ku-kuik ku-kuik” -huuto, joka voi kuulua tyynellä järvellä kilometrien päähän.",
			other:
				"Pitkäikäinen, saavuttaa sukukypsyyden vasta 5–7 vuoden iässä. Pohjois-Savon maakuntalintu. Viikko 28",
			size: "Noin 70 cm eli selvästi sinisorsaa suurempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/07/kuikka-vainio-petri-800x588.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kuikka-copyright-birdlife.mp3",
		id: "kuikka",
		scientificName: "Gavia arctica",
	},
	{
		nameFi: "Naurulokki",
		nameSv: "Skrattmås",
		averageSizeCm: 37.5,
		description: {
			appearance:
				"Ruskea huppu erottaa vanhan linnun kaikista muista lokeista, paitsi pikkulokista. Nuori lintu on ruskean- ja harmaankirjava. Kaikilla ikäluokilla valkea siiven etureuna.",
			location:
				"Pesii Etelä- ja Keski-Suomessa rehevillä kosteikoilla, luodoilla ja merenlahdilla. Ruokailee pelloilla ja kaatopaikoilla.",
			sound:
				"Kirkuvat ja rääkyvät – ei niinkään nauravat – äänet aivan erilaisia kuin muilla lokeilla.",
			other:
				"Pesii yhdyskunnissa, syysmuutto alkaa kesällä ja suuri osa naurulokeista lähtee jo heinäkuussa.",
			size: "Noin 35–40 cm, suunnilleen kesykyyhkyn kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-naurulokit-micha-fager-800x372.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/naurulokki-copyright-birdlife.mp3",
		id: "naurulokki",
		scientificName: "Chroicocephalus ridibundus",
	},
	{
		nameFi: "Kalalokki",
		nameSv: "Fiskmås",
		averageSizeCm: 42.5,
		description: {
			appearance:
				"Vaaleanharmaa selkä, kellanvihreät jalat. Nokka hennompi ja vaaleampi kuin harmaalokilla, eikä siinä ole punaista kärkitäplää.",
			location: "Koko Suomessa järvillä, rannikolla ja saaristossa.",
			sound: "Kailottava ”keä” tai ”kiiiä” , ääni kimeämpi kuin harmaalokilla.",
			other:
				"Pesä tavallisesti maassa, mutta voi rakentaa pesänsä puun oksalle tai rakennuksen katolle, erityisesti kaupungeissa ja tehdasalueilla. Viikko 29",
			size: "Noin 40–45 cm, vähän suurempi kuin naurulokki, selvästi pienempi kuin harmaalokki.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kalalokki-micha-fager-800x486.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kalalokki-copyright-birdlife.mp3",
		id: "kalalokki",
		scientificName: "Larus canus",
	},
	{
		nameFi: "Räystäspääsky",
		nameSv: "Hussvala",
		averageSizeCm: 14,
		description: {
			appearance:
				"Muuten tummassa yläpuolessa erottuu valkea yläperälaikku, alapuoli valkea. Lyhyt pyrstö.",
			location:
				"Koko Suomessa, pesii yhdyskunnittain muun muassa maatiloilla ja teollisuusalueilla.",
			sound: "Visertely kuivempi ja pingottuneempi kuin haarapääskyllä.",
			other:
				"Muuraa savesta puolipallomaisen pesän räystään tai muun suojan alle. Pesintää voi helpottaa asettamalla räystään alle laudan, jonka päällä pesä pysyy.",
			size: "Noin 14 cm, pienempi kuin haarapääsky.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-raystaspaasky_petri-vainio-800x364.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/raystaspaasky-copyright-birdlife.mp3",
		id: "raystaspaasky",
		scientificName: "Delichon urbicum",
	},
	{
		nameFi: "Haarapääsky",
		nameSv: "Ladusvala",
		averageSizeCm: 19,
		description: {
			appearance:
				"Selkäpuoli kokonaan tumma, vatsapuoli valkea lukuun ottamatta tummaa kurkkua ja punertavaa naamaa. Hyvin pitkä pyrstö (koiraalla pitempi).",
			location: "Lähes koko Suomessa, erityisesti maatiloilla.",
			sound: "Hyväntuulinen, Rupatteleva ja nariseva visertely.",
			other:
				"Kerääntyy loppukesällä parviin, jotka yöpyvät ruovikoissa. Suurimmissa yöpymisparvissa voi olla tuhansia lintuja. Viikko 30",
			size: "Noin 19 cm, josta pyrstön osuus koiraalla jopa kolmannes.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-haarapaasky_micha-fager-800x399.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/haarapaasky-copyright-birdlife.mp3",
		id: "haarapaasky",
		scientificName: "Hirundo rustica",
	},
	{
		nameFi: "Tervapääsky",
		nameSv: "Tornseglare",
		averageSizeCm: 18,
		description: {
			appearance:
				"Valkeaa kurkkua lukuun ottamatta kokonaan tummanruskea, voi näyttää mustalta. Pitkät, kapeat, sirppimäiset siivet.",
			location:
				"Lähes koko maassa kaupungeissa, kylissä ja maalaistalojen pihapiireissä. Asutuksen ulkopuolella harvinainen.",
			sound: "Kirkuva, usein nouseva tai laskeva ”srriii”.",
			other:
				"Tervapääsky ei nimestään huolimatta ole sukua pääskyille vaan kuuluu kiitäjien heimoon. Pohjanmaan maakuntalintu.",
			size: "Noin 18 cm, suurempi kuin haara- ja räystäspääsky.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-tervapaasky_juyssi-vakkala-800x490.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tervapaasky-copyright-birdlife.mp3",
		id: "tervapaasky",
		scientificName: "Apus apus",
	},
	{
		nameFi: "Sääksi",
		nameSv: "Fiskgjuse",
		averageSizeCm: 60,
		description: {
			appearance:
				"Päältä tummanruskea, alta pääosin vaalea. Pää valkea, silmästä niskaan tumma juova.",
			location:
				"Harvakseltaan Koko Suomessa, runsaimmin rannikolla ja Sisä-Suomen järviseudulla.",
			sound:
				"Yllättävän heikko piipittävä ”pjyp” , varoitusääni voimakkaampi toistuva ”pjyp-pjyp-pjyp”.",
			other:
				"Lekuttelee, syöksyy ja sukeltaa saaliin kimppuun. Syö pelkästään kaloja. Kanta-Hämeen maakuntalintu. Viikko 31",
			size: "Noin 60 cm, suurin päiväpetolintumme kotkien jälkeen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-saaksi-micha-fager-800x511.jpg",
		audioUrl: "",
		id: "saaksi",
		scientificName: "Pandion haliaetus",
	},
	{
		nameFi: "Metsäkirvinen",
		nameSv: "Skogspiplärka",
		averageSizeCm: 15,
		description: {
			appearance:
				"Selkäpuoli rusehtava, vatsapuoli kellanvalkea, viiruja rinnassa, kupeilla ja selässä. Sekoitettavissa niittykirviseen.",
			location:
				"Hyvin yleinen valoisissa männiköissä sekä hakkuuaukeiden ja metsien reunoilla.",
			sound:
				"Usein lennossa esitettävä laulu alkaa reippaasti ja laskee ja hidastuu loppua kohden. Kutsuääni sirahtava ”bsri”.",
			other:
				"Metsäkirvinen on Suomen kuudenneksi runsain pesimälintu. Pesiviä pareja on lähes kaksi miljoonaa.",
			size: "Noin 15 cm, suunnilleen talitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-metsakirvinen-micha-fager-800x447.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/metsakirvinen-copyright-birdlife.mp3",
		id: "metsakirvinen",
		scientificName: "Anthus trivialis",
	},
	{
		nameFi: "Keltavästäräkki",
		nameSv: "Gulärla",
		averageSizeCm: 16,
		description: {
			appearance:
				"Koiraan vatsapuoli kirkkaankeltainen, selkä kellanvihreä ja pää harmaa. Naaras alta himmeänkeltainen. Syksyisellä nuorella linnulla on vain alaperässä keltaista sävyä.",
			location:
				"Pesii koko maassa soilla ja kosteilla niityillä, muuttoaikoina pelloilla.",
			sound:
				"Laulu yksinkertainen toistettu venähtävä, karkea ”psriiy” , lento- ja kutsuääni ”tsliy”.",
			other:
				"Pohjois-Suomen keltavästäräkit kuuluvat alalajiin, jonka koiraalla on silmän ympärillä tumma alue. Etelä-Suomessa pesivillä välimuotoisilla koirailla on vaihtelevasti tumma tai valkea silmäkulmanjuova. Viikko 32",
			size: "Noin 16 cm, suunnilleen västäräkin kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-keltavastarakki-koiras-micha-fager-800x451.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/motfla.mp3",
		id: "keltavastarakki",
		scientificName: "Motacilla flava",
	},
	{
		nameFi: "Tavi",
		nameSv: "Kricka",
		averageSizeCm: 37.5,
		description: {
			appearance:
				"Juhlapukuinen koiras harmaa, punaruskeassa päässä sinivihreä kuvio. Naaras ja peruspukuinen koiras ruskeankirjava. Vihreä siipipeili.",
			location:
				"Yleinen koko maassa pienillä järvillä ja rehevillä kosteikoilla.",
			sound:
				"Sinisorsamainen, vähän korkeampi rääpätys, keväinen soidinääni voimakas ”krikk”.",
			other: "Tavi on sinisorsan ohessa runsain sorsalintumme.",
			size: "Noin 35–40 cm, pienin sorsamme.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-tavi-hannu-eskonen-pekka-komi-k-800x364.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tavi-copyright-birdlife.mp3",
		id: "tavi",
		scientificName: "Anas crecca",
	},
	{
		nameFi: "Haapana",
		nameSv: "Bläsand",
		averageSizeCm: 47.5,
		description: {
			appearance:
				"Pyöreä pää ja korkea otsa, nokka siniharmaa. Juhlapukuinen koiras harmaa, tiilenpunaisessa päässä vaalea otsa, valkea siipilaikku. Naaras ja peruspukuinen koiras punaruskea.",
			location: "Yleinen koko maassa monenlaisissa vesistöissä.",
			sound: "Koiraan soidinääni sivaltava ”viuuh” , naaraalla käheä rääpätys.",
			other:
				"Haapana on monen muun vesilinnun tavoin vähentynyt, ja laji luokitellaan uhanalaiseksi. Viikko 33",
			size: "Noin 45–50 cm, pienempi kuin sinisorsa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-haapana-petri-vainio-pekka-komi-pk-800x484.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/haapana-copyright-birdlife.mp3",
		id: "haapana",
		scientificName: "Anas penelope",
	},
	{
		nameFi: "Merimetso",
		nameSv: "Storskarv",
		averageSizeCm: 113.33333333333333,
		description: {
			appearance:
				"Vanha lintu mustahko, nuori tummanruskea, valkovatsainen. Lyhyt jalat, lyhyt pyrstö. Istuu pystyasennossa, usein siipiä sivuillaan kuivattaen.",
			location: "Pesii rannikkoalueella noin 50 yhdyskunnassa.",
			sound: "Yleensä hiljainen. Pesällä korisevia kurkkuääniä.",
			other:
				"Merimetso palasi yli sadan vuoden tauon jälkeen Suomen pesimälinnustoon vuonna 1996, minkä jälkeen kanta on voimakkaasti kasvanut.",
			size: "90–100 cm (siipiväli noin 150 cm), meri- ja kanadanhanhen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-merimetso-pertti-rasp-800x455.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/merimetso-copyright-birdlife.mp3",
		id: "merimetso",
		scientificName: "Phalacrocorax carbo",
	},
	{
		nameFi: "Harmaahaikara",
		nameSv: "Gråhäger",
		averageSizeCm: 123.33333333333333,
		description: {
			appearance:
				"Yleisväri harmaa. Pitkä kaula, joka lennossa mutkalla. Pitkät jalat, lyhyt pyrstö ja voimakas, tikarimainen nokka.",
			location:
				"Pesii paikoin saaristossa yhdyskuntina, harvinaisena sisämaassakin.",
			sound: "Karhea, kova rääkäisy ”hrääk”.",
			other:
				"Pesinnän jälkeen hajaantuvat laajalle alueelle. Loppukesällä ja syksyllä kaikkialla kiertelijöitä eteläistä Lappia myöten merenlahdilla, järvillä ja muilla kosteikoilla. Viikko 34",
			size: "90–100 cm (siipiväli noin 180 cm), pienempi kuin kurki.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-harmaahaikara-micha-fager-800x420.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/ardcin.mp3",
		id: "harmaahaikara",
		scientificName: "Ardea cinerea",
	},
	{
		nameFi: "Harmaasieppo",
		nameSv: "Grå Flugsnappare",
		averageSizeCm: 14.5,
		description: {
			appearance:
				"Ei silmiinpistäviä tuntomerkkejä: selkäpuoli harmaanruskea, vatsapuoli vaalea, rinnassa heikkoja viiruja. Tummat jalat, tumma nokka.",
			location: "Yleinen koko maassa metsissä ja pihoilla.",
			sound: "Vaatimaton kuiva sirahdus ”tsri”.",
			other:
				"Harmaasiepon tapa pyrähtää lentoon sieppaamaan hyönteisiä on hyvä tapa erottaa laji muista hyönteissyöjäpikkulinnuista.",
			size: "14–15 cm, talitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-harmaasieppo-pertti-rasp-800x392.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/harmaasieppo-copyright-birdlife.mp3",
		id: "harmaasieppo",
		scientificName: "Muscicapa striata",
	},
	{
		nameFi: "Tiltaltti",
		nameSv: "Gransångare",
		averageSizeCm: 11,
		description: {
			appearance:
				"Pieni ja hento, muistuttaa suuresti pajulintua (ks. 40); eroina muun muassa tummat jalat, lyhyempi siipi ja selvä valkea silmärengas.",
			location:
				"Yleinen Etelä-Lappia myöten erityisesti kuusivaltaisissa metsissä.",
			sound:
				"Laulu pehmeästi tiputteleva ”tilt-tilt-talt…” , kutsuääni ponnekas ”hyit”.",
			other:
				"Tiltaltti on yksi monista äänen perusteella nimetyistä linnuistamme. Tällaisia nimiä sanotaan onomatopoeettisiksi. Viikko 35",
			size: "10–12 cm, pajulinnun ja sinitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-tiltaltti-pekka-komi-800x418.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tiltaltti-copyright-birdlife.mp3",
		id: "tiltaltti",
		scientificName: "Phylloscopus collybita",
	},
	{
		nameFi: "Tuulihaukka",
		nameSv: "Tornfalk",
		averageSizeCm: 35,
		description: {
			appearance:
				"Teräväkärkiset siivet ja pitkä pyrstö. Vanhalla koiraalla ruskea selkä, harmaa pää ja harmaa, mustakärkinen pyrstö. Naaraalla ja nuorella ruosteenruskea täplikäs selkä ja poikkijuovainen pyrstö.",
			location: "Koko maassa pelloilla ja muilla avoimilla paikoilla.",
			sound: "Tavallisin ääni kimittävä ”ki-ki-ki-…” Kuuntele .",
			other:
				"Lekuttelee usein paikoillaan etsiessään saalista. Näkee myyrien virtsaamisjäljet, jotka heijastavat ultraviolettivaloa.",
			size: "Noin 35 cm, suunnilleen käen kokoinen, pienempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-tuulihaukka-micha-fager-800x419.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tuulihaukka-copyright-birdlife.mp3",
		id: "tuulihaukka",
		scientificName: "Falco tinnunculus",
	},
	{
		nameFi: "Varpushaukka",
		nameSv: "Sparvhök",
		averageSizeCm: 32.5,
		description: {
			appearance:
				"Leveät, pyöreäpäiset siivet ja pitkä pyrstö. Hennot pitkät keltaiset jalat. Selkäpuoli ruskea tai harmaa (vanha koiras), vaaleassa vatsapuolessa poikittaista juovitusta.",
			location:
				"Pohjoisinta Lappia lukuun ottamatta koko maassa tiheissä metsissä.",
			sound: "Yleensä hiljainen, kutsu- ja soidinääni valittava ”kiii”.",
			other:
				"Yleisin päiväpetolintumme. Suurin osa varpushaukoista muuttaa syyskuussa Suomesta, osa jää talvehtimaan. Viikko 36",
			size: "30–35 cm, pienempi kuin varis. Naaras suurempi kuin koiras.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-varpushaukka-pekka-komi-micha-fager-800x419.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/varpushaukka-marc-anderson-xeno-canto-cc.mp3",
		id: "varpushaukka",
		scientificName: "Accipiter nisus",
	},
	{
		nameFi: "Pajusirkku",
		nameSv: "Sävsparv",
		averageSizeCm: 15,
		description: {
			appearance:
				"Kirjava, suhteellisen pitkäpyrstöinen sirkku. Juhlapukuinen koiras helppo tuntea mustasta päästä. Naaraat ja syksyiset linnut tunnistaa punaruskeasta siivestä, mustankirjavasta selkäpuolesta ja likaisenkellertävästä tummaviiruisesta alapuolesta.",
			location:
				"Koko maassa runsaskasvustoisilla ja pensaikkoisilla rannoilla.",
			sound:
				"Kutsuääni helposti tunnettava ”psiy” . Laulu lyhyt änkyttävä karkea säe.",
			other:
				"Yksi rantaruovikoiden yleisimpiä pikkulintuja ruokokerttusen ohella.",
			size: "Noin 15 cm eli peipon kokoluokkkaa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/09/100-pajusirkku-micha-fager-pertti-rasp-k.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/pajusirkku-copyright-birdlife.mp3",
		id: "pajusirkku",
		scientificName: "Emberiza schoeniclus",
	},
	{
		nameFi: "Hippiäinen",
		nameSv: "Kungsfågel",
		averageSizeCm: 9,
		description: {
			appearance:
				"Hyvin pieni ja palleromainen Yläpuolelta vihertävä ja alapuolelta harmaa. Päälaella keltaoranssi tai keltainen raita, jonka sivuilla kapeat mustat juovat.",
			location:
				"Metsissä, erityisesti havumetsissä. Syksyisin erityisen runsas saaristossa.",
			sound:
				"Hyvin korkeita ja kirkkaita ääniä . Laulu korkea toistuva veivaava säe.",
			other:
				"Vanhempien ihmisten on vaikea kuulla hippiäisen korkeita ääniä. Viikko 37",
			size: "Noin 9 cm, selvästi tiaisia ja pajulintua pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/09/100-hippiainen-micha-fager.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/hippiainen-copyright-birdlife.mp3",
		id: "hippiainen",
		scientificName: "Regulus regulus",
	},
	{
		nameFi: "Sepelkyyhky",
		nameSv: "Ringduva",
		averageSizeCm: 40,
		description: {
			appearance:
				"Roteva ja pitkäpyrstöinen pääosin harmaa peruskyyhkymme. Siivillä valkea poikittaisjuova. Vanhoilla linnuilla kaulan sivuilla valkea sepel, joka puuttuu nuorilta.",
			location: "Peltoalueet ja niiden reunametsät. Kaupunkien puistot.",
			sound: "Monitavuinen kumea kuherrus ”kuu-kuu-ku-kuu”.",
			other:
				"Huomattavasti runsastunut ja levittäytynyt kaupunkien keskustoihin saakka pesimään viime vuosikymmeninä.",
			size: "Noin 40 cm, hieman varista pienempi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/09/100-sepelkyyhky-micha-fager.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/sepelkyyhky-copyright-birdlife.mp3",
		id: "sepelkyyhky",
		scientificName: "Columba palumbus",
	},
	{
		nameFi: "Närhi",
		nameSv: "Nötskrika",
		averageSizeCm: 35,
		description: {
			appearance:
				"Pääosin harmaanpunertava varislintu, jonka siivellä sinisen ja mustan kirjava laikku. Huteran näköisessä lennossa paljastuvat yläperän ja siiven valkeat laikut.",
			location:
				"Pesimäaikaan suosii seka- ja kuusimetsiä. Syksyllä ja talvella tavallinen maaseudulla myös pihoissa . Käy mielellään ruokinnalla varsinkin alkutalvesta",
			sound:
				"Voimakas karhea rääkäisy. On taitava matkimaan muun muassa hiirihaukkaa.",
			other:
				"Kerää syksyllä tammenterhoja ja muita herkkuja metsiin varastoihin. Voi innostua myös keräämään pähkinöitä ruokinnalta omiin varastoihinsa, jolloin niiden menekki voi olla hyvin suurta. Viikko 38",
			size: "Noin 35 cm, naakan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/09/100-narhi-pekka-komi.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/narhi-copyright-birdlife.mp3",
		id: "narhi",
		scientificName: "Nucifraga caryocatactes",
	},
	{
		nameFi: "Piekana",
		nameSv: "Fjällvråk",
		averageSizeCm: 95,
		description: {
			appearance:
				"Leveät pyöreäpäiset siivet vähän pidemmät kuin hiirihaukalla. Lyhyehkön pyrstön tyvi valkoinen ja kärjessä musta vyö.",
			location:
				"Pesii Lapissa, satunnaisesti etelämpänä, muuttoaikoina koko maassa.",
			sound: "Tavallisin ääni pitkä venytetty ”pieee”.",
			other: "Runsaus vaihtelee suuresti myyrä- ja sopulitilanteen mukaan.",
			size: "50–60 cm, siipiväli 120–150 cm, suurempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-piekana-pekka-komi-800x384.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/butlag.mp3",
		id: "piekana",
		scientificName: "Buteo lagopus",
	},
	{
		nameFi: "Hiirihaukka",
		nameSv: "Ormvråk",
		averageSizeCm: 85,
		description: {
			appearance:
				"Väritys vaihtelee. Leveät pyöreäpäiset siivet ja lyhyehkö pyrstö. Lyhyt paksu kaula.",
			location:
				"Viljelysten pirstomilla metsäalueilla Etelä- ja Keski-Suomessa.",
			sound: "Naukuva ”kiää” , jota närhi erehdyttävästi matkii.",
			other:
				"Euroopan runsaslukuisin petolintu luokitellaan Suomessa vaarantuneeksi. Ks. lisää muualla sivustossamme . Viikko 39",
			size: "45–55 cm, siipiväli 110–130 cm, suurempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-hiirihaukka-micha-fager-pekka-komi-800x401.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/hiirihaukka-janne-bruun-xeno-canto-cc.mp3",
		id: "hiirihaukka",
		scientificName: "Circus cyaneus",
	},
	{
		nameFi: "Vihervarpunen",
		nameSv: "Grönsiska",
		averageSizeCm: 11.5,
		description: {
			appearance:
				"Koiras yleisväriltään kellanvihreä, päälaki musta. Naaras himmeämmän värinen, päälaki vihertävä. Molemmilla sukupuolilla keltainen siipijuova.",
			location: "Lähes koko maassa havu- ja sekametsissä.",
			sound:
				"Laulu kiihkeää ja rupattelevaa viserrystä, kutsuääni haikea ”dsiyy”.",
			other:
				"Parvet ruokailevat muuttoaikoina ja talvella erityisesti lepän ja koivujen siemenillä.",
			size: "11–12 cm, sinitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-vihervarpunen-micha-fager-800x420.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/vihervarpunen-copyright-birdlife.mp3",
		id: "vihervarpunen",
		scientificName: "Spinus spinus",
	},
	{
		nameFi: "Punarinta",
		nameSv: "Rödhake",
		averageSizeCm: 13.5,
		description: {
			appearance:
				"Palleromainen. Selkäpuoli ruskea, naama ja rinta tiilenpunainen, vatsa vaalea.",
			location:
				"Lähes koko maassa metsissä, yhä useammin myös pihoilla ja puistoissa.",
			sound:
				"Laulu kaunis, verkkainen helisevä juoksutus, kutsuääni terävä tiksahdus.",
			other:
				"Yömuuttaja. Leutoina talvina Suomeen saattaa jäädä satoja punarintoja. Viikko 40",
			size: "13–14 cm, talitiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-punarinta-micha-fager-800x437.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/punarinta-copyright-birdlife.mp3",
		id: "punarinta",
		scientificName: "Erithacus rubecula",
	},
	{
		nameFi: "Kanadanhanhi",
		nameSv: "Kanadagås",
		averageSizeCm: 95,
		description: {
			appearance:
				"Pitkäkaulainen, selkä harmaanruskea, kaula ja pää mustat, pään sivussa valkea laikku.",
			location: "Rannikolla ja järvillä Etelä- ja Keski-Suomessa.",
			sound: "Äänekäs joutsenmainen kailotus.",
			other:
				"Tuotu Pohjois-Amerikasta Eurooppaan riista- ja puistolinnuksi. Suomen kanta sai alkunsa 1960- ja 1970-luvuilla tuoduista linnuista.",
			size: "90–100 cm, suurin hanhistamme, pienempi kuin joutsenet.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kanadanhanhi-pekka-komi-800x455.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/bracan.mp3",
		id: "kanadanhanhi",
		scientificName: "Branta canadensis",
	},
	{
		nameFi: "Valkoposkihanhi",
		nameSv: "Vitkindad Gås",
		averageSizeCm: 65,
		description: {
			appearance:
				"Typäkkä, lyhytkaulainen. Selkä harmaa, rinta ja kaula mustat, koko naama valkoinen.",
			location:
				"Pesii rannikkoalueilla ja paikoin sisämaassa, muuttoaikoina suurin parvin Itä- ja Etelä-Suomessa.",
			sound: "Nenäsointinen haukahtelu.",
			other:
				"Tulokaslaji, joka on pesinyt Suomessa 1980-luvun alusta lähtien. Aikaisemmin vain arktinen läpimuuttaja. Viikko 41",
			size: "60–70 cm, suurempi kuin sinisorsa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-valkoposkihanhi-jussi-vakkala-800x435.jpg",
		audioUrl: "http://www.lintukuva.fi/aanet/braleu.mp3",
		id: "valkoposkihanhi",
		scientificName: "Branta leucopsis",
	},
	{
		nameFi: "Punakylkirastas",
		nameSv: "Rödvingetrast",
		averageSizeCm: 21,
		description: {
			appearance:
				"Selkäpuoli ruskea, alapuoli vaalea ja tummaviiruinen, kupeilla ja siiven alla ruosteenpunaista, silmän päällä valkea silmäkulmanjuova.",
			location: "Yleinen koko maassa.",
			sound:
				"Huilumainen nopea laulu vaihtelee alueellisesti, säe päättyy kitisevään viserrykseen. Kutsuääni sirahtava ”sriii”.",
			other:
				"Lokakuussa voi yöllä kuulla runsaastikin muuttavien punakylkirastaiden kutsuääniä.",
			size: "Noin 21 cm, pienempi kuin räkättirastas.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-punakylkirastas-micha-fager-800x450.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/punakylkirastas-copyright-birdlife.mp3",
		id: "punakylkirastas",
		scientificName: "Turdus iliacus",
	},
	{
		nameFi: "Räkättirastas",
		nameSv: "Björktrast",
		averageSizeCm: 25,
		description: {
			appearance:
				"Pitkä musta pyrstö, harmaa yläperä ja pää, ruosteenruskea selkä, alapuoli täplikäs, rinta ruosteenkeltainen.",
			location: "Yleinen koko maassa.",
			sound:
				"Räksyttävä ”krjä-krjä-krjäk” , laverteleva laulu koostuu räksyttävistä äänistä.",
			other:
				"Hyvinä pihlajanmarjavuosina räkättirastaat viipyvät meillä tavallista pitempään. Etelä-Suomessa voi silloin nähdä isoja parvia vielä joulu-tammikuussa. Viikko 42",
			size: "Noin 25 cm, mustarastaan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-rakattirastas-micha-fager-800x405.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/rakattirastas-copyright-birdlife.mp3",
		id: "rakattirastas",
		scientificName: "Turdus pilaris",
	},
	{
		nameFi: "Isolepinkäinen",
		nameSv: "Varfågel",
		averageSizeCm: 24,
		description: {
			appearance:
				"Vatsapuoli valkea, selkäpuoli harmaa, siivillä ja pyrstössä mustaa ja musta ”rosvonaamari”. Pitkä pyrstö.",
			location:
				"Pesii Pohjois- ja Länsi-Suomessa puoliavoimilla soilla ja hakkuuaukoilla, talvella peltoaukeilla myös Etelä-Suomessa.",
			sound: "Laulu kitisevää lavertelua, jossa muiden lajien matkintoja.",
			other:
				"Syö myyriä ja muita pikkunisäkkäitä, joita se tähystää näkyvästi puun latvassa tai sähkölangalla. Varastoi ylimääräisiä saaliita seivästämällä ne piikkilankoihin tai oksanhankaan.",
			size: "Noin 24 cm, räkättirastaan kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-isolepinkainen_micha-fager-800x340.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/isolepinkainen-copyright-birdlife.mp3",
		id: "isolepinkainen",
		scientificName: "Lanius excubitor",
	},
	{
		nameFi: "Tilhi",
		nameSv: "Sidensvans",
		averageSizeCm: 20,
		description: {
			appearance:
				"Marjapuuron värinen. Päälaella töyhtö, kurkku ja silmän seutu mustat, pyrstön ja siipisulkien kärjessä kirkkaankeltaiset reunat.",
			location:
				"Pesii harvakseltaan Pohjois-Suomen havumetsissä, syksyllä ja talvella pihlajanmarjojen perässä kaikkialla Suomessa.",
			sound: "Kirkas sirinä muistuttaa pienten tiukujen helinää.",
			other:
				"Tilhen maksa hajottaa hyvin tehokkaasti alkoholia, jota voi muodostua käyneisiin marjoihin. Viikko 43",
			size: "Noin 20 cm, kottaraisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-tilhi-micha-fager-800x420.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tilhi-copyright-birdlife.mp3",
		id: "tilhi",
		scientificName: "Bombycilla garrulus",
	},
	{
		nameFi: "Tukkasotka",
		nameSv: "Vigg",
		averageSizeCm: 45,
		description: {
			appearance:
				"Juhlapukuisella koiraalla valkeat kupeet ja muuten musta, päässä töyhtö. Naaras tummanruskea.",
			location: "Koko maassa saaristossa, merenlahdilla ja rehevillä järvillä.",
			sound: "Naaraan ääni rääpättävä narskutus.",
			other:
				"Ilmastonmuutoksen seurauksena Suomessa talvehtii nykyään kymmeniätuhansia tukkasotkia. Aikaisemmin laji talvehti meillä vain satunnaisesti. Ks. lisää muualla sivustossamme .",
			size: "Noin 45 cm, telkän kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2016/05/100-tukkasotka-micha-fager-800x382.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/tukkasotka-copyright-birdlife.mp3",
		id: "tukkasotka",
		scientificName: "Melanitta fusca",
	},
	{
		nameFi: "Isokoskelo",
		nameSv: "Storskrake",
		averageSizeCm: 62.5,
		description: {
			appearance:
				"Juhlapukuisella koiraalla tumma pää ja selkä, muuten vaalea. Naaras harmahtava, ruskea pää. Molemmilla kapea pitkä punertava nokka.",
			location: "Koko maassa saaristossa, rannikolla ja karuilla järvillä.",
			sound: "Lentoääni löysä ”prää prää prää”.",
			other:
				"Syö kalaa ja muita vedeneläviä. Syksyllä ja talvella isot parvet voivat kalastaa ryhmässä ajamalla kaloja edellään. Ks. lisää muualla sivustossamme . Viikko 44",
			size: "60–65 cm, suurempi kuin sinisorsa.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-isokoskelo-micha-fager-800x345.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/isokoskelo-copyright-birdlife.mp3",
		id: "isokoskelo",
		scientificName: "Mergus merganser",
	},
	{
		nameFi: "Hiiripöllö",
		nameSv: "Hökuggla",
		averageSizeCm: 40,
		description: {
			appearance:
				"Pitkäpyrstöinen ja lennossa haukkamainen. Vaalea vatsa poikkijuovainen, selkäpuoli ruskea, hartioilla vaalea laikku. Silmät keltaiset.",
			location:
				"Harvakseltaan Pohjois-Suomessa, satunnaisesti Etelä-Suomessa. Kanta vaihtelee pikkunisäkästilanteen mukaan.",
			sound: "Soidinääni nopea, pulppuileva puputus.",
			other:
				"Vaeltaa epäsäännöllisesti etelään. Päiväaktiivinen, päivystää peltoaukeilla ja metsien reunoilla.",
			size: "Noin 40 cm, lehtopöllön kokoinen, vähän pienempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-hiiripollo-pertti-rasp-800x482.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/hiiripollo-eero-patsi-xeno-canto-cc.mp3",
		id: "hiiripollo",
		scientificName: "Asio otus",
	},
	{
		nameFi: "Varpuspöllö",
		nameSv: "Sparvuggla",
		averageSizeCm: 17,
		description: {
			appearance:
				"Typäkkä ja lyhytpyrstöinen. Pieni pää, pistävänkeltaiset silmät. Vatsapuolen pohjaväri valkea, selkäpuolen ruskea.",
			location:
				"Kuusivaltaisissa metsissä Etelä- ja Keski-Suomessa, Pohjois-Suomessa harvinainen.",
			sound: "Soidinääni yksitoikkoinen harva vihellyssarja.",
			other:
				"Tulee talvella myös pihoihin, varastoi myyriä ja pikkulintuja luonnonkoloon tai kottaraispönttöön. Viikko 45",
			size: "Noin 17 cm, pienin pöllömme, pienempi kuin kottarainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-varpuspollo-pertti-rasp-800x466.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/varpuspollo-antero-lindholm-xeno-canto-cc.mp3",
		id: "varpuspollo",
		scientificName: "Glaucidium passerinum",
	},
	{
		nameFi: "Kuukkeli",
		nameSv: "Lavskrika",
		averageSizeCm: 29,
		description: {
			appearance:
				"Pääosin synkänruskea, mutta vatsapuolella, siivillä ja pitkässä pyrstössä oranssinpunaista.",
			location:
				"Lapin ja Kainuun metsäseuduilla, etelämpänä paikoittain harvalukuisena.",
			sound: "Usein äänetön, toisinaan hiljaista käheää jutustelua.",
			other:
				"Tulee usein pelottomana leiripaikoille ja metsäkämpille. Kainuun maakuntalintu. Ks. lisää muualla sivustossamme.",
			size: "Noin 29 cm, suunnilleen ison rastaan kokoinen, pienempi kuin närhi.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kuukkeli-micha-fager-800x415.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kuukkeli-copyright-birdlife.mp3",
		id: "kuukkeli",
		scientificName: "Coracias garrulus",
	},
	{
		nameFi: "Puukiipijä",
		nameSv: "Trädkrypare",
		averageSizeCm: 13,
		description: {
			appearance:
				"Selkäpuoli ruskea (maastoutuu hyvin puunrunkoa vasten), vatsapuoli valkea. Pitkä, kapea alaskaartuva nokka.",
			location:
				"Kuusivaltaisissa metsissä Etelä-Lapista etelään. Voi tulla talvella lintulaudalle.",
			sound:
				"Laulu lyhyt ponnekas, vähän pajulintumainen säe. Kutsuääni korkea kirkas ”tiii”.",
			other:
				"Kiipeää ruokaa etsiessään puunrunkoa ylöspäin ja lennähtää sitten alemmas seuraavaan puuhun kiivetäkseen taas ylöspäin. Viikko 46",
			size: "Noin 13 cm, pienempi kuin talitiainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-puukiipija-jyrki-makela-800x469.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/puukiipija-copyright-birdlife.mp3",
		id: "puukiipija",
		scientificName: "Certhia familiaris",
	},
	{
		nameFi: "Kanahaukka",
		nameSv: "Duvhök",
		averageSizeCm: 28.05,
		description: {
			appearance:
				"Selkäpuoli harmaa (vanha) tai ruskea (nuori), vatsapuolella poikkijuovia (vanha) tai pitkittäisviirutusta (nuori). Lennossa leveät pyöreäpäiset siivet ja pitkä pyrstö.",
			location: "Havu- ja sekametsissä lähes koko maassa.",
			sound: "Voimakas, naakkamainen ”kja kja kja” lähinnä pesimäaikana.",
			other:
				"Osa kanahaukoista on siirtynyt metsistä kaupunkipuistoihin saalistamaan muun muassa puluja ja lokkeja. Ks. lisää muualla sivustossamme.",
			size: "Noin 50–60 cm (naaras suurempi kuin koiras, siipiväli 1–1,2 m), suurempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-kanahaukka-pertti-rasp-micha-fager-800x437.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/kanahaukka-eetu-paljakka-xeno-canto-cc.mp3",
		id: "kanahaukka",
		scientificName: "Accipiter gentilis",
	},
	{
		nameFi: "Merikotka",
		nameSv: "Havsörn",
		averageSizeCm: 43.6,
		description: {
			appearance:
				"Leveät ja pitkät siivet, siipien kärjissä voimakkaat harittajat. Lyhyt kiilamainen pyrstö. Nuori lintu tumma, vanha vaaleampi ja valkopyrstöinen.",
			location:
				"Rannikkoalueella ja saaristossa sekä paikoin suurilla järvillä, muuttoaikoina koko maassa.",
			sound:
				"Yleensä hiljainen. Pesimäaikana kimittävä, palokärkimäinen ”kji kji kji”.",
			other:
				"Käy laiskana saalistajana haaskoilla ja perkuujätteillä. Syö myös merimetsoja niiden yhdyskunnissa. Ahvenanmaan maakuntalintu. Viikko 47",
			size: "Noin 80–90 cm (siipiväli 2–2,4 m), suurin petolintumme.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-merikotka-micha-fagerf-ja-petri-vainio-800x407.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/merikotka-terje-kolaas-xeno-canto-cc.mp3",
		id: "merikotka",
		scientificName: "Haliaeetus albicilla",
	},
	{
		nameFi: "Riekko",
		nameSv: "Dalripa",
		averageSizeCm: 40,
		description: {
			appearance:
				"Talvella kokonaan valkoinen mustia pyrstösulkia lukuun ottamatta, kesällä siivet valkeat ja muuten punaruskea.",
			location:
				"Soiden laitamilla ja tunturikoivikoissa maan pohjoispuoliskolla.",
			sound: "Nenäsointinen, naurava kaklatus.",
			other:
				"Muiden metsäkanalintujen tavoin riekko yöpyy talvella – milloin mahdollista – kiepissä eli lumionkalossa. Peräpohjolan maakuntalintu.",
			size: "Noin 40 cm, pienempi kuin teeri.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-riekko-petri-vainio-800x328.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/riekko-copyright-birdlife.mp3",
		id: "riekko",
		scientificName: "Lagopus lagopus",
	},
	{
		nameFi: "Teeri",
		nameSv: "Orre",
		averageSizeCm: 47.5,
		description: {
			appearance:
				"Kiiltävänmustalla koiraalla komea lyyran mallinen pyrstö ja valkeat siipijuovat, ruskeankirjavalla naaraalla lennossa vaalea siipijuova ja loivasti lovipäinen pyrstö.",
			location:
				"Metsissä ja soilla koko maassa Tunturi-Lappia lukuun ottamatta .Talvella koivikoissa.",
			sound: "Soitimella kujertavaa pulinaa ja suhinaa.",
			other:
				"Keväällä koiraat kokoontuvat näyttävään ryhmäsoitimeen aukeille paikoille. Viikko 48",
			size: "Noin 40–55 cm, variksen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-teeri-micha-fager-800x435.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/teeri-copyright-birdlife.mp3",
		id: "teeri",
		scientificName: "Tetrao tetrix",
	},
	{
		nameFi: "Lapintiainen",
		nameSv: "Lappmes",
		averageSizeCm: 13.5,
		description: {
			appearance:
				"Päälaki suklaanruskea, selkä vaaleampi, kyljillä ruosteenruskeaa. Tumma kurkkulappu ja valkeat posket.",
			location: "Metsäalueilla Lapissa ja Perä-Pohjolassa.",
			sound: "Kutsuääni samantyyppinen kuin hömötiaisella, mutta vaimeampi.",
			other:
				"Paikkalintu, joka näyttäytyy harvoin pesimäalueen eteläpuolella. Joinakin syksyinä nuoria lintuja vaeltaa kuitenkin etelärannikkoa myöten.",
			size: "Noin 13–14 cm, suunnilleen hömötiaisen kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-lapintiainen-micha-fager-800x365.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/lapintiainen-copyright-birdlife.mp3",
		id: "lapintiainen",
		scientificName: "Poecile cinctus",
	},
	{
		nameFi: "Hömötiainen",
		nameSv: "Talltita",
		averageSizeCm: 12.5,
		description: {
			appearance:
				"Selkä harmaa, vatsa vaaleampi. Musta päälaki ja kurkkulappu, valkeat posket.",
			location:
				"Koko maassa metsäalueilla, pohjoisimmassa Lapissa harvalukuinen.",
			sound: "Kutsuääni käheä ”ti-ti-tsää-tsää-tsää”.",
			other:
				"Vähentynyt voimakkaasti, ja luokiteltiin siksi vuoden 2019 uhanalaisarvioinnissa erittäin uhanalaiseksi. Ks. lisää muualla sivustossamme . Viikko 49",
			size: "Noin 12–13 cm, vähän pienempi kuin talitiainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-homotiainen-micha-fager-800x357.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/homotiainen-copyright-birdlife.mp3",
		id: "homotiainen",
		scientificName: "Poecile montanus",
	},
	{
		nameFi: "Korppi",
		nameSv: "Korp",
		averageSizeCm: 62.5,
		description: {
			appearance:
				"Kiiltävänmusta. Hyvin järeä nokka. Lennossa kiilamainen pyrstö.",
			location:
				"Koko Suomessa metsäseuduilla, erityisesti rauhallisilla erämaa-alueilla.",
			sound: "Kovia karkeita ääniä, kuten ”kroo” tai ”korrp”.",
			other:
				"Suomen suurin varpuslintu. Korpit ovat kokeissa osoittautuneet hyvin älykkäiksi linnuiksi.",
			size: "Noin 60–65 cm, suurempi kuin varis ja harmaalokki.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-korppi-petri-vainio-800x491.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/korppi-copyright-birdlife.mp3",
		id: "korppi",
		scientificName: "Corvus corax",
	},
	{
		nameFi: "Naakka",
		nameSv: "Kaja",
		averageSizeCm: 33,
		description: {
			appearance: "Osin tummanharmaa ja mustanharmaa. silmä lähes valkoinen.",
			location: "Etelä- ja Länsi-Suomessa kylissä ja kaupungeissa.",
			sound: "Nenäsointinen ”kja-kjak” tai ”kjä-kjä”.",
			other:
				"Pesii luonnonkoloihin, rakennusten onkaloihin tai voimalinjapylväiden tukirakenteisiin. Kokoontuu suuriin yöpymisparviin. Varsinais-Suomen maakuntalintu. Viikko 50",
			size: "Noin 33 cm, kesykyyhkyn kokoinen, pienempi kuin varis.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-naakka-micha-fager-800x465.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/naakka-copyright-birdlife.mp3",
		id: "naakka",
		scientificName: "Corvus monedula",
	},
	{
		nameFi: "Urpiainen",
		nameSv: "Gråsiska",
		averageSizeCm: 13,
		description: {
			appearance:
				"Yleisväri vaaleanharmaa tai ruskeanharmaa, viiruinen. Otsa punainen, koiraalla myös rinta punainen.",
			location:
				"Pesii Pohjois-Suomen metsissä. Muuttoaikoina ja talvella Etelä-Suomessa.",
			sound: "Sirisevä, pirteä silputus.",
			other:
				"Ruokailee talvella suurin parvin rikkaruohostoissa ja pelloilla ja käy myös ruokinnoilla. Määrät vaihtelevat vuodesta toiseen.",
			size: "Noin 13 cm, pienempi kuin talitiainen, suurempi kuin sinitiainen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-urpiainen-micha-fager-800x418.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/urpiainen-copyright-birdlife.mp3",
		id: "urpiainen",
		scientificName: "Acanthis flammea",
	},
	{
		nameFi: "Punatulkku",
		nameSv: "Domherre",
		averageSizeCm: 16,
		description: {
			appearance:
				"Vatsapuoli koiraalla punainen, naaraalla harmaanruskea.Selkäpuoli harmaa, pyrstön tyvellä valkoinen laikku. Mustaa siivillä, pyrstössä ja päälaella.",
			location: "Kuusivaltaisissa metsissä lähes koko maassa.",
			sound: "Lyhyt, vaimea vihellys.",
			other:
				"Osittaismuuttaja, suuri osa jää meille talveksi, mutta osa muuttaa pois. Kymenlaakson maakuntalintu. Lisälajeja",
			size: "Noin 16 cm, suurempi kuin talitiainen, suunnilleen peipon kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2017/02/100-punatulkku-micha-fager-petri-vainio-800x356.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/punatulkku-copyright-birdlife.mp3",
		id: "punatulkku",
		scientificName: "Pyrrhula pyrrhula",
	},
	{
		nameFi: "Laulurastas",
		nameSv: "Taltrast",
		averageSizeCm: 21,
		description: {
			appearance:
				"Selkäpuoli ruskea, keltainen rinta ja vaalea maha voimakkaan mustapilkkuiset (”nuolenpääkuviot”), kupeilla ja siipien alla kellertävää väriä.",
			location: "Yleinen koko maassa.",
			sound:
				"Laulu kuuluvaa ja rauhallista, toistaa samaa aihetta 2–4 kertaa. Kutsuääni terävä ”tsik”. Kuuntele",
			other:
				"Rastaaksi varsin ihmisarka, viihtyy paremmin metsissä kuin pihapiireissä.",
			size: "Noin 21 cm, pienempi kuin räkättirastas.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2021/06/turphi-MF-1-e1623398509718-800x606.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/laulurastas-copyright-birdlife.mp3",
		id: "laulurastas",
		scientificName: "Turdus philomelos",
	},
	{
		nameFi: "Punavarpunen",
		nameSv: "Rosenfink",
		averageSizeCm: 14,
		description: {
			appearance:
				"Tukevanokkainen ja pitkäpyrstöinen. Vanha koiraan pää ja rinta huomiota herättävän punaiset. Nuoret ja naaraat tasavärisen ruskeita.",
			location:
				"Yleinen koko maassa napapiirin eteläpuolella. Tavataan kosteikoilla ja maatalousympäristöissä.",
			sound:
				"Laulu pehmeä, kolme–neljäosainen vihellyssarja ( ”nice to meet you” ). Kuuntele",
			other: "Kuuluu harvalukuisiin Aasiassa talvehtiviin muuttolintuihimme.",
			size: "noin 14 cm, peipon kokoinen.",
		},
		imageUrl:
			"https://www.birdlife.fi/wp-content/uploads/2021/06/carery-MF-800x606.jpg",
		audioUrl:
			"https://tiedostot.birdlife.fi/100lajia/punavarpunen-copyright-birdlife.mp3",
		id: "punavarpunen",
		scientificName: "Carpodacus erythrinus",
	},
];
