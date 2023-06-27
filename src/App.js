import Title from "./components/Title"
import Dropdown from "./components/Dropdown"
import Button from "./components/Button"
import Footer from "./components/Footer"
import React, { useState } from "react"
import "./App.css"
import InfoDetails from "./components/InfoDetails"
import Search from "./components/Search"

function App() {
	const [selectedButton, setSelectedButton] = useState("")
	const [city, setCity] = useState("")

	return (
		<div className='App'>
			<Title />
			<Dropdown setCity={setCity} />
			<Button setSelectedButton={setSelectedButton} />
			<InfoDetails city={city} selectedButton={selectedButton} />
			<Footer />
		</div>
	)
}

export default App
