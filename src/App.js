import React from 'react';
import WelcomePage from './pages/welcome';
import Homepage from './pages/homepage';
import SearchIngredientPage from './pages/searchIngredient';
import eatlyStore from './redux/reducer';
import { WELCOME_PAGE, HOMEPAGE, SEARCH_INGREDIENT } from './redux/reducer';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = ({
            page: ""
        })

        
        eatlyStore.subscribe(() => {
            this.setState({
                page: eatlyStore.getState().page
            })
        })
    }

    render() {
        if (this.state.page == WELCOME_PAGE) {
            return <WelcomePage/>
        }
        else if (this.state.page == HOMEPAGE) {
            return <Homepage/>
        }
        else if (this.state.page == SEARCH_INGREDIENT) {
            return <SearchIngredientPage/>
        }
        else {return <WelcomePage/>}
        
    }
}

export default App;