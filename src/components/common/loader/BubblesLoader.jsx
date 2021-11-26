import ReactLoading from "react-loading";

function BubblesLoader() {
  return (
    <div>
      <ReactLoading
        className="preloader"
        type="spinningBubbles"
        color="#4870b3"
      />
    </div>
  );
}
export default BubblesLoader;
