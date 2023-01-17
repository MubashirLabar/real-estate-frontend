import React, { useState } from "react";
import { useFormik } from "formik";
import InfoForm from "./InfoForm";
import Actions from "./Actions";
import Blogs from "./Blogs";
import { removeExtraSpace, covertArrayToString } from "utils/common";
import { filterValues } from "data";

function Home() {
  const [createdContent, setCreatedContent] = useState([]);

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

  const getInput = (filter, isCallAction) => {
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
    let general = values.general
      ? covertArrayToString(values.general) + ","
      : "";
    let stories = values.stories
      ? covertArrayToString(values.stories) + ","
      : "";
    let garage = values.garage ? covertArrayToString(values.garage) + "," : "";
    let parking = values.parking
      ? covertArrayToString(values.parking) + ","
      : "";
    let insideRoom = values.insideRoom
      ? covertArrayToString(values.insideRoom) + ","
      : "";
    let kitchen = values.kitchen
      ? covertArrayToString(values.kitchen) + ","
      : "";
    let communityAmenities = values.communityAmenities
      ? covertArrayToString(values.communityAmenities) + ","
      : "";
    let outsideFeature = values.outsideFeature
      ? covertArrayToString(values.outsideFeature) + ","
      : "";
    let views = values.views ? "and " + covertArrayToString(values.views) : "";
    let callAction = isCallAction ? "Add a call-to-action." : "";

    let prompt_description = `Write a property description about a home with ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views} ${homeStatus}. ${values.description} ${callAction}`;
    let prompt_blogPost = `Write a 500 word blog post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;
    let prompt_email = `Write a friendly email with a subject line about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;
    let prompt_facebookPost = `Write a Facebook advertisement about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;
    let prompt_linkedInPost = `Write a LinkedIn post about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;
    let prompt_tweet = `Write a tweet about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;
    let prompt_youtubeScript = `Write a long-form Youtube Script about a property that is ${homeStatus} ${bedrooms} ${bathrooms} ${squareFeet} ${city} ${state} with the following descriptors: ${parkingSpots} ${neighborhood} ${general} ${stories} ${garage} ${parking} ${insideRoom} ${kitchen} ${communityAmenities} ${outsideFeature} ${views}. ${values.description} ${callAction}`;

    if (filter.value === filterValues.DESCRIPTION) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_description),
      };
    }
    if (filter.value === filterValues.BLOG_POST) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_blogPost),
      };
    }
    if (filter.value === filterValues.EMAIL) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_email),
      };
    }
    if (filter.value === filterValues.FACEBOOK_POST) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_facebookPost),
      };
    }
    if (filter.value === filterValues.LINKEDIN_POST) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_linkedInPost),
      };
    }
    if (filter.value === filterValues.TWITTER_POST) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_tweet),
      };
    }
    if (filter.value === filterValues.YOUTUBE_SCRIPT) {
      return {
        title: filter.label,
        prompt: removeExtraSpace(prompt_youtubeScript),
      };
    }
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full margins flex justify-center py-[70px]">
        <div className="w-full relative max-w-8xl">
          <div className="w-full mb-[66px] text-center font-bold text-[35px] text-black-text leading-[40px]">
            Real Estate Property Content Generator
          </div>
          <InfoForm formik={formik} onSubmit={onSubmit} />
          <Actions
            values={values}
            createdContent={createdContent}
            setCreatedContent={setCreatedContent}
            getInput={getInput}
          />
          {createdContent.length ? (
            <Blogs createdContent={createdContent} getInput={getInput} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
