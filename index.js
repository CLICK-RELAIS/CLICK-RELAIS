const communesParWilaya = {
    select: [''],
    wilaya0: ['- Choisir une commune -'],
    wilaya1: ['ADRAR', 'TAMEST', 'CHAROUINE', 'REGGANE', 'INZGHMIR', 'TIT', 'KSAR KADDOUR', 'TSABIT', 'TIMIMOUN', 'OULED SAÏD', 'ZAOUET KOUNTA', 'AOULEF', 'TAMOKTEN', 'TAMANTIT', 'FENOUGHIL', 'TINERKOUK', 'DELDOUL', 'SALI', 'AKABLI', 'METARFA', 'OULED AHMED TAMMI', 'BOUDA', 'AOUGROUT', 'TALMINE', 'BORDJ BADJI MOKHTAR', 'SEBAA', 'OULED AISSA', 'TIMIAOUINE'],
    wilaya2: ['ABOU EL HASSAN', 'AÏN MERANE', 'BÉNAIRIA', 'BENI BOUATEB', 'BENI HAOUA', 'BENI RACHED', 'BOUKADIR', 'BOUZEGHAIA', 'BREIRA', 'CHETTIA', 'CHLEF', 'DAHRA', 'EL HADJADJ', 'EL KARIMIA', 'EL MARSA', 'HARCHOUN', 'HARENFA', 'LABIOD MEDJADJA', 'MOUSSADEK', 'OUED FODDA', 'OUED GOUSSINE', 'OUED SLY', 'OULED ABBES', 'OULED BEN ABDELKADER', 'OULED FARES', 'OUM DROU', 'SENDJAS', 'SIDI ABDERRAHMANE', 'SIDI AKKACHA', 'SOBHA', 'TADJENA', 'TALASSA', 'TAOUGRITE', 'TÉNÈS', 'ZEBOUDJA'],
    wilaya3: ['AFLOU', 'AÏN MADHI', 'AÏN SIDI ALI', 'BEIDHA', 'BENNASSER BENCHOHRA', 'BRIDA', 'EL ASSAFIA', 'EL GHICHA', 'EL HOUAITA', 'GUELTAT SIDI SAAD', 'HADJ MECHRI', 'HASSI DELAA', 'HASSI R’MEL', 'KHENEG', 'KSAR EL HIRANE', 'LAGHOUAT', 'OUED M’ZI', 'OUED MORRA', 'SEBGAG', 'SIDI BOUZID', 'SIDI MAKHLOUF', 'TADJEMOUT', 'TADJROUNA', 'TAOUIALA'],
    wilaya4: ['OUM EL BOUAGHI', 'AÏN BABOUCHE', 'AÏN BEIDA', 'AÏN DISS', 'AÏN FAKROUN', 'AÏN KERCHA', 'AÏN MLILA', 'AÏN ZITOUN', 'BEHIR CHERGUI', 'BERRICHE', 'BIR CHOUHADA', 'DHALA', 'EL AMIRIA', 'EL BELALA', 'EL DJAZIA', 'EL FEDJOUZ BOUGHARA SAOUDI', 'EL HARMILIA', 'FKIRINA', 'HANCHIR TOUMGHANI', 'KSAR SBAHI', 'MESKIANA', 'OUED NINI', 'OULED GACEM', 'OULED HAMLA', 'OULED ZAOUI', 'RAHIA', 'SIGUS', 'SOUK NAAMANE', 'ZORG'],
    wilaya5: ['BATNA', 'GHASSIRA', 'MAAFA', 'MEROUANA', 'SERIANA', 'MENAA', 'EL MADHER', 'TAZOULT', 'N`GAOUS', 'GUIGBA', 'INOUGISSEN', 'OUYOUN EL ASSAFIR', 'DJERMA', 'BITAM', 'ABDELKADER AZIL', 'ARRIS', 'KIMMEL', 'TILATOU', 'AÏN DJASSER', 'OULED SELLAM', 'TIGHERGHAR', 'AÏN YAGOUT', 'SEFIANE', 'FESDIS', 'RAHBAT', 'TIGHANIMINE', 'LEMSANE', 'KSAR BELLEZMA', 'SEGGANA', 'ICHMOUL', 'FOUM TOUB', 'BEN FOUDHALA EL HAKANIA', 'OUED EL MA', 'TALKHAMT', 'BOUZINA', 'CHEMORA', 'OUED CHAABA', 'TAXLENT', 'GOSBAT', 'OULED AOUF', 'BOUMAGUER', 'BARIKA', 'DJEZAR', 'T`KOUT', 'AÏN TOUTA', 'HIDOUSSA', 'TENIET EL ABED', 'OUED TAGA', 'OULED FADEL', 'TIMGAD', 'RAS EL AIOUN', 'CHIR', 'OULED SI SLIMANE', 'ZANAT EL BEIDA', 'MDOUKEL', 'OULED AMMAR', 'EL HASSI', 'LAZROU', 'BOUMIA', 'BOULHILAT', 'LARBAÂ'],
    wilaya6: ['BÉJAÏA', 'AMIZOUR', 'FERRAOUN', 'TAOURIRT IGHL', 'CHELLATA', 'TAMOKRA', 'TIMEZRIT', 'SOUK EL TÉNINE', 'M`CISNA', 'TINABDHER', 'TICHY', 'SEMAOUNE', 'KENDIRA', 'TIFRA', 'IGHRAM', 'AMALOU', 'IGHIL ALI', 'FENAÏA ILMATEN', 'TOUDJA', 'DARGUINA', 'SIDI-AYAD', 'AOKAS', 'BENI DJELLIL', 'ADEKAR', 'AKBOU', 'SEDDOUK', 'TAZMALT', 'AÏT-R`ZINE', 'CHEMINI', 'SOUK-OUFELLA', 'TASKRIOUT', 'TIBANE', 'TALA HAMZA', 'BARBACHA', 'BENI KSILA', 'OUZELLAGUEN', 'BOUHAMZA', 'BENI MELLIKECHE', 'SIDI-AÏCH', 'EL KSEUR', 'MELBOU', 'AKFADOU', 'LEFLAYE', 'KHERRATA', 'DRAÂ EL-KAÏD', 'TAMRIDJET', 'AÏT-SMAIL', 'BOUKHELIFA', 'TIZI N`BERBER', 'BENI MAOUCHE', 'OUED GHIR', 'BOUDJELLIL'],
    wilaya7: ['AÏN NAGA', 'AÏN ZAATOUT', 'BISKRA', 'BORDJ BEN AZZOUZ', 'BOUCHAGROUNE', 'BRANIS', 'CHETMA', 'DJEMORAH', 'DOUCEN', 'EL FEIDH', 'EL GHROUS', 'EL HADJEB', 'EL HAOUCH', 'EL KANTARA', 'EL MIZARAA', 'EL OUTAYA', 'FOUGHALA', 'KHENGUET SIDI NADJI', 'LICHANA', 'LIOUA', 'M`CHOUNECHE', 'MEKHADMA', 'M`LILI', 'OULED DJELLAL', 'OULED HARKAT', 'OULED RAHMA', 'OULED SASSI', 'OUMACHE', 'OURLAL', 'SIDI KHALED', 'SIDI OKBA', 'TOLGA', 'ZERIBET EL OUED'],
    wilaya8: ['BÉCHAR', 'ERG FERRADJ', 'OULED KHOUDIR', 'MERIDJA', 'TIMOUDI', 'LAHMAR', 'BÉNI ABBÈS', 'BENI IKHLEF', 'MECHRAA HOUARI BOUMEDIENNE', 'KENADSA', 'IGLI', 'TABELBALA', 'TAGHIT', 'EL OUATA', 'BOUKAIS', 'MOUGHEUL', 'ABADLA', 'KERZAZ', 'KSABI', 'TAMTERT', 'BENI OUNIF'],
    wilaya9: ['BLIDA', 'CHEBLI', 'BOUINAN', 'OUED ALLEUG', 'OULED YAÏCH', 'CHRÉA', 'EL AFFROUN', 'CHIFFA', 'HAMMAM MELOUANE', 'BENKHELIL', 'SOUMAA', 'MOUZAIA', 'SOUHANE', 'MEFTAH', 'OULED SLAMA', 'BOUFARIK', 'LARBAÂ', 'OUED DJER', 'BENI TAMOU', 'BOUARFA', 'BENI MERED', 'BOUGARA', 'GUEROUAOU', 'AÏN ROMANA', 'DJEBABRA'],
    wilaya10: ['AÏN BESSEM', 'HANIF', 'AGHBALOU', 'AÏN EL HADJAR', 'AHL EL KSAR', 'AÏN LALOUI', 'ATH MANSOUR', 'AOMAR', 'AÏN EL TURC', 'AÏT LAZIZ', 'BOUDERBALA', 'BECHLOUL', 'BIR GHBALOU', 'BOUKRAM', 'BORDJ OKHRISS', 'BOUIRA', 'CHORFA', 'DECHMIA', 'DIRRAH', 'DJEBAHIA', 'EL HAKIMIA', 'EL HACHIMIA', 'EL ADJIBA', 'EL KHABOUZIA', 'EL MOKRANI', 'EL ASNAM', 'GUERROUMA', 'HAIZER', 'HADJERA ZERGA', 'KADIRIA', 'LAKHDARIA', 'M`CHEDALLAH', 'MEZDOUR', 'MAALA', 'MAAMORA', 'OUED EL BERDI', 'OULED RACHED', 'RAOURAOUA', 'RIDANE', 'SAHARIDJ', 'SOUR EL GHOUZLANE', 'SOUK EL KHEMIS', 'TAGUEDIT', 'TAGHZOUT', 'ZBARBAR'],
    wilaya11: ['Commune A', 'Commune B', 'Commune C'],
    wilaya12: ['Commune A', 'Commune B', 'Commune C'],
    wilaya13: ['Commune A', 'Commune B', 'Commune C'],
    wilaya14: ['Commune A', 'Commune B', 'Commune C'],
    wilaya15: ['Commune A', 'Commune B', 'Commune C'],
    wilaya16: ['ALGER-CENTRE', 'SIDI M`HAMED', 'EL MADANIA', 'BELOUIZDAD', 'BAB EL OUED', 'BOLOGHINE', 'CASBAH', 'OUED KORICHE', 'BIR MOURAD RAÏS', 'EL BIAR', 'BOUZAREAH', 'BIRKHADEM', 'EL HARRACH', 'BARAKI', 'OUED SMAR', 'BACHDJERRAH', 'HUSSEIN DEY', 'KOUBA', 'BOUROUBA', 'DAR EL BEÏDA', 'BAB EZZOUAR', 'BEN AKNOUN', 'DELY IBRAHIM', 'BAÏNEM', 'RAÏS HAMIDOU', 'DJASR KASENTINA', 'EL MOURADIA', 'HYDRA', 'MOHAMMADIA', 'BORDJ EL KIFFAN', 'EL MAGHARIA', 'BENI MESSOUS', 'LES EUCALYPTUS', 'BIRTOUZA', 'TESSALA EL MERDJA', 'OULED CHEBEL', 'SIDI MOUSSA', 'AÏN TAYA', 'BORDJ EL BAHRI', 'EL MARSA', 'H`RAOUA', 'ROUIBA', 'REGHAÏA', 'AÏN BENIAN', 'STAOUELI', 'ZERALDA', 'MAHELMA', 'RAHMANIA', 'SOUIDANIA', 'CHERAGA', 'OULED FAYET', 'EL ACHOUR', 'DRARIA', 'DOUERA', 'BABA HASSEN', 'KHRAICIA', 'SAOULA'],
    wilaya17: ['Commune A', 'Commune B', 'Commune C'],
    wilaya18: ['Commune A', 'Commune B', 'Commune C'],
    wilaya19: ['Commune A', 'Commune B', 'Commune C'],
    wilaya20: ['Commune A', 'Commune B', 'Commune C'],
    wilaya21: ['Commune A', 'Commune B', 'Commune C'],
    wilaya22: ['Commune A', 'Commune B', 'Commune C'],
    wilaya23: ['Commune A', 'Commune B', 'Commune C'],
    wilaya24: ['Commune A', 'Commune B', 'Commune C'],
    wilaya25: ['Commune A', 'Commune B', 'Commune C'],
    wilaya26: ['Commune A', 'Commune B', 'Commune C'],
    wilaya27: ['Commune A', 'Commune B', 'Commune C'],
    wilaya28: ['Commune A', 'Commune B', 'Commune C'],
    wilaya29: ['Commune A', 'Commune B', 'Commune C'],
    wilaya30: ['Commune A', 'Commune B', 'Commune C'],
    wilaya31: ['Commune A', 'Commune B', 'Commune C'],
    wilaya32: ['Commune A', 'Commune B', 'Commune C'],
    wilaya33: ['Commune A', 'Commune B', 'Commune C'],
    wilaya34: ['Commune A', 'Commune B', 'Commune C'],
    wilaya35: ['Commune A', 'Commune B', 'Commune C'],
    wilaya36: ['Commune A', 'Commune B', 'Commune C'],
    wilaya37: ['Commune A', 'Commune B', 'Commune C'],
    wilaya38: ['Commune A', 'Commune B', 'Commune C'],
    wilaya39: ['Commune A', 'Commune B', 'Commune C'],
    wilaya40: ['Commune A', 'Commune B', 'Commune C'],
    wilaya41: ['Commune A', 'Commune B', 'Commune C'],
    wilaya42: ['AGHBAL', 'AHMAR EL AÏN', 'AÏN TAGOURAIT', 'ATTATBA', 'BENI MILLEUK', 'BOU ISMAÏL', 'BOUHAROUN', 'BOURKIKA', 'CHAIBA', 'CHERCHELL', 'DAMOUS', 'DOUAOUDA', 'FOUKA', 'GOURAYA', 'HADJERET ENNOUS', 'HADJOUT', 'KHEMISTI', 'KOLÉA', 'LARHAT', 'MENACEUR', 'MERAD', 'MESSELMOUN', 'NADOR', 'SIDI AMAR', 'SIDI GHILES', 'SIDI RACHED', 'SIDI SEMIANE', 'TIPAZA'],
    wilaya43: ['Commune A', 'Commune B', 'Commune C'],
    wilaya44: ['Commune A', 'Commune B', 'Commune C'],
    wilaya45: ['Commune A', 'Commune B', 'Commune C'],
    wilaya46: ['Commune A', 'Commune B', 'Commune C'],
    wilaya47: ['Commune A', 'Commune B', 'Commune C'],
    wilaya48: ['Commune A', 'Commune B', 'Commune C'],
    wilaya49: ['Commune A', 'Commune B', 'Commune C'],
    wilaya50: ['Commune A', 'Commune B', 'Commune C'],
    wilaya51: ['Commune A', 'Commune B', 'Commune C'],
    wilaya52: ['Commune A', 'Commune B', 'Commune C'],
    wilaya53: ['Commune A', 'Commune B', 'Commune C'],
    wilaya54: ['Commune A', 'Commune B', 'Commune C'],
    wilaya55: ['Commune A', 'Commune B', 'Commune C'],
    wilaya56: ['Commune A', 'Commune B', 'Commune C'],
    wilaya57: ['Commune A', 'Commune B', 'Commune C'],
    wilaya58: ['Commune A', 'Commune B', 'Commune C'],
  };
  
  const codeHTMLParCommune = {
    'CHETTIA': '<iframe src="https://my.atlist.com/map/fdfbc17c-25c4-48ff-a997-9a4aa0078796?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="800px" loading="lazy" frameborder="0" border-radius: "30px" scrolling="no" allowfullscreen></iframe>',
    'BOU ISMAÏL':'<iframe src="https://my.atlist.com/map/e2bca319-8d67-4c9d-aacf-9e563a557832?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="800px" loading="lazy" frameborder="0" border-radius: "30px" scrolling="no" allowfullscreen></iframe>',
    'KOLÉA' : '<iframe src="https://my.atlist.com/map/df757e02-91ea-4d79-b438-94281a4f95f1?share=true" allow="geolocation \'self\' https://my.atlist.com" width="100%" height="800px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen></iframe>',

    'ADRAR' : '<h3>Cette commune ne dispose pas de point de relais</h3>',
  };


  function chargerCommunes() {
    const wilayaSelect = document.getElementById('wilaya');
    const communeSelect = document.getElementById('commune');
    const wilayaValue = wilayaSelect.value;
  
    communeSelect.innerHTML = '';
  
    const communes = communesParWilaya[wilayaValue];
  
    if (communes) {
      communes.forEach(commune => {
        const option = document.createElement('option');
        option.value = commune;
        option.textContent = commune;
        communeSelect.appendChild(option);
      });
    }
  }
  
  chargerCommunes();

 
  document.getElementById('afficherIframeBtn').addEventListener('click', function() {
    const communeSelect = document.getElementById('commune');
    const communeValue = communeSelect.value;
  
    if (codeHTMLParCommune.hasOwnProperty(communeValue)) {
      const iframeContainer = document.getElementById('iframeContainer');
      iframeContainer.innerHTML = codeHTMLParCommune[communeValue];
    } else {
      console.error('Aucun code HTML n\'est défini pour la commune sélectionnée.');
    }
  });








const menu = document.getElementById("menu");
const actions = document.getElementById("actions");
const test = document.getElementById("test");
menu.addEventListener("click",()=>{
    hundleMenu();

})

function hundleMenu(){
menu.classList.toggle("is-active");
actions.classList.toggle("is-active");
test.classList.toggle("is-active");
}
