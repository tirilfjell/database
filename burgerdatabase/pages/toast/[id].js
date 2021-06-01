function ToastPage({ id }) {
  return <h1>Hallo Toast{id}</h1>;
}

ToastPage.getInitialProps = async ({ query }) => {
  return {
    id: query.id
  };
};

export default ToastPage;
