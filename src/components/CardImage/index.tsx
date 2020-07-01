import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const tileData: any[] = [
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
  {
    img: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3892521478,1695688217&fm=26&gp=0.jpg',
    title: 'Breakfast',
    author: 'jill111',
    cols: 1,
    featured: false,
  },
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    gridList: {
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={140} className={classes.gridList}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
