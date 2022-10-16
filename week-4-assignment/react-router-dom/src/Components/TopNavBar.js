import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useTheme } from "../Context/ThemeContext";

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar bg={theme} variant={theme}>
      <div className="d-flex justify-content-between">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link className="me-auto" onClick={toggleTheme}>
            <Button variant="outline-secondary">Change Theme</Button>
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default TopNavbar;
