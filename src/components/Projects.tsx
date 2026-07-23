import {
  Box,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";

import Container from "./Container";
import ProjectCard from "./ProjectCard";


const MotionBox = motion.create(Box);



const projects = [

  {
    title:
      "PMS Intelligence Platform",

    description:
      "A regulatory data platform designed to analyze, compare and automate pharmaceutical product information workflows.",

    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    tags:[
      "FHIR",
      "EMA",
      "Automation",
    ],

  },

];





const Projects = () => {


  return (


    <Box


      id="projects"



      sx={{



        py:{

          xs:8,

          md:14,

        },



        background:

        "linear-gradient(135deg,#0F172A 0%,#1E3A8A 55%,#2563EB 100%)",




        scrollMarginTop:"80px",



        position:"relative",


        overflow:"hidden",



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


          }}



          transition={{


            duration:.7,


          }}



        >





          <Typography



            variant="h2"



            sx={{



              color:"#FFFFFF",



              fontWeight:900,



              letterSpacing:"-0.05em",



              mb:2,



            }}



          >


            Projects



          </Typography>






          <Typography



            sx={{



              color:"rgba(255,255,255,.75)",



              maxWidth:600,



              mb:6,



              fontSize:18,



              lineHeight:1.7,



            }}



          >



            Building intelligent solutions
            designed to automate processes,
            manage complex data and solve
            real-world challenges.



          </Typography>






        </MotionBox>








        <Box



          sx={{



            display:"grid",



            gridTemplateColumns:{



              xs:"1fr",



              md:"repeat(3,1fr)",



            },



            gap:4,



          }}



        >





          {

            projects.map(project => (



              <ProjectCard



                key={project.title}



                {...project}



              />



            ))



          }





        </Box>






      </Container>




    </Box>


  );


};



export default Projects;