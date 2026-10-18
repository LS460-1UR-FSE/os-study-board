//receives title from parent through [props] and displays it in the header
function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Header; //exporting the Header component so it can be used in other parts of the application