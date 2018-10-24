var abi;
var myContractInstance;
var MyContract;
var length = 0;
function startApp(abi2,MyContract2,myContractInstance2){
		console.log("startup");
	    abi=abi2;
	    MyContract=MyContract2;
	    myContractInstance=myContractInstance2;
}
//this will add the project details
function addProject(){ 
	var projTitle = document.getElementById('projTitle').value;
	var projDesc = document.getElementById('projDesc').value;
	var user = document.getElementById('user').value;
	var dateofPos = document.getElementById('dateofPos').value;
	var fundGoal = document.getElementById('fundGoal').value;
	var addProject = myContractInstance.addProject(projTitle,projDesc,user,dateofPos,fundGoal,function(err,res){
		if(err){
			console.log(err);
		} else {
			console.log(res);
		}
	});
	
	 	var event = myContractInstance.projAdded({},function(error, result) {
	 	  if (!error) {
	 		    var msg = " project created with id " + (result.args.id);
				window.alert(msg);
	 		//    document.getElementById('callback').innerHTML = ""+msg;
	 		    console.log(msg);

	 	  }
	 	  else {
	 		  console.error(error);
	 	  } 
	 });
}



function browseproject(){
	var projId = document.getElementById('projId').value;
	var browseproject = myContractInstance.brosweproject(projId,function(err,res){
		if(err){
			console.log(err);
		} else {
			var msg1 = " Project Title  &nbsp&nbsp : &nbsp " + (res[0]);
			var msg2 = " Project Desc &nbsp : &nbsp " + (res[1]);
			var msg3 = " Date of post &nbsp&nbsp : &nbsp&nbsp  " + (res[2]);
			var msg4 = " Fund Goal &nbsp&nbsp&nbsp&nbsp : &nbsp&nbsp   " + (res[3]) + " ETH";
			var msg5 = " status &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp&nbsp : &nbsp&nbsp  " + (res[4]);
			var msg6 = " Address to donate &nbsp &nbsp &nbsp &nbsp&nbsp : &nbsp&nbsp  " + (res[5]);
			document.getElementById('detailsCallback').innerHTML = ""+msg1; 
			document.getElementById('detailsCallback').innerHTML += "<br>"+msg2;
			document.getElementById('detailsCallback').innerHTML += "<br>"+msg3;
			document.getElementById('detailsCallback').innerHTML += "<br>"+msg4;
			document.getElementById('detailsCallback').innerHTML += "<br>"+msg5;
			document.getElementById('detailsCallback').innerHTML += "<br>"+msg6;
			console.log(res);
		}
	});
	
	
}

function getLength(){
	
		//debugger;
		myContractInstance.getCount(function(err,res){ 
			if(err){
			console.log(err);
		} else {
		    length = parseInt(res);
			console.log("len1");
			console.log(length);
			getList();
		}
	   }) ;
		
	   
}

function getList() {
	
	 var getStatus = document.getElementById('status').value;
		console.log(getStatus);
	
	if(getStatus == "Open"){
		document.getElementById("myTable").innerHTML = "";  // clear the display

		var myTableDiv = document.getElementById("myTable"); 
        table = document.createElement("TABLE");   
        table.setAttribute("id", "data");
        table.border = '1';
        myTableDiv.appendChild(table); 
		
		var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "Project Id";
        var th1 = table.tHead.appendChild(document.createElement("th"));
        th1.innerHTML = "Project Title";
		
		for(i = 0; i < length ; i++){
			var getAll = myContractInstance.getOpen(i,function(err,res){
			if(err){
			console.log(err);
			} else {
				 
			var row = table.insertRow(-1);
			row.insertCell(0).innerHTML = parseInt(res[0]);
			row.insertCell(1).innerHTML = res[1];

			}
			});
				
		}	
	
	}
	
	if(getStatus == "Closed"){
		
		document.getElementById("myTable").innerHTML = "";  // clear the display

		var myTableDiv = document.getElementById("myTable"); 
        table = document.createElement("TABLE");   
        table.setAttribute("id", "data");
        table.border = '1';
        myTableDiv.appendChild(table); 
		
		var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "Project Id";
        var th1 = table.tHead.appendChild(document.createElement("th"));
        th1.innerHTML = "Project Title";
		
		for(i = 0; i < length ; i++){
			var getAll = myContractInstance.getClosed(i,function(err,res){
			if(err){
			console.log(err);
			} else {
				 
			var row = table.insertRow(-1);
			row.insertCell(0).innerHTML = parseInt(res[0]);
			row.insertCell(1).innerHTML = res[1];

			}
			});
				
		}	
	
	}
	
	if(getStatus == "All"){
		
		document.getElementById("myTable").innerHTML = "";  // clear the display

		var myTableDiv = document.getElementById("myTable"); 
        table = document.createElement("TABLE");   
        table.setAttribute("id", "data");
        table.border = '1';
        myTableDiv.appendChild(table); 
		
		var header = table.createTHead();

        var th0 = table.tHead.appendChild(document.createElement("th"));
        th0.innerHTML = "Project Id";
        var th1 = table.tHead.appendChild(document.createElement("th"));
        th1.innerHTML = "Project Title";
		
		for(i = 0; i < length ; i++){
			var getAll = myContractInstance.getAll(i,function(err,res){
			if(err){
			console.log(err);
			} else {
				 
			var row = table.insertRow(-1);
			row.insertCell(0).innerHTML = parseInt(res[0]);
			row.insertCell(1).innerHTML = res[1];

			}
			});
				
		}	
		
	}
}//getList close

function transfer(){ 
	var projId = document.getElementById('projId').value;
	var projAddress = document.getElementById('projAddress').value;
	console.log(document.getElementById('amount').value);
	var amount = web3.toWei(document.getElementById('amount').value);
	console.log(amount);
	/*var transfer = myContractInstance.transfer(projAddress,amount,function(err,res){
		if(err){
			console.log(err);
		} else {
			console.log(res);
		}
	});
	
	 var event = myContractInstance.transferred({},function(error, result) {
	 	  if (!error) {
	 		    var msg = " amount of "  + (result.args.amount) + " ETH has been transferred to " + (result.args.receiver);
	 		    document.getElementById('transfercallback').innerHTML = ""+msg;
	 		    console.log(msg);

	 	  }
	 	  else {
	 		  console.error(error);
	 	  } 
	 }); */
}

 
