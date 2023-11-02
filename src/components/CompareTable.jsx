import CompareELement from "./CompareElement";

export default function CompareTable({ screenWidth }) {
  return (
    <>
      <div className="p-5">
        <div className="flex items-center justify-between w-full max-w-[730px] mb-6 pb-6 border-black  border-b-[1px] m-auto">
          <p className="xl:pl-6 font-bold text-custom-12 tracking-wide">
            The Features
          </p>
          {screenWidth > 767 && (
            <div className="flex items-center justify-around w-[420px]">
              <p className="font-bold text-custom-12 tracking-wide">BASIC</p>
              <p className="font-bold text-custom-12 tracking-wide">PRO</p>
              <p className="font-bold text-custom-12 tracking-wide">BUSINESS</p>
            </div>
          )}
        </div>
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={3}
          title={"UNLIMITED STORY POSTING"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={3}
          title={"UNLIMITED PHOTO UPLOAD"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={2}
          title={"EMBEDDING CUSTOM CONTENT"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={2}
          title={"CUSTOMIZE METADATA"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={1}
          title={"ADVANCED METRICS"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={1}
          title={"PHOTO DOWNLOADS"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={1}
          title={"SEARCH ENGINE INDEXING"}
        />
        <CompareELement
          screenWidth={screenWidth}
          AccessNo={1}
          title={"CUSTOM ANALYTICS"}
        />
      </div>
    </>
  );
}
