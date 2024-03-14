import React, { useRef } from "react";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Members from "./pages/members";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import ToTheTop from "./components/tothetop";
import VideoStream from "./pages/videodisplay";

const App = () => {
  const uploadRef = useRef(null);
  const membersRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="App">
      <Header />
      <Sidebar
        uploadRef={uploadRef}
        membersRef={membersRef}
        contactRef={contactRef}
      />
      <div ref={uploadRef}>
        <VideoStream />
      </div>
      <div ref={membersRef}>
        <Members />
      </div>
      <Footer />
      <ToTheTop />
    </div>
  );
};

export default App;
