setTimeout("const TD_LIST = document.querySelectorAll('td');",500); // le temp que la page charge

function TrierTableBpm(){
document.getElementById("Tablesongs").innerHTML ="<thead id=\"colonnes\"><tr><th rowspan=\"2\">Titre</th><th rowspan=\"2\">artist</th><th rowspan=\"2\">BPM</th><th colspan=\"4\">difficultées</th></tr><tr class=\"diffs\"><th class=\"ez\">Easy</th><th class=\"normal\">normal</th><th class=\"hyper\">hyper</th><th class=\"EX\">EX</th></tr></thead><tbody>"
 let choiBpmBas = document.getElementById("choibpmBas").value
 let choiBpmHaut = document.getElementById("choibpmHaut").value
 for(let i=2 ;i<410; i+=7){ //tri par bpm
	
	if(TD_LIST[i].innerHTML[2] == "-"|| TD_LIST[i].innerHTML[3] == "-"){ // pour les bpm qui varient ( pr
		if(TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-3]+ TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-2]+TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-1]>= choiBpmBas && TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-3]+ TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-2]+TD_LIST[i].innerHTML[(TD_LIST[i].innerHTML.length)-1] <= choiBpmHaut){
		document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-2].innerHTML+"</td><td>"+TD_LIST[i-1].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+3].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+4].innerHTML+"</td></tr>"
		}
	}
		
	if(Number(TD_LIST[i].innerHTML) <= Number(choiBpmHaut) && Number(TD_LIST[i].innerHTML)>= Number(choiBpmBas)){
	 document.getElementById("Tablesongs").innerHTML+="<tr><td>"+TD_LIST[i-2].innerHTML+"</td><td>"+TD_LIST[i-1].innerHTML+"</td><td class=\"bpm\">"+TD_LIST[i].innerHTML+"</td><td class=\"ez\">"+TD_LIST[i+1].innerHTML+"</td><td class=\"normal\">"+TD_LIST[i+2].innerHTML+"</td><td class=\"hyper\">"+TD_LIST[i+3].innerHTML+"</td><td class=\"EX\">"+TD_LIST[i+4].innerHTML+"</td></tr>"
	}
 }

}

