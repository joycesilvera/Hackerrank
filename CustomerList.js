import React  from "react";
import "./index.css";

function CustomerList() {
    const initialList = [{ id : null,
  name: null }];

  const [customerList, setCustomerList] = React.useState(initialList);
  let [name, setName] = React.useState('');
  let [customerCount, setCustomerCount] = React.useState(0);


  function handleChange(event){
    setName(event.target.value);
  }

  function handleAdd(){
    let newId = 'list-item'+{customerCount}
    const newList = customerList.concat({name, id: {newId} });
    setCustomerList(newList);
    setCustomerCount(customerCount++);
    setName(null);
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" value={name} className="large" onChange={handleChange} placeholder="Name" data-testid="app-input"/>
        <button type="submit" className="ml-30" onClick={handleAdd} data-testid="submit-button">Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid={customerList}>
        {customerList.map((item) => ( 
          <li className="slide-up-fade-in" data-testid={item.id} key={item.id} >{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList
