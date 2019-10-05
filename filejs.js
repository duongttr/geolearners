	
	function openMenu () 
	{
		document.getElementById('mySidenav').style.width = '220px';
		for (var i = document.getElementsByClassName('menu-txt').length - 1; i >= 0; i--) 
		{
			document.getElementsByClassName('menu-txt')[i].style.color = '#FFFFFF';
			document.getElementsByClassName('menu-txt')[i].style.fontSize = '14px';
		}

	}
	function closeMenu () 
	{
		document.getElementById('mySidenav').style.width = '0';
		for (var i = document.getElementsByClassName('menu-txt').length - 1; i >= 0; i--) 
		{
			document.getElementsByClassName('menu-txt')[i].style.fontSize = '1px';
			document.getElementsByClassName('menu-txt')[i].style.color = '#252A3B';
		}
	}
	var numofcoloum = 4; // set coloums
	var icon_countries_asia = ['japan', 'india', 'china', 'indonesia', 'thailand', 'vietnam', 'singapore', 'philippines', 'malaysia', 'cambodia', 'iran', 'south-korea','north-korea', 'myanmar', 'laos', 'east-timor', 'israel', 'uzbekistan', 'oman', 'mongolia', 'taiwan', 'brunei', 'afghanistan', 'bangladesh', 'bhutan', 'iran', 'maldives', 'nepal', 'pakistan', 'sri-lanka', 'saudi-arabia', 'armenia', 'azerbaijan', 'bahrain', 'united-arab-emirates', 'georgia', 'iraq', 'jordan', 'kuwait', 'lebanon', 'qatar', 'cyprus', 'syria', 'yemen', 'turkey', 'kazakhstan', 'kyrgyzstan','turkmenistan', 'tajikistan','palestine'];
	var name_asia = [
			'Nhật Bản',
			'Ấn Độ',
			'Trung Quốc',
			'Indonesia',
			'Thái Lan',
			'Việt Nam',
			'Singapore',
			'Philippines',
			'Malaysia',
			'Campuchia',
			'Iran',
			'Hàn Quốc',
			'Triều Tiên',
			'Myanmar',
			'Lào',
			'Đông Timor',
			'Israel',
			'Uzbekistan',
			'Oman',
			'Mông Cổ',
			'Đài Loan',
			'Brunei',
			'Afghanistan',
			'Bangladesh',
			'Bhutan',
			'Iran',
			'Maldives',
			'Nepal',
			'Pakistan',
			'Sri Lanka',
			'Ả Rập Xê Út',
			'Armenia',
			'Azerbaijan',
			'Bahrain',
			'Ả Rập Thống Nhất',
			'Georgia',
			'Iraq',
			'Jordan',
			'Kuwait',
			'Liban',
			'Qatar',
			'Síp',
			'Syria',
			'Yemen',
			'Thổ Nhĩ Kỳ', // nằm ở 2 lãnh thổ (1 phần ở châu á, 1 phần ở đông nam âu)
			'Kazakhstan',
			'Kyrgyzstan',
			'Turkmenistan',
			'Tajikistan',
			'Palestine'];
    function CreateAsiaContinent(){
		var text = '';
		var n = icon_countries_asia.length;
		
		for(var i = 1;i <= n;i++){
			if((i-1) % numofcoloum == 0) text += '<tr>';
			text += '<td>' + "<i class='"+'flaticon-'+icon_countries_asia[i-1]+ "'></i>" + '<a id='+"'"+icon_countries_asia[i-1]+"'"+'>' + 
			name_asia[i-1] + '</a>'+'</td>';
			if(i % numofcoloum == 0) text += '</tr>';
		}
		if(n % numofcoloum != 0) text += '</tr>';
		document.getElementById("asia").innerHTML = text;
	}

	var icon_countries_euroqe = [
'germany', 'france', 'italy', 'spain', 'united-kingdom', 'croatia', 'switzerland', 'belgium', 'netherlands', 'estonia', 'denmark', 'iceland', 'ireland', 'latvia', 'lithuania', 'norway', 'finland', 'sweden', 'moldova','belarus-country', 'poland', 'bulgaria', 'czech-eepublic', 'hungary', 'russia', 'romania', 'slovakia', 'ukraine', 'greece', 'andorra', 'albania', 'portugal', 'bosnia-and-herzegovina', 'macedonia', 'malta', 'montenegro', 'san-marino', 'serbia', 'slovenia', 'vatican', 'austria', 'liechstenstein', 'luxembourg', 'monaco'
			,'svalbard-and-jan-mayen'];
		var name_euroqe = [
		'Đức',
		'Pháp',
		'Ý',
		'Tây Ban Nha',
		'Vương Quốc Anh',
		'Croatia',
		'Thụy Sĩ',
		'Bỉ',
		'Hà Lan',
		'﻿Estonia',
		'Đan Mạch',
		'Iceland',
		'Ireland',
		'Latvia',
		'Lithuania',
		'Na Uy',
		'Phần Lan',
		'Thụy Điển',
		'﻿Moldova',
		'﻿Belarus',
		'Ba Lan',
		'Bulgaria',
		'Cộng hòa Séc',
		'Hungary',
		'Nga',
		'Romania',
		'Slovakia',
		'Ukraine',
		'Hy Lạp',
		'Andorra',
		'Albania',
		'Bồ Đào Nha',
		'Bosnia và Herzegovina',
		'Macedonia',
		'Malta',
		'Montenegro',
		'San Marino',
		'Serbia',
		'Slovenia',
		'Thành Vatican',
		'Áo',
		'Liechtenstein',
		'Luxembourg',
		'Monaco',
		'Svalbard và Jan Mayen'];
    function CreateEuroqeContinent(){
		var text = '';
		var n = icon_countries_euroqe.length;
		
		for(var i = 1;i <= n;i++){
			if((i-1) % numofcoloum == 0) text += '<tr>';
			text += '<td>' + "<i class='"+'flaticon-'+icon_countries_euroqe[i-1]+ "'></i>" + '<a id='+"'"+icon_countries_euroqe[i-1]+"'"+'>' + 
			name_euroqe[i-1] + '</a>'+'</td>';
			if(i % numofcoloum == 0) text += '</tr>';
		}
		if(n % numofcoloum != 0) text += '</tr>';
		document.getElementById("euroqe").innerHTML = text;
	}
	
	var icon_countries_africa = [
		'egypt',
		'libya',
		'sudan',
		'tunisia',
		'south-africa',
		'zimbabwe',
		'niger',
		'algeria',
		'morocco',
		'western-sahara',
		'angola',
		'benin',
		'botswana',
		'burundi',
		'burkina-faso',
		'cameroon',
		'cape-verde',
		'comoros',
		'republic-of-the-congo',
		'democratic-republic-of-the-congo',
		'central-africa-republic',
		'djibouti',
		'equatorial-guinea',
		'eritrea',
		'ethiopia',
		'gabon',
		'gambia',
		'ghana',
		'guinea',
		'guinea-bissau',
		'kenya',
		'lesotho',
		'liberia',
		'madagascar',
		'malawi',
		'mali',
		'mauritania',
		'mauritius',
		'mozambique',
		'south-sudan',
		'namibia',
		'nigeria',
		'rwanda',
		'chad',
		'senegal',
		'seychelles',
		'sierra-leone',
		'somalia',
		'swaziland',
		'tanzania',
		'tog',
		'uganda',
		'zambia',
		'burundi'
	];
	var name_africa = [
		'Ai Cập',
		'Libya',
		'Sudan',
		'Tunisia',
		'Nam Phi',
		'Zimbabwe',
		'Niger',
		'Algeria',
		'Morocco',
		'Tây Sahara',
		'Angola',
		'Benin',
		'Botswana',
		'Burundi',
		'Burkina Faso',
		'Cameroon',
		'Cape Verde',
		'Comoros',
		'CH Công-gô',
		'CHDC Công-gô',
		'CH Trung Phi',
		'Djibouti',
		'E.Guinea',
		'Eritrea',
		'Ethiopia',
		'Gabon',
		'Gambia',
		'Ghana',
		'Guinea',
		'Guinea Bissau',
		'Kenya',
		'Lesotho',
		'Liberia',
		'Madagascar',
		'Malawi',
		'Mali',
		'Mauritania',
		'Mauritius',
		'Mozambique',
		'Nam Sudan',
		'Namibia',
		'Nigeria',
		'Rwanda',
		'Chad',
		'Senegal',
		'Seychelles',
		'Sierra Leone',
		'Somalia',
		'Swaziland',
		'Tanzania',
		'Togo',
		'Uganda',
		'Zambia',
		'Burundi'
	];
	function CreateAfricaContinent(){
		var text = '';
		var n = icon_countries_africa.length;
		
		for(var i = 1;i <= n;i++){
			if((i-1) % numofcoloum == 0) text += '<tr>';
			text += '<td>' + "<i class='"+'flaticon-'+icon_countries_africa[i-1]+ "'></i>" + '<a id='+"'"+icon_countries_africa[i-1]+"'"+'>' + 
			name_africa[i-1] + '</a>'+'</td>';
			if(i % numofcoloum == 0) text += '</tr>';
		}
		if(n % numofcoloum != 0) text += '</tr>';
		document.getElementById("africa").innerHTML = text;
	}
	
	var icon_countries_america = [
		"canada",
		"united-states",
		"bermuda",
		"argentina",
		"antigua-and-barbuda",
		"british-virgin-islands",
		"bahamas",
		"belize",
		"bonaire",
		"chile",
		"dominican-republic",
		"cuba",
		"ecuador",
		"grenada",
		"guatemala",
		"guyana",
		"honduras",
		"martinique",
		"montserrat",
		"nicaragua",
		"paraguay",
		"puerto-rico",
		"falkland-islands",
		"virgin-islands",
		"saint-kitts-and-nevis",
		"saint-martin",
		"sint-maarten",
		"trinidad-and-tobago",
		"venezuela",
		"anguilla",
		"bolivia",
		"brazil",
		"colombia",
		"costa-rica",
		"dominica",
		"el-salvador",
		"guadeloupe",
		"haiti",
		"jamaica",
		"mexico",
		"panama",
		"peru",
		"caymanislands",
		"saint-lucia",
		"saint-vincent-and-grenadines",
		"suriname",
		"uruguay",
		"argentina",
		'greenland'
	];
	var name_america = [
		"Canada",
		"Hoa Kỳ",
		"Bermuda",
		"Argentina",
		"Antigua và Barbuda",
		"Quần đảo Virgin",
		"Bahamas",
		"Belize",
		"Bonaire",
		"Chi-lê",
		"Dominica",
		"Cuba",
		"Ecuador",
		"Grenada",
		"Guatemala",
		"Guyana",
		"Honduras",
		"Martinique",
		"Montserrat",
		"Nicaragua",
		"Paraguay",
		"Puerto Rico",
		"Quần đảo Falkland",
		"Quần đảo Virgin",
		"S.Kitts & Nevis",
		"Saint Martin",
		"Sint Maarten",
		"Trinidad & Tobago",
		"Venezuela",
		"Anguilla",
		"Bolivia",
		"Brazil",
		"Colombia",
		"Costa Rica",
		"Dominica",
		"El Salvador",
		"Guadeloupe",
		"Haiti",
		"Jamaica",
		"Mexico",
		"Panama",
		"Peru",
		"Quần đảo Cayman",
		"Saint Lucia",
		"Saint Vincent và Grenadines",
		"Suriname",
		"Uruguay",
		"Argentina",
		"Greenland"
	];
	function CreateAmericaContinent(){
		var text = '';
		var n = icon_countries_america.length;
		
		for(var i = 1;i <= n;i++){
			if((i-1) % numofcoloum == 0) text += '<tr>';
			text += '<td>' + "<i class='"+'flaticon-'+icon_countries_america[i-1]+ "'></i>" + '<a id='+"'"+icon_countries_america[i-1]+"'"+'>' + 
			name_america[i-1] + '</a>'+'</td>';
			if(i % numofcoloum == 0) text += '</tr>';
		}
		if(n % numofcoloum != 0) text += '</tr>';
		document.getElementById("america").innerHTML = text;
	}
	
	var icon_countries_aus = [
		'australia',
		'new-zealand',
		'guam',
		'samoa'
	];
	var name_aus = [
		'Úc',
		'New Zealand',
		'Guam',
		'Samoa'
	];
	function CreateAustraliaContinent(){
		var text = '';
		var n = icon_countries_aus.length;
		
		for(var i = 1;i <= n;i++){
			if((i-1) % numofcoloum == 0) text += '<tr>';
			text += '<td>' + "<i class='"+'flaticon-'+icon_countries_aus[i-1]+ "'></i>" + '<a id='+"'"+icon_countries_aus[i-1]+"'"+'>' + 
			name_aus[i-1] + '</a>'+'</td>';
			if(i % numofcoloum == 0) text += '</tr>';
		}
		if(n % numofcoloum != 0) text += '</tr>';
		document.getElementById("australia-contient").innerHTML = text;
	}
	CreateAsiaContinent();
	CreateEuroqeContinent();
	CreateAfricaContinent();
	CreateAmericaContinent();
	CreateAustraliaContinent();

	function MoveTab(evt, cityName,classToGet) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("guigui");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName(classToGet);
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
}
	document.getElementById("mainInterface").click();

	function CreateTimeSelector(n, id){
		var text = "";
		for(var i = 0; i <= n;i++){
			if(i < 10){
				text += "<option>0"+i+"</option>";
			}
			else text += "<option>"+ i + "</option>";
		}
		document.getElementById(id).innerHTML = text;
	}
	CreateTimeSelector(23,"hour_sendselector");
	CreateTimeSelector(59,"min_sendselector");

	function CreateTimeZoneList()
	{
		var ListLocation = ["Kabul",
			"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
			"Belgrade, Bratislava, Budapest, Ljubljana, Prague",
			"West Central Africa",
			"Coordinated Universal Time-11",
			"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
			"Georgetown, La Paz, Manaus, San Juan",
			"Santiago",
			"City of Buenos Aires",
			"Yerevan",
			"Canberra, Melbourne, Sydney",
			"Baku",
			"Eastern Time (US & Canada)",
			"Kuwait, Riyadh",
			"Dhaka",
			"Minsk",
			"Brussels, Copenhagen, Madrid, Paris",
			"Central America",
			"Atlantic Time (Canada)",
			"Caracas",
			"Sarajevo, Skopje, Warsaw, Zagreb",
			"Harare, Pretoria",
			"Coordinated Universal Time",
			"Brasilia",
			"Astana",
			"Kuala Lumpur, Singapore",
			"Monrovia, Reykjavik",
			"Cabo Verde Is.",
			"Bangkok, Hanoi, Jakarta",
			"Bogota, Lima, Quito, Rio Branco",
			"Beijing, Chongqing, Hong Kong, Urumqi",
			"Yangon (Rangoon)",
			"Nairobi",
			"Hawaii",
			"E. Europe",
			"Osaka, Sapporo, Tokyo",
			"Cairo",
			"Cayenne, Fortaleza",
			"Dublin, Edinburgh, Lisbon, London",
			"Fiji",
			"Ashgabat, Tashkent",
			"Tbilisi",
			"Athens, Bucharest",
			"Greenland",
			"Guam, Port Moresby",
			"Port Louis",
			"Chennai, Kolkata, Mumbai, New Delhi",
			"Tehran",
			"Baghdad",
			"Jerusalem",
			"Amman",
			"Coordinated Universal Time+12",
			"Seoul",
			"Beirut",
			"Guadalajara, Mexico City, Monterrey",
			"Ulaanbaatar",
			"Casablanca",
			"Windhoek",
			"Kathmandu",
			"Solomon Is., New Caledonia",
			"Auckland, Wellington",
			"Abu Dhabi, Muscat",
			"Islamabad, Karachi",
			"Asuncion",
			"Pacific Time (US & Canada)",
			"Moscow, St. Petersburg, Volgograd (RTZ 2)",
			"Samoa",
			"Coordinated Universal Time-02",
			"Sri Jayawardenepura",
			"Damascus",
			"Taipei",
			"Nuku'alofa",
			"Istanbul",
			"Montevideo"
			];

		var ListTimeZone = [
				4.5,
				2,
				1,
				1,
				-11,
				1,
				
				-4,
				-3,

				-3,
				4,

				+10,
	
				4,
				-5,
				3,
				6,
	
				3,
				1,
				-6,
				
				-4,
	
				-4.5,
	
		
				1,
				2,
				0,
				-3,
				6,
				8,
			
				0,
	
				-1,
				7,
				
			
				-5,
				
				
			
				8,
		
				6.5,
			
				3,
				
				
				-10,
				
		
		
			
		
				2,
		
				9,
			
			
		
		
		
				2,
			
				
			
	
				
				-3,
				0,
				+12,
				
				
				
				
				5,
				
			
				4,
				
			
				
				2,
				-3,
		
		
				+10,
			
				
			
				
		
			
				4,
			
				
			
				
				5.5,
			
				3.5,
				3,
				
				2,
				
		
				
				
				
				2,
				
				
				+12,
				9,
	
				
				
		
				
				2,
		
				
				
				
				
				
				
		
				
			
				
				
			
				
				
				
	
				
				
				
				-6,
			
				
				
				8,
		
	
				0,
			
				
				1,
				
				5.75,
				
				+11,
				+12,
			
				
				
				
				
				
				
				
				4,
				5,
				
				
		
				
				-4,
			
				
				-8,
		
				
		
				
				
				
				3,
		
		
				
		
		
		
			
	
				+13,
				
				
				
				
		
				
				
				
	
			
		
				
				
		
				-2,
				
				
				5.5,
				
				
				
	
				
				
				2,
				8,
				
				
		
				
				+13,
				
	
				
				2,
				
		
				
				
				
				
				
				
				
				-3
				
				
				
			


				
				];
		var text = "";
		for(var i = 0; i < ListLocation.length; i++)
		{
			var dau = '+';
			var hour = Math.abs(Math.floor(ListTimeZone[i]));
			var minute = Math.abs((Math.abs(ListTimeZone[i])-Math.abs(hour)))*60;
			hour = hour.toString();
			minute = minute.toString();
			if(hour.length < 2) hour = '0'+hour;
			if(minute.length < 2) minute += '0';
			if(ListTimeZone[i] < 0) dau = '-';
			text += '<option value=' + ListTimeZone[i] + '>'+"(UTC"+dau+ hour+":"+minute+") " +ListLocation[i]+"</option>";
		}
		document.getElementById("location_sendslt").innerHTML += text;
		document.getElementById("location_takeslt").innerHTML += text;
	}
	CreateTimeZoneList();

	function TakeTime(){
		// get timezone
		var getGMT_start = document.getElementById("location_sendslt").value;
		var getGMT_end = document.getElementById("location_takeslt").value;

		//covert timezone
		getGMT_start = Number(getGMT_start);
		getGMT_end = Number(getGMT_end);

		// get current time

		var current_hour = document.getElementById("hour_sendselector").value;
		var current_min = document.getElementById("min_sendselector").value;

		
		// convert time
		var t = Number(current_hour) + Number(current_min)/60;

		// set icon
			if(t >= 4 && t <= 6){
			document.getElementById("icontime1").src = "./image/day.png";
			document.getElementById("icontime1").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.color = "#037ed0";
			document.getElementById("min_sendselector").style.backgroundColor = "#fff";
			document.getElementById("min_sendselector").style.color = "#037ed0";
			document.getElementById("haicham1").style.backgroundColor = "#fff";
			document.getElementById("haicham1").style.color = "#037ed0";
			document.getElementById("set-bk-1").style.backgroundImage = "url('./image/sunrise.jpg')";
			document.getElementById("set-bk-1").style.backgroundPosition = "0";
		}
		else if(t > 6 && t <= 16){
			document.getElementById("icontime1").src = "./image/day.png";
			document.getElementById("icontime1").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.color = "#037ed0";
			document.getElementById("min_sendselector").style.backgroundColor = "#fff";
			document.getElementById("min_sendselector").style.color = "#037ed0";
			document.getElementById("haicham1").style.backgroundColor = "#fff";
			document.getElementById("haicham1").style.color = "#037ed0";
			document.getElementById("set-bk-1").style.backgroundImage = "url('./image/day.jpg')";
			document.getElementById("set-bk-1").style.backgroundPosition = "0";
		}
		else if(t > 16 && t < 18){
			document.getElementById("icontime1").src = "./image/night.png";
			document.getElementById("icontime1").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.color = "#037ed0";
			document.getElementById("min_sendselector").style.backgroundColor = "#fff";
			document.getElementById("min_sendselector").style.color = "#037ed0";
			document.getElementById("haicham1").style.backgroundColor = "#fff";
			document.getElementById("haicham1").style.color = "#037ed0";
			document.getElementById("set-bk-1").style.backgroundImage = "url('./image/sundown.jpg')";
			document.getElementById("set-bk-1").style.backgroundPosition = "0";
		}
		else if(t >= 18 && t < 19){
			document.getElementById("icontime1").src = "./image/night.png";
			document.getElementById("icontime1").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.backgroundColor = "#fff";
			document.getElementById("hour_sendselector").style.color = "#037ed0";
			document.getElementById("min_sendselector").style.backgroundColor = "#fff";
			document.getElementById("min_sendselector").style.color = "#037ed0";
			document.getElementById("haicham1").style.backgroundColor = "#fff";
			document.getElementById("haicham1").style.color = "#037ed0";
			document.getElementById("set-bk-1").style.backgroundImage = "url('./image/aftersundown.jpg')";
			document.getElementById("set-bk-1").style.backgroundPosition = "0";
		}
		else
			{
				document.getElementById("icontime1").src = "./image/night.png";
				document.getElementById("icontime1").style.backgroundColor = "#191919";
				document.getElementById("hour_sendselector").style.backgroundColor = "#191919";
				document.getElementById("hour_sendselector").style.color = "#fff";
				document.getElementById("min_sendselector").style.backgroundColor = "#191919";
				document.getElementById("min_sendselector").style.color = "#fff";
				document.getElementById("haicham1").style.backgroundColor = "#191919";
				document.getElementById("haicham1").style.color = "#fff";
				document.getElementById("set-bk-1").style.backgroundImage = "url('./image/night.jpg')";
			}
		// calculate chosen timezone time
		var x = t + getGMT_end - getGMT_start;

		next_hour = Math.floor(x);
		next_min = (Math.abs(x) - Math.abs(next_hour))*60;

		var next_date, next_month, next_year;
		var getDatePicker = document.getElementById("datepicker_input").value.split("/");
		next_date = getDatePicker[0];
		next_month = getDatePicker[1];
		next_year = getDatePicker[2];

		var d = new Date(next_year+"-"+next_month+"-"+next_date);

		if(next_hour < 0) {
			next_hour = 24 + next_hour;
			next_date -= 1;
			d.setDate(d.getDate()-1);
		}
		else if(next_hour >= 24){
			next_hour -= 24;
			next_date += 1;
			d.setDate(d.getDate()+1);
		}
		var t = next_hour + next_min/60;

		if(t >= 4 && t <= 6){
			document.getElementById("icontime2").src = "./image/day.png";
			document.getElementById("icontime2").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.color = "#037ed0";
			document.getElementById("min_takeselector").style.backgroundColor = "#fff";
			document.getElementById("min_takeselector").style.color = "#037ed0";
			document.getElementById("haicham2").style.backgroundColor = "#fff";
			document.getElementById("haicham2").style.color = "#037ed0";
			document.getElementById("set-bk-2").style.backgroundImage = "url('./image/sunrise.jpg')";
			document.getElementById("set-bk-2").style.backgroundPosition = "0";
		}
		else if(t > 6 && t <= 16){
			document.getElementById("icontime2").src = "./image/day.png";
			document.getElementById("icontime2").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.color = "#037ed0";
			document.getElementById("min_takeselector").style.backgroundColor = "#fff";
			document.getElementById("min_takeselector").style.color = "#037ed0";
			document.getElementById("haicham2").style.backgroundColor = "#fff";
			document.getElementById("haicham2").style.color = "#037ed0";
			document.getElementById("set-bk-2").style.backgroundImage = "url('./image/day.jpg')";
			document.getElementById("set-bk-2").style.backgroundPosition = "0";
		}
		else if(t > 16 && t < 18){
			document.getElementById("icontime2").src = "./image/night.png";
			document.getElementById("icontime2").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.color = "#037ed0";
			document.getElementById("min_takeselector").style.backgroundColor = "#fff";
			document.getElementById("min_takeselector").style.color = "#037ed0";
			document.getElementById("haicham2").style.backgroundColor = "#fff";
			document.getElementById("haicham2").style.color = "#037ed0";
			document.getElementById("set-bk-2").style.backgroundImage = "url('./image/sundown.jpg')";
			document.getElementById("set-bk-2").style.backgroundPosition = "0";
		}
		else if(t >= 18 && t < 19){
			document.getElementById("icontime2").src = "./image/night.png";
			document.getElementById("icontime2").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.backgroundColor = "#fff";
			document.getElementById("hour_takeselector").style.color = "#037ed0";
			document.getElementById("min_takeselector").style.backgroundColor = "#fff";
			document.getElementById("min_takeselector").style.color = "#037ed0";
			document.getElementById("haicham2").style.backgroundColor = "#fff";
			document.getElementById("haicham2").style.color = "#037ed0";
			document.getElementById("set-bk-2").style.backgroundImage = "url('./image/aftersundown.jpg')";
			document.getElementById("set-bk-2").style.backgroundPosition = "0";
		}
		else
			{
				document.getElementById("icontime2").src = "./image/night.png";
				document.getElementById("icontime2").style.backgroundColor = "#191919";
				document.getElementById("hour_takeselector").style.backgroundColor = "#191919";
				document.getElementById("hour_takeselector").style.color = "#fff";
				document.getElementById("min_takeselector").style.backgroundColor = "#191919";
				document.getElementById("min_takeselector").style.color = "#fff";
				document.getElementById("haicham2").style.backgroundColor = "#191919";
				document.getElementById("haicham2").style.color = "#fff";
				document.getElementById("set-bk-2").style.backgroundImage = "url('./image/night.jpg')";
			}

		next_hour = next_hour.toString();
		next_min = Math.abs(Math.round(next_min)).toString();
		if (next_hour.length < 2) next_hour = '0'+next_hour;
		if(next_min.length < 2) next_min = '0'+next_min;
		document.getElementById("hour_takeselector").innerHTML = next_hour;
		document.getElementById("min_takeselector").innerHTML = next_min;
		document.getElementById("datepicker_output").value = d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
	}
	var type_of_chart;
	function SendTypeOfChart(type){
		type_of_chart = type;
	}
	var count = 1;
	function addFill(){
		count += 1;
		var container = document.createElement("div");
		container.innerHTML = '<div class="input-name"><input id="name'+count+'" type="text"><span class="underline-animation"></span></div><div style="margin-top: 40px;margin-left: 5px;" class="input-name"><input id="value'+count+'" type="text"><span class="underline-animation"></span></div><br />';
		document.getElementById("container1").appendChild(container);
	}

	function RenewFill(){
		count = 1;
		document.getElementById("container1").innerHTML = '<div class="input-name"><input id="name'+count+'" type="text"><span class="underline-animation"></span></div><div style="margin-top: 40px;margin-left: 5px;" class="input-name"><input id="value'+count+'" type="text"><span class="underline-animation"></span></div><br />';
		document.getElementById("myDiv").innerHTML = '';
	}

	var tooltip_text_html1 = '<span class="tooltiptext">Nhập một giá trị số</b></span>';
	

	function addFill2(){
		count += 1;
		var container = document.createElement("div");
		container.innerHTML = '<div class="input-name"><input id="l_name'+count+'" type="text"><span class="underline-animation"></span></div><div style="margin-top: 40px;margin-left: 5px;" class="input-name tooltip"><input id="l_value'+count+'" type="text"><span class="underline-animation"></span><span></span></div><br />';
		document.getElementById("container2").appendChild(container);
	}

	function RenewFill2(){
		count = 1;
		document.getElementById("container2").innerHTML = '<div class="input-name"><input id="l_name'+count+'" type="text"><span class="underline-animation"></span></div><div style="margin-top: 40px;margin-left: 5px;" class="input-name tooltip"><input id="l_value'+count+'" type="text"><span class="underline-animation"></span>'+tooltip_text_html1+'</div><br />';
		document.getElementById("myDiv2").innerHTML = '';
	}

	
	function CreateGraph(){
			var data = new Array(count);
			var getLabel, getValue;
			for(var i = 0; i < count; i++){
				getLabel = document.getElementById('name'+(i+1)).value.toString();
				getValue = document.getElementById('value'+(i+1)).value;
				data[i] = {'x': getLabel,'y': Number(getValue)};
			}
			if(type_of_chart == "serial"){
	             AmCharts.makeChart("myDiv", {
	                type: "serial",
	                theme: "dark",
	                language: "es",
	                dataProvider: data,
	                categoryField: "x",
	                startDuration: 1,
	                rotate: false,

	                categoryAxis: {
	                    gridPosition: "start"
	                },
	                valueAxes: [{
	                    position: "bottom",
	                    minorGridEnabled: true
	                }],
	                graphs: [{
	                    type: "column",
	                    valueField: "y",
	                    fillAlphas: 1,
	                    color: "#ffffff",
	                    balloonText: "<span style='font-size:13px;'>[[category]]:<b>[[value]]</b></span>"
	                }],
	                legend: {
	                    useGraphSettings: true
	                },

	                creditsPosition:"top-right"

	            });
	         }else{
	         	AmCharts.makeChart("myDiv", {
                type: "pie",
                theme: "dark",
                language: "es",
                dataProvider: data,
                titleField: "x",
                valueField: "y",
                balloonText: "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
                legend: {
                    "align": "center",
                    "markerType": "circle"
                }

            });
	         }

         }

	function CheckBeforeCreate(){
		var check = true;
		for(var i = 1; i <= count;i++){
			if(isNaN(document.getElementById('name'+i).value) == false){
				document.getElementById('name'+i).style.backgroundColor = 'rgba(219, 97, 97, 0.49)';
				check = false;
			}
			else{
				document.getElementById('name'+i).style.backgroundColor = 'rgba(0, 172, 255, 0.25882352941176473)';
			}

			if(isNaN(document.getElementById('value'+i).value) == true || document.getElementById('value'+i).value.trim().length == 0){
				document.getElementById('value'+i).style.backgroundColor = 'rgba(219, 97, 97, 0.49)';
				check = false;
			}
			else{
				document.getElementById('value'+i).style.backgroundColor = 'rgba(0, 172, 255, 0.25882352941176473)';
			}
		}
		if(check){
			for(var i = 1; i <= count; i++){
				document.getElementById('name'+i).style.backgroundColor = 'rgba(0, 172, 255, 0.25882352941176473)';
				document.getElementById('value'+i).style.backgroundColor = 'rgba(0, 172, 255, 0.25882352941176473)';
			}
			CreateGraph();
		}
	}

	function getChartData(){
		var chartData = []; 
		var point, value;
		for(var i = 1; i <= count;i++){
			point = document.getElementById("l_name"+i).value;
			value = Number(document.getElementById("l_value"+i).value);
			chartData.push({
				point: point,
				value: value
			});
		}
		return chartData;
	}

	function CheckBeforeCreate2(){
		var chartData = getChartData();
    AmCharts.makeChart("myDiv2", {
    "type": "serial",
    "theme": "dark",
    language: "es",
    "dataProvider": chartData,
    "synchronizeGrid":true,
    startDuration: 1,
    "graphs": [{
                    "bullet": "round",
                    "valueField": "value",
                    balloonText: "<b><span style='font-size:14px;'>[[value]]</span></b>",
                    balloon:{
                        drop:true
                    },
                    "lineThickness": 2,
                    lineColor: "#00BBCC"
                }],
                "chartCursor": {
                    "cursorAlpha": 0,
                    "zoomable":false,
                    "valueZoomable":true
                },
                "categoryField": "point",
                "categoryAxis": {
                    "parseDates": false
                },
                "valueScrollbar":{

                }
});
	}

	function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 100);

        var visits = 1600;
        var hits = 1600;
        var views = 1600;


    for (var i = 0; i < 10; i++) {
        // we create date objects here. In your data, you can have date strings
        // and then set format of your dates using chart.dataDateFormat property,
        // however when possible, use date objects, as this will speed up chart rendering.
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        hits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        views += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        chartData.push({
            date: newDate,
            visits: visits,
            hits: hits,
            views: views
        });
    }
    return chartData;
}
	ChangeViewer();
	function ChangeViewer(){
		var gocnhin = document.getElementById("viewer").value;
		if(gocnhin == "Map"){
			document.getElementById("map-svg").style.display = "block";
			document.getElementById("list").style.display = "none";
			document.getElementById("flag_country").style.display = "";
			document.getElementById("name_country").style.display = "";
		}
		else{
			document.getElementById("map-svg").style.display = "none";
			document.getElementById("list").style.display = "block";
			document.getElementById("flag_country").style.display = "none";
			document.getElementById("name_country").style.display = "none";
		}
	}

	function updateInfo(x){
	    var nameofcountry = '';
		if (icon_countries_asia.indexOf(x) != -1){
			nameofcountry = name_asia[icon_countries_asia.indexOf(x)];
		}
		else if(icon_countries_euroqe.indexOf(x) != -1){
			nameofcountry = name_euroqe[icon_countries_euroqe.indexOf(x)];
		}
		else if(icon_countries_africa.indexOf(x) != -1){
			nameofcountry = name_africa[icon_countries_africa.indexOf(x)];
		}
		else if(icon_countries_america.indexOf(x) != -1){
			nameofcountry = name_america[icon_countries_america.indexOf(x)];
		}
		else if(icon_countries_aus.indexOf(x) != -1){
			nameofcountry = name_aus[icon_countries_aus.indexOf(x)];
		}
		document.getElementById('name_country').innerHTML = nameofcountry;
		document.getElementById('flag_country').src = "./image/flag/"+x+".png";
	}

	$(document).keydown(function(event) {
	if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
     }
    // 107 Num Key  +
    // 109 Num Key  -
    // 173 Min Key  hyphen/underscor Hey
    // 61 Plus key  +/= key
	});

	$(window).bind('mousewheel DOMMouseScroll', function (event) {
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
	});

	document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);
	