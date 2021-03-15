function myFunction100() {

  var Interface = document.getElementById('ae').value;
  var elements = Interface.split('\n');
  var Command1 ='';

	elements.forEach((currentValue, index, arr)=>{
var Aggregate = currentValue.split(':')[0];
  var remainder = currentValue.split(':')[1];


  
  var Stacked  =remainder.split('-')[0];
  var Vlan = remainder.split('-')[1];
 
  Command1 +=  "show subscribers physical-interface " + Aggregate + " stacked-vlan-id " + Stacked + " vlan-id " + Vlan ; 

  Command1 += '\n';

  let input = document.createElement('input');

  input.setAttribute('type', 'text');
  
  input.value = Command1;
  
  document.body.appendChild(input);
  
  input.select();
  
  document.execCommand("copy");
  
  document.getElementById("output").value = Command1;
  document.body.removeChild(input);

});

  
}