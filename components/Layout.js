const { Children } = require("react")

import Nav from '../components/Nav';

const Layout = ({ children }) => {
    return (
        <div className='container'>
            <style jsx>{`
                .container {
                    margin: 0;
                    padding: 0;
                    background: coral;
                }
                .main {padding: 2em}
            `}</style>
            <Nav />
            <div className='main'>

                {children}
            </div>
        </div>
    )
}

export default Layout