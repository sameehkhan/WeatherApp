import React from "react";
import Card from "../../node_modules/@material-ui/core/Card";
import Typography from "../../node_modules/@material-ui/core/Typography";
import CardContent from "../../node_modules/@material-ui/core/CardContent";
import Key from "../../config/keys";

const API = 'api.openweathermap.org/data/2.5/weather?q=Sacramento';


class CardComponent extends React.Component {

  render() {

    const styles = {
      card: {
        width: 500,
        height: 500,
        alignSelf: "center",
        margin: "30px"
      },
      title: {
        marginBottom: 16,
        fontSize: 14
      },
      links: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Roboto",
        fontSize: "28px"
      }
    };

    return (
    <div style={styles.card}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Lunas
          </Typography>
        </CardContent>
      </Card>
    </div>
    )
  }
};

export default CardComponent;
