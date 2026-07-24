import {
  Box,
  Typography,
} from "@mui/material";

import {
  CodeRounded,
  DataObjectRounded,
  AutoModeRounded,
} from "@mui/icons-material";

import { motion } from "framer-motion";

import Container from "./Container";


const MotionBox = motion.create(Box);



const capabilities = [
  {
    title: "Custom Software",
    description:
      "Tailor-made applications and platforms designed around your business, your processes and your goals.",
    icon: <CodeRounded />,
  },

  {
    title: "Automation & Integration",
    description:
      "Automate repetitive tasks, connect your systems and streamline workflows with reliable, scalable solutions.",
    icon: <DataObjectRounded />,
  },

  {
    title: "Regulatory Technology",
    description:
      "Specialized software and SaaS solutions built on extensive experience in Regulatory Affairs and highly regulated industries.",
    icon: <AutoModeRounded />,
  },
];





const About = () => {


  return (


    <Box

      id="about"

      sx={{


        py:{

          xs:8,

          md:14,

        },


        background:

        "radial-gradient(circle at 10% 20%, rgba(37,99,235,0.08), transparent 35%), #FFFFFF",



        scrollMarginTop:"80px",


      }}


    >




      <Container>




        <MotionBox


          initial={{

            opacity:0,

            y:40,

          }}


          whileInView={{


            opacity:1,

            y:0,


          }}



          viewport={{

            once:true,

            amount:.3,

          }}



          transition={{


            duration:.7,


          }}



          sx={{


            maxWidth:850,

            mb:7,


          }}



        >




          <Typography


            variant="h2"


            sx={{


              fontWeight:900,

              letterSpacing:"-0.05em",

              mb:3,


            }}



          >


            Technology built for real business challenges.



          </Typography>





          <Typography


            color="text.secondary"


            sx={{


              fontSize:{


                xs:"1.1rem",


                md:"1.25rem",


              },


              lineHeight:1.8,



            }}


          >


            VextorData is a software engineering company specialized in custom software, business automation and SaaS solutions. We work with organizations of all sizes to simplify operations, eliminate repetitive tasks and build technology that delivers measurable results.



            <br/>
            <br/>



            Alongside our software development expertise, we bring extensive experience in Regulatory Affairs and the European regulatory ecosystem. Working with highly regulated environments has given us a deep understanding of how digitalization is reshaping industries and the growing need for businesses to modernize their processes through technology. This unique perspective allows us to develop practical solutions for both highly regulated organizations and companies looking to streamline their everyday operations.



          </Typography>





        </MotionBox>








        <Box


          sx={{



            display:"grid",



            gridTemplateColumns:{



              xs:"1fr",



              md:"repeat(3,1fr)",



            },



            gap:3,



          }}



        >





          {

            capabilities.map((item,index)=>(



              <MotionBox



                key={item.title}




                initial={{


                  opacity:0,

                  y:30,


                }}




                whileInView={{


                  opacity:1,

                  y:0,


                }}




                viewport={{


                  once:true,


                }}




                transition={{


                  duration:.5,

                  delay:index * .15,


                }}





                sx={{




                  p:3,




                  borderRadius:3,




                  background:"rgba(255,255,255,0.7)",




                  border:

                  "1px solid rgba(15,23,42,.08)",





                  backdropFilter:

                  "blur(10px)",





                  transition:"all .3s ease",





                  "&:hover":{



                    transform:

                    "translateY(-8px)",




                    boxShadow:

                    "0 20px 40px rgba(37,99,235,.12)",



                  },



                }}



              >





                <Box



                  sx={{


                    color:"#2563EB",

                    mb:2,



                  }}



                >



                  {item.icon}



                </Box>







                <Typography



                  sx={{


                    fontWeight:800,

                    mb:1,


                  }}



                >


                  {item.title}



                </Typography>







                <Typography



                  color="text.secondary"



                  sx={{


                    lineHeight:1.6,


                  }}



                >


                  {item.description}



                </Typography>





              </MotionBox>



            ))



          }





        </Box>






      </Container>




    </Box>


  );


};



export default About;