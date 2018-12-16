names = [
	"George Washington",
	"John Adams",
	"Thomas Jefferson",
	"James Madison",
	"James Monroe",
	"John Quincy Adams",
	"Andrew Jackson",
	"Martin Van Buren",
	"William Henry Harrison",
	"John Tyler",
	"James K Polk",
	"Zachary Taylor",
	"Millard Fillmore",
	"Franklin Pierce",
	"James Buchanan",
	"Abraham Lincoln",
	"Andrew Johnson",
	"Ulysses S Grant",
	"Rutherford B Hayes",
	"James A Garfield",
	"Chester A Arthur",
	"Grover Cleveland",
	"Benjamin Harrison",
	"Grover Cleveland",
	"William McKinley",
	"Theodore Roosevelt",
	"William H Taft",
	"Woodrow Wilson",	
	"Warren G Harding",
	"Calvin Coolidge",
	"Herbert Hoover",
	"Franklin D Roosevelt",
	"Harry S Truman", 
	"Dwight D Eisenhower",
	"John F Kennedy", 
	"Lyndon B Johnson",
	"Richard Nixon",
	"Gerald Ford",	
	"Jimmy Carter",
	"Ronald Reagan",
	"George H W Bush",
	"Bill Clinton", 
	"George W Bush",
	"Barack Obama",
	"Donald Trump"
];

party = [
	"n",	
	"f", 
	"dr",
	"dr",
	"dr",
	"dr",
	"d",
	"d",
	"w",
	"w",
	"d",
	"w",
	"w",
	"d",
	"d",
	"r",
	"d",
	"r",
	"r",
	"r",
	"r",
	"d",
	"r",
	"d",
	"r",
	"r",
	"r",
	"d",
	"r",
	"r",
	"r",
	"d",
	"d",
	"r",
	"d",
	"d",
	"r",
	"r",
	"d",
	"r",
	"r",
	"d",
	"r",
	"d",
	"r",
];

year = [
	"1789-1797",
        "1797-1801",
        "1801-1809",
        "1809-1817",
        "1817-1825",
	"1825-1829",
        "1829-1837",
        "1837-1841",
        "1841-1841",
        "1841-1845",
	"1845-1849",
        "1849-1850",
        "1850-1853",
        "1853-1857",
        "1857-1861",
	"1861-1865",
        "1865-1869",
        "1869-1877",
        "1877-1881",
        "1881-1881",
	"1881-1885",
	"1885-1889",
	"1889-1893",
	"1893-1897",
	"1897-1901",
	"1901-1909",
	"1909-1913",
        "1913-1921",
        "1921-1923",
        "1923-1929",
	"1929-1933",
        "1933-1945",
        "1945-1953",
        "1953-1961",
        "1961-1963",
        "1963-1969",
        "1969-1974",
        "1974-1977",
	"1977-1981",
	"1981-1989",
	"1989-1993",	
	"1993-2001",
	"2001-2009",
	"2009-2017",
	"2017-"

];
yearsshort = [
	"89-97",
        "97-01",
        "01-09",
        "09-17",
        "17-25",
	"25-29",
        "29-37",
        "37-41",
        "41-41",
        "41-45",
	"45-49",
        "49-50",
        "50-53",
        "53-57",
        "57-61",
	"61-65",
        "65-69",
        "69-77",
        "77-81",
        "81-81",
	"81-85",
	"85-89",
	"89-93",
	"93-97",
	"97-01",
	"01-09",
	"09-13",
        "13-21",
        "21-23",
        "23-29",
	"29-33",
        "33-45",
        "45-53",
        "53-61",
        "61-63",
        "63-69",
        "69-74",
        "74-77",
	"77-81",
	"81-89",
	"89-93",	
	"93-01",
	"01-09",
	"09-17",
	"17-"
 ];

nameBoxes = [];
yearBoxes = [];
partyBoxes = [];
allBoxes = [];

