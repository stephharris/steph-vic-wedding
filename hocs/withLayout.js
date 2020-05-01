import Logo from '../components/Logo';

const withLayout = WrappedComponent => {
 const Layout = props => {
   return (
      <div>
        <Logo />
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
