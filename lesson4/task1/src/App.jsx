import React from 'react'
import Counter from './Counter'

const App = () => {
    return (
        <>
            <Counter start={17} interval={1000 }/>
            <Counter start={-10} interval={2000} />
            <Counter start={25} interval={500}/>
        </>
    )
}
export default App