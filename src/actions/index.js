import actionTypes from './actionTypes'
import api from '../api/api'

export const converterAddCurrency = currencyId => {
  return {
    type: actionTypes.CONVERTER_ADD_CURRENCY,
    payload: currencyId
  }
}

export const converterRemoveCurrency = currencyId => {
  return {
    type: actionTypes.CONVERTER_REMOVE_CURRENCY,
    payload: currencyId
  }
}

export const converterSelectBase = currencyId => {
  return {
    type: actionTypes.CONVERTER_SELECT_BASE,
    payload: currencyId
  }
}

export const converterSetBaseAmount = amount => {
  return {
    type: actionTypes.CONVERTER_SET_BASE_AMOUNT,
    payload: amount
  }
}

export const currenciesFetch = () => {
  return dispatch => {
    dispatch( currenciesRequest() )
    // request currencies data
    return api.fetchCurrencies()
    // handle request success
    .then(res => dispatch( currenciesReceive(res) ))
    // handle request failure
    .catch((err) => {
      dispatch( currenciesFetchFail(err) )
    })
  }
}

export const currenciesFetchFail = err => {
  return {
    type: actionTypes.CURRENCIES_FETCH_FAIL,
    payload: err,
    error: true
  }
}

export const currenciesReceive = currencies => {
  const timeOffset = new Date().getTimezoneOffset(),
    date = new Date( Date.now() - timeOffset * 60 ),
    dateStr = date.toTimeString().split(' ', 1)[0]

  return {
    type: actionTypes.CURRENCIES_RECEIVE,
    payload: {
      currencies,
      lastUpdated: dateStr
    }
  }
}

export const currenciesRequest = () => {
  return {
    type: actionTypes.CURRENCIES_REQUEST
  }
}

export const currenciesResetUpdate = () => {
  return {
    type: actionTypes.CURRENCIES_RESET_UPDATE
  }
}

export const currenciesScheduleUpdate = timer => {
  return {
    type: actionTypes.CURRENCIES_SCHEDULE_UPDATE,
    payload: timer
  }
}

export const errorsResetMessage = () => {
  return {
    type: actionTypes.ERRORS_RESET_MESSAGE
  }
}

export const uiSelectTab = id => {
  return {
    type: actionTypes.UI_SELECT_TAB,
    payload: id
  }
}