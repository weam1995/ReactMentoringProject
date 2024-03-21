import React, { useState } from "react";
//import { Dropdown, DropdownToggle } from "react-bootstrap";
import { Dropdown, DropdownItem } from "flowbite-react";
interface DropdownItem {
  label: string;
  onClick: () => void;
}

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleSelect = (item: DropdownItem) => {
    setIsOpen(false);
    item.onClick();
  };

  const menuItems: DropdownItem[] = [
    { label: "Option 1", onClick: () => console.log("Option 1 clicked") },
    { label: "Option 2", onClick: () => console.log("Option 2 clicked") },
    { label: "Option 3", onClick: () => console.log("Option 3 clicked") },
  ];

  return (
    // <Dropdown onToggle={handleToggle}>
    //   <DropdownToggle variant="link">
    //     <i className="fas fa-ellipsis-h"></i>{" "}
    //     {/* Font Awesome icon for 3 dots */}
    //   </DropdownToggle>
    //   <Dropdown.Menu>
    //     {menuItems.map((item) => (
    //       <Dropdown.Item key={item.label} onClick={() => handleSelect(item)}>
    //         {item.label}
    //       </Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>

    <Dropdown dismissOnClick={false} label="My custom item">
      <DropdownItem as="a" href="#">
        Home
      </DropdownItem>
      <DropdownItem as="a" href="https://flowbite.com/" target="_blank">
        External link
      </DropdownItem>
    </Dropdown>
  );
};

export default DropdownMenu;
