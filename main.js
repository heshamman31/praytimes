
let countrys = [
  {value: "EG" , name:"مصر"},
  {value: "SA" , name:"السعودية"},
  {value: "SY" , name:"سوريا"},
  {value: "SD" , name:"السودان"},
  {value: "PS" , name:"فلسطين"},
  {value: "TN" , name:"تونس"},
  {value: "SO" , name:"الصومال"},
  {value: "DZ" , name:"الجزائر"},
  {value: "MA" , name:"المغرب"},
  {value: "IQ" , name:"العراق"},
  {value: "YE" , name:"اليمن"},
  {value: "LY" , name:"ليبيا"},
  {value: "JO" , name:"الأردن"},
  {value: "AE" , name:"الأمارات"},
  {value: "LB" , name:"لبنان"},
  {value: "MR" , name:"موريتانيا"},
  {value: "KW" , name:"الكويت"},
  {value: "OM" , name:"عمان"},
  {value: "QA" , name:"قطر"},
  {value: "BH" , name:"البحرين"},
];
let countrysSelection = document.getElementById('country');
for(let i = 0 ; i < countrys.length;i++){
  countrysSelection.innerHTML += `
  <option value="${countrys[i].value}">${countrys[i].name}</option>
  `
}
let list = {
  EG:[
    {value:"Cairo",name:"القاهرة"},
    {value:"Giza",name:"الجيزة"},
    {value:"Alexandria",name:"الإسكندرية"},
    {value:"Qalyubia",name:"القليوبية"},
    {value:"Aswan",name:"أسوان"},
    {value:"Asyut",name:"أسيوط"},
    {value:"Beheira",name:"البحيرة"},
    {value:"Beni Suef",name:"بني سويف"},
    {value:"Dakahlia",name:"الدقهلية"},
    {value:"Damietta",name:"دمياط"},
    {value:"Faiyum",name:"الفيوم"},
    {value:"Gharbia",name:"الغربية"},
    {value:"Ismailia",name:"الإسماعيلية"},
    {value:"Kafr El Sheikh",name:"كفر الشيخ"},
    {value:"Luxor",name:"الأقصر"},
    {value:"Matruh",name:"مطروح"},
    {value:"Minya",name:"المنيا"},
    {value:"Monufia",name:"المنوفية"},
    {value:"New Valley",name:"الوادي الجديد"},
    {value:"North Sinai",name:"شمال سيناء"},
    {value:"Port Said",name:"بورسعيد"},
    {value:"Qena",name:"قنا"},
    {value:"Red Sea",name:"البحر الأحمر"},
    {value:"Sharqia",name:"الشرقية"},
    {value:"Sohag",name:"سوهاج"},
    {value:"South Sinai",name:"جنوب سيناء"},
    {value:"Suez",name:"السويس"}
  ] ,
  SA: [
    {value:"Riyadh",name:"الرياض"},
    {value:"Makkah",name:"مكة المكرمة"},
    {value:"Jeddah",name:"جدة"},
    {value:"AL Madinah AL Munawwarah",name:"المدينة المنورة"},
    {value:"Al-Qassim",name:"القصيم"},
    {value:"Eastern Province",name:"المنطقة الشرقية"},
    {value:"Asir",name:"عسير"},
    {value:"Tabuk",name:"تبوك"},
    {value:"Hail",name:"حائل"},
    {value:"Najran",name:"نجران"},
    {value:"Al-Bahah",name:"الباحة"},
    {value:"Northern Borders",name:"الحدود الشمالية"},
    {value:"Jazan",name:"جازان"},
    {value:"Al Jawf",name:"الجوف"}
  ],
  SY:[
    {value:"Aleppo",name:"حلب"},
    {value:"Damascus",name:"دمشق"},
    {value:"Homs",name:"حمص"},
    {value:"Hama",name:"حماة"},
    {value:"Latakia",name:"اللاذقية"},
    {value:"Rif Dimashq",name:"ريف دمشق"},
    {value:"Deir ez-Zor",name:"دير الزور"},
    {value:"Daraa",name:"درعا"},
    {value:"Idlib",name:"إدلب"},
    {value:"As-Suwayda",name:"السويداء"},
    {value:"Quneitra",name:"القنيطرة"},
    {value:"Tartus",name:"طرطوس"},
    {value:"Al-Hasakah",name:"الحسكة"},
    {value:"Ar-Raqqah",name:"الرقة"}
  ],
  SD:[
    {value:"Khartoum",name:"الخرطوم"},
    {value:"Northern",name:"شمال"},
    {value:"River Nile",name:"نهر النيل"},
    {value:"Kassala",name:"كسلا"},
    {value:"Gedaref",name:"قضارف"},
    {value:"White Nile",name:"النيل الأبيض"},
    {value:"Blue Nile",name:"النيل الأزرق"},
    {value:"Sennar",name:"سنار"},
    {value:"North Kordofan",name:"شمال كردفان"},
    {value:"South Kordofan",name:"جنوب كردفان"},
    {value:"West Kordofan",name:"غرب كردفان"},
    {value:"North Darfur",name:"شمال دارفور"},
    {value:"South Darfur",name:"جنوب دارفور"},
    {value:"West Darfur",name:"غرب دارفور"},
    {value:"East Darfur",name:"شرق دارفور"},
    {value:"Central Darfur",name:"وسط دارفور"},
    {value:"Red Sea",name:"البحر الأحمر"},
    {value:"Kurdufan",name:"كردفان"},
    {value:"Gezira",name:"الجزيرة"},
    {value:"West Equatoria",name:"غرب الاستوائية"},
    {value:"East Equatoria",name:"شرق الاستوائية"},
    {value:"Jonglei",name:"جونقلي"},
    {value:"Lakes",name:"بحيرات"},
    {value:"Upper Nile",name:"النيل الأعلى"},
    {value:"Unity",name:"وحدة"},
    {value:"Warrap",name:"واراب"}
  ],
  PS: [
    {value:"West Bank",name:"الضفة الغربية"},
    {value:"Gaza Strip",name:"قطاع غزة"}
  ],
  TN: [
    {value:"Ariana",name:"أريانة"},
    {value:"Béja",name:"باجة"},
    {value:"Ben Arous",name:"بن عروس"},
    {value:"Bizerte",name:"بنزرت"},
    {value:"Gabès",name:"قابس"},
    {value:"Gafsa",name:"قفصة"},
    {value:"Jendouba",name:"جندوبة"},
    {value:"Kairouan",name:"القيروان"},
    {value:"Kasserine",name:"القصرين"},
    {value:"Kébili",name:"قبلي"},
    {value:"Kef",name:"الكاف"},
    {value:"Mahdia",name:"المهدية"},
    {value:"Manouba",name:"منوبة"},
    {value:"Medenine",name:"مدنين"},
    {value:"Monastir",name:"المنستير"},
    {value:"Nabeul",name:"نابل"},
    {value:"Sfax",name:"صفاقس"},
    {value:"Sidi Bouzid",name:"سيدي بوزيد"},
    {value:"Siliana",name:"سليانة"},
    {value:"Sousse",name:"سوسة"},
    {value:"Tataouine",name:"تطاوين"},
    {value:"Tozeur",name:"توزر"},
    {value:"Tunis",name:"تونس"},
    {value:"Zaghouan",name:"زغوان"}
  ],
  SO:[
    // {value:"Awdal",name:"أودال"},
    {value:"Bakool",name:"باكول"},
    {value:"Banaadir",name:"بنادر"},
    {value:"Bari",name:"باري"},
    {value:"Bay",name:"باي"},
    {value:"Galguduud",name:"غلغدود"},
    {value:"Gedo",name:"جدو"},
    {value:"Hiran",name:"هران"},
    {value:"Lower Juba",name:"جوبا السفلى"},
    {value:"Middle Juba",name:"جوبا الأوسط"},
    {value:"Lower Shebelle",name:"شبيلي السفلى"},
    {value:"Middle Shebelle",name:"شبيلي الأوسط"},
    {value:"Nugal",name:"نوغال"},
    {value:"Sanaag",name:"سناج"},
    {value:"Sool",name:"سول"},
    {value:"Togdheer",name:"توغدر"},
    {value:"Woqooyi Galbeed",name:"وقوي جالبيد"}
  ],
  DZ: [
  {value:"Adrar",name:"أدرار"},
  {value:"Chlef",name:"الشلف"},
  {value:"Laghouat",name:"الأغواط"},
  {value:"Oum El Bouaghi",name:"أم البواقي"},
  {value:"Batna",name:"باتنة"},
  {value:"Béjaïa",name:"بجاية"},
  {value:"Biskra",name:"بسكرة"},
  {value:"Béchar",name:"بشار"},
  {value:"Blida",name:"البليدة"},
  {value:"Bouira",name:"البويرة"},
  {value:"Tamanrasset",name:"تمنراست"},
  {value:"Tébessa",name:"تبسة"},
  {value:"Tlemcen",name:"تلمسان"},
  {value:"Tiaret",name:"تيارت"},
  {value:"Tizi Ouzou",name:"تيزي وزو"},
  {value:"Algiers",name:"الجزائر"},
  {value:"Djelfa",name:"الجلفة"},
  {value:"Jijel",name:"جيجل"},
  {value:"Sétif",name:"سطيف"},
  {value:"Saïda",name:"سعيدة"},
  {value:"Skikda",name:"سكيكدة"},
  {value:"Sidi Bel Abbès",name:"سيدي بلعباس"},
  {value:"Annaba",name:"عنابة"},
  {value:"Guelma",name:"قالمة"},
  {value:"Constantine",name:"قسنطينة"},
  {value:"Médéa",name:"المدية"},
  {value:"Mostaganem",name:"مستغانم"},
  {value:"M'Sila",name:"المسيلة"},
  {value:"Mascara",name:"معسكر"},
  {value:"Ouargla",name:"ورقلة"},
  {value:"Oran",name:"وهران"},
  {value:"El Bayadh",name:"البيض"},
  {value:"Illizi",name:"اليزي"},
  {value:"Bordj Bou Arréridj",name:"برج بوعريريج"},
  {value:"Boumerdès",name:"بومرداس"},
  {value:"El Tarf",name:"الطارف"},
  {value:"Tindouf",name:"تندوف"},
  {value:"Tissemsilt",name:"تيسمسيلت"},
  {value:"El Oued",name:"الوادي"},
  {value:"Khenchela",name:"خنشلة"},
  {value:"Souk Ahras",name:"سوق أهراس"},
  {value:"Tipaza",name:"تيبازة"},
  {value:"Mila",name:"ميلة"},
  {value:"Aïn Defla",name:"عين الدفلى"},
  {value:"Naâma",name:"النعامة"},
  {value:"Aïn Témouchent",name:"عين تموشنت"},
  {value:"Ghardaïa",name:"غرداية"},
  {value:"Relizane",name:"غليزان"}
],
  MA:[
    {value:"Agadir-Ida-Ou Tanane",name:"أكادير إداوتنان"},
    {value:"Al Hoceïma",name:"الحسيمة"},
    {value:"Azilal",name:"أزيلال"},
    {value:"Béni Mellal",name:"بني ملال"},
    {value:"Béni Mellal-Khénifra",name:"بني ملال-خنيفرة"},
    {value:"Berkane",name:"بركان"},
    {value:"Berrechid",name:"برشيد"},
    {value:"Berrechid-Khouribga",name:"برشيد-خريبكة"},
    {value:"Boujdour",name:"بوجدور"},
    {value:"Boulemane",name:"بولمان"},
    {value:"Casablanca",name:"الدار البيضاء"},
    {value:"Chefchaouen",name:"شفشاون"},
    {value:"Chichaoua",name:"شيشاوة"},
    {value:"Dakhla-Oued Ed-Dahab",name:"الداخلة-وادي الذهب"},
    {value:"Drâa-Tafilalet",name:"درعة-تافيلالت"},
    {value:"El Hajeb",name:"الحاجب"},
    {value:"El Kelâa des Sraghna",name:"القلعة السراغنة"},
    {value:"Errachidia",name:"الرشيدية"},
    {value:"Es-Semara",name:"السمارة"},
    {value:"Essaouira",name:"الصويرة"},
    {value:"Fahs Anjra",name:"فحص أنجرة"},
    {value:"Fès",name:"فاس"},
    {value:"Figuig",name:"فكيك"},
    {value:"Guelmim",name:"كلميم"},
    {value:"Ifrane",name:"إفران"},
    {value:"Inezgane-Aït Melloul",name:"إنزكان-أيت ملول"},
    {value:"Jerada",name:"جرادة"},
    {value:"Kénitra",name:"القنيطرة"},
    {value:"Kelaat Sraghna",name:"القلعة السراغنة"},
    {value:"Khémisset",name:"الخميسات"},
    {value:"Khénifra",name:"خنيفرة"},
    {value:"Khouribga",name:"خريبكة"},
    {value:"Laâyoune",name:"العيون"},
    {value:"Larache",name:"العرائش"},
    {value:"M'diq-Fnideq",name:"مضيق-الفنيدق"},
    {value:"Marrakesh",name:"مراكش"},
    {value:"Meknès",name:"مكناس"},
    {value:"Midelt",name:"ميدلت"},
    {value:"Mohammadia",name:"المحمدية"},
    {value:"Nador",name:"الناظور"},
    {value:"Ouarzazate",name:"وزان"},
    {value:"Oued Ed-Dahab",name:"وادي الذهب"},
    {value:"Ouezzane",name:"وزان"},
    {value:"Safi",name:"أسفي"},
    {value:"Salé",name:"سلا"},
    {value:"Sefrou",name:"صفرو"},
    {value:"Settat",name:"سطات"},
    {value:"Sidi Kacem",name:"سيدي قاسم"},
    {value:"Sidi Slimane",name:"سيدي سليمان"},
    {value:"Sidi Youssef Ben Ali",name:"سيدي يوسف بن علي"},
    {value:"Skhirate-Témara",name:"الصخيرات-تمارة"},
    {value:"Tan-Tan",name:"طانطان"},
    {value:"Tanger",name:"طنجة"},
    {value:"Taounate",name:"تاونات"},
    {value:"Taroudant",name:"تارودانت"},
    {value:"Tata",name:"العرائش"},
    {value:"Taza",name:"تازة"},
    {value:"Tétouan",name:"تطوان"},
    {value:"Tinghir",name:"تنغير"},
    {value:"Tiznit",name:"تزنيت"},
    {value:"Zagora",name:"زاكورة"}
  ],
  IQ: [
    {value:"Baghdad",name:"بغداد"},
    {value:"Basra",name:"البصرة"},
    {value:"Maysan",name:"ميسان"},
    {value:"Dhi Qar",name:"ذي قار"},
    {value:"Muthanna",name:"المثنى"},
    {value:"Qadisiyyah",name:"القادسية"},
    {value:"Wasit",name:"واسط"},
    {value:"Babil",name:"بابل"},
    {value:"Karbala",name:"كربلاء"},
    {value:"Najaf",name:"النجف"},
    {value:"Al-Anbar",name:"الأنبار"},
    {value:"Nineveh",name:"نينوى"},
    {value:"Diyala",name:"ديالى"},
    {value:"Saladin",name:"صلاح الدين"},
    {value:"Kirkuk",name:"كركوك"},
    {value:"Erbil",name:"أربيل"},
    {value:"Sulaymaniyah",name:"السليمانية"},
    {value:"Halabja",name:"حلبجة"},
    {value:"Dohuk",name:"دهوك"}
  ],
  YE:[
    {value:"Sana'a",name:"صنعاء"},
    {value:"Aden",name:"عدن"},
    {value:"Taiz",name:"تعز"},
    {value:"Al Hudaydah",name:"الحديدة"},
    {value:"Ibb",name:"إب"},
    {value:"Dhamar",name:"ذمار"},
    {value:"Al Mahrah",name:"المهرة"},
    {value:"Hadramaut",name:"حضرموت"},
    {value:"Al Jawf",name:"الجوف"},
    {value:"Lahij",name:"لحج"},
    {value:"Abyan",name:"أبين"},
    {value:"Al Bayda",name:"البيضاء"},
    {value:"Al Mahwit",name:"المحويت"},
    {value:"Raymah",name:"ريمة"},
    {value:"Hajjah",name:"حجة"},
    {value:"Sa'dah",name:"صعدة"},
    {value:"Ma'rib",name:"مأرب"},
    {value:"Shabwah",name:"شبوة"}
  ],
  LY:[
    {value:"Tripoli",name:"طرابلس"},
    {value:"Benghazi",name:"بنغازي"},
    {value:"Misrata",name:"مصراتة"},
    {value:"Zawiya",name:"الزاوية"},
    {value:"Tarhuna",name:"ترهونة"},
    {value:"Sirte",name:"سرت"},
    {value:"Al Marj",name:"المرج"},
    {value:"Al Bayda",name:"البيضاء"},
    {value:"Zliten",name:"زليتن"},
    {value:"Derna",name:"درنة"},
    {value:"Sabha",name:"سبها"},
    {value:"Ajdabiya",name:"أجدابيا"},
    {value:"Zuwara",name:"زوارة"},
    {value:"Ghat",name:"غات"},
    {value:"Al Khums",name:"الخمس"},
    {value:"Murqub",name:"مرقب"},
    {value:"Ubari",name:"أوباري"},
    {value:"Wadi Al Hayaa",name:"وادي الحياة"},
    {value:"Janzour",name:"جنزور"},
    {value:"Al Wahat",name:"الواحات"},
    {value:"Al Jabal al Gharbi",name:"الجبل الغربي"},
    {value:"Tobruk",name:"طبرق"},
    {value:"Zintan",name:"زنتان"},
    {value:"Murzuq",name:"مرزق"},
    {value:"Al Butnan",name:"البطنان"},
    {value:"Al Wahat",name:"الواحات"},
    {value:"Al Jufra",name:"الجفرة"},
    {value:"Wadi Al Shatii",name:"وادي الشاطئ"}
  ],
  JO:[
    {value:"Amman",name:"عمان"},
    {value:"Irbid",name:"إربد"},
    {value:"Zarqa",name:"الزرقاء"},
    {value:"Balqa",name:"البلقاء"},
    {value:"Karak",name:"الكرك"},
    {value:"Ma'an",name:"معان"},
    {value:"Ajloun",name:"عجلون"},
    {value:"Jerash",name:"جرش"},
    {value:"Aqaba",name:"العقبة"},
    {value:"Madaba",name:"مادبا"},
    {value:"Tafilah",name:"الطفيلة"},
    {value:"Mafraq",name:"المفرق"}
  ],
  AE:[
    {value:"Abu Dhabi",name:"أبو ظبي"},
    {value:"Dubai",name:"دبي"},
    {value:"Sharjah",name:"الشارقة"},
    {value:"Ajman",name:"عجمان"},
    {value:"Umm Al Quwain",name:"أم القيوين"},
    {value:"Fujairah",name:"الفجيرة"},
    {value:"Ras Al Khaimah",name:"رأس الخيمة"}
  ],
  LB:[
    {value:"Beirut",name:"بيروت"},
    {value:"Mount Lebanon",name:"جبل لبنان"},
    {value:"North Governorate",name:"الشمال"},
    {value:"South Governorate",name:"الجنوب"},
    {value:"Nabatieh Governorate",name:"النبطية"},
    {value:"Beqaa Governorate",name:"البقاع"}
  ],
  MR:[
    {value:"Nouakchott",name:"نواكشوط"},
    {value:"Hodh Ech Chargui",name:"الحوض الشرقي"},
    {value:"Hodh El Gharbi",name:"الحوض الغربي"},
    {value:"Assaba",name:"الأسبعة"},
    {value:"Gorgol",name:"قرقول"},
    {value:"Brakna",name:"براكنة"},
    {value:"Trarza",name:"ترارزة"},
    {value:"Adrar",name:"أدرار"},
    {value:"Dakhlet Nouadhibou",name:"داخلت نواذيبو"},
    {value:"Tagant",name:"تكانت"},
    {value:"Guidimaka",name:"كيدي ماغا"},
    {value:"Tiris Zemmour",name:"تيرس زمور"},
    {value:"Inchiri",name:"إنشيري"}
  ],
  KW:[
    {value:"Al Asimah",name:"العاصمة"},
    {value:"Farwaniya",name:"الفروانية"},
    {value:"Hawalli",name:"حولي"},
    {value:"Mubarak Al-Kabeer",name:"مبارك الكبير"},
    {value:"Al Ahmadi",name:"الأحمدي"},
    {value:"Jahra",name:"الجهراء"}
  ],
  OM:[
    {value:"Muscat",name:"مسقط"},
    {value:"Ad Dakhiliyah",name:"الداخلية"},
    {value:"Al Batinah North",name:"الباطنة الشمالية"},
    {value:"Al Batinah South",name:"الباطنة الجنوبية"},
    {value:"Ash Sharqiyah North",name:"الشرقية الشمالية"},
    {value:"Ash Sharqiyah South",name:"الشرقية الجنوبية"},
    {value:"Al Buraimi",name:"البريمي"},
    {value:"Al Wusta",name:"الوسطى"},
    {value:"Dhofar",name:"ظفار"},
    {value:"Musandam",name:"مسندم"}
  ],
  QA:[
    {value:"Ad Dawhah",name:"الدوحة"},
    {value:"Al Khor",name:"الخور"},
    {value:"Al Wakrah",name:"الوكرة"},
    {value:"Ar Rayyan",name:"الريان"},
    {value:"Madinat ash Shamal",name:"مدينة الشمال"},
    {value:"Umm Salal",name:"أم صلال"},
    {value:"Al Daayen",name:"الضعاين"}
  ],
  BH:[
    {value:"Capital Governorate",name:"محافظة العاصمة"},
    {value:"Muharraq Governorate",name:"محافظة المحرق"},
    {value:"Northern Governorate",name:"محافظة الشمالية"},
    {value:"Southern Governorate",name:"محافظة الجنوبية"}
  ],
};

