import { CountryActionsTypes } from '../actions/countries.actions';
import { CountriesState } from '../models/app-state.model';
import { ActionsModel } from '../models/country-item.model';
import { UnaryFunction } from 'rxjs';



export function CountriesReducer(state: CountriesState, action: ActionsModel) {

  switch (action.type) {
    case CountryActionsTypes.LIST_COUNTRIES:

      return { ...state, loading: true }

    case CountryActionsTypes.LIST_COUNTRIES_SUCCESS:

      return { ...state, list: action.payload, loading: false }

    case CountryActionsTypes.SEARCH_COUNTRIES:

      return { ...state, payload: action.payload }

    case CountryActionsTypes.SEARCH_COUNTRIES_SUCCESS:

      return { ...state, list : action.payload , loading : false}

    case CountryActionsTypes.FILTER_COUNTRIES:

      return { ...state, payload: action.payload, loading: true }

    case CountryActionsTypes.FILTER_COUNTRIES_SUCCESS:

      return { ...state, list: action.payload, loading: false }

    default:

      return state;
  }
}
