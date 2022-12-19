import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Page/home/Home";
import Hotel from "./Page/hotel/Hotel";
import List from "./Page/list/List";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/hotels" element={<List />} />
					<Route path="/hotels/:id" element={<Hotel />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
