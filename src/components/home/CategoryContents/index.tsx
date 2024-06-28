import PossibleSection from "./PossibleSection";

function CategoryContents() {
  return (
    <>
      <PossibleSection />
      <PossibleSection isPossible={false} />
    </>
  );
}

export default CategoryContents;
