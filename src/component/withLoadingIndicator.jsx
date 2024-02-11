const WithLoadingIndicator = (WrappedComponent, isLoading) => {
  return function withLoadingIndicator(props) {
    if (isLoading) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
};

export default WithLoadingIndicator;
