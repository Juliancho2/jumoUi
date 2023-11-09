import Button from './components/Button';
import './App.css';

function App () {
  return (
    <>
      <h2>Button</h2>
      <div className='space-y-4'>
        <Button>Default</Button>
        <Button variant='primary' >Primary</Button>
        <Button variant='secondary'>secondary</Button>
        <Button variant='neutral' >Neutral</Button>
      </div>
    </>
  );
}

export default App;
