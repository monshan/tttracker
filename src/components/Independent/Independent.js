import { 
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton
} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from 'react';
import { getOembed } from '../../api-calls';
import PropTypes from 'prop-types';


const Independent = ({ tiktoksrc, addPin, removePin, removeTikTok }) => {
  const [thumbnail, setThumbnail] = useState('');
  const [isPinned, setPin] = useState(false);
  const [error, setError] = useState('');

  const togglePin = () => {
    if (isPinned) {
      setPin(false);
      return removePin(tiktoksrc);
    }

    if (!isPinned) {
      setPin(true);
      return addPin(tiktoksrc);
    }
  }

  useEffect(() => {
    getOembed(tiktoksrc)
      .then(oembed => {
        if (oembed.status_msg) {
          throw Error(oembed.status_msg);
        }
        setThumbnail(oembed.thumbnail_url);
      })
      .catch(error => setError(error))
  }, [tiktoksrc, error])

  return (
    <Grid
      item
      lg={2}
      md={3}
      sm={4}
      xs={6}
    >
      <Card
        elevation={6}
        for-cypress="card"
        >
        {error && <CardContent for-cypress="card-error"> {error}, Cannot retrieve from TikTok!</CardContent>}
        <CardMedia 
          image={ thumbnail }
          component="img"
          for-cypress="card-thumbnail"
        />
        <CardActions>
          <IconButton
            onClick={() => togglePin()}
            for-cypress="card-bookmark"
          >
            { isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton
            onClick={() => removeTikTok(tiktoksrc)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Independent;

Independent.propTypes = {
  tiktoksrc: PropTypes.string.isRequired,
  addPin: PropTypes.func.isRequired,
  removePin: PropTypes.func.isRequired
}