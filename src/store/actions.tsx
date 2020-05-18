import {FETCHED_FB_DETAILS} from './constants'


const dispatchFBDeatils = (data: any) => ({
    type: FETCHED_FB_DETAILS,
    payload: data
});

export const FBActions = {
    dispatchFBDeatils
};
