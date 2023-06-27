import React, { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import Spinner from "./Spinner"

function InfoDetails({ selectedButton, city }) {
	const [info, setInfo] = useState([])
	const [errorMessage, setErrorMessage] = useState("")
	const [isLoading, setIsLoading] = useState(true)
	const [searchTerm, setSearchTerm] = useState("")
	const [filteredInfo, setFilteredInfo] = useState([])

	useEffect(() => {
		setIsLoading(true)
		setInfo([])
		setErrorMessage("")
		if (city) {
			fetch(`https://london-express.onrender.com/${selectedButton}/${city}`)
				.then((res) => {
					if (res.ok) {
						return res.json()
					} else {
						throw new Error("Something went wrong")
					}
				})
				.then((info) => setInfo(info))
				.catch((error) => {
					setErrorMessage("Unable to fetch data from server")
				})
				.finally(() => {
					setIsLoading(false)
				})
		} else {
			setIsLoading(false)
		}
	}, [selectedButton, city])

	useEffect(() => {
		setFilteredInfo(
			info.filter((i) =>
				i.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		)
	}, [info, searchTerm])

	const handleSearch = () => {
		setFilteredInfo(
			info.filter((i) =>
				i.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		)
	}

	return (
		<div>
			{isLoading && <Spinner />}
			{!isLoading && city && (
				<>
					<div>
						<input
							type='text'
							placeholder='Search by name'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						{/* <button onClick={handleSearch}>Search</button> */}
					</div>
					<Table striped bordered hover responsive className='table'>
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Website</th>
								<th>Phone</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{filteredInfo.map((i) => {
								return (
									<tr key={i.id}>
										<td>{i.id}</td>
										<td>{i.name}</td>
										<td>{i.website}</td>
										<td>{i.phone}</td>
										<td>{i.address}</td>
									</tr>
								)
							})}
						</tbody>
					</Table>
				</>
			)}
			{!isLoading && !city && <p>Please select a city.</p>}
			{errorMessage && <p>{errorMessage}</p>}
		</div>
	)
}

export default InfoDetails
