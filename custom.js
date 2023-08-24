
   document.getElementById('case-increase').addEventListener('click', function() {
        const caseinput = document.getElementById('case-count');
        const casecount = parseInt(caseinput.value);
        const casenewcount = casecount + 1;
        caseinput.value = casenewcount;
        const casetotal = casenewcount * 59;
        document.getElementById('case-total').innerText = '$' + casetotal;
        calculatetotal();
    });
    document.getElementById('case-decrease').addEventListener('click', function() {
        const caseinput = document.getElementById('case-count');
        const casecount = parseInt(caseinput.value);
        const casenewcount = casecount - 1;
        caseinput.value = casenewcount;
        const casetotal = casenewcount * 59;
        document.getElementById('case-total').innerText = '$' + casetotal;
        calculatetotal();
    });
    document.getElementById('phone-increase').addEventListener('click', function() {
        const caseinput = document.getElementById('phone-count');
        const casecount = parseInt(caseinput.value);
        const casenewcount = casecount + 1;
        caseinput.value = casenewcount;
        const casetotal = casenewcount * 59;
        document.getElementById('phone-total').innerText = '$' + casetotal;
        calculatetotal();
    });
    document.getElementById('phone-decrease').addEventListener('click', function() {
        const caseinput = document.getElementById('phone-count');
        const casecount = parseInt(caseinput.value);
        
        const casenewcount = casecount - 1;
        caseinput.value = casenewcount;
        const casetotal = casenewcount * 59;
        document.getElementById('phone-total').innerText = '$' + casetotal;
        calculatetotal();
    });
    function calculatetotal(){
     var phoneinput = document.getElementById("phone-count");
     var phonecount = parseInt(phoneinput.value);
     var caseinput = document.getElementById("case-count");
     var casecount = parseInt(caseinput.value);
     const totalcount = phonecount * 1219 + casecount * 59;
     document.getElementById("total-price").innerText = '$' + totalcount;
     // const tax = document.getElementById("tax").innerText;
    const taxtest = Math.round(totalcount * 0.1) ;
   const taxtotal = document.getElementById('tax').innerHTML = taxtest;
   const addtotal = totalcount + taxtotal ;
   const totala = document.getElementById("lasttotal").innerHTML =  addtotal;
    }