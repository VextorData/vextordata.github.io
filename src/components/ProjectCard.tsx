import {
  Box,
  Chip,
  Typography,
} from "@mui/material";

import { motion } from "framer-motion";


const MotionBox = motion.create(Box);



interface Props {

  title:string;

  description:string;

  image:string;

  tags:string[];

}



const ProjectCard = ({

  title,

  description,

  image,

  tags,

}:Props)=>{



  return (



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



      whileHover={{


        y:-10,


      }}



      transition={{



        duration:.35,



      }}



      sx={{



        borderRadius:5,



        overflow:"hidden",



        background:



        "rgba(255,255,255,0.96)",



        backdropFilter:



        "blur(12px)",



        boxShadow:



        "0 20px 50px rgba(0,0,0,.18)",



        cursor:"pointer",



        transition:"all .3s ease",




        "&:hover":{



          boxShadow:

          "0 30px 80px rgba(37,99,235,.35)",



        },



      }}



    >








      {/* IMAGE */}






      <Box



        sx={{



          height:{



            xs:200,


            md:250,



          },



          overflow:"hidden",



        }}



      >






        <Box



          sx={{



            width:"100%",



            height:"100%",




            backgroundImage:



            `url(${image})`,





            backgroundSize:"cover",




            backgroundPosition:"center",





            transition:

            "transform .6s ease",





            "&:hover":{



              transform:

              "scale(1.08)",



            },



          }}



        />





      </Box>









      {/* CONTENT */}






      <Box



        sx={{



          p:4,



        }}



      >






        <Typography



          variant="h5"



          sx={{



            fontWeight:900,



            mb:2,



            letterSpacing:"-0.04em",



            color:"#0F172A",



          }}



        >



          {title}



        </Typography>








        <Typography



          color="text.secondary"



          sx={{



            lineHeight:1.7,



            mb:3,



          }}



        >



          {description}



        </Typography>









        {/* TAGS */}







        <Box



          sx={{



            display:"flex",



            flexWrap:"wrap",



            gap:1,



            mb:3,



          }}



        >





          {


            tags.map(tag => (



              <Chip



                key={tag}



                label={tag}



                size="small"




                sx={{



                  fontWeight:700,



                  background:



                  "rgba(37,99,235,.08)",




                  color:"#2563EB",



                }}



              />



            ))



          }







        </Box>









        <Typography



          sx={{



            color:"#2563EB",



            fontWeight:700,



            fontSize:15,



          }}



        >



          View project →



        </Typography>






      </Box>






    </MotionBox>


  );


};



export default ProjectCard;