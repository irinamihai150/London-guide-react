import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function BasicButtonExample({ setCity }) {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      style={{ textAlign: "center" }}
      title="Choose a city"
    >
      <Dropdown.Item
        onClick={() => {
          setCity("Stratford");
        }}
      >
        Stratford
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCity("Harrow");
        }}
      >
        Harrow
      </Dropdown.Item>
      <Dropdown.Item
        onClick={() => {
          setCity("Heathrow");
        }}
      >
        Heathrow
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;
