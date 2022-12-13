const Button = ({ getRandomGif }) => {
  const handleClick = () => {
    getRandomGif();
    console.log("clicked");
  };

  return (
    <div>
      <h1>Click this button to generate a Random Gif!</h1>
      <button onClick={handleClick}>Generate Gif</button>
    </div>
  );
};

export default Button;
