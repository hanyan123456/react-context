import React, {Component} from 'react';
import Header from './component/header'
import Body from './component/body'
import TopMenu from '../components/topMenu'
import { Provider } from '../context'

class Home extends Component{
    state={
        childData:'父亲'
    }
   
    render(){
        const { childData } = this.state;
        return(
            <Provider value={ childData }>
                <div>
                    <Header></Header>
                    <Body Data={childData}></Body>
                    <TopMenu Data={childData}></TopMenu>
                </div>
             </Provider>
        );
    }
}
Home.propTypes={};
export default Home;