for(var i = 0; i < names.length; i++){
	t = document.createElement('input');

	t.setAttribute('readOnly','true');
	t.value = i+1;
	document.getElementById('numbers').appendChild(t);
	document.getElementById('numbers').appendChild(document.createElement('br'));
	t.style['width']='30px'


	nameBoxes.push(document.createElement('input'));
	nameBoxes[i].type = 'text';
	nameBoxes[i].name = 'president'
	document.getElementById('presidents').appendChild(nameBoxes[i]);
	document.getElementById('presidents').appendChild(document.createElement("br"));
	
	yearBoxes.push(document.createElement('input'));
	yearBoxes[i].type  = 'text';
	yearBoxes[i].name = 'years';
	document.getElementById('years').appendChild(yearBoxes[i]);
	document.getElementById('years').appendChild(document.createElement("br"));

	partyBoxes.push(document.createElement('input'));
        partyBoxes[i].type  = 'text';
        partyBoxes[i].name = 'party';
        document.getElementById('party').appendChild(partyBoxes[i]);
        document.getElementById('party').appendChild(document.createElement("br"));

	allBoxes.push(nameBoxes[i]);
	//allBoxes.push(yearBoxes[i]);
	allBoxes.push(partyBoxes[i]);
	allBoxes.push(yearBoxes[i]);
}

function update(){
	//console.log(nameBoxes[3].value);
	for(var i = 0; i < names.length; i++){
		nameInput = nameBoxes[i].value.toLowerCase().replace(".", "").split(" ");
		correct = true;
		if(nameInput.length == 1) {
			if(nameInput[0] != names[i].split(" ")[names[i].split(" ").length-1].toLowerCase()) correct = false;
		}
		else if(nameInput.length ==2) {
			if(nameInput[0] != names[i].split(" ")[0].toLowerCase()) correct = false;
			if(nameInput[1] != names[i].split(" ")[names[i].split(" ").length-1].toLowerCase()) correct = false;
		}
		else if(nameInput.length ==3) {
			if(nameInput[0] != names[i].split(" ")[0].toLowerCase()) correct = false;
                        if(nameInput[1] != names[i].split(" ")[1].toLowerCase()) correct = false;
			if(nameInput[2] != names[i].split(" ")[2].toLowerCase()) correct = false;
		}
		else if(nameInput.length ==4) {
			if(nameInput[0]!=names[i].split(" ")[0].toLowerCase()) correct = false;
			if(nameInput[1]!=names[i].split(" ")[1].toLowerCase()) correct = false;
			if(nameInput[2]!=names[i].split(" ")[2].toLowerCase()) correct = false;
			if(nameInput[3]!=names[i].split(" ")[3].toLowerCase()) correct = false;
		}
		else {
			correct=false;
		}
		if(correct) nameBoxes[i].style.backgroundColor = "rgb(0, 255, 0)";
		else if(nameBoxes[i].value != "") nameBoxes[i].style.backgroundColor = "red";

		if(partyBoxes[i].value.toLowerCase() == party[i]) partyBoxes[i].style.backgroundColor = "rgb(0, 255, 0)";
		else if(partyBoxes[i].value != "") partyBoxes[i].style.backgroundColor = "red";

		if(yearBoxes[i].value == year[i]) yearBoxes[i].style.backgroundColor = "rgb(0, 255, 0)";
		else if(yearBoxes[i].value==yearsshort[i]) yearBoxes[i].style.backgroundColor='green';
                else if(yearBoxes[i].value != "") yearBoxes[i].style.backgroundColor = "red";

	}	
	//console.log(document.activeElement);
	//console.log(allBoxes.indexOf(document.activeElement));
}

setInterval(update, 200);

window.onkeyup = function(e) {
	
	//var ix = allBoxes.indexOf(document.activeElement); 
	
	//print(ix);

	var key = e.keyCode ? e.keyCode : e.which;
	var ix = allBoxes.indexOf(document.activeElement);
	//console.log(ix);
	if(key == 39) allBoxes[ix+1].focus();
	if(key == 37) allBoxes[ix-1].focus();
	if(key == 38) allBoxes[ix-3].focus();
	if(key == 40) allBoxes[ix+3].focus();
}

