import React, { useState, useEffect } from 'react';
import ResilienceActivitiesPageComponent from '../..';
import { Howl, Howler } from 'howler';
import Modal from '../../../../components/modal/index.jsx';
import { ReactComponent as MeditaionBigIcon } from '../../../../assets/svg/Resilience/meditationBigIcon.svg';
import { ReactComponent as Pause } from '../../../../assets/svg/Resilience/Pause.svg';
import { ReactComponent as Play } from '../../../../assets/svg/Resilience/play.svg';
import { ReactComponent as PlayWhite } from '../../../../assets/svg/Resilience/PlayWhite.svg';
import { ReactComponent as PauseWhite } from '../../../../assets/svg/Resilience/PauseWhite.svg';
import { ReactComponent as SkipBack } from '../../../../assets/svg/Resilience/SkipBack.svg';
import { ReactComponent as SkipForword } from '../../../../assets/svg/Resilience/SkipFwd.svg';

const Meditations = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);
  const [selectedSong, setSelectedSong] = useState(null);
  let soundList = [
    {
      soundLink: '',
      title: 'Stress Relief',
      subTitle: 'Play 1',
      src: [require('./tracks/meditationAudio.mp3')]
    },
    {
      soundLink: '',
      title: 'Inspiration',
      subTitle: 'Play 2',
      src: [require('./tracks/meditate2.mp3')]
    },
    {
      soundLink: '',
      title: 'Meditate',
      subTitle: 'Play 3',
      src: [require('./tracks/meditationAudio.mp3')]
    },
    {
      soundLink: '',
      title: 'Stress Relief',
      subTitle: 'Play 4',
      src: [require('./tracks/meditate2.mp3')]
    },
    {
      soundLink: '',
      title: 'Stress Relief',
      subTitle: 'Play 5',
      src: [require('./tracks/meditationAudio.mp3')]
    }
  ];
  const [songModalOpen, setSongModalOpen] = useState(false);
  const [soundInstance,setSoundInstance] = useState(null);
  // monitor entire player
  const [isPlaying,setIsPlaying] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const handleUserSoundModalClosure = () => {
    setSongModalOpen(false);
  };
  
  // useEffect(() => {
  //   //control the range player
  //   if( soundInstance &&  soundInstance.playing()){
  //     updateElapsedTime()
  //   }
  //   if(isPlaying){
  //     updateElapsedTime()
  //   }
  // },[elapsedTime, soundInstance,isPlaying]);

  useEffect(() => {
    //clear all playing audios on start and on return
    Howler.stop();
    return () => {
      Howler.stop();
    };
  },[]);

  const handlePlayPauseClick = (index) => {
    if (currentTrackIndex === index) {
      // Pause the current track
      let currentSoundInstance = soundInstance
      if(currentSoundInstance.playing()){
        currentSoundInstance.pause();
        setIsPlaying(false)
      }else{
        currentSoundInstance.play();
        setIsPlaying(true)
      }
      setSoundInstance(currentSoundInstance)
      
    } else {
      // Pause the current track, if any
      if (currentTrackIndex !== null) {
        Howler.stop();
       
      }
      // Play the new track
      const audio = new Howl({
        src: soundList[index].src,
        onend: () => {
          setCurrentTrackIndex(null);
        },
        onplay: () => {
          requestAnimationFrame(updateElapsedTime);
        }
      });
      audio.play();
      setSoundInstance(audio)
      setCurrentTrackIndex(index);
      setIsPlaying(true)
    }
  };
  const handleSkipBack = () => {
    if (currentTrackIndex === selectedSong) {
      Howler.stop();
      if (selectedSong === 0) {
        setSelectedSong(soundList.length - 1);
        // Play the new track
        const audio = new Howl({
          src: soundList[soundList.length - 1].src,
          onend: () => {
            setCurrentTrackIndex(null);
          },
          onplay: () => {
            requestAnimationFrame(updateElapsedTime);
          }
        });
        audio.play();
        setSoundInstance(audio)
        setCurrentTrackIndex(soundList.length - 1);
        setIsPlaying(true)
      } else {
        setSelectedSong(selectedSong - 1);
        const audio = new Howl({
          src: soundList[selectedSong - 1].src,
          onend: () => {
            setCurrentTrackIndex(null);
          }, 
          onplay: () => {
            requestAnimationFrame(updateElapsedTime);
          }
        });
        audio.play();
        setSoundInstance(audio)
        setCurrentTrackIndex(selectedSong - 1);
        setIsPlaying(true)
      }
    } else {
      // Pause the current track, if any
      if (currentTrackIndex !== null) {
        Howler.stop();
      }
      // Play the new track
      const audio = new Howl({
        src: soundList[selectedSong].src,
        onend: () => {
          setCurrentTrackIndex(null);
        },
        onplay: () => {
          requestAnimationFrame(updateElapsedTime);
        }
      });
      audio.play();
      setSoundInstance(audio)
      setCurrentTrackIndex(selectedSong);
      setIsPlaying(true)
    }
  };
  const handleSkipForword = () => {
    if (currentTrackIndex === selectedSong) {
      Howler.stop();
      if (selectedSong === soundList.length - 1) {
        setSelectedSong(0);
        // Play the new track
        const audio = new Howl({
          src: soundList[0].src,
          onend: () => {
            setCurrentTrackIndex(null);
          }, onplay: () => {
            requestAnimationFrame(updateElapsedTime);
          }
        });
        audio.play();
        setSoundInstance(audio)
        setCurrentTrackIndex(0);
        setIsPlaying(true)
      } else {
        setSelectedSong(selectedSong + 1);
        const audio = new Howl({
          src: soundList[selectedSong + 1].src,
          onend: () => {
            setCurrentTrackIndex(null);
          }, onplay: () => {
            requestAnimationFrame(updateElapsedTime);
          }
        });
        audio.play();
        setSoundInstance(audio)
        setCurrentTrackIndex(selectedSong + 1);
        setIsPlaying(true)
      }
    } else {
      // Pause the current track, if any
      if (currentTrackIndex !== null) {
        Howler.stop();
      }
      // Play the new track
      const audio = new Howl({
        src: soundList[selectedSong].src,
        onend: () => {
          setCurrentTrackIndex(null);
        },
        onplay: () => {
          requestAnimationFrame(updateElapsedTime);
        }
      });
      audio.play();
      setSoundInstance(audio)
      setCurrentTrackIndex(selectedSong);
      setIsPlaying(true)
    }
  };
  const handleModalPlayPause = () => {
    if (currentTrackIndex === selectedSong) {
      // Pause the current track
      let currentSoundInstance = soundInstance
      if(currentSoundInstance.playing()){
        currentSoundInstance.pause();
        setIsPlaying(false)
      }else{
        currentSoundInstance.play();
        setIsPlaying(true)
      }
      setSoundInstance(currentSoundInstance)
    } else {
      // Pause the current track, if any
      if (currentTrackIndex !== null) {
        Howler.stop();
      }
      // Play the new track
      const audio = new Howl({
        src: soundList[selectedSong].src,
        onend: () => {
          setCurrentTrackIndex(null);
        },
        onplay: () => {
          requestAnimationFrame(updateElapsedTime);
        }
      });
      audio.play();
      setSoundInstance(audio)
      setCurrentTrackIndex(selectedSong);
      setIsPlaying(true)
    }
  };

  const updateElapsedTime = () => {
    const newElapsedTime = soundInstance?.seek() || 0;
    setElapsedTime(newElapsedTime);
    requestAnimationFrame(updateElapsedTime);
  };

  const handleTimeChange = event => {
    const newElapsedTime = parseFloat(event.target.value);
    setElapsedTime(newElapsedTime);
    soundInstance.seek(newElapsedTime);
  };

  return (
    <div>
      <ResilienceActivitiesPageComponent title={'Meditaion'} backroute={'/resilience-activities'}>
        <div className="meditaionContainer">
          <div className="MedicationBigIcon">
            <MeditaionBigIcon />
          </div>
          <div className="MedicationSoundPillsBigIcon">
            {soundList.map((item, index) => (
              <div
                key={index}
                onClick={async () => {
                  setSelectedSong(index);
                  setSongModalOpen(true);
                }}
                className="soundPill">
                <div className="pillDot"></div>
                <div className="title">{item.title}</div>
                <div className="subTitle">{item.subTitle}</div>
                <div onClick={() => handlePlayPauseClick(index)} className="musicIcon">
                  {(currentTrackIndex === index) && ((isPlaying=== true)) ? <Pause /> : <Play />}
                </div>
              </div>
            ))}
          </div>
          <Modal show={songModalOpen} closeModal={handleUserSoundModalClosure}>
            <div className="ModelContent">
              <div
                className="MedicationBigIcon"
                style={{
                  paddingTop: '2rem'
                }}>
                <MeditaionBigIcon />
              </div>
              <div className="TitleSection">
                <div className="ModalSoundTitle">{soundList[selectedSong]?.title}</div>
                <div className="ModalSoundSubTitle">{soundList[selectedSong]?.subTitle}</div>
              </div>
              <div className="musicPlayerSection">
                {/* <div className="timeSection">
                  <div>{selectedSong === currentTrackIndex ? 
                  new Date((elapsedTime || 0 ) * 1000).toISOString().substr(14, 5):
                  '0:00'
                }</div>
                  <div>{selectedSong === currentTrackIndex ? 
                   new Date((soundInstance?.duration() || 0 ) * 1000).toISOString().substr(14, 5):
                   '--:--'
                  }</div>
                </div>
                <div>
                  <input
                   type="range"
                   min={0}
                   max={selectedSong === currentTrackIndex ? soundInstance?.duration(): 0}
                   step={0.01}
                   value={selectedSong === currentTrackIndex ? elapsedTime: 0}
                   className='timeline'
                   onChange={() => {selectedSong === currentTrackIndex && handleTimeChange()}}
                 />
                </div> */}
                <div className="controlButtonSection">
                  <div className="AudioButtons">
                    <SkipBack
                      onClick={() => {
                        handleSkipBack();
                      }}
                    />
                    <div
                      onClick={() => {
                        handleModalPlayPause();
                      }}>
                      {(currentTrackIndex === selectedSong)&&(isPlaying=== true) ? 
                      <PauseWhite /> : 
                      <PlayWhite />}
                    </div>
                    <SkipForword
                      onClick={() => {
                        handleSkipForword();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default Meditations;
