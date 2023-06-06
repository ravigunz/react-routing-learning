import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Book, Contact, Home, NewBook, NotFound, About } from "./pages/pages";
import BookList from "./pages/BookList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/book" element={<Book />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
