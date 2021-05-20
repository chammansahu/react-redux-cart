//data
const initialData = {
    cartCount:9
}
//actions
const cardReducer=(state = initialData, action) =>{
    
    switch (action.type) {
        case 'ADD_ITEM': return {
            cartCount: ++state.cartCount
        }
        case 'REMOVE_ITEM': return {
            cartCount: --state.cartCount
        }
        default: {
            return state
        }
    }


}
export default cardReducer;

