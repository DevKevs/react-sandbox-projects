import Rating from "./components/Rating";

const App = () => {
  return (
    <>
      <Rating
        heading="Is React hard to learn?"
        feedbackMessages={[
          "Very hard",
          "Hard",
          "Is ok",
          "Easy",
          "Very easy",
        ]}
      />
    </>
  );
};

export default App;
