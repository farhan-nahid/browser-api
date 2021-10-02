console.log("i am here");

// alert('Ma is coming!!');

const maComing = () => {
  alert("Ammu is coming. Open the book");
};

const askPicnic = () => {
  const response = confirm("Are you going to picnic?");
  if (response) {
    alert("amake fee ta bKash kore de");
  } else {
    alert("DGM !!! Door e giya mor!!!");
  }
};

const askName = () => {
  const name = prompt("What is your name?");
  if (name) {
    document.getElementById("output").innerText = `My Name is ${name}.`;
  } else {
    alert("You don't write anything");
  }
};
