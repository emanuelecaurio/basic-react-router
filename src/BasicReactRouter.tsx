import * as React from "react";
import {useEffect, useState} from "react";
interface Route {
    route: string,
    component: any
}
interface BasicReactRouterProps {
    availableRoutes: Route[],
    notFound?: any
}
const BasicReactRouter: React.FC<BasicReactRouterProps> = ({availableRoutes = [], notFound = <div>Not found.</div> }) => {
    const [compToRender, setCompToRender] = useState(notFound)
    useEffect(() => {
        availableRoutes.forEach(r => {
            if(r.route === (window.location.pathname)) {
                setCompToRender(r.component)
            }
        })
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            {compToRender}
        </div>
    )
};


export default BasicReactRouter;