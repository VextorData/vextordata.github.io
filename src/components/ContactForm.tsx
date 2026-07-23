import {
  Box,
  Button,
  TextField,
} from "@mui/material";


const ContactForm = () => {


  const inputStyles = {


    mb:2,


    "& .MuiOutlinedInput-root": {


      borderRadius:3,


      background:
      "rgba(255,255,255,.08)",



      backdropFilter:
      "blur(10px)",



      "& fieldset": {


        borderColor:
        "rgba(255,255,255,.18)",


      },



      "&:hover fieldset": {


        borderColor:
        "#06B6D4",


      },



      "&.Mui-focused fieldset": {


        borderColor:
        "#06B6D4",


        borderWidth:"2px",


      },



    },





    "& .MuiInputLabel-root": {


      color:
      "rgba(255,255,255,.65)",


    },





    "& .MuiOutlinedInput-input": {


      color:
      "#FFFFFF",


    },



    "& .MuiInputBase-inputMultiline": {


      color:
      "#FFFFFF",


    },



  };






  return (




    <Box



      sx={{



        background:

        "rgba(15,23,42,.55)",



        backdropFilter:

        "blur(20px)",



        borderRadius:5,



        p:{



          xs:3,


          md:4,



        },



        border:



        "1px solid rgba(255,255,255,.15)",



        boxShadow:



        "0 25px 80px rgba(0,0,0,.35)",



      }}




    >





      <TextField


        fullWidth


        label="Name"


        variant="outlined"


        sx={inputStyles}


      />







      <TextField


        fullWidth


        label="Email"


        variant="outlined"


        sx={inputStyles}


      />








      <TextField


        fullWidth


        label="Message"


        multiline


        rows={5}


        variant="outlined"


        sx={inputStyles}


      />









      <Button




        fullWidth




        variant="contained"




        size="large"




        sx={{





          borderRadius:"999px",





          py:1.5,





          background:

          "linear-gradient(135deg,#2563EB,#06B6D4)",





          fontWeight:700,





          "&:hover":{



            transform:



            "translateY(-2px)",



          },





          transition:



          "all .25s ease",




        }}






      >




        Send Message




      </Button>







    </Box>





  );

};



export default ContactForm;