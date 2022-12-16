# basic-react-router
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/basic-react-router?color=g">

## Why

Currently, [React Router library](https://reactrouter.com/en/main) has become very complex.

I thought to get my hands dirty, so I could learn more and also to share this package with anyone who needs a super lightweight and efficient basic router.

This package might be for you if you just need a basic routing for your React app.

Note that this package should work very similar to [React Router - basic section](https://v5.reactrouter.com/web/example/basic).

## Getting Started

You can install the module via `npm` or `yarn`:
```sh
npm install basic-react-router
```

```sh
yarn add basic-react-router
```
## Props

|Name|Type|Default|Description|
|:--|:--:|:-----:|:----------|
|**availableRoutes**|<code>Array</code>|required|Array that must contains this kind of objects, example: {route: '/', component: JSX_COMPONENT}|
|**notFound**|<code>any</code>|`<div>Not Found.</div>`|This component can be overwritten by your own.|
## Usage

The simplest way to use this Router is to just import
and define the 'availableRoutes' props.

```js
import BasicReactRouter from 'basic-react-router'

// Pages
import HomePage from './HomePage'
import PageX from './PageX'
import PageY from './PageY'

function App() {
    const availableRoutes = [
        {route: '/', component: <HomePage/>},
        {route: '/pagex', component: <PageX/>},
        {route: '/pagey', component: <PageY/>}
    ]
    return (
        <BasicReactRouter
            availableRoutes={availableRoutes}
        />
    );
}
```

You can also pass a custom Not Found page:

```js
import BasicReactRouter from 'basic-react-router'

// ... all previous pages
import NotFound from './NotFound'

function App() {
    const availableRoutes = [
        {route: '/', component: <HomePage/>},
        {route: '/pagex', component: <PageX/>},
        {route: '/pagey', component: <PageY/>}
    ]
    return (
        <BasicReactRouter
            availableRoutes={availableRoutes}
            notFound={NotFound}
        />
    );
}
```

You can navigate into pages using the Link component. 
```js
import {Link} from 'basic-react-router'

function HomePage() {
    return (
        <div>
            HomePage
            <Link to={'/pagex'}>Link!</Link>
        </div>
    );
}
```

Or going back through history using Back component.

You can also wrap Back or Link component into buttons
```js
import {Back} from 'basic-react-router'

function PageX() {
    return (
        <div>
            PageX
            <Back>Back</Back>
        </div>
    );
}
```

You don't need to import and use them though. 

Link and Back are very simple components, you can eventually make your own.

Here's how they are made:
```js
export const Link = ({to, children, ...props}) => <a href={to} {...props}>{children}</a>

export const Back = ({children, ...props}) => <a {...props} onClick={(e) => {
e.preventDefault()
window.history.back()
}}>{children}</a>
```
Of course, you can check out the GitHub project for more.

## Contributing
Contributions of any kind are welcome.

## License
MIT

## Personal Blog

this is my [Instagram personal blog](https://www.instagram.com/minudaje/) where I share software related content and music 