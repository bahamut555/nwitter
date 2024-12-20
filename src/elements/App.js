import {useState} from "react";
import AppRouter from "elements/Router";
import { authService } from "fbase";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /*console.log(authService.currentUser);*/
  return (
    <>
    <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}
export default App;
