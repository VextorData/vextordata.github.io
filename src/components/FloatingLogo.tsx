import { Box } from "@mui/material";
import { motion } from "framer-motion";

import logo from "../assets/logo.png";


const MotionBox = motion.create(Box);



const FloatingLogo = () => {


  return (

    <MotionBox


      animate={{

        y:[0,-18,0],

        rotate:[-4,4,-4],

      }}


      transition={{


        duration:6,


        repeat:Infinity,


        ease:"easeInOut",


      }}



      sx={{



        position:"relative",



        display:"flex",



        justifyContent:"center",



        alignItems:"center",



        width:"100%",



      }}



    >





      {/* BLUE GLOW */}



      <Box


        sx={{


          position:"absolute",



          width:{


            xs:300,


            md:520,


          },



          height:{


            xs:300,


            md:520,


          },



          borderRadius:"50%",



          background:


          "radial-gradient(circle, rgba(37,99,235,0.35) 0%, rgba(37,99,235,0.15) 35%, transparent 70%)",




          filter:"blur(35px)",



          animation:"pulse 5s infinite",



          "@keyframes pulse":{


            "0%":{


              transform:"scale(0.95)",

              opacity:.7,

            },


            "50%":{


              transform:"scale(1.1)",

              opacity:1,

            },


            "100%":{


              transform:"scale(0.95)",

              opacity:.7,

            },


          },


        }}



      />









      {/* LOGO */}




      <Box


        component="img"


        src={logo}


        alt="VextorData"



        sx={{



          position:"relative",



          zIndex:1,



          width:{



            xs:260,



            md:430,



          },



          height:"auto",





          filter:



          "drop-shadow(0 35px 70px rgba(37,99,235,.45))",




        }}




      />






    </MotionBox>


  );


};



export default FloatingLogo;