import { useModel } from '@hooks'
import { useMemo } from 'react'
import { CourseConstructor } from '../../../../../course-constructor'

const Academy = () => {
  const {scene, exitHandler, clickHandler} = useModel({type: 'academy'})
  
  const objects = useMemo(() => ({
    building: scene.getObjectByName('building'),
    roof: scene.getObjectByName('roof'),
    cover: scene.getObjectByName('cover'),
    desk: scene.getObjectByName('desk'),
  }), [scene])

  return (
    <>
        {objects.building &&  <primitive onClick={clickHandler} object={objects.building}/> }
        {objects.roof &&  <primitive object={objects.roof}/> }
        {objects.cover &&  <primitive onClick={exitHandler} object={objects.cover}/> }
        {objects.desk &&  <primitive object={objects.desk}>
          <CourseConstructor />    
        </primitive> }
    </>
  )
}

export default Academy