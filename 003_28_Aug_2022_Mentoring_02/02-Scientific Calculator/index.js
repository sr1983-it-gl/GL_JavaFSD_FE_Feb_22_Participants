
let ioPanel = document.getElementById("ioPanel");

function clearButtonHandler(){

  ioPanel.innerText = "";
}

function openParanthesisHandler(){

  updateDisplayPanel("(")
}

function closeParanthesisHandler(){
  updateDisplayPanel("(")
}

function backspaceButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  try{
    let newText = ioPanelText.substring(0, ioPanelText.length - 1);
    ioPanel.innerText = newText;
  }catch(error){
    ioPanel.innerText = "ERROR";
  }
}

function negationButtonHandler(){

  let ioPanelText = ioPanel.innerText;

  let number = parseInt(ioPanelText, 10);
  number = -number;

  ioPanel.innerText = number.toString();
}

function numberButtonHandler(numberValue){

  updateDisplayPanel(numberValue);
}

function operatorButtonHandler(numberValue){

  updateDisplayPanel(numberValue);
}

function anyButtonHandler(numberValue){

  updateDisplayPanel(numberValue);
}

function enterButtonHandler(event){

  if (validate()){

    let ioPanelText = ioPanel.innerText;
    try{
      let result = eval(ioPanelText);
      ioPanel.innerText = result;
    }catch(error){
      console.log("Error during evaluation ->" + error);
      ioPanel.innerText = "ERROR";
    }
  }
}

function SINButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.sin(ioPanelText));
  }
}

function COSButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.cos(ioPanelText));
  }
}

function TANButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.tan(ioPanelText));
  }  
}

function LOGButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.log(ioPanelText));
  }
}

function squareButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;
    let aNumber = parseInt(ioPanelText, 10);
    setDisplayPanel(aNumber * aNumber);
  }
}

function squareRootButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.sqrt(ioPanelText));
  }  
}

function exponentialButtonHandler(){

  if (validate()){
    
    let ioPanelText = ioPanel.innerText;

    setDisplayPanel(Math.exp(ioPanelText));
  }  
}


function validate(){

  let ioPanelText = ioPanel.innerText;

  try{
    let aNumber = parseInt(ioPanelText);
    if (isNaN(aNumber)){
      return false;
    }else{
      return true;
    }
  }catch(error){
    return false;
  }
}

function updateDisplayPanel(text){

  let ioPanelText = ioPanel.innerText;

  if (ioPanel == null || ioPanel == ""){
    ioPanel.innerText = text;
  }else{
    ioPanel.innerText += text;
  }
}

function setDisplayPanel(text){

  ioPanel.innerText = text;
}