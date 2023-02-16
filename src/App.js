import Header from "./Components/HeaderFooter/Header";
import Footer from "./Components/HeaderFooter/Footer";
import NewEventForm from "./Components/Form/NewEventForm";
import EventList from "./Components/EventList/EventList";
import ContextProvider from "./Components/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <main>
          <NewEventForm />
          <EventList />
        </main>
        <Footer />
      </ContextProvider>
    </div>
  );
}

export default App;
