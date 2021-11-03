//where the data layer logic goes here
//the store is an object 
//the basket is an emty array
export const initialState = {
    basket: [{
        id:"111", 
        title:"Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas",
        price:249.99, 
        rating:4, 
        image:"https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"

    },{
        id:"999", 
        title:"Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas",
        price:249.99, 
        rating:4, 
        image:"https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"

    },{
        id:"666", 
        title:"Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas",
        price:249.99, 
        rating:4, 
        image:"https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"

    },{
        id:"333", 
        title:"Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas",
        price:249.99, 
        rating:4, 
        image:"https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"

    },{
        id:"888", 
        title:"Best Choice Products 80in Outdoor Wooden Chicken Coop Multi-Level Hen House, Poultry Cage w/Ramps, Run, Nesting Box, Wire Fence, 3 Access Areas",
        price:249.99, 
        rating:4, 
        image:"https://m.media-amazon.com/images/I/81iX6e4tEyL._AC_UL640_FMwebp_QL65_.jpg"

    }
],
}

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

//refer to the data layer as state
// refer to things you do as action
const reducer = (state,action) => {
    console.log(action)
    switch(action.type) {
        case "ADD_TO_BASKET":
            //logic for adding item to basket
            //we will return what the new data layer looks like
            //we return it but slightly different by adding to the basket
            console.log("action.item",action.item)
            return {
                //return the state as it was, then add to the basket
                ...state,
                basket: [...state.basket, action.item]
            }
            //then return the updated state
            // return { state }

            case "REMOVE_FROM_BASKET":
            //logic for removing item from a basket
            console.log("action.item",action.item)
            let newBasket=[...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if(index>=0){
                //item exits in basket, remove it...state
                newBasket.splice(index, 1);
            } else {
                console.warn('Cannot remove product (id: ${action.id}) as its not being found in basket');
            }
            return { 
                ...state ,basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;