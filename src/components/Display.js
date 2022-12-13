const Display = ({ gif }) => {
  return gif.data ? (
    <div>
      <img src={gif.data.images.original.url} alt="random gif"></img>
    </div>
  ) : (
    <h1> No Image</h1>
  );
};
export default Display;
