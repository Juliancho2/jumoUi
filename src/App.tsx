import Button from './components/Button';
import './App.css';

function App () {
  return (
    <>
      <h2>Buttons</h2>
      <div className='flex gap-5'>
        <Button>Default</Button>
        <Button variant={'primary'} size={'base'} >Primary</Button>
        <Button variant={'secondary'} size={'base'}>secondary</Button>
        <Button variant={'neutral'} size={'base'}>Neutral</Button>
        <Button variant={'custom'}>Custom</Button>
      </div>
    </>
  );
}

export default App;
