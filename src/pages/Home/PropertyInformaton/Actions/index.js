import { useState, useEffect } from "react";
import axios from "axios";
import { filterValues, contentFilters } from "data";
import { DownloadIcon } from "assets/icons";
import FilterButton from "./FilterButton";
import Loader from "components/Loader";
import { removeExtraSpace } from "utils/common";
import { CSVLink, CSVDownload } from "react-csv";

function Actions({
  values,
  createdContent,
  setCreatedContent,
  reGenerate,
  setReGenerate,
}) {
  const [selectedFilters, setSelectedFilters] = useState([contentFilters[0]]);
  const [loading, setLoading] = useState(false);

  console.log("selectedFilters...", selectedFilters);
  console.log("createdContent", createdContent);
  // useEffect(() => {
  //   reGenerateContent();
  // }, [reGenerate]);

  async function fetchData(payload) {
    const response = await axios.post(
      `https://real-estate-backend-nu.vercel.app/api/generateContent`,
      payload
    );
    return response.data;
  }

  async function reGenerateContent() {
    let homeStatus = values.homeStatus ? values.homeStatus + " and has" : "";
    let bedrooms = values.bedrooms ? values.bedrooms + " bedroom," : "";
    let bathrooms = values.bathrooms ? values.bathrooms + " bathrooms," : "";
    let squareFeet = values.squareFeet
      ? values.squareFeet + " square foot,"
      : "";
    let city = values.city ? "located in " + values.city + "," : "";
    let state =
      values.city && values.state
        ? values.state + ","
        : values.state
        ? "located in " + values.state + ","
        : "";
    let parkingSpots = values.parkingSpots ? values.parkingSpots + "," : "";
    let neighborhood = values.neighborhood ? values.neighborhood + "," : "";
    let general = values.general ? values.general + "," : "";
    let story = values.story ? values.story + "," : "";
    let garage = values.garage ? values.garage + "," : "";
    let parking = values.parking ? values.parking + "," : "";
    let insideRoom = values.insideRoom ? values.insideRoom + "," : "";
    let kitchen = values.kitchen ? values.kitchen + "," : "";
    let communityAmenity = values.communityAmenity
      ? values.communityAmenity + ","
      : "";
    let outsideFeature = values.outsideFeature
      ? values.outsideFeature + ","
      : "";
    let view = values.view ? "and " + values.view : "";

    let prompt_description = `Write a property description about a home with ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view} ${homeStatus}. ${values.description}`;
    let prompt_blogPost = `Write a 500 word blog post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;
    let prompt_email = `Write a friendly email with a subject line about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;
    let prompt_facebookPost = `Write a Facebook advertisement about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;
    let prompt_linkedInPost = `Write a LinkedIn post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;
    let prompt_tweet = `Write a tweet about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;
    let prompt_youtubeScript = `Write a long-form Youtube Script about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description}`;

    if (reGenerate) {
      if (reGenerate === "Description") {
        const res = fetchData({
          title: "Description",
          prompt: removeExtraSpace(prompt_description),
        });
      }
      if (reGenerate === "Blog Post") {
        fetchData({
          title: "Blog Post",
          prompt: removeExtraSpace(prompt_blogPost),
        });
      }
      if (reGenerate === "Email") {
        fetchData({
          title: "Email",
          prompt: removeExtraSpace(prompt_email),
        });
      }
      // if (reGenerate === "Facebook Post") {
      //   input = {
      //     title: "Facebook Post",
      //     prompt: removeExtraSpace(prompt_facebookPost),
      //   };
      // }
      // if (reGenerate === "LinkedIn Post") {
      //   input = {
      //     title: "LinkedIn Post",
      //     prompt: removeExtraSpace(prompt_linkedInPost),
      //   };
      // }
      // if (reGenerate === "Twitter Post") {
      //   input = {
      //     title: "Twitter Post",
      //     prompt: removeExtraSpace(prompt_tweet),
      //   };
      // }
      // if (reGenerate === "Video Scripts") {
      //   input = {
      //     title: "Video Scripts",
      //     prompt: removeExtraSpace(prompt_youtubeScript),
      //   };
      // }
    }
  }

  async function createDescription() {
    setLoading(true);
    const isCallAction =
      selectedFilters.length &&
      selectedFilters.find((x) => x.value === filterValues.CALL_TO_ACTION);

    let homeStatus = values.homeStatus ? values.homeStatus + " and has" : "";
    let bedrooms = values.bedrooms ? values.bedrooms + " bedroom," : "";
    let bathrooms = values.bathrooms ? values.bathrooms + " bathrooms," : "";
    let squareFeet = values.squareFeet
      ? values.squareFeet + " square foot,"
      : "";
    let city = values.city ? "located in " + values.city + "," : "";
    let state =
      values.city && values.state
        ? values.state + ","
        : values.state
        ? "located in " + values.state + ","
        : "";
    let parkingSpots = values.parkingSpots ? values.parkingSpots + "," : "";
    let neighborhood = values.neighborhood ? values.neighborhood + "," : "";
    let general = values.general ? values.general + "," : "";
    let story = values.story ? values.story + "," : "";
    let garage = values.garage ? values.garage + "," : "";
    let parking = values.parking ? values.parking + "," : "";
    let insideRoom = values.insideRoom ? values.insideRoom + "," : "";
    let kitchen = values.kitchen ? values.kitchen + "," : "";
    let communityAmenity = values.communityAmenity
      ? values.communityAmenity + ","
      : "";
    let outsideFeature = values.outsideFeature
      ? values.outsideFeature + ","
      : "";
    let view = values.view ? "and " + values.view : "";
    let callAction = isCallAction ? "Add a call-to-action." : "";

    let prompt_description = `Write a property description about a home with ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view} ${homeStatus}. ${values.description} ${callAction}`;
    let prompt_blogPost = `Write a 500 word blog post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;
    let prompt_email = `Write a friendly email with a subject line about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;
    let prompt_facebookPost = `Write a Facebook advertisement about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;
    let prompt_linkedInPost = `Write a LinkedIn post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;
    let prompt_tweet = `Write a tweet about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;
    let prompt_youtubeScript = `Write a long-form Youtube Script about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${story} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenity} ${outsideFeature} ${view}. ${values.description} ${callAction}`;

    const inputs = [];
    if (selectedFilters.length) {
      for (const filter of selectedFilters) {
        if (filter.value === filterValues.DESCRIPTION) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_description),
          });
        }
        if (filter.value === filterValues.BLOG_POST) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_blogPost),
          });
        }
        if (filter.value === filterValues.EMAIL) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_email),
          });
        }
        if (filter.value === filterValues.FACEBOOK_POST) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_facebookPost),
          });
        }
        if (filter.value === filterValues.LINKEDIN_POST) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_linkedInPost),
          });
        }
        if (filter.value === filterValues.TWITTER_POST) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_tweet),
          });
        }
        if (filter.value === filterValues.YOUTUBE_SCRIPT) {
          inputs.push({
            title: filter.label,
            prompt: removeExtraSpace(prompt_youtubeScript),
          });
        }
      }
    }

    const requests = inputs.map(fetchData);
    Promise.all(requests)
      .then((responses) => {
        setCreatedContent(responses.flat());
        setLoading(false);
        setReGenerate(null);
      })
      .catch((err) => {
        setLoading(false);
        setReGenerate(null);
      });
  }

  const headers = [
    { label: "Title", key: "title" },
    { label: "Content", key: "text" },
  ];

  const csvData = [
    {
      title: "Description",
      text: "Here is my first Content Description",
    },
    {
      title: "Blog Post",
      text: "Here is my first Content Blog Post",
    },
    {
      title: "Email",
      text: "Here is my first Content Email",
    },
  ];

  return (
    <div className="w-full flex flex-col mb-[42px]">
      <div className="w-full flex items-center justify-between mb-[31px]">
        {contentFilters.map((item, index) => (
          <FilterButton
            key={index}
            data={item}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        ))}
      </div>
      <div className="w-full min-h-[107px] flex flex-col items-center justify-center">
        {loading ? (
          <Loader />
        ) : (
          <>
            <button
              className="w-[203px] h-[44px] rounded-[54px] bg-primary-700 text-white-text text-[15px] font-bold leading-[18px] mb-[31px]"
              onClick={createDescription}
            >
              Create Description
            </button>
            <CSVLink
              data={createdContent}
              headers={headers}
              filename="Content Generated.csv"
              asyncOnClick={true}
            >
              <button className="w-[147px] h-[32px] rounded-[40px] flex items-center justify-center border border-primary-700 text-primary-700 text-[11px] font-bold">
                <div className="h-[11px] w-[11px] mr-[10px]">
                  <DownloadIcon />
                </div>
                <span>Download CSV</span>
              </button>
            </CSVLink>
            ;
          </>
        )}
      </div>
    </div>
  );
}

export default Actions;
