import Header from '../components/Header';

const withLayout = WrappedComponent => {
 const Layout = props => {
   return (
      <div>
        <Header />
        <WrappedComponent {...props} />
      </div>
    )
  }

  if(WrappedComponent.getInitialProps) {
    Layout.getInitialProps = WrappedComponent.getInitialProps
  }

  return Layout
}

export default withLayout;
