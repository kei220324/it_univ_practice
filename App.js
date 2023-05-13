import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    function MyComponent() {
      const [currentDate, setCurrentDate] = useState(new Date());
    
      function goToNextMonth() {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        setCurrentDate(newDate);
      }
    
      const monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ];
    
      const monthName = monthNames[currentDate.getMonth()];
      const year = currentDate.getFullYear();
    
      return (
        <div>
          <h1>{monthName} {year}</h1>
          <button onClick={goToNextMonth}>Next Month</button>
        </div>
      );
    }
    

  );
}

export default App;
