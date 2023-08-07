document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    // Create a new table row with the data
    const table = document.getElementById('Table');
    const nR = table.insertRow(-1);
    const nC = nR.insertCell(0);
    const eC = nR.insertCell(1);
    const pC = nR.insertCell(2);
    const dC = nR.insertCell(3);
    const ac=nR.insertCell(4);
    nC.innerHTML = name;
    eC.innerHTML = email;
    pC.innerHTML = password;
    dC.innerHTML = dob;
    ac.innerHTML="true";
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('dob').value = '';
  
    // Show the table
    table.style.display = 'table';
  });
