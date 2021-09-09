import {API_KEY, convertDirection} from "../const";
import {ActionCreator} from "./action";
import dayjs from "dayjs";
import {prettify} from "../utils";




export const convert = (direction= convertDirection.FROM_TO) => (dispatch, _getState, api) => {
  const fromCode = _getState().fromCurrencyCode;
  const toCode = _getState().toCurrencyCode;
  const fromValue = _getState().fromValue;
  const toValue = _getState().toValue;
  const date = dayjs(_getState.data).format(`YYYY-MM-DD`).toString()

  const directionStr = (direction === 'FROM_TO') ? `${fromCode}_${toCode}` : `${toCode}_${fromCode}`

  return api.get(`?q=${directionStr}&compact=ultra&date=${date}&apiKey=${API_KEY}`)
    .then(({data}) => {
      const currency = data[directionStr][date];
      (direction === 'FROM_TO') ?
        dispatch(ActionCreator.setToValue(prettify(fromValue * currency))) :
        dispatch(ActionCreator.setFromValue(prettify(toValue * currency)))
    })
    .catch((error) => {
      console.log(error)
    })
};
