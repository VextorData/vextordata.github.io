import {
  Box,
  Typography,
} from "@mui/material";

import {
  IconBrandPython,
  IconBrandReact,
  IconCloud,
  IconApi,
  IconDatabase,
  IconBrandDocker,
  IconBrandTypescript,
  IconChartBar,
} from "@tabler/icons-react";

import { motion } from "framer-motion";

import Container from "./Container";



const MotionBox = motion.create(Box);





const technologies = [

  {
    name:"Python",
    description:"Backend development and data automation",
    icon:IconBrandPython,
  },


  {
    name:"React",
    description:"Modern and scalable user interfaces",
    icon:IconBrandReact,
  },


  {
    name:"TypeScript",
    description:"Reliable frontend applications",
    icon:IconBrandTypescript,
  },


  {
    name:"FastAPI",
    description:"High-performance API development",
    icon:IconApi,
  },


  {
    name:"Cloud",
    description:"Scalable cloud architectures",
    icon:IconCloud,
  },


  {
    name:"Databases",
    description:"Data management and processing",
    icon:IconDatabase,
  },


  {
    name:"Docker",
    description:"Containerized deployments",
    icon:IconBrandDocker,
  },


  {
    name:"Data Engineering",
    description:"ETL pipelines and automation",
    icon:IconChartBar,
  },


];







const Technology = () => {



return (



<Box


id="technology"


sx={{



py:{



xs:8,



md:14,



},



background:"#F8FAFC",



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



}}



transition={{



duration:.7,



}}



>






<Typography



variant="h2"



sx={{



fontWeight:900,



letterSpacing:"-0.05em",



mb:2,



}}



>



Technology



</Typography>








<Typography



color="text.secondary"



sx={{



maxWidth:650,



fontSize:18,



lineHeight:1.7,



mb:6,



}}



>



We build solutions using modern technologies
to create scalable software, automate processes
and transform complex data into intelligent systems.



</Typography>






<Box



sx={{



display:"grid",



gridTemplateColumns:{



xs:"1fr",



sm:"repeat(2,1fr)",



md:"repeat(4,1fr)",



},



gap:3,



}}



>



{


technologies.map((tech)=>(



<MotionBox



key={tech.name}



whileHover={{



y:-8,



}}



transition={{



duration:.25,



}}



sx={{



background:"#FFFFFF",



borderRadius:4,



p:3,



boxShadow:



"0 15px 40px rgba(15,23,42,.06)",



}}



>



<Box



sx={{



color:"#2563EB",



mb:2,



}}



>



<tech.icon size={38}/>



</Box>






<Typography
  sx={{
    fontWeight:800,
    mb:1,
  }}
>
  {tech.name}
</Typography>







<Typography



variant="body2"



color="text.secondary"



>



{tech.description}



</Typography>





</MotionBox>



))

}



</Box>







</MotionBox>






</Container>





</Box>



);



};



export default Technology;