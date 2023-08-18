const Hello = (props) => {
  
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
    );
}
 
const App = () => {
  return ( 
    <div>
      <h1>Greatings </h1>
      <Hello name="Bamba"/>
      <Hello name="Kofi"/>
      
    </div>
   );
}
 
export default App;

 