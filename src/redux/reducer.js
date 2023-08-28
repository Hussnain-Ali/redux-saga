
import {ADD_TO_CART,EMPTY_CART,REMOVE_FROM_CART} from './constant'


 export const cartData = (data=[{count:0, product:{}}], action) => {
     switch (action.type) {
          case ADD_TO_CART:
               console.log([{ ...action.data, count: 1 }])
               const newData = [{...action.data, count:1}]
               return [...action.data , newData]
               // return [{}]
               // return [{count:0, product:action.data},{count:0, product:data}];
          case REMOVE_FROM_CART:
               console.log('id of element',action.data)
          const remainingData = data.filter((item) =>  item.id !== action.data);
               return [...remainingData];
            
          case EMPTY_CART:
               data = [];
               return[...data]
          default:
               return data;   

     }
}


