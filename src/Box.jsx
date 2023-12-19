
export default function Box(params) {

    return (
    <mesh {...params}

       geometry={params.object[0]}
       >
        <meshBasicMaterial color={'#180707'} wireframe='true' />
    </mesh>);
}