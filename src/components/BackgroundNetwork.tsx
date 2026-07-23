import { Box } from "@mui/material";
import { motion } from "framer-motion";


const MotionBox = motion.create(Box);


const nodes = [
  { top:"15%", left:"20%", size:8 },
  { top:"30%", left:"70%", size:12 },
  { top:"65%", left:"80%", size:10 },
  { top:"75%", left:"25%", size:7 },
  { top:"45%", left:"50%", size:14 },
  { top:"20%", left:"85%", size:6 },
];


const BackgroundNetwork = () => {


  return (

    <Box
      sx={{
        position:"absolute",
        inset:0,
        overflow:"hidden",
        pointerEvents:"none",
      }}
    >


      {/* Glow blobs */}


      <Box
        sx={{
          position:"absolute",
          width:500,
          height:500,
          top:-150,
          right:-100,

          background:
          "radial-gradient(circle,rgba(37,99,235,.25),transparent 70%)",

          filter:"blur(40px)",
        }}
      />


      <Box
        sx={{
          position:"absolute",
          width:400,
          height:400,
          bottom:-150,
          left:-100,

          background:
          "radial-gradient(circle,rgba(6,182,212,.18),transparent 70%)",

          filter:"blur(50px)",
        }}
      />




      {/* Nodes */}


      {
        nodes.map((node,index)=>(

          <MotionBox

            key={index}

            animate={{
              y:[0,-20,0],
              opacity:[0.4,1,0.4],
            }}

            transition={{
              duration:
              4 + index,

              repeat:Infinity,

              ease:"easeInOut",

            }}


            sx={{
              position:"absolute",

              top:node.top,
              left:node.left,

              width:node.size,
              height:node.size,

              borderRadius:"50%",

              background:
              "linear-gradient(135deg,#38BDF8,#2563EB)",

              boxShadow:
              "0 0 25px rgba(56,189,248,.8)",

            }}

          />


        ))
      }




      {/* Grid */}


      <Box

        sx={{
          position:"absolute",
          inset:0,

          backgroundImage:
          `
          linear-gradient(
          rgba(148,163,184,.08) 1px,
          transparent 1px
          ),

          linear-gradient(
          90deg,
          rgba(148,163,184,.08) 1px,
          transparent 1px
          )
          `,

          backgroundSize:"70px 70px",

          maskImage:
          "radial-gradient(circle,black,transparent 70%)",

        }}

      />



    </Box>

  );

};


export default BackgroundNetwork;