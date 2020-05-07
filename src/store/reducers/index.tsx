import {combineReducers} from 'redux';
import main from './main.reducer';

const reducer = combineReducers({
    main
});

export default reducer;

export type RootState = ReturnType<typeof reducer>
