import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";


const MotionBox = motion.create(Box);


const cards = [
  {
    title: "Data Engineering",
    position: {
      top: "20%",
      right: "10%",
    },
  },

  {
    title: "Automation",
    position: {
      bottom: "25%",
      right: "18%",
    },
  },

  {
    title: "Regulatory Tech",
    position: {
      bottom: "18%",
      left: "12%",
    },
  },
];


const HeroFloatingCards = () => {


  return (

    <Box
      sx={{
        position:"absolute",
        inset:0,
        pointerEvents:"none",
      }}
    >

      {
        cards.map((card,index)=>(

          <MotionBox

            key={card.title}

            animate={{
              y:[0,-15,0],
            }}

            transition={{
              duration:4 + index,
              repeat:Infinity,
              ease:"easeInOut",
            }}

            sx={{
              position:"absolute",

              ...card.position,

              px:2.5,
              py:1.5,

              borderRadius:3,

              background:
              "rgba(255,255,255,.65)",

              backdropFilter:
              "blur(12px)",


              border:
              "1px solid rgba(148,163,184,.25)",


              boxShadow:
              "0 20px 50px rgba(15,23,42,.08)",


              display:{
                xs:"none",
                md:"block",
              },

            }}

          >

            <Typography

              sx={{
                fontWeight:700,
                fontSize:14,
                color:"#0F172A",
              }}

            >

              {card.title}

            </Typography>


          </MotionBox>


        ))
      }


    </Box>

  );

};


export default HeroFloatingCards;