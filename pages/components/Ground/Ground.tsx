import { useLoader } from "@react-three/fiber"
// @ts-ignore
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Physics, useBox, usePlane } from '@react-three/cannon'
import PlayerModel from "../Player/Player"

const GameMap = () => {
    const model = useLoader(GLTFLoader, "./models/map.glb")
    const [ref] = useBox(() => ({
    }))
    return (
        <>
            <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                <planeBufferGeometry args={[1000, 1000]} />
                <meshStandardMaterial color={"#87ceeb"} />
            </mesh>
        </>

    )
}


const Ground: React.FC = () => {
    return (
        // <Physics>
        //     <mesh>
        //         {/* <PlayerModel /> */}
        //         {/* <GameMap /> */}
        //     </mesh>
        // </Physics>
        <GameMap />
    )
}

export default Ground;