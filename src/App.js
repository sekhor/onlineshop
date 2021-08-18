import './App.css';

import Header from './Utility/Header/Header';
import Footer from './Utility/Footer/Footer';
import Products from './Catalog/Products';

function App() {
  const title = "Intel - Online Bazzar [Hari Raya Special]";
  const headerStyle = { color:'green' };
  // the values can be passed to the component as an attribute 
  // instead of sending values as attribute what if we can send it as inner text
  return (
    <div className="container">
      <Header headerStyle={ headerStyle }>{ title }</Header>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
