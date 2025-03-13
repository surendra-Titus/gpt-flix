/* eslint-disable react/prop-types */
const BillboardActions = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-1/2 py-48 px-6 ">
      <div className="text-4xl text-white font-bold">{title}</div>
      <p className="text-white">{overview}</p>
      <div>
        <button className="py-2 px-7 my-1 mr-1 bg-blue-400 text-white rounded-sm cursor-pointer hover:opacity-80">
          ▶️Play
        </button>
        <button className="py-2 px-5 my-1 bg-gray-400 text-white rounded-sm cursor-pointer hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default BillboardActions;
