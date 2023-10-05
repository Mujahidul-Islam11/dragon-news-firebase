/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const News = ({news}) => {
    const {title, image_url,details, _id} = news
    return (
        <div>
            <div className=" flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 mb-6 border">
  <div className=" mx-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white">
    <img
      src={image_url}
      alt="img-blur-shadow"
      layout="fill"
      className="mx-auto mt-3"
    />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold">
      {title}
    </h3>
    {
        details.length> 200 ? <p>{details.slice(0,200)} <Link to={`/newsDd/${_id}`} className="font-bold text-blue-600 hover:border-b hover:border-blue-600">Read More...</Link></p> : <p>{details}</p>
    }
  </div>
</div>
        </div>
    );
};

export default News;