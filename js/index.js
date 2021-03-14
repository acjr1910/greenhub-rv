import { Observer } from "./entities/Observer";
import { ObservableState } from "./entities/ObservableState";

import requestData from "./modules/requestData";
import renderResults from "./modules/renderCards";

import dropdown from "./components/dropdown";
import button from "./components/button";

export default function app() {
  const appState = new ObservableState({
    sun: null,
    water: null,
    pets: null,
    plants: [],
  });

  appState.subscribe(requestData);
  appState.subscribe(renderResults);

  const dropdownObserver = new Observer();

  dropdownObserver.subscribe((selectValue) => {
    const [key, value] = selectValue;
    appState.set({
      ...appState.state,
      [key]: value,
    });
  });

  dropdown(dropdownObserver);
  button();
}

document.addEventListener("DOMContentLoaded", app);
