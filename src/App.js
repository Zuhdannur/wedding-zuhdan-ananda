import { useState } from "react";
import Welcome from "./components/welcome";
import Invitation from "./pages/invitation";
function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {!open && <div className="min-h-screen bg-gray-100 flex justify-center">
        <div className="w-full max-w-md bg-white">
          <Welcome open={(val) => {
            setOpen(val)
          }} />

        </div>
      </div>}
      {
        open && <div className="bg-gray-100 flex justify-center">
          <div className="w-full max-w-md bg-white">
            <Invitation />
          </div>
        </div>
      }
    </>

  );
}

export default App;
