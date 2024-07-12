import { CustomSelect } from "./customSelect";
import { NavUnderlinePrinter } from "./navigation/navUnderlinePrinter";
import { ProductsCreator } from "./products/productsCreator";
import { StateReobservEl } from "./states/stateReobservEl";
import { NavToggle } from "./navigation/navToggle";
import { PopupProductDetails } from "./products/popupProductDetails";

class indexHome {
  constructor() {
    new NavUnderlinePrinter();
    new NavToggle();
    new CustomSelect();
    const observ = new ProductsCreator();
    observ.observeLastElem();
    StateReobservEl.observRef = observ.reObserveLastElem.bind(observ);
    new PopupProductDetails();
  }
}

new indexHome();
