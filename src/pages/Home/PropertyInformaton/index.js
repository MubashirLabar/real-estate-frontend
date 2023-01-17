import { useFormik } from "formik";
import Actions from "./actions";
import InfoForm from "./infoForm";

function PropertyInformation({
  createdContent,
  setCreatedContent,
  reGenerate,
  setReGenerate,
  setRegenerateLoading,
}) {
  const initialValues = {
    homeStatus: "",
    homeType: "",
    bedrooms: 0,
    bathrooms: 0,
    parkingSpots: 0,
    squareFeet: 0,
    city: "",
    state: "",
    neighborhood: "",
    general: [],
    stories: [],
    garage: [],
    parking: [],
    insideRoom: [],
    kitchen: [],
    communityAmenities: [],
    outsideFeature: [],
    views: [],
    description: "",
  };

  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const { values } = formik;

  console.log("createdContent....", createdContent);

  return (
    <div className="w-full flex flex-col">
      <InfoForm formik={formik} onSubmit={onSubmit} />
      <Actions
        values={values}
        createdContent={createdContent}
        setCreatedContent={setCreatedContent}
        reGenerate={reGenerate}
        setReGenerate={setReGenerate}
      />
    </div>
  );
}

export default PropertyInformation;
