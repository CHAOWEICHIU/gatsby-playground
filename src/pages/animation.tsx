import * as React from 'react'
import useAnimation from '../hooks/useAnimation'

interface BallProps {
  style: React.CSSProperties
}

const Ball = (props: BallProps) => (
  <div
    style={{
      width: 100,
      height: 100,
      marginRight: '40px',
      borderRadius: '50px',
      backgroundColor: '#4dd5fa',
      ...props.style,
    }}
  />
)

const AnimationPage: React.FC = () => {
  const animation1 = useAnimation('elastic', {
    duration: 600,
    delay: 0,
  })
  const animation2 = useAnimation('elastic', {
    duration: 600,
    delay: 150,
  })
  const animation3 = useAnimation('elastic', {
    duration: 600,
    delay: 300,
  })
  return (
    <div style={{ background: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
      <Ball
        style={{
          marginTop: animation1 * 200 - 100,
        }}
      />

      <Ball
        style={{
          marginTop: animation2 * 200 - 100,
        }}
      />

      <Ball
        style={{
          marginTop: animation3 * 200 - 100,
        }}
      />
    </div>
  )
}

export default AnimationPage
