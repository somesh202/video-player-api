/* eslint-disable react/prop-types */

function VideoDetail(props) {
  return (
    <>
      <div className="shadow-2xl shadow-black bg-black p-6 w-auto 2xl:mt-56 lg:mt-40 md:mt-64 rounded-bottom-lg">
        <div className="block p-0">
          <div className="flex py-12 lg:-mt-4 md:mt-8 mt-32">
            <img className="w-8 h-8 rounded-full" src={props.pic} alt="" />
            <span className="lg:text-xl text-md text-white text-left text-gray-900 font-bold px-6">
              {props.title}
            </span>
          </div>
          <span className="lg:text-md text-sm text-gray-300 text-right font-bold -mt-12">
            {props.handle}
          </span>
          <hr className="h-1 w-full mt-8 text-gray-800"></hr>
          <p className="desc text-md text-gray-400 mt-4 text-left overflow-hidden">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default VideoDetail;
