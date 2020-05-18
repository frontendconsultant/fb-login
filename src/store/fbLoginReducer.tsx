import {FETCHED_FB_DETAILS} from './constants';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import {RootState} from '../store/store';

export interface IAppState {
    login: boolean,
    data: {},
    picture:string
}
const initialState: IAppState = {
    login: false,
    data: {name:'', email: ''},
    picture: ''

};

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;


export function fbLoginReducer (state = initialState, action: any)  {
    switch (action.type) {
      case FETCHED_FB_DETAILS: {  
        return {
          ...state, login: true, data: action.payload, picture: action.payload.picture.data.url,
        };
        
      }
      default:
        return state;
    }
};
  
