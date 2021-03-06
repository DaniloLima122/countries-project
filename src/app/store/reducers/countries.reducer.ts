import { CountryActionsTypes } from '../actions/countries.actions';
import { CountriesState } from '../models/app-state.model';
import { ActionsModel } from '../models/country-item.model';


export function CountriesReducer(state: CountriesState, action: ActionsModel) {

  switch (action.type) {
    case CountryActionsTypes.LIST_COUNTRIES:

      return { ...state, loading: true, error: undefined }

    case CountryActionsTypes.LIST_COUNTRIES_SUCCESS:

      return { ...state, list: action.payload, loading: false, error: undefined }

    case CountryActionsTypes.SEARCH_COUNTRIES:

      return { ...state, payload: action.payload , loading: true , error: undefined }

    case CountryActionsTypes.SEARCH_COUNTRIES_SUCCESS:

      return { ...state, list: action.payload, loading: false, error: undefined }

    case CountryActionsTypes.FILTER_COUNTRIES:

      return { ...state, payload: action.payload, loading: true, error: undefined }

    case CountryActionsTypes.FILTER_COUNTRIES_SUCCESS:

      return { ...state, list: action.payload, loading: false, error: undefined }

    case CountryActionsTypes.HANDLE_ERROR:

      return { ...state, list: [], loading: false, error: action.payload, }

    default:

      return state;
  }
}
