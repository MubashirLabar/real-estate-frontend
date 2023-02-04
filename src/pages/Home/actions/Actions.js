import { useState } from "react";
import { filterValues, contentFilters } from "data";
import { DownloadIcon } from "assets/icons";
import FilterButton from "./filterButton";
import Loader from "components/Loader";
import { CSVLink } from "react-csv";
import { openaiServices } from "services/openaiServices";

function Actions({ createdContent, setCreatedContent, getInput }) {
  const [selectedFilters, setSelectedFilters] = useState([contentFilters[0]]);
  const [loading, setLoading] = useState(false);

  console.log("selectedFilters...", selectedFilters);

  async function createDescription() {
    setLoading(true);
    const isCallAction =
      selectedFilters.length &&
      selectedFilters.find((x) => x.value === filterValues.CALL_TO_ACTION);

    const inputs = [];
    if (selectedFilters.length) {
      for (const filter of selectedFilters) {
        inputs.push(getInput(filter, isCallAction));
      }
    }

    const requests = inputs.map(openaiServices.fetchData);
    Promise.all(requests)
      .then((responses) => {
        setCreatedContent(responses.flat());
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  const headers = [
    { label: "Title", key: "title" },
    { label: "Content", key: "text" },
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
          </>
        )}
      </div>
    </div>
  );
}

export default Actions;
