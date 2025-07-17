const Lights = () => {
  return (
    <>
    <ambientLight intesity={1.2} />
    <directionalLight position={[100,100,60]} intesity={2}/>
    </>
  )
}

export default Lights