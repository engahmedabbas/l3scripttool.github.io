function myFunction95() {
var circuit =
['Router : ART-ROD-ATO : Interface : xe-9/1/1 : Description : Airtel-1-EIG-TE-FIB-IGWSBM : IP : 81.10.87.158/30',
'Router : IGW01-RAM : Interface : xe-1/1/0  : Description : Orange-3-AAE1-TE-FIB-IGWSBM : IP : 81.10.87.6/30',
'Router : IGW01-RAM : Interface : xe-1/3/1  : Description : RGX-1-HAWK-TE-FIB-IGWSBM : IP : 81.10.87.218/30',
'Router : IGW01-RAM : Interface : xe-2/0/0  : Description : RGX-2-HAWK-TE-IGW01-ATO-FIB-IGWSBM : IP : 81.10.87.210/30',
'Router : IGW01-RAM : Interface : xe-2/0/1  : Description : Orange-5-SMW4-TE-FIB-IGWSBM : IP : 81.10.87.246/30',
'Router : IGW01-RAM : Interface : xe-2/0/8  : Description : Tinet-1-EIG-TE-FIB-IGWSBM : IP : 81.10.86.26/30',
'Router : IGW01-RAM : Interface : xe-2/0/9  : Description : LEVEL3-2-AAE1-TE-FIB-IGWSBM : IP : 81.10.87.82/30',
'Router : IGW01-RAM : Interface : xe-2/0/11 : Description :  |Cogent-2-EIG-TE-FIB-IGWSBM : IP :  |81.10.86.82/30',
'Router : IGW02-RAM : Interface : xe-1/0/1 : Description : LEVEL3-3-TEN-TE-FIB-IGWSBM : IP : 81.10.87.50/30',
'Router : IGW02-RAM : Interface : xe-1/0/2 : Description : Cogent-1-EIG-TE-FIB-IGWSBM : IP : 81.10.87.230/30',
'Router : IGW02-RAM : Interface : xe-1/0/3 : Description : Orange-6-IMEWE-TE-FIB-IGWSBM : IP : 81.10.87.206/30',
'Router : IGW02-RAM : Interface : xe-1/0/5 : Description : LEVEL3-4-AAE1-TE-FIB-IGWSBM : IP : 81.10.86.58/30',
'Router : IGW02-RAM : Interface : xe-1/0/13 : Description :  |LEVEL3-5-EIG-TE-FIB-IGWSBM : IP : 81.10.86.86/30',
'Router : IGW02-RAM : Interface : xe-1/1/3 : Description : LEVEL3-1-AAE1-TE-FIB-IGWSBM : IP : 81.10.87.46/30',
'Router : IGW02-RAM : Interface : xe-2/3/0 : Description : Tinet-2-TENORTH-TE-FIB-IGWSBM : IP : 81.10.86.46/30',
'Router : IGW01-ATO : Interface : so-0/0/0 : Description : Seabone-00000046536-4-IMEWE-ATO-STM16 : IP : 93.186.129.37/31',
'Router : IGW01-ATO : Interface : so-0/2/0 : Description : TATA-40W-PYE-NP1-IMEWE-ALXMARVC4-16C011M-CRT3-ATO-STM16-1 : IP : 80.231.196.6/30',
'Router : IGW01-ATO : Interface : so-0/2/1 : Description : Seabone-00000045764-3-IMEWE-ATO-STM16 : IP : 93.186.129.5/31',
'Router : IGW01-ATO : Interface : xe-1/1/1 : Description : ORANGE-LD012924-IMEWE-ALX/MAR/10GbE/014/M-10G-1 : IP :  |81.52.188.246/31',
'Router : IGW01-ATO : Interface : xe-1/3/0 : Description : RGX-3-HAWK-TE-FIB-IGWSBM : IP : 81.10.86.14/30',
'Router : IGW01-ATO : Interface : xe-1/3/1 : Description : RGX-4-HAWK-TE-FIB-IGWSBM : IP : 81.10.86.18/30',
'Router : IGW01-ATO : Interface : xe-2/1/0 : Description : ORANGE-2-SMW4-OFR-LD013524-FIB-IGWSBM : IP : 81.52.186.96/31',
'Router : IGW01-ATO : Interface : xe-5/2/0 : Description : Seabone-1-SMW4-TE-FIB-IGWSBM : IP : 81.10.86.98/30',
'Router : IGW02-ATO : Interface : xe-1/0/0 : Description : Seabone-2-SMW4-TE-FIB-IGWSBM : IP : 81.10.86.102/30',
'Router : IGW02-ATO : Interface : xe-1/3/1 : Description : Orange-7-IMEWE-TE-FIB-IGWSBM : IP : 81.10.87.90/30',
'Router : IGW02-ATO : Interface : xe-2/0/0 : Description : Airtel-2-AAE1-TE-IGW02-FIB-IGWSBM : IP : 81.10.87.242/30',
'Router : IGW02-ATO : Interface : xe-2/1/0 : Description : ORANGE-4-IMEWE-OFR-LD012924-FIB-IGWSBM : IP : 193.251.247.8/31',
'Router : IGW02-ATO : Interface : xe-2/1/1 : Description : ORANGE-1-IMEWE-OFR-LD012924-FIB-IGWSBM : IP : 81.52.188.246/31',
'Router : IGW02-ATO : Interface : xe-3/0/0 : Description : RGX-5-HAWK-TE-FIB-IGWSBM : IP : 81.10.86.22/30',
]

var IP1 = document.getElementById('ip').value;

for (i = 0; i < circuit.length; i++) {
      if (circuit[i].indexOf(IP1) > -1){ 
         
         d=circuit[i]  ;
        let input = document.createElement('input');
             
          }
    
      
         
    }



   let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value =d;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.getElementById("output").value =d;

  document.body.removeChild(input);

}
