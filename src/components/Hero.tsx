import {
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import Container from "./Container";
import BackgroundNetwork from "./BackgroundNetwork";
import FloatingLogo from "./FloatingLogo";


const MotionBox = motion.create(Box);



const Hero = () => {


  const handleProjectsClick = () => {

    document
      .getElementById("projects")
      ?.scrollIntoView({

        behavior:"smooth",

        block:"start",

      });

  };



  return (



    <Box


      sx={{


        position:"relative",


        minHeight:"100vh",


        display:"flex",


        alignItems:"center",


        overflow:"hidden",



        background:

        "linear-gradient(180deg,#F8FAFC 0%,#EFF6FF 100%)",



      }}



    >




      <BackgroundNetwork />







      <Container>





        <Box



          sx={{



            display:"flex",



            alignItems:"center",



            justifyContent:"space-between",




            gap:{



              xs:6,

              md:2,



            },





            flexDirection:{



              xs:"column",

              md:"row",



            },



          }}



        >







          {/* TEXT */}





          <MotionBox



            initial={{



              opacity:0,

              y:40,



            }}



            animate={{



              opacity:1,

              y:0,



            }}



            transition={{



              duration:.8,



            }}



            sx={{



              position:"relative",


              zIndex:1,



              maxWidth:760,



            }}



          >




            <Stack spacing={4}>






              <Typography



                variant="h1"



                sx={{



                  fontWeight:900,



                  lineHeight:1.05,



                  letterSpacing:"-0.06em",



                  fontSize:{



                    xs:"3rem",



                    md:"4rem",



                  },



                }}



              >




                Building




                <br />





                <Box



                  component="span"



                  sx={{



                    background:

                    "linear-gradient(135deg,#2563EB,#06B6D4)",



                    backgroundClip:"text",



                    color:"transparent",



                  }}



                >



                  Intelligent Software



                </Box>






              </Typography>









              <Typography



                variant="h5"



                color="text.secondary"



                sx={{



                  lineHeight:1.6,



                  maxWidth:650,



                  fontSize:{



                    xs:"1.15rem",



                    md:"1.5rem",



                  },



                }}



              >




                We engineer scalable software,

                data platforms and automation

                solutions that help companies

                transform complex processes

                into intelligent systems.





              </Typography>









              <Stack



                direction={{



                  xs:"column",

                  sm:"row",



                }}



                spacing={2}



              >






                <Button



                  variant="contained"



                  size="large"



                  onClick={handleProjectsClick}



                  sx={{



                    px:4,



                    borderRadius:"999px",



                    background:

                    "linear-gradient(135deg,#2563EB,#06B6D4)",



                    "&:hover":{



                      transform:"translateY(-2px)",



                    },



                    transition:"all .25s ease",



                  }}



                >



                  Explore Projects



                </Button>







                <Button



                  variant="outlined"



                  size="large"



                  sx={{



                    px:4,



                    borderRadius:"999px",



                  }}



                >



                  Contact Us



                </Button>






              </Stack>





            </Stack>






          </MotionBox>









          {/* FLOATING LOGO */}





          <MotionBox



            initial={{



              opacity:0,

              scale:.8,



            }}



            animate={{



              opacity:1,

              scale:1,



            }}



            transition={{



              duration:1,

              delay:.2,



            }}



            sx={{



              position:"relative",



              zIndex:1,



              display:"flex",



              justifyContent:"center",



              alignItems:"center",



              width:{



                xs:"100%",



                md:"40%",



              },



            }}



          >




            <FloatingLogo />






          </MotionBox>








        </Box>






      </Container>






    </Box>




  );


};



export default Hero;