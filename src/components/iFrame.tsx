import { useRef } from "react";
import "./iFrame.css"
const IframeContainer: React.FC = () => {
    const iframeRef = useRef(null);
  return (
    <div className="">
      <iframe
        ref={iframeRef}
        src="./test.html"
        title="My Local HTML File"
        width="100%"
        className="iframe-container"
        height="200px"
      ></iframe>
    </div>
  );
};

export default IframeContainer;
