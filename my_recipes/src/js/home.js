function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to My Recipe Storer</h1>
        <h3>
          Tired of having to search endlessly for old recipes? Don't have an old
          family recipe book? With My Recipe Storer, you can keep all of your
          recipes in one place and not have to worry about finding them again.
          It's easy, just follow these simples steps:
        </h3>
      </div>
      <div className="steps">
        <div className="step">
          <h1>Step 1</h1>
          <p>Click on the "Create New Recipe" tab. There you can fill out a template to save
            your recipe and add any links or videos.
          </p>
          <img className="stepImg" src="images/HappyCooking-1.png" alt="happy man cooking"/>
        </div>
        <div className="step">
          <h1>Step 2</h1>
          <p>Click on the "Saved Recipes" tab to view all of the recipes you have created so far.
          </p>
          <img className="stepImg" src="images/HappyCooking-1.png" alt="happy man cooking"/>
        </div>
        <div className="step">
          <h1>Step 3</h1>
          <p>Enjoy cooking without the stress of having to keep track of your many recipes.
          </p>
          <img className="stepImg" src="images/HappyCooking-1.png" alt="happy man cooking"/>
        </div>
      </div>
    </div>
  );
}
export default Home;
