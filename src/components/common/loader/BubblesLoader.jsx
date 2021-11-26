import ReactLoading from "react-loading";

function BubblesLoader() {
  return (
    <div>
      <ReactLoading
        className="preloader"
        type="spinningBubbles"
        color="#000000"
      />
    </div>
  );
}
export default BubblesLoader;
