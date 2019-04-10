import React from 'react';
import Hint from '../components/govukComponents/Hint'

function HintDemo() {
  return (
    <main>
      <Hint text='Hint text' />
      <Hint html={<>This is <strong>now</strong> working</>} />
    </main>
  )
}

export default HintDemo