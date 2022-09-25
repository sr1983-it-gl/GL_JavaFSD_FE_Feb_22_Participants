import {FoodDisplayUI} from "./food-display-ui.js"

class FoodDisplayController{

  init(){

    let foodDisplayUI = new FoodDisplayUI();
    
    foodDisplayUI.displayMainPanelUI();
    foodDisplayUI.displayQuickNavigationPanelUI();
  }
}

export {FoodDisplayController}