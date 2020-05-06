import React from 'react';

import withLayout from '../hocs/withLayout';
import '../styles/index.css';


const MyApp = ({ Component, pageProps }) => {
  return <Component { ...pageProps } />
}


export default withLayout(MyApp);
