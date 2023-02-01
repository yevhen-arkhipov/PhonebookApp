import { ThreeDots as Spinner } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <Spinner
        height="300"
        width="300"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};

export default Loader;
