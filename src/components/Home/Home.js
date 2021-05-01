import Independent from '../Independent/Independent';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';

const Home = ({ searchHome, removeTikTok }) => {
  const convertToPinObjects = searchHome.map(tiktok => {
    return {
      ...tiktok,
      isPinned: false
    }
  })
  
  const [order, setOrder] = useState([...convertToPinObjects]);

  const addPin = (id) => {
    order[order.findIndex((tiktok) => tiktok.data_video_id === id)].isPinned = true;
    sortIfPinned();
  }

  const removePin = (id) => {
    order[order.findIndex((tiktok) => tiktok.data_video_id === id)].isPinned = false;
    sortIfPinned();
  }

  const sortIfPinned = () => {
    const inOrder = order.sort((a, b) => {
      if (a.isPinned === b.isPinned) {
        return 0;
      }
      if (!a.isPinned && b.isPinned) {
        return 1;
      }
      if (a.isPinned && !b.isPinned) {
        return (-1);
      }
      return 0;
    });
    setOrder([...inOrder]);
  }

  const renderAsCards = () => {
    return order.map(({
      cite,
      title,
      author_url,
      author_name,
      html,
      data_video_id,
      thumbnail_url,
      status_msg
    }) => {
      return (
        <Independent 
          key={ data_video_id }
          cite={ cite }
          data_video_id={ data_video_id }
          title={ title }
          author_name={ author_name }
          author_url={ author_url }
          html={ html }
          thumbnail_url={ thumbnail_url }
          status_msg={ status_msg }
          removeTikTok={ removeTikTok }
          addPin={ addPin }
          removePin={ removePin }
        />
      )
    })
  }

  useEffect(() => {
    setOrder([...convertToPinObjects])
  }, [fetchedTTS]);

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      children={ renderAsCards() }
      id="gridContainer"
    />
  )
}

export default Home;

// Home.propTypes = {
//   initTikToks: PropTypes.array.isRequired
// }