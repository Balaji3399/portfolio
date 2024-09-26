import React  , {useRef , useState , Suspense, useEffect }from 'react'
import {Canvas , useFrame} from "@react-three/fiber" 
import {Points , PointMaterial } from "@react-three/drei"
//@ts-expect-error noerror
import * as Random from "maath/random/dist/maath-random.esm"
// import { group } from 'console'
const StartBackground = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref : any = useRef() ;
    const [sphere] = useState(() => Random.inSphere(new Float32Array(2500) , {radius: 1.2}));

    useFrame((state , delta) => {
        ref.current.rotation.x -= delta/20 ;
        ref.current.rotation.y -= delta/15 ;
    })

    

  return (


    <group rotation={[0 , 0 , Math.PI / 2]}>
        <Points
        ref = {ref}
        positions={sphere}
        stride={3}
        frustumCulled
        // {...props}
        >
            <PointMaterial
             transparent
             color = {`${'#ccacf8'}`}
             size={0.0028}
             sizeAttenuation={true}
             dethWrite={false}
            />
        </Points>
    </group>
  )
}

const StarsCanvas = () => {
    const [cameraZ, setCameraZ] = useState(false); // Default z position is 1
  
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 400) {
          setCameraZ(true);
          console.log()
        } else {
          setCameraZ(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
        <div className={`'w-full h-screen fixed inset-0 ${cameraZ ? 'z-0' : 'z-10'}`}>
            <Canvas camera={{position : [0 , 0 , 1]}} >
                <Suspense>
                    <StartBackground />
                </Suspense>
            </Canvas>
        </div>
    )
}
export default StarsCanvas ;