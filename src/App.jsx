import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries';

const countriesFetch = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {

  return (
    <>
      <h1>React World Countries on the Gooo</h1>
      <Suspense fallback={<p>The data is loading....</p>}>
        <Countries countriesFetch={countriesFetch}></Countries>
      </Suspense>
    </>
  )
}

export default App
