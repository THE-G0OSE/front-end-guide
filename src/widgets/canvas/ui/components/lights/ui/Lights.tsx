const Lights = () => {
  return (
    <>
    <ambientLight intensity={1.2} />
    <directionalLight position={[100,60,100]} intensity={2}/>
    </>
  )
}

export default Lights