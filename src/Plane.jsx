import { useRef,useEffect } from "react";
import * as THREE from 'three'
export default  function Plane(params) {
    const rotation = useRef()
    console.log(rotation);
    return(
        <mesh {...params}
        ref={rotation}
       geometry={params.object[0]} >
        <meshBasicMaterial color={params.color} wireframe='true' side={THREE.DoubleSide} />
    </mesh>
    );
}