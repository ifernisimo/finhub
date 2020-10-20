import React from "react";
import styles from "./MiniBlogComponent.module.css";
/*CARD*/
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
/**/

const MiniBlogComponent = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.miniBlog}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Как измениться потребительская корзина Украины с нового года?
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ответить на вопрос, что такое потребительская корзина, очень
                  просто. Это набор продуктов, ассортимент товаров и услуг,
                  который необходим человеку для существования определённый
                  период времени. Правительства разных стран рассчитывают её
                  состав по-разному.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Особенности кредитов онлайн на карту банка
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Кредитный рынок — это двигатель экономики. Его развитие
                  позволяет укрепляться всем отраслям народного хозяйства. От
                  того, насколько просто среднестатистическому человеку просто
                  взять кредит, зависит его деловая активность.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Всё про потребительский кредит в Украине
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Потребительский кредит — это денежный займ, выдаваемый частным
                  лицам для приобретения товаров быта с длительным и
                  ограниченным сроком потребления. Займы на разные нужды
                  выдаются гражданам в виде денежных ссуд или готовой продукции.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MiniBlogComponent;
