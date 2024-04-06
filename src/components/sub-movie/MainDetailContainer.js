import React from "react";
import DetailBackground from "./DetailBackground";
import DetailTitle from "./DetailTitle";

const MainDetailContainer = ({
  tvdata,
  moviesdata,
  video,
  handleBackToBrowse,
  similarTv,
  similarMovie,
  title,
}) => {
  console.log("SimilarMovie: ", similarMovie);
  console.log("SimilarTV: ", similarTv);
  console.log("video", video);

  return (
    <div className="mt-[30px]">
      <DetailBackground tvdata={tvdata} title={title} video={video} />
      <DetailTitle
        tvdata={tvdata}
        moviesdata={moviesdata}
        handleBackToBrowse={handleBackToBrowse}
        title={title}
      />
    </div>
  );
};

export default MainDetailContainer;
