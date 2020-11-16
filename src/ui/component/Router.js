import Work from '../../about/component/Work'
import Project from '../../about/component/Project'
import About from '../../about/component/About'
import { Route, Switch } from 'react-router-dom'
export default function componentName() {
  return (
    <>
      <Switch>
      <Route  exact path="/project">
 <Project/>
        </Route>
      <Route  exact path="/work">
 <Work/>
        </Route>
        <Route  exact path="/">
 <About/>
        </Route>
      </Switch>
    </>
  )
}