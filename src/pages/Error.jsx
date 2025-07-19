import MainNavBar from '../components/MainNavBar';

function ErrorPage() {
  return (
    <>
      <MainNavBar />
      <main>
        <h1>An Error Occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}

export default ErrorPage;