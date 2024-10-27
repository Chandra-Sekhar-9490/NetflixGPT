function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-[30%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white ">{title}</h1>
      <p className="py-6 text-sm w-1/4 text-white">{overview}</p>
      <div className="">
        <button className="bg-white  font-bold text-black py-1 px-6 rounded-sm mx-2 hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-white bg-opacity-20  font-bold text-white py-1 px-6 rounded-sm hover:bg-opacity-30">
          More info
        </button>
      </div>
    </div>
  );
}
export default VideoTitle;
