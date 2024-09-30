import { useEffect, useState } from "react";
import Welcome from "./components/welcome";
import Invitation from "./pages/invitation";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
    <>
      {!open && <div className="min-h-screen bg-gray-100 flex justify-center overflow-x-hidden">
        <div className="w-full max-w-md bg-white">
          <Welcome open={(val) => {
            setOpen(val)
          }} />

        </div>
      </div>}
      {
        open && <div className="bg-gray-100 flex justify-center overflow-x-hidden">
          <div className="w-full max-w-md bg-white">
            <Invitation />
          </div>
        </div>
      }
    </>

  );
}

export default App;
