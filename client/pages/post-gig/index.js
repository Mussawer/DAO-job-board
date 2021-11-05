import { useState } from "react";
import { Box } from "../../styles/styles";

//The number in the file names tell you which step in the form they are
import GigBasics from "./1_GigBasics";
import GigDetails from "./2_GigDetails";
import GigSummary from "./3_GigSummary";

export default function CreateProject() {
  const [formData, setFormData] = useState({
    gigname: "",
    gigwebsite: "",
    gigdescription: "",
    gigcategory: "",
    gigreward: "",
    gigamount: "",
    gigtimeframe: ""
  });

  const [timeframeActive, setTimeframeActive] = useState(false);

  //Page States will change depending on whether the user clicks on Continue or Back
  const [basicsPage, setBasicsPage] = useState(true);
  const [detailsPage, setDetailsPage] = useState(false);
  const [summaryPage, setSummaryPage] = useState(false);

  //Change Page on Click
  const goToBasics = () => {
    setBasicsPage(true);
    setDetailsPage(false);
    setSummaryPage(false);
  };

  const goToDetails = () => {
    setDetailsPage(true);
    setBasicsPage(false);
    setSummaryPage(false);
  };

  const goToSummary = () => {
    setSummaryPage(true);
    setDetailsPage(false);
  };

  //Go Back
  const goBack = () => {
    preventDefault();
    history.goBack();
  };

  const addTimeframe = () => {
    setTimeframeActive(true);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const updateGigCategory = (e) => {
    setFormData({ ...formData, gigcategory: e });
  };

  const deleteCategory = (e) => {
    if (formData.gigcategory) {
      setFormData((prevCat) => {
        const updatedSkills = prevCat.gigcategory.filter(
          (category) => category !== e
        );
        return updatedCategory;
      });
    }
  };

  const createGig = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
      <Box>
          {basicsPage ? (
            <GigBasics
              goToDetails={goToDetails}
              goBack={goBack}
              formData={formData}
              onChange={onChange}
            />
          ) : null}

          {detailsPage ? (
            <GigDetails
              goToBasics={goToBasics}
              goToSummary={goToSummary}
              formData={formData}
              setFormData={setFormData}
              updateGigCategory={updateGigCategory}
              deleteCategory={deleteCategory}
              timeframeActive={timeframeActive}
              addTimeframe={addTimeframe}
              onChange={onChange}
            />
          ) : null}

          {summaryPage ? (
            <PostJobSummary
              formData={formData}
              goToDetails={goToDetails}
              goToBasics={goToBasics}
              createGig={createGig}
            />
          ) : null}
      </Box>
  );
}
