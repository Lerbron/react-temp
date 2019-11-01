
const initState = {test: false};

export default function test(state = initState, action) {
	switch (action.type) {
		case 'TEST' :
			return Object.assign({}, state, {test: true});
		default :
			return state;
	}
}