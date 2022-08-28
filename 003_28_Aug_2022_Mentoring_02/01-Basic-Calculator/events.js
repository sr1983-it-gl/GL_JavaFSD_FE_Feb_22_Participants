
let divButtons = document.getElementsByClassName("button");

let divButtonsArray = Array.from(divButtons);

divButtonsArray.forEach(addEventListener);

function addEventListener(divButton, index, entireArray){

  divButton.addEventListener("click", handleEvent);
}

function handleEvent(event){

  let ioPanel = document.getElementById("ioPanel");

  let divButtonTarget = event.target;
  let divButtonText = divButtonTarget.innerText;

  if (divButtonText == "CLEAR"){
    ioPanel.innerText = "";
  }else if (divButtonText == "BACKSPACE"){

    let ioPanelText = ioPanel.innerText;    
    let temp = ioPanelText.substring(0, ioPanelText.length - 1);
    ioPanel.innerText = temp;

  }else if (divButtonText == "="){

    let ioPanelText = ioPanel.innerText; 

    try{
      let result = eval(ioPanelText);
      ioPanel.innerText = result;
    }catch(error){
      ioPanel.innerText = "ERROR";
    }
      /*
      eval(2 * 3)
      eval ((1+2) * 3);
    */

  }else {

    let temp = ioPanel.innerText;
    temp = temp.concat(divButtonText)

    ioPanel.innerText = temp;
  }


  console.log("Event Handler code...")

}

