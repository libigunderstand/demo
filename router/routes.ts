
interface routesProp {
    path: string;
    component?: string;
    redirect?: string;
    exact?: boolean;
    to?: string;
}

const routes:[routesProp] = [
    {
        path: '/',
        component: ''
    }
]
export default routes