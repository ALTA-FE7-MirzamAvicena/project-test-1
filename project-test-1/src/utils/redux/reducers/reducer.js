const initialState = {
    isloggedin: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS LOGGED IN":
            return {
                ...state,
                isloggedin: action.payload,
            };
        default:
            return state;
    }
}