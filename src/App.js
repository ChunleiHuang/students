import React,{Component} from "react"
import {Route,Switch,Redirect} from "react-router-dom"
import {adminRoute} from "./routes"
import {Frame} from "./components"
const menu = adminRoute.filter(route=>route.isNav===true)
export default class App extends Component {
    render (){
        return (
                <Frame menu={menu}>
                <Switch>
                    {
                        adminRoute.map(route=>{
                            return <Route 
                                path={route.pathname} 
                                key={route.pathname}
                                exact={route.exact} 
                                render={(routeProps)=>{
                                    return <route.component {...routeProps}/>
                            }}/>
                        })
                    }
                    <Redirect to={adminRoute[0].pathname} from="/admin" exact/>
                    <Redirect to="/404"/>
                </Switch>
                </Frame>
        )
    }
}