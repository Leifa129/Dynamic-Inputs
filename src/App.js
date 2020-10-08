import React, {useState} from 'react';
import './App.css';
import Form from './Form'


function App() {
  const [personalForm, setPersonalForm] = useState({
    name: {elementType: 'input',
      elementConfig: {type: 'text',
        placeholder: 'Your Name'},
      value: ''
    },
    address: {elementType: 'input',
      elementConfig: {type: 'text',
        placeholder: 'Address'},
      value: ''
    },
    email: {elementType: 'input',
      elementConfig: {type: 'text',
        placeholder: 'Email'},
      value: ''
    },
    phone: {elementType: 'input',
      elementConfig: {type: 'text',
        placeholder: 'Phone Number'},
      value: ''
    },
    iq: {elementType: 'input',
      elementConfig: {type: 'text',
        placeholder: 'IQ'},
      value: ''
    },
    gender: {elementType: 'select',
      elementConfig: {
        options: [{value: 'male', displayValue: 'Male'},
          {value: 'female', displayValue: 'Female'},
          {value: 'other', displayValue: 'Other'}]
      },
      value: ''
    },
  });

  return (
      <div className="App">
        <div style={{width: '50%', border:'1px solid black', margin:'10px'}}>
          <Form form={personalForm} setState={setPersonalForm}></Form>
        </div>


      </div>
  );
}

export default App;
