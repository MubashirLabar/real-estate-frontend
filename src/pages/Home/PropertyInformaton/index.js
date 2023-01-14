import React, { useState } from "react";
import { useFormik } from "formik";
import Selector from "components/Selector";
import { propertyInfo } from "data";
import { CheckIcon } from "assets/icons";
import Actions from "./Actions";

function PropertyInformation({
  createdContent,
  setCreatedContent,
  reGenerate,
  setReGenerate,
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
    general: "",
    story: "",
    garage: "",
    parking: "",
    insideRoom: "",
    kitchen: "",
    communityAmenity: "",
    outsideFeature: "",
    view: "",
    description: "",
  };

  const onSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  const { setFieldValue, handleChange, handleBlur, values } = formik;

  return (
    <div className="w-full flex flex-col">
      {/* Hero */}

      <div className="w-full homeHeroBg rounded-[10px] py-[22px] px-[25px] mb-[41px]">
        <form onSubmit={onSubmit}>
          <div className="w-full flex items-center">
            <div className="flex-1 font-bold text-white-text text-[28px] leading-[33px]">
              Property Information
            </div>
            <button
              className="font-regular text-white-text text-[12px] 
              leading-[14px] px-[14.5px] py-[4px] 
              border border-solid border-white-text rounded-[5px]"
              type="submit"
            >
              Clear Fields
            </button>
          </div>
          <div className="w-full flex">
            <div className="w-[250px] flex flex-col mt-[15px] mr-[54px]">
              <div className="fieldControl">
                <div className="fieldControlLabel">Home Status</div>
                <Selector
                  placeholder="Select Status"
                  name="homeStatus"
                  options={propertyInfo.statusList}
                  onChange={(e) => {
                    setFieldValue("homeStatus", e.label);
                  }}
                  value={values.homeStatus}
                />
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel">Home Type</div>
                <Selector
                  placeholder="Select Type"
                  name="homeType"
                  options={propertyInfo.types}
                  onChange={(e) => {
                    setFieldValue("homeType", e.label);
                  }}
                  value={values.homeType}
                />
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel"># of Bedrooms</div>
                <div className="fieldControlInput">
                  <input
                    type="number"
                    className="fieldControlInputText"
                    placeholder="# Of Bathrooms"
                    name="bedrooms"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bedrooms}
                  />
                </div>
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel"># Of Bathrooms</div>
                <div className="fieldControlInput">
                  <input
                    type="number"
                    className="fieldControlInputText"
                    placeholder="# Of Bathrooms"
                    name="bathrooms"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bathrooms}
                  />
                </div>
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel">Parking Spots</div>
                <div className="fieldControlInput">
                  <input
                    type="number"
                    className="fieldControlInputText"
                    placeholder="Parking Spots"
                    name="parkingSpots"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.parkingSpots}
                  />
                </div>
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel">Square Feet</div>
                <div className="fieldControlInput">
                  <input
                    type="number"
                    className="fieldControlInputText"
                    placeholder="Square Feet"
                    name="squareFeet"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.squareFeet}
                  />
                </div>
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel">City</div>
                <div className="fieldControlInput">
                  <input
                    type="text"
                    className="fieldControlInputText"
                    placeholder="city"
                    name="city"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                  />
                </div>
              </div>
              <div className="fieldControl">
                <div className="fieldControlLabel">State</div>
                <div className="fieldControlInput">
                  <input
                    type="text"
                    className="fieldControlInputText"
                    placeholder="state"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.state}
                  />
                </div>
              </div>
              <div className="fieldControl !mb-0">
                <div className="fieldControlLabel">Neighborhood</div>
                <div className="fieldControlInput">
                  <input
                    type="text"
                    className="fieldControlInputText"
                    placeholder="Neighborhood"
                    name="neighborhood"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.neighborhood}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col mt-[38px]">
              <div className="w-full flex mb-[53px]">
                <div className="flex flex-col mr-[35px]">
                  {/* General */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      General
                    </div>
                    <div className="w-full">
                      {propertyInfo.general.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.general === item.label) {
                              setFieldValue("general", "");
                            } else {
                              setFieldValue("general", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.general === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Stories */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Stories
                    </div>
                    <div className="w-full">
                      {propertyInfo.stories.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.story === item.label) {
                              setFieldValue("story", "");
                            } else {
                              setFieldValue("story", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.story === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Garage */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Garage
                    </div>
                    <div className="w-full">
                      {propertyInfo.garage.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.garage === item.label) {
                              setFieldValue("garage", "");
                            } else {
                              setFieldValue("garage", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.garage === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mr-[35px]">
                  {/* Parking */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Parking
                    </div>
                    <div className="w-full">
                      {propertyInfo.parking.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.parking === item.label) {
                              setFieldValue("parking", "");
                            } else {
                              setFieldValue("parking", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.parking === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Inside Rooms */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Inside Rooms
                    </div>
                    <div className="w-full">
                      {propertyInfo.insideRooms.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.insideRoom === item.label) {
                              setFieldValue("insideRoom", "");
                            } else {
                              setFieldValue("insideRoom", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.insideRoom === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mr-[35px]">
                  {/* Kitchen */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Kitchen
                    </div>
                    <div className="w-full">
                      {propertyInfo.kitchen.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.kitchen === item.label) {
                              setFieldValue("kitchen", "");
                            } else {
                              setFieldValue("kitchen", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.kitchen === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Community Amenities */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Community Amenities
                    </div>
                    <div className="w-full">
                      {propertyInfo.communityAmenities.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.communityAmenity === item.label) {
                              setFieldValue("communityAmenity", "");
                            } else {
                              setFieldValue("communityAmenity", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.communityAmenity === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mr-[35px]">
                  {/* Outside Features */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Outside Features
                    </div>
                    <div className="w-full">
                      {propertyInfo.outsideFeatures.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.outsideFeature === item.label) {
                              setFieldValue("outsideFeature", "");
                            } else {
                              setFieldValue("outsideFeature", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.outsideFeature === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Views */}
                  <div className="w-full mb-[15px]">
                    <div className="text-[16px] text-white-text leading-[18px] font-bold mb-[18px]">
                      Views
                    </div>
                    <div className="w-full">
                      {propertyInfo.views.map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center cursor-pointer mb-[14px]"
                          onClick={() => {
                            if (values.view === item.label) {
                              setFieldValue("view", "");
                            } else {
                              setFieldValue("view", item.label);
                            }
                          }}
                        >
                          <div
                            className={`w-[15px] h-[15px] flex items-center justify-center 
                       rounded-[4px] mr-[10px] cursor-pointer animation
                      ${
                        values.view === item.label
                          ? "bg-primary-700"
                          : "bg-white-text"
                      }`}
                          >
                            <div className="h-[10px] w-[10px] text-white-text">
                              <CheckIcon />
                            </div>
                          </div>
                          <div className="text-white-text text-[16px] leading-[18px]">
                            {item.label}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-[96%]">
                <textarea
                  className="w-full h-[130px] resize-none bg-white-text text-[16px] leading-[18px] placeholder:text-[#9CA3AF] 
                py-[16px] px-[20px] rounded-[4px] border border-solid border-[#9CA3AF]"
                  placeholder="Other benefits or features"
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Actions */}
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