let citySelection = document.getElementById('city');
let nowCountry = '';
function reviewCities(countryValue){
  nowCountry = countryValue
  citySelection.innerHTML = ''
  for(let i = 0 ; i < list[`${countryValue}`].length;i++){
    citySelection.innerHTML += `
    <option value="${list[`${countryValue}`][i].value}">${list[`${countryValue}`][i].name}</option>
    `
  }
  getTimes(citySelection.value)
}

reviewCities('EG')

let Fajr = document.getElementById("Fajr");
let Sunrise = document.getElementById("Sunrise");
let Dhuhr = document.getElementById("Dhuhr");
let Asr = document.getElementById("Asr");
let Maghrib = document.getElementById("Maghrib");
let Isha = document.getElementById("Isha");
let dayTime = document.getElementById("daytime");

function getTimes(cityValue){
  axios.get(`http://api.aladhan.com/v1/timingsByCity/:date?country=${nowCountry}&city=${cityValue}`)
  .then(function (response) {
    Fajr.innerHTML = response.data.data.timings.Fajr;
    Sunrise.innerHTML = response.data.data.timings.Sunrise;
    Dhuhr.innerHTML = response.data.data.timings.Dhuhr;
    Asr.innerHTML = response.data.data.timings.Asr;
    Maghrib.innerHTML = response.data.data.timings.Maghrib;
    Isha.innerHTML = response.data.data.timings.Isha;
    dayTime.innerHTML = response.data.data.date.readable
  })
  .catch(function (error) {
    console.log(error);
    alert('This city is not available')
  })
}