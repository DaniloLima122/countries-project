import { CountryActionsTypes } from '../actions/countries.actions';
import { CountryItem, ActionsModel  } from '../models/country-item.model';
import { CountriesState } from '../models/app-state.model';



// const country: CountryItem = {
//   flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png',
//   name: 'Brazil',
//   population: 206135893,
//   region: 'Americas',
//   capital: 'Brasília'
// }

// const intialState : CountriesState = {
//   list: [country],
//   loading: false
// }

export function CountriesReducer(state: CountriesState, action: ActionsModel) {

  switch (action.type) {
    case CountryActionsTypes.LIST_COUNTRIES:

      return { ...state, loading: true }

    case CountryActionsTypes.LIST_COUNTRIES_SUCESS:

      return { ...state, list: action.payload, loading: false }

    case CountryActionsTypes.SEARCH_COUNTRIES:

      return { ...state, 'payload': action.payload }

    case CountryActionsTypes.FILTER_COUNTRIES:

      return { ...state, 'payload': action.payload }

    default:

      return state;
  }
}
