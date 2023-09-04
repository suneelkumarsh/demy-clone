/* 1._app.js file is used to initial the app component file
2. this file is used before all the pages get ready for the users to see
3. it is a perfect page for adding bootstrap css that is available for all the pages. */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import '../public/css/style.css';
import TopNav from '../components/TopNav';

/* 
     it returns all the properties needed to pass
*/


function myFunct({Component , pageProps}) {
    return (
        <>
        <TopNav />
        <Component {...pageProps} />
        </>
    );
}

export default myFunct;