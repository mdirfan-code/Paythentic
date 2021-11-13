import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
    paperStyle :
    {
        padding :20,
        width:'15rem', 
        margin:"0 auto",
        height:'fit-content',
        
    },
    paperStyleIndex :
    {
        
        width:340, 
        margin:"0 auto",
        
    },
    icon :
    {
        backgroundColor:'#107869', 
    },
    buttons :
    {
        margin:'8px 0',
    },
    cardStyle :
    {
        maxWidth: 450, 
        padding: "20px 5px",
        margin: "0 auto",
        backgroundColor:'#fff',
        height:'fit-content',
        
    }
    

}));

export default useStyles;

const customTheme = createTheme ({
    palette: {
        primary: {
          main: '#107869',
        },
        secondary: {
          main: '#107869',
        },
      },
    
});
export  {customTheme};