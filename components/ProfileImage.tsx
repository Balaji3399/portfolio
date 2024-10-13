"Use client"
import {motion} from "framer-motion" 
import Image from "next/image"
import photo from "../assets/Images/image.jpg"

const ProfileImage = () => {
  return (
    <div className="h-full w-full relative flex justify-center">
        <motion.div>
            <div className="w-[298px] h-[298px] xl:w-[340px] xl:h-[340px] mix-blend-lighten" >
                <Image 
                src={photo} 
                alt="profileImage"
                priority
                quality={100}
                // fill
                className="object-fit rounded-full"
                />
            </div>
        </motion.div>
    </div>
  )
}

export default ProfileImage