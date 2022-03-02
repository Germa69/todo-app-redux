import { createStore } from "redux";
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

// composeWithDevTools trả về 

const composedEnhancers = composeWithDevTools();

// Sử dụng thêm dev tools để kiểm tra xem dữ liệu kho chung đang là gì?
const store = createStore(rootReducer, composedEnhancers);

export default store