import Responsive from "./components/common/Responsive";

const App = () => {
  return (
    <Responsive style={{height: '50vh'}}>
      <div style={{border: '1px solid grey', minHeight: '100%', minWidth: '100%'}}>BORDER_LAYOUT</div>
    </Responsive>
  );
}

export default App;
