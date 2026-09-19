import openFolder from "../assets/open-folder.png";
// this is represent the application which will be display on the screen
const Application = ({ title }) => {
  const ApplicationIcons = {
    desktop: openFolder,
  };

  return (
    <div className="cursor-pointer flex items-center px-3 py-1 border-2 border-transparent hover:border-white pb-3">
      {/*  icons for  */}
      <button className="cursor-pointer flex flex-col items-center justify-center w-20 h-20 md:w-30 md:h-30">
        <img src={ApplicationIcons[title] || openFolder} />
        <h1> {title} </h1>
      </button>
    </div>
  );
};

export default Application;
