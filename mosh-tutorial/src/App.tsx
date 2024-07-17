import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  const [isAlertShowing, setIsAlertShowing] = useState(false);

  return (
    <div>
      {isAlertShowing && <Alert onClose={() =>setIsAlertShowing(false)}>My Alert</Alert>}
      <Button color="primary" onClick={() => setIsAlertShowing(true)}>My Button</Button>
    </div>
  );
}

export default App;
