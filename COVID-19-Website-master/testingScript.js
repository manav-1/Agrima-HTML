var firebaseConfig = {
    apiKey: "AIzaSyCouq5WSz26g6IPR6vSo3WTR2dTaQgvwzw",
    authDomain: "coronatesting-81628.firebaseapp.com",
    databaseURL: "https://coronatesting-81628.firebaseio.com",
    projectId: "coronatesting-81628",
    storageBucket: "coronatesting-81628.appspot.com",
    messagingSenderId: "51288101238",
    appId: "1:51288101238:web:8583b152a72d28e46dea57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var UserInputsRef=firebase.database().ref("coronatesting-81628")

  document.getElementById('testForm').addEventListener('submit',submitForm);
  function submitForm(e){
    e.preventDefault();
    var name =getInputVal('name');//name= rt and value of rt is manav
    var mobile =getInputVal('mobile');// name =rt and  here value of rt changes to mobile number
    var age =getInputVal('age');
    var state =getInputVal('state');
    state=state.toLowerCase();
    readState(state);
    var email =getInputVal('email');
    var profession =getInputVal('profession');
    var dateofbirth =getInputVal('dateofbirth');
    var volunteer = getInputVal('volunteer');
    var travel = getInputVal('travel');
    var symptomsList =getSelectedCheckboxValues('symptoms');
    saveMessages(name,mobile,age,email,profession,dateofbirth,volunteer,state,travel,symptomsList);// called the save messages function 
}

function readState(state){
    var centers;
    var ref = firebase.database().ref(state);
    ref.on('value', (data) => {
     centers = data.val();
     document.getElementById("result").innerHTML ="<br>"+centers.toUpperCase();
})

}
function getInputVal(id){
    return document.getElementById(id).value;
    
}

function saveMessages(name,mobile,age,email,profession,dateofbirth,volunteer,state,travel,symptomsList){
    var newuserInputsRef = UserInputsRef.push();
    newuserInputsRef.set({
        name:name,
        mobile:mobile,
        age:age,
        email:email,
        profession:profession,
        dateofbirth:dateofbirth,
        volunteer:volunteer,
        state:state,
        travel:travel,
        symptomsList:symptomsList
    })
}

function getSelectedCheckboxValues(name) {// the value of name that were getting is symptoms
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    checkboxes.forEach((checkbox) => {//first time me jaa rha hai a, then next time me b
        values.push(checkbox.value);
    });
    return values;
}