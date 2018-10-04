import { PLACE_HOLDER } from './types';

export const fetchPlaceHolder = () => dispatch => {
    fetch('/api/placeHolder')
        .then(res => res.json())
        .then(data => dispatch({
            type: PLACE_HOLDER, payload: data
        }));
}

export const createPlaceHolder = (placeHolder) => dispatch => {
    fetch('/api/placeHolder', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

        body: JSON.stringify(placeHolder)
    })
        .then(res => res.json())
        .then(data => dispatch({
            type: PLACE_HOLDER,
            payload: data
        }));
}