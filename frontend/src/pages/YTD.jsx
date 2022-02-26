import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios, { url as videoLink } from '../api/axios';
// components
import YTDInput from '../components/YTDInput/YTDInput';
import { YTDButton } from '../components/YTDInput/YTDButton';

const YTD = () => {
  const [vdoData, setVdoData] = useState({
    title: '',
    video: '',
    image: '',
    ready: false,
  });
  const [url, setUrl] = useState('');

  // functions
  const handleChange = async (e) => {
    console.log('ran');
    const link = e.target.value;
    setUrl(link);
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        if (url.search('youtube.com') >= 0 && url) {
          const options = {
            headers: {
              'Content-Type': 'application/json',
            },
          };
          const data = {
            url,
          };
          // get video info
          const res = await axios.post('/api/v1/video-info', data, options);
          if (res?.data) {
            const { image, title, file } = res.data.data;
            setVdoData({
              title,
              image,
              video: file,
              ready: true,
            });
          } else {
            throw new Error('Request Failed');
          }
        }
      };
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  }, [url]);

  console.log(`${videoLink}${vdoData.video}`);

  return (
    <YTDContainer>
      <YTDCard>
        <YTDInput handleChange={handleChange} />

        {vdoData.ready ? (
          <VideoInfoContainer>
            <Heading>{vdoData.title}</Heading>
            {/* <Image src={vdoData.image} height={300} width={300} /> */}
            <Video height="300px" width="500px" controls>
              <source src={`${videoLink}${vdoData.video}`} />
            </Video>
          </VideoInfoContainer>
        ) : (
          <VideoInfoContainer>
            <Heading>{'YouTube Video Title'.substring(0, 25) + '...'}</Heading>
            <Image
              src={
                'https://images.unsplash.com/photo-1645812579474-f15ff2ea57f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
              }
              height={300}
              width={300}
            />
          </VideoInfoContainer>
        )}
        <YTDButton link={`${videoLink}${vdoData.video}`} />
      </YTDCard>
    </YTDContainer>
  );
};

const YTDContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const YTDCard = styled.div`
  margin-top: 30px;
  padding: 30px;
  box-shadow: 0px 1px 10px 2px rgba(0, 0, 0, 0.1);
  width: 600px;
`;

const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Heading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  letter-spacing: 0.3px;
`;

const Image = styled.img`
  object-fit: cover;
`;
const Video = styled.video``;

export default YTD;
