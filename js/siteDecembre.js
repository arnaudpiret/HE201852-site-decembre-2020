setTimeout("const TD_LIST = document.querySelectorAll('td');",500); // le temp que la page charge, memoire t'ableau complet

function TrierTableBpm(){
	document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody>"
	let choiBpmBas = document.getElementById("choibpmBas").value
	let choiBpmHaut = document.getElementById("choibpmHaut").value
	choiBpmHaut == "" ? choiBpmHaut = "500" :choiBpmHaut = choiBpmHaut ;   
	choiBpmBas == "" ? choiBpmBas = "0" :choiBpmBas = choiBpmBas ;
	for(let i=2 ;i<410; i+=7){ //tri par bpm
		if(TD_LIST[i].innerHTML[2] == "-"|| TD_LIST[i].innerHTML[3] == "-"){ // pour les bpm qui varient (trie a partir du bpm le plus haut)
			if(TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-3]+ TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-2]+TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-1]>= choiBpmBas && TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-3]+ TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-2]+TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-1] <= choiBpmHaut){
				document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-2].innerHTML+"</td><td>"+TD_LIST[i-1].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+3].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+4].innerHTML+"</td></tr>"
			}
		}	
		if(Number(TD_LIST[i].innerHTML) <= Number(choiBpmHaut) && Number(TD_LIST[i].innerHTML)>= Number(choiBpmBas)){
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-2].innerHTML+"</td><td>"+TD_LIST[i-1].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+3].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+4].innerHTML+"</td></tr>"
		}
	}

}

function TrierTableDiff(){
	 let choidiff = document.getElementById("choidifficultée").value
	 document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody>"
	
	for(let i=3 ;i<410; i+=7){ //tri par difficultées
		if(TD_LIST[i].innerHTML == choidiff ||TD_LIST[i+1].innerHTML == choidiff ||TD_LIST[i+2].innerHTML == choidiff || TD_LIST[i+3].innerHTML == choidiff ){
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-3].innerHTML+"</td><td>"+TD_LIST[i-2].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i-1].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+3].innerHTML+"</td></tr>"
		}
	}
}

function TrierTableText(){
	let compteur=0;//s'incremente pour chaque caractere similere entre choitext et data du table (si = choitext.length → suite de caractere similere →affiche)
	let choitext = document.getElementById("choitext").value
	document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody>"

	for(let i=0 ;i<410; i+=7){ //tri par texte
		compteur =0;
		for(let ii=0; ii < choitext.length;ii++){
			if(TD_LIST[i].innerHTML[ii] == choitext[ii] || TD_LIST[i+1].innerHTML[ii] == choitext[ii] ){
				compteur+=1;
			}			
		}
		if( compteur == choitext.length){
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i].innerHTML+"</td><td>"+TD_LIST[i+1].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i+3].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+4].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+5].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+6].innerHTML+"</td></tr>"	
		}
	}
}

function fulltable(){
	document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody>"
		for(let i=3 ;i<410; i+=7){ 
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-3].innerHTML+"</td><td>"+TD_LIST[i-2].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i-1].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+3].innerHTML+"</td></tr>"
		}
}

function tripopn11(){
	document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody><tr class=\"titrejeux\"><th colspan=\"7\">pop'n music 11 いろは</th></tr>"
	for(let i=86 ;i<202; i+=7){ 
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-3].innerHTML+"</td><td>"+TD_LIST[i-2].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i-1].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+3].innerHTML+"</td></tr>"		
	}
}
function tripopn10(){
	document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody><tr class=\"titrejeux\"><th colspan=\"7\">pop'n music 10 いろは</th></tr>"
	for(let i=205 ;i<300; i+=7){ 
			document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-3].innerHTML+"</td><td>"+TD_LIST[i-2].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i-1].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+3].innerHTML+"</td></tr>"		
	}
}

