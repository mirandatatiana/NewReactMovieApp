import { CardActionArea, CardContent, Link } from "@mui/material"


// All the Cards 

const CardItem = ({ title, img, link }) => {

  return (

    <Link
      sx={{
        textDecoration: "none",
        color: "#fafafa",

      }}
      href={link}>
      <CardActionArea   
      sx={{
        textDecoration: "none",
        color: "#fafafa",
        borderRadius: "10px",
      }}
      >
        <CardContent
         className="card-media"
         component="img"
         src={img}
         alt={title}
        >
        </CardContent>
      </CardActionArea>
    </Link>
  )

}

export default CardItem
