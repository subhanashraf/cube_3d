// import { Canvas } from '@react-three/fiber'
// import Box from './Box'
// import { OrbitControls,Stats } from '@react-three/drei';
// import * as THREE from 'three'
// export default function App() {
//     const object2=[
//         new THREE.BoxGeometry(0.3,0.3,0.3),
//     ]
//     return(
//         <Canvas camera={{ position: [0, 0, 2] }}>
//        <Box position={[0.31,0.5,0]} name='A' object={object2}/>
//        <Box position={[0,0.5,0]} name='B' object={object2}/>
//        <Box position={[-0.31,0.5,0]} name='C' object={object2}/>
//        <Box position={[0.31,0.5,0.31]} name='D' object={object2}/>
//        <Box position={[0,0.5,0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,0.5,0.31]} name='F' object={object2}/>
//        <Box position={[0.31,0.5,-0.31]} name='D' object={object2}/>
//        <Box position={[0,0.5,-0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,0.5,-0.31]} name='F' object={object2}/>

//        <Box position={[0.31,0.81,0]} name='A' object={object2}/>
//        <Box position={[0,0.81,0]} name='B' object={object2}/>
//        <Box position={[-0.31,0.81,0]} name='C' object={object2}/>
//        <Box position={[0.31,0.81,0.31]} name='D' object={object2}/>
//        <Box position={[0,0.81,0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,0.81,0.31]} name='F' object={object2}/>
//        <Box position={[0.31,0.81,-0.31]} name='D' object={object2}/>
//        <Box position={[0,0.81,-0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,0.81,-0.31]} name='F' object={object2}/>

//        <Box position={[0.31,1.116,0]} name='A' object={object2}/>
//        <Box position={[0,1.116,0]} name='B' object={object2}/>
//        <Box position={[-0.31,1.116,0]} name='C' object={object2}/>
//        <Box position={[0.31,1.116,0.31]} name='D' object={object2}/>
//        <Box position={[0,1.116,0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,1.116,0.31]} name='F' object={object2}/>
//        <Box position={[0.31,1.116,-0.31]} name='D' object={object2}/>
//        <Box position={[0,1.116,-0.31]} name='E' object={object2}/>
//        <Box position={[-0.31,1.116,-0.31]} name='F' object={object2}/>
//        <OrbitControls/>
//        <Stats/>
//        <gridHelper args={[10,10,'teal']}/>
//       </Canvas>
//     );
// }
import { Canvas } from '@react-three/fiber'
import Box from './Box'
import Plane from './Plane';
import { OrbitControls,Stats } from '@react-three/drei';
import * as THREE from 'three'
export default function App() {
    const object2=[
        new THREE.BoxGeometry(0.3,0.3,0.3),
    ]
    const object3=[
        new THREE.PlaneGeometry( 0.26, 0.26 ),
    ]
    return(
        <Canvas camera={{ position: [0, 5, 10] }}>
       <Plane position={[0.31,1.12,-0.467]} name='a' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[0,1.12,-0.467]} name='b' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[-0.31,1.12,-0.467]} name='c' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
     
      <Plane position={[0.31,0.81,-0.47]} name='d' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[0,0.81,-0.47]} name='e' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[-0.31,0.81,-0.47]} name='f' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
       
      <Plane position={[0.31,0.5,-0.47]} name='g' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[0,0.5,-0.47]} name='h' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/>
      <Plane position={[-0.31,0.5,-0.47]} name='i' object={object3} color="#E7E7E7"rotation={[0, 109.96, 0]}/> 
      
      <Plane position={[0.3,0.5,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[0,0.5,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[-0.3,0.5,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
       
      <Plane position={[0.3,0.81,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[0,0.81,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[-0.3,0.81,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
       
      <Plane position={[0.3,1.12,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[0,1.12,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/>
      <Plane position={[-0.3,1.12,0.462]} name='j' object={object3} color="#0140FF"rotation={[0, 0, 0]}/> 
     
      <Plane position={[0.464,0.81,0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,0.81,0]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,0.81,-0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>

      <Plane position={[0.464,0.5,0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,0.5,0]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,0.5,-0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>

      <Plane position={[0.464,1.12,0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,1.12,0]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      <Plane position={[0.464,1.12,-0.31]} name='j' object={object3} color="#F7F701"rotation={[0, -80.1, 0]}/>
      
      <Plane position={[-0.464,0.5,0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,0.5,0]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,0.5,-0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>

      <Plane position={[-0.464,0.81,0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,0.81,0]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,0.81,-0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
       
      <Plane position={[-0.464,1.12,0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,1.12,0]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/>
      <Plane position={[-0.464,1.12,-0.31]} name='j' object={object3} color="#FE0101"rotation={[0, 80.1, 0]}/> 

      <Plane position={[0.31,1.27,0]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[0,1.27,0]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[-0.31,1.27,0]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
       
      <Plane position={[0.31,1.27,0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[0,1.27,0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[-0.31,1.27,0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
       
      <Plane position={[0.31,1.27,-0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[0,1.27,-0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
      <Plane position={[-0.31,1.27,-0.31]} name='j' object={object3} color="#01E760"rotation={[80.1, 0, 0]}/>
       
       
      <Plane position={[0.31,0.3485,0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
      <Plane position={[0.31,0.3485,0]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
     <Plane position={[0.31,0.3485,-0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
    
      <Plane position={[0,0.3485,0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
      <Plane position={[0,0.3485,0]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
      <Plane position={[0,0.3485,-0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
       
       
      <Plane position={[-0.31,0.3485,-0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
      <Plane position={[-0.31,0.3485,0]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
      <Plane position={[-0.31,0.3485,0.31]} name='j' object={object3} color="#F76800"rotation={[-80.1, 0, 0]}/>
       
       
       <Box position={[0.31,0.5,0]} name='A' object={object2}/>
       <Box position={[0,0.5,0]} name='B' object={object2}/>
       <Box position={[-0.31,0.5,0]} name='C' object={object2}/>
       <Box position={[0.31,0.5,0.31]} name='D' object={object2}/>
       <Box position={[0,0.5,0.31]} name='E' object={object2}/>
       <Box position={[-0.31,0.5,0.31]} name='F' object={object2}/>
       <Box position={[0.31,0.5,-0.31]} name='D' object={object2}/>
       <Box position={[0,0.5,-0.31]} name='E' object={object2}/>
       <Box position={[-0.31,0.5,-0.31]} name='F' object={object2}/>

       <Box position={[0.31,0.81,0]} name='A' object={object2}/>
       <Box position={[0,0.81,0]} name='B' object={object2}/>
       <Box position={[-0.31,0.81,0]} name='C' object={object2}/>
       <Box position={[0.31,0.81,0.31]} name='D' object={object2}/>
       <Box position={[0,0.81,0.31]} name='E' object={object2}/>
       <Box position={[-0.31,0.81,0.31]} name='F' object={object2}/>
       <Box position={[0.31,0.81,-0.31]} name='D' object={object2}/>
       <Box position={[0,0.81,-0.31]} name='E' object={object2}/>
       <Box position={[-0.31,0.81,-0.31]} name='F' object={object2}/>

       <Box position={[0.31,1.116,0]} name='A' object={object2}/>
       <Box position={[0,1.116,0]} name='B' object={object2}/>
       <Box position={[-0.31,1.116,0]} name='C' object={object2}/>
       <Box position={[0.31,1.116,0.31]} name='D' object={object2}/>
       <Box position={[0,1.116,0.31]} name='E' object={object2}/>
       <Box position={[-0.31,1.116,0.31]} name='F' object={object2}/>
       <Box position={[0.31,1.116,-0.31]} name='D' object={object2}/>
       <Box position={[0,1.116,-0.31]} name='E' object={object2}/>
       <Box position={[-0.31,1.116,-0.31]} name='F' object={object2}/>
       <OrbitControls/>
       <Stats/>
       <gridHelper args={[10,10,'teal']}/>
      </Canvas>
    );
}