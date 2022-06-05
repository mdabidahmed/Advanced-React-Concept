import './App.css';
import Greet from './components/AdvancedProps/Greet';
import Heading from './components/AdvancedProps/Heading';
import Oscar from './components/AdvancedProps/Oscar';
import Status from './components/AdvancedProps/Status';
import Button from './components/EventProps/Button';
import Input from './components/EventProps/Input';
import LoggedIn from './components/Hooks/LoggedIn';
import TypeAssertionUseState from './components/Hooks/TypeAssertionUseState';
import User from './components/Hooks/user';
import CustomButton from './components/html/Button';
import Text from './components/polymorphic/Text';
import Container from './components/StyleProps/Container';
import Toast from './components/template-literals/Toast';

function App() {
  return (
    <div className='App'>
      <Status status='error' />
      <Oscar>
        <Heading>Oscar goes to London</Heading>
      </Oscar>
      <Greet name='Adam' isLoggedIn={true} messageCount={10} />

      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
      <LoggedIn />
      {/* UseState */}
      <User />
      {/* Type Assertion in useState */}
      <TypeAssertionUseState />
      {/* template literal */}
      <Toast position='center' />
      {/* Wrapping HTML */}
      <CustomButton variant='primary'>Primary Button</CustomButton>
      {/* Polymorphic */}
      <Text size='lg' color='primary'>
        Heading
      </Text>
    </div>
  );
}

export default App;
