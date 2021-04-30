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


const Independent = ({ title, author_name, html, thumbnail_url, addPin, removePin, removeTikTok }) => {
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [authorLink, setAuthorLink] = useState('');
  // const [thumbnail, setThumbnail] = useState('');
  const [isPinned, setPin] = useState(false);
  // const [error, setError] = useState('');

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

  // useEffect(() => {
  //   getOembed(tiktoksrc)
  //     .then(oembed => {
  //       if (oembed.status_msg) {
  //         throw Error(oembed.status_msg);
  //       }
  //       setTitle(oembed.title);
  //       setAuthor(oembed.author_name);
  //       setAuthorLink(oembed.author_url);
  //       setThumbnail(oembed.thumbnail_url);
  //     })
  //     .catch(error => setError(error))
  // }, [tiktoksrc, error])

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
        >
        {error && <CardContent className="error"> {error}, Cannot retrieve from TikTok!</CardContent>}
        <CardMedia 
          image={ thumbnail_url }
          component="img"
          aria-label={ `Thumbnail of ${ title }` }
        />
        <CardContent>
          {/* <a href={  } className="author">@{ author_name }</a> */}
          <p className="title">{ title }</p>
        </CardContent>
        <CardActions>
          <IconButton
            onClick={() => togglePin()}
            className="pin-icon"
            aria-label={ `${title} pin button` }
          >
            { isPinned ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </IconButton>
          <IconButton
            // onClick={() => removeTikTok(tiktoksrc)}
            className="trash-icon"
            aria-label={ `${title} remove button` }
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Independent;

// Independent.propTypes = {
//   tiktoksrc: PropTypes.string.isRequired,
//   addPin: PropTypes.func.isRequired,
//   removePin: PropTypes.func.isRequired
// }