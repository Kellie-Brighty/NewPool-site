import React, { useEffect, useState } from 'react';
import {AppBar, Avatar, Drawer, Hidden, List, ListItem, makeStyles, Toolbar} from '@material-ui/core';
import { Link } from 'react-router-dom'
import './App.css'
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ProgressBar from "@ramonak/react-progress-bar";
import SVG from './SVG';
import TextField from '@material-ui/core/TextField';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import StarIcon from '@material-ui/icons/Star';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import CreateIcon from '@material-ui/icons/Create';
import DirectionsIcon from '@material-ui/icons/Directions';

// const Subscribe = styled.div`
//     background-color: ${props => props.theme.subscribeBg};
//     transition: all .5s ease
// `
const Footer = styled.div`
    background-color: ${props => props.theme.subscribeBg};
    transition: all .5s ease
    
`
// const Title = styled.div`
//     color: ${props => props.theme.titleColor};
//     transition: all .5s ease
// `
// const Upcoming = styled.div`
//     background-color: ${props => props.theme.upcomingBg};
//     transition: all .5s ease
// `
const Logo = styled.h1`
    color: ${props => props.theme.LogoColor};
    transition: all .5s ease
`
// const InnerFooter = styled.div`
//     color: ${props => props.theme.LogoColor};
//     transition: all .5s ease
// `
const Honors = styled.h2`
    color: ${props => props.theme.LogoColor};
    font-size: 12px;
    transition: all .5s ease
`
const Hero = styled.div`
    background-image: ${props => props.theme.heroImage};
    transition: all .5s ease
`
const HeroTitle = styled.h1`
    color: ${props => props.theme.LogoColor};
    transition: all .5s ease
`
const HeroText = styled.p`
    color: ${props => props.theme.LogoColor};
    transition: all .5s ease
`
const Linked = styled.button`
    color: ${props => props.theme.linkColor};
    transition: all .5s ease
`
const Upcoming = styled.div`
    background-color: ${props => props.theme.upcomingBg};
    transition: all .5s ease
`
const Title = styled.div`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease
`
const Btn = styled.button`
    color: ${props => props.theme.btn};
    box-shadow: 0 0 3px 0 #fff
`

const useStyles = makeStyles({
  app: {
    visibility: 'visible',
    overFlowX: 'hidden'
  },
  appBar: {
    height: '100px',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    transition: '.8s',
    boxShadow: 'none',
    margin: '0px auto'
  },
  appBarScroll: {
    backgroundColor: 'black',
    height: '100px',
    justifyContent: 'center',
    transition: '1s',
    margin: '0px auto'
  },
  toolBar: {
    fontFamily: 'Montserrat Alternates',
    fontSize: '10px',
    fontWeight: 'bolder',
    '& h1': {
      fontWeight: 'bold'
    },
    display: 'flex',
    justifyContent: 'space-between',
    '& h5': {
      color: 'white',
      fontSize: '14px',
      fontFamily: 'Noto Sans JP'
    },
    '& button': {
     margin: '0px 5px',
     outline: 'none',
     cursor: 'pointer'
    },
  },
  logo: {
    marginLeft: '100px',
  },
  leftNav: {
    marginRight: '100px',
    display: 'flex',
    alignItems: 'center'
  },
  spanOne: {
    color: '#FF3465'
  },
  btnOne: {
    padding: '12px 40px',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.918)',
    border: 'none',
    boxShadow: '0 0 3px 0 rgba(122, 122, 122, 0.918)',
    color: 'white',
    outline: 'none',
    margin: '20px 0px'
  },
  btnTwo: {
    margin: '0px 20px',
  },
  btnTelegram: {
    padding: '12px 40px',
    borderRadius: '50px',
    backgroundColor: '#FF3465',
    border: 'none',
    color: 'white',
    outline: 'none',
    margin: '20px 0px'
  },
  btnThree: {
    padding: '15px',
    borderRadius: '50px',
    backgroundColor: 'transparent',
    border: 'none',
  },
  hero: {
    backgroundImage: 'url("bg.jpg")',
    height: '600px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'Marvel',
    textAlign: 'center',
    '& h1': {
      fontSize: '60px',
    },
    '& p': {
      fontWeight: 'bold',
      fontSize: '15px'
    },
    display: 'flex',
    alignItems: 'center'
  },
  raiseCap: {
    color: '#FF3465'
  },
  heroText: {
    // width: '80%',
    // margin: '0px auto',
    marginTop: '50px',
    textAlign: 'left',
    marginLeft: '150px',
  },
  heroParagraph: {
    fontWeight: 'bold'
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'left',
    '& button': {
      margin: '0px 10px',
      marginTop: '20px',
      outline: 'none',
      cursor: 'pointer',
      color: 'white'
    },
    '& h5': {
      fontFamily: 'Noto Sans JP',
      fontWeight: 'bold',
      color: 'white'
    }
  },
  btnGroupOne: {
    backgroundColor: 'rgba(0, 0, 0, 0.507)',
    padding: '15px',
    borderRadius: '50px',
    border: 'none',
    boxShadow: '0 0 3px 0 #d6d6d6'
    // border: '1px solid ##3F51B5'
  },
  btnGroupTwo: {
    backgroundColor: '#FF3465',
    padding: '15px',
    borderRadius: '50px',
    border: 'none',
    color: 'white'
  },
  aboutSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '800px',
    margin: '0px auto',
    width: '90%'
  },
  boxLineOne: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxLineTwo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxOne: {
    height: '250px',
    width: '230px',
    boxShadow: '0 0 6px 3px #404040',
    borderRadius: '20px',
    backgroundColor: '#2E2E2E',
    margin: '20px 20px',
    marginTop: '-50px',
    border: 'none',
    padding: '20px'
  },
  boxTwo: {
    height: '250px',
    width: '230px',
    boxShadow: '0 0 6px 3px #404040',
    borderRadius: '20px',
    backgroundColor: '#2E2E2E',
    margin: '20px 20px',
    border: 'none',
    padding: '20px',
    
  },
  aboutText: {
    color: 'white',
    marginLeft: '100px',
    fontFamily: 'Montserrat Alternates',
    '& h2': {
      fontSize: '50px',
      padding: '30px 0px'
    },
    '& p': {
      lineHeight: '2rem'
    }
  },
  tierSection: {
    display: 'flex',
    justifyContent: 'center'
  },
//   tierBox: {
//     width: '300px',
//     height: '400px',
//     // boxShadow: '0 0 10px 1px black',
//     margin: '30px 50px',
//     marginTop: '100px',
//     marginBottom: '100px',
//     borderRadius: '20px',
//     border: 'none',
//     backgroundColor: '#303030'
//   },
//   innerTierBox: {
//     width: '300px',
//     height: '400px',
//     boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.644)',
//     marginLeft: '-30px',
//     marginTop: '-30px',
//     borderRadius: '20px',
//     color: 'white',
//     backgroundColor: '#1f1f1f79',
//     textAlign: 'center',
//   },
  progressBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
    marginTop: '-100px'
  },
  innerProgressBar: {
    width: '100%',
    marginLeft: '100px',
    marginTop: '50px'
  },
  footer: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  innerFooter: {
    '& h1': {
      fontSize: '20px'
    },
    '& h2': {
      fontSize: '10px',
      fontWeight: 500
    },
    marginLeft: '50px'
  },

//   MOBILE VIEW CSS
heroSm: {
    backgroundImage: 'url("bg.jpg")',
    height: '650px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    fontFamily: 'Marvel',
    textAlign: 'center',
    '& h1': {
      fontSize: '60px',
    },
    '& p': {
      fontWeight: 'bold',
      fontSize: '15px'
    },
    paddingTop: '30px' 
},
heroTextSm: {
    lineHeight: '3rem',
    paddingTop: '0px',
    '& h1': {
        fontSize: '30px'
    },
},
raiseCapSm: {
    color: '#FF3465'
},
heroParagraphSm: {
    lineHeight: '2rem',
},
btnGroupSm: {
    marginTop: '10px',
    '& button': {
        margin: '0px 10px'
    }
},
aboutSectionSm: {
    margin: '0px auto',
    width: '90%',
    padding: '10px 0px'
  },
  aboutTextSm: {
    color: 'white',
    fontFamily: 'Montserrat Alternates',
    textAlign: 'center',
    '& h2': {
      fontSize: '35px',
      padding: '30px 0px'
    },
    '& p': {
      lineHeight: '1.5rem'
    }
  },
  boxOneSm: {
    height: '220px',
    width: '300px',
    boxShadow: '0 0 6px 3px #404040',
    borderRadius: '20px',
    backgroundColor: '#2E2E2E',
    margin: '20px auto',
    border: 'none',
    padding: '20px',
    '& h3': {
      marginTop: '50px'
    }
  },
  boxTwoSm: {
    height: '220px',
    width: '300px',
    boxShadow: '0 0 6px 3px #404040',
    borderRadius: '20px',
    backgroundColor: '#2E2E2E',
    margin: '20px auto',
    border: 'none',
    padding: '20px',
    '& h3': {
      marginTop: '50px'
    }
  },
  tierSectionSm: {
    marginTop: '50px',
    paddingBottom: '30px'
  },
  progressBarSm: {
    width: '100%',
    backgroundColor: 'black',
  },
  innerProgressBarSm: {
    width: '90%',
    margin: '0px auto',
    textAlign: 'center'
  },
  footerSm: {
    padding: '20px',
    backgroundColor: 'black'
  },
  btnTwoSm: {
    color: 'black'
  },
  btnTelegramSm: {
    padding: '12px 40px',
    borderRadius: '50px',
    backgroundColor: '#FF3465',
    border: 'none',
    color: 'white',
    outline: 'none',
    margin: '20px auto',
    marginLeft: '60px'
  },
  innerTierBoxSm: {
    width: '300px',
    height: '400px',
    boxShadow: '0 0 10px 5px rgba(0, 0, 0, 0.644)',
    borderRadius: '20px',
    color: 'white',
    backgroundColor: '#1f1f1f79',
    textAlign: 'center',
    margin: '10px auto',
    marginTop: '30px'
  },

  // Subscribe Styles

  detailSection: {
        backgroundColor: '#2E2E2E',
        padding: '100px'
      },
      upcomingPools: {
        margin: '0px auto',
        width: '90%',
        fontFamily: 'Montserrat Alternates',
        '& h2': {
          marginTop: '-50px',
          marginBottom: '80px',
          textAlign: 'center',
          fontFamily: 'Montserrat Alternates',
          fontSize: '40px',
          fontWeight: 'bold'
        }
      },
      poolBoxes: {
        display: 'flex',
        marginTop: '40px'
      },
      poolBox: {
        padding: '30px',
        border: '1px solid #B5BFC9',
        backgroundColor: '#2E2E2E',
        borderRadius: '20px',
        cursor: 'poin',
        margin: '0px 20px',
        '& h1': {
          margin: '20px 0px',
          color: 'white'
        },
        '& p': {
          margin: '10px 0px'
        },
      },
      boxHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& span': {
          height: '50px',
          width: '20px',
          borderRadius: '50px',
          backgroundColor: '#FF3465'
        },
        '& p': {
          color: 'white'
        },
      },
      boxFooter: {
        display: 'flex',
        alignItems: 'center',
        '& section': {
          margin: '0px 10px'
        },
        '& h5': {
          color: '#FF3465'
        },
        '& h4': {
          color: 'white'
        },
        marginTop: '20px'
      },
      helloBtn: {
        position: 'absolute',
        right: '3em',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '20px',
        outline: 'none',
      },
      innerSubsribeBox: {
        backgroundImage: 'url("dark theme bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '10px auto',
        width: '70%',
        color: 'white',
        textAlign: 'center',
        padding: '150px',
        borderRadius: '20px',
        '& h1': {
          fontSize: '60px',
          width: '80%',
          margin: '0px auto'
        },
        '& p': {
          width: '70%',
          margin: '0px auto'
        },
      },
      subscribeBox: {
        padding: '100px'
      },
      boxTitle: {
        color: 'white'
      },
      btnUpcoming: {
        padding: '12px 40px',
        borderRadius: '50px',
        backgroundColor: '#FF3465',
        border: 'none',
        color: 'white',
        outline: 'none',
        position: 'absolute',
        cursor: 'pointer',
        right: '3rem',
        marginTop: '40px'
      },
      boxTextOne: {
        color: 'white'
      },
      detailSectionSm: {
        backgroundColor: '#f1f3ff',
        padding: '10px',
        margin: '0px 0px',
        fontFamily: 'Montserrat Alternates'
      },
      upcomingPoolsSm: {
        margin: '0px auto',
        '& h2': {
          marginBottom: '50px',
          textAlign: 'center',
          marginTop: '20px'
        }
      },
      poolBoxSm: {
        padding: '30px',
        border: 'none',
        backgroundColor: '#2E2E2E',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: '20px 10px',
        boxShadow: '0 0 6px 3px #404040',
        '& h1': {
          margin: '20px 0px'
        },
        '& p': {
          margin: '10px 0px'
        },
      },
      boxHeaderSm: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& p': {
          color: 'white'
        }
      },
      subscribeBoxSm: {
        padding: '30px',
        fontFamily: 'Montserrat Alternates'
      },
      innerSubsribeBoxSm: {
        backgroundImage: 'url("dark theme bg.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        margin: '10px auto',
        width: '100%',
        color: 'white',
        textAlign: 'center',
        borderRadius: '20px',
        '& h1': {
          fontSize: '35px',
          width: '80%',
          margin: '0px auto',
          marginTop: '20px'
        },
        '& p': {
          width: '70%',
          margin: '20px auto'
        },
      },
      svg: {
        margin: '0px auto',
        display: 'flex',
        justifyContent: 'center'
      }
});



function MainPage(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    // const changeTheme = () => {
    //   if(props.theme === 'light') {
    //       props.setTheme('dark')
    //   } else {
    //       props.setTheme('light')
    //   }
    // };
  
     const handleDrawerOpen = () => {
          setOpen(true)
        }
        const handleDrawerClose = () => {
          setOpen(false)
        }
  
      useEffect(() => (
          Aos.init({
              duration: 1000,
          })
      ))
  
      const [navBackground, setNavBackground] = useState('appBar')
      const navRef = React.useRef()
      navRef.current = navBackground
      useEffect(() => {
          const handleScroll = () => {
              const show = window.scrollY > 50
              if (show) {
                  setNavBackground('appBarScroll')
              } else {
                  setNavBackground('appBar')
              }
          }
          document.addEventListener('scroll', handleScroll)
          return () => {
              document.removeEventListener('scroll', handleScroll)
          }
      }, [])
  
    return (
      <div className={classes.app} >
          {/* DESKTOP VIEW */}
        <Hidden smDown >
        <AppBar position="fixed" className={classes[navRef.current]} >
          <Toolbar className={classes.toolBar} >
            <div className={classes.logo}>
              <img style={{maxHeight: '100%', maxWidth: '100%', width: '100px'}} src="logo transparent.png" alt=""/>
            </div>
            <div className={classes.leftNav} >
              <a href='#hero' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Home</h5>
              </a>
              <a href='#about' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>About</h5>
              </a>
              <a href='#subscription' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Subscription</h5>
              </a >
              <a href='#pools' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Pools</h5>
              </a >
              <a href='#features' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Features</h5>
              </a>
              <a href='#roadmap' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Roadmap</h5>
              </a>
              <a href='#apply' className={classes.btnTwo}>
                <h5 classname={classes.btnOneText}>Apply</h5>
              </a>
              {/* <button className={classes.btnThree} onClick={changeTheme} >
                {btn}
              </button> */}
              <div>
                  <button className={classes.btnTelegram} >Get Cards</button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
  
        {/* HERO SECTION */}
        
        <Hero id='hero' className={classes.hero}>
          <div  className={classes.heroText} >
            <HeroTitle data-aos='zoom-in-right'  >Multi Chain Defi <span data-aos='zoom-in-left' className={classes.raiseCap}>Launchpad Platform</span></HeroTitle>
            <HeroText className={classes.heroParagraph}>Cerium is a decentralized multichain launchpad platform with staunch in-house research, marketing and developmental teams.</HeroText>
            <div className={classes.btnGroup}>
              <Linked data-aos='zoom-in-up' className='btnGroupOne'>
                <Link>    
                <h5 classname={classes.btnOneText}>Read More</h5>
                </Link>
              </Linked>
              <button data-aos='zoom-in-up' className='btnGroupTwo'>
                <h5 classname={classes.btnOneText}>Subscribe to upcoming tools</h5>
              </button>
            </div>
          </div>
  
          <div>
            <video autoPlay loop muted style={{height: '700px', width: '700px', marginTop: '50px' }} data-aos='zoom-in-left' ><source src='meta_header.webm' type='video/mp4' /></video>
          </div>
        </Hero>
  
        {/* BELOW HERO SECTION */}
  
        <div id='about' style={{backgroundColor: '#1B1B1B'}} >
  
          {/* ABOUT SECTION */}
            <div style={{display: 'flex', justifyContent: 'center', }} >
                <div className={classes.aboutSection} >
                  <div className={classes.aboutBoxes} >
                    <div className={classes.boxLineOne} data-aos='zoom-in-up' >
                      <div className={classes.boxOne} >
                        <SettingsEthernetIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                        <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Seed Investor</h3>
                        <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                          Cerium makes it available to seeds and private presale investing
                        </p>
                      </div>
                      <div className={classes.boxTwo} >
                        <RemoveFromQueueIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                          <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Information</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                            Cerium launchpad act as an information provider to investors seeking more details on upcoming private sales or presales.
                          </p>
                      </div>
                    </div>
                    <div className={classes.boxLineTwo} data-aos='zoom-in-up' >
                      <div className={classes.boxOne} >
                        <FlashOnIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                          <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Funds Protection</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                           Insurance in opposition to possibilities of financial deprivation related to Defi hacks, vulnerability and vapor ware
                          </p>
                      </div>
                      <div className={classes.boxTwo} >
                        <StarIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                          <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>No KYC</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                            Cerium is available to everyone
                          </p>
                      </div>
                    </div>
                  </div>
  
                  <div className={classes.aboutText} data-aos='zoom-in-right' >
                    <h2>Making everyone <br />
                      <span style={{color: '#FF3465' }} >A Seed Investor</span></h2>
  
                      <p>Cerium assist the project we invest in by giving our indispensable resources on marketing and community growth as well as acess to our distinctive industry network</p>
  
                      <div>
                        <button className={classes.btnOne} >Chhose a Tier</button>
                      </div>
                  </div>
                </div>
  
            </div>
  
            {/* TIERS SECTION */}
            
            <div id='subscription' className={classes.tier} >
              <h2 data-aos='zoom-in-up' style={{textAlign:'center', fontFamily: 'Montserrat Alternates', color: 'white', fontSize: '40px', fontWeight: 'bold' }} >Tier Packages</h2>
              <div className={classes.tierSection} >
                <div data-aos='zoom-in-up' className='tierBox' >
                    <div className='innerTierBox' >
                      <div>
                        <h2 style={{color: '#F2B28E', fontSize: '30px'}} >Bronze</h2>
                        <p className='stake' >Staking Requirements</p>
                        <h3 className='ten' >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                        <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                        <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                        <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                        <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>1x</p>
                      </div>
                    </div>
                </div>
                <div data-aos='zoom-in-up' className='tierBox' >
                  <div className='innerTierBox' >
                    <div>
                      <h2 style={{color: '#B7C2D3', fontSize: '30px'}}>Silver</h2>
                      <p className='stake' >Staking Requirements</p>
                      <h3 className='ten' >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>2x</p>
                    </div>
                  </div>
                </div>
                <div data-aos='zoom-in-up' className='tierBox' >
                  <div className='innerTierBox' >
                    <div>
                      <h2 style={{color: '#FFA825', fontSize: '30px'}}>Gold</h2>
                      <p className='stake' >Staking Requirements</p>
                      <h3 className='ten' >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>3x</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>


        <Upcoming id='pools' className={classes.detailSection} >
        <div className={classes.upcomingPools}>
          <Title><h2 >Upcoming Pools</h2></Title>
          <div className={classes.poolBoxes}>
            <div data-aos='flip-up' className='poolBox'>
              <div className={classes.boxHeader} >
                <Avatar variant='circle' src='hh.png' ></Avatar>
                <p>
                  <span></span>
                  in 1 day
                </p>
              </div>
              <div className={classes.boxTitle}><h1>Unmarshal</h1></div>
              <div className={classes.boxTextOne}><p>Total Raise</p></div>
              <div className={classes.boxTextTwo}><p style={{color:'#FF3465'}} >$240k</p></div>
              <div className={classes.boxFooter}>
                <section>
                  <div><h4>Min Allocation</h4></div>
                  <div><h5>0</h5></div>
                </section>
                <section>
                  <div><h4>Max Allocation</h4></div>
                  <div><h5>$300</h5></div>
                </section>
                <section>
                  <div><h4>Access</h4></div>
                  <div><h5>Private</h5></div>
                </section>
              </div>
            </div>

            <div data-aos='flip-up' className='poolBox'>
              <div className={classes.boxHeader} >
                <Avatar variant='circle' src='hh.png' ></Avatar>
                <p>
                  <span></span>
                  in 1 day
                </p>
              </div>
              <div className={classes.boxTitle}><h1>Unmarshal</h1></div>
              <div className={classes.boxTextOne}><p>Total Raise</p></div>
              <div className={classes.boxTextTwo}><p style={{color:'#FF3465'}} >$240k</p></div>
              <div className={classes.boxFooter}>
                <section>
                  <div><h4>Min Allocation</h4></div>
                  <div><h5>0</h5></div>
                </section>
                <section>
                  <div><h4>Max Allocation</h4></div>
                  <div><h5>$300</h5></div>
                </section>
                <section>
                  <div><h4>Access</h4></div>
                  <div><h5>Private</h5></div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button className={classes.btnUpcoming} >Get Notified ></button>
        </div>
      </Upcoming>

          {/* PROGRESS BAR SECTION */}
  
          <div id='features' className={classes.progressBar} >
            <div  data-aos='zoom-in-up' className={classes.innerProgressBar} >
              <h2 style={{color: 'white', fontFamily: 'Montserrat Alternates', marginBottom: '30px', fontWeight: 'bold', fontSize: '30px' }} >Tokenomics</h2>
              <p style={{color: 'white', fontFamily: 'Montserrat Alternates', marginBottom: '30px' }} >Token supply: The total token supply for Cerium is 10,000,000</p>
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Private Sale</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Public Sale</p>
              <ProgressBar completed={30} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Liquidity</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Partnership</p>
              <ProgressBar completed={8} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Team</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Advisors</p>
              <ProgressBar completed={2} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
            </div>
  
            <div>
              <video autoPlay loop muted style={{height: '650px', width: '650px', marginTop: '50px' }} data-aos='zoom-in-left' ><source src='Meta_low.webm' type='video/mp4' /></video>
            </div>
          </div>
  
          <div style={{paddingBottom: '100px', backgroundColor: 'black'}} >
            <h2  data-aos='zoom-in-up' style={{fontFamily: 'Montserrat Alternates', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', color: 'white', marginBottom: '50px' }} >Initial Distribution Model</h2>
            <div  data-aos='zoom-in-up' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <div style={{textAlign: 'right', margin: '0px 50px', fontFamily: 'Montserrat Alternates', width: '300px'}} >
                  <h2 style={{marginBottom: '20px', color: '#676977', fontSize: '30px' }} >2,000,000</h2>
                  <p style={{marginBottom: '20px', color: '#FF3465', fontWeight: 'bold' }}>$cards</p>
                  <p style={{marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>Round 1</p>
                  <p style={{color: 'white', fontSize: '15px'}} >2,000,000 $CARDS @ $0.10 per token ($200k), capped at $5000 per person Vesting - 10% at TGE, 22.5% per month for 4 months</p>
                </div>
                <div style={{textAlign: 'left', margin: '0px 50px', fontFamily: 'Montserrat Alternates', width: '300px'}} >
                  <h2 style={{marginBottom: '20px', color: '#676977', fontSize: '30px' }} >2,000,000</h2>
                  <p style={{marginBottom: '20px', color: '#FF3465', fontWeight: 'bold' }}>$cards</p>
                  <p style={{marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>Round 1</p>
                  <p style={{color: 'white', fontSize: '15px'}} >2,000,000 $CARDS @ $0.10 per token ($200k), capped at $5000 per person Vesting - 10% at TGE, 22.5% per month for 4 months</p>
                </div>
            </div>
          </div>
  
          {/* ROADMAP SECTION */}
  
          <div id='roadmap' style={{backgroundColor: '#1B1B1B'}} >
              <div data-aos='zoom-in-right' style={{width: '350px', marginLeft: '200px', paddingTop: '100px' }} >
              <h2 style={{fontFamily: 'Montserrat Alternates', fontSize: '30px', fontWeight: 'bolder', color: 'white', marginBottom: '20px' }} >Our Roadmap for 2021</h2>
                <p style={{fontFamily: 'Montserrat Alternates', fontSize: '15px', color: 'white', marginBottom: '20px' }}>Roadmap will contiously change as we progress with our project. For updates and news, join our Telegram annoucement channel</p>
  
                <div>
                <a href="https://t.me/ceriumfinance"><button className={classes.btnTelegram} >Join Telegram</button></a>
                </div>
              </div>
            <SVG data-aos='zoom-in-up' width={1100} color='#FF3465' style={{marginLeft: '150px', marginTop: '-300px'}} />
  
            {/* APPLY SECTION */}
  
            <div id='apply' style={{display: 'flex', justifyContent: 'center', paddingBottom: '150px'  }} >
              <div style={{margin: '0px 40px', width: '25%', marginTop: '-30px' }} >
                <h2 style={{fontFamily: 'Montserrat Alternates', fontSize: '40px', color: '#FF3465', fontWeight: 'bolder' }} >Developing a Project? Let's Talk</h2>
                <p style={{textAlign: 'left', fontFamily: 'Montserrat Alternates', color: 'white', marginTop: '30px'}} >Drop us a message, we'd love to hear more about your project!</p>
              </div>
  
              <div style={{margin: '0px 40px' }} >
                <h3 style={{fontFamily: 'Montserrat Alternates', fontSize: '20px', color: '#fff', fontWeight: 'bolder', marginBottom: '50px', marginTop: '-50px' }}>Apply</h3>
                  <form action="">
                    <div style={{display: 'flex', alignItems: 'center' }} >
                      <TextField  color='secondary' type='text' label='Full Name' />
                      <TextField style={{margin: '0px 20px', color: 'white'}} color='secondary' type='text' label='Email' />
                      <TextField style={{margin: '0px 20px'}} color='secondary' type='text' label='Project Name' />
                    </div>
                    <TextField color='secondary' fullWidth type='text' multiline rows={4} label='Message' />
                    <div>
                      <button className={classes.btnTelegram} >Send Message</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
  
        {/* FOOTER SECTION */}
        
        <Footer className={classes.footer} >
          <div className={classes.innerFooter} >
          <Logo>Cer<span className={classes.spanOne}>i</span>u<span className={classes.spanOne}>m</span></Logo>
              <Honors>© Cerium 2021</Honors>
          </div>
  
          <div style={{marginRight: '50px' }} >
          <a href='https://t.me/ceriumfinance' ><TelegramIcon style={{color: 'white', margin: '0px 20px'}} /></a>
            <a href='https://twitter.com/ceriumfinance' ><TwitterIcon style={{color: 'white', margin: '0px 20px'}} /></a>
          </div>
        </Footer>
        </Hidden>


        <Hidden mdUp>
          {/* MOBILE VIEW */}
          <AppBar position="fixed"  className={classes[navRef.current]}>
          <Toolbar style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}} >
            <div >
            <img style={{maxHeight: '100%', maxWidth: '100%', width: '100px'}} src="logo transparent.png" alt=""/>
            </div>
            <div>
              <MenuIcon onClick={handleDrawerOpen} />
              <Drawer
                className={classes.drawer}
                open={open}
                anchor='left'
              >
                <List>
                    <a href='#hero' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Home</h5>
                    </ListItem>
                    </a>
                    <a href='#about' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>About</h5>
                    </ListItem>
                    </a>
                    <a href='#pools' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Pools</h5>
                    </ListItem>
                    </a>
                    <a href='#subscription' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Subscription</h5>
                    </ListItem>
                    </a>
                    <a href='#features' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Features</h5>
                    </ListItem>
                    </a>
                    <a href='#roadmap' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Roadmap</h5>
                    </ListItem>
                    </a>
                    <a href='#apply' className={classes.btnTwoSm}>
                    <ListItem button>
                        <h5 classname={classes.btnOneText}>Apply</h5>
                    </ListItem>
                    </a>
                    <ListItem button onClick={handleDrawerClose} >
                    <ChevronLeftIcon/> Close
                    </ListItem>
                </List>
              </Drawer>
            </div>
          </Toolbar>
        </AppBar>

         {/* HERO SECTION */}
        
         <Hero id='hero' className={classes.heroSm}>
          <div  className={classes.heroTextSm} >
            <div>
                <video autoPlay loop muted style={{height: '300px', width: '300px', marginTop: '0px' }} data-aos='zoom-in-left' ><source src='meta_header.webm' type='video/mp4' /></video>
            </div>
            <HeroTitle data-aos='zoom-in-right'  >Multi Chain Defi <span data-aos='zoom-in-left' className={classes.raiseCap}>Launchpad Platform</span></HeroTitle>
            <HeroText className={classes.heroParagraph}>Cerium is a decentralized multichain launchpad platform with staunch in-house research, marketing and developmental teams.</HeroText>
            <div className={classes.btnGroupSm}>
              <Linked data-aos='zoom-in-up' className='btnGroupOne'>
                <Link>    
                <h5 classname={classes.btnOneTextSm}>Read More</h5>
                </Link>
              </Linked>
              <button data-aos='zoom-in-up' className='btnGroupTwo'>
                <h5 classname={classes.btnOneTextSm}>Subscribe to upcoming tools</h5>
              </button>
            </div>
          </div>
        </Hero>

        <div id='about' style={{backgroundColor: '#1B1B1B'}} >
  
          {/* ABOUT SECTION */}
            <div >
                <div className={classes.aboutSectionSm} >

                <div className={classes.aboutTextSm} data-aos='zoom-in-right' >
                <h2>Making everyone <br />
                      <span style={{color: '#FF3465' }} >A Seed Investor</span></h2>
  
                      <p>Cerium assist the project we invest in by giving our indispensable resources on marketing and community growth as well as acess to our distinctive industry network</p>
  
                      <div>
                        <button className={classes.btnOne} >Chhose a Tier</button>
                      </div>
                  </div>

                  <div className={classes.aboutBoxes} >
                    <div className={classes.boxLineOneSm} >
                      <div data-aos='zoom-in-up'  className={classes.boxOneSm} >
                        <SettingsEthernetIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                        <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Seed Investor</h3>
                        <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                          Cerium makes it available to seeds and private presale investing
                        </p>
                      </div>
                      <div data-aos='zoom-in-up' className={classes.boxTwoSm} >
                        <RemoveFromQueueIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                        <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Information</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                            Cerium launchpad acts as an information provider to investors seeking more details on upcoming private sales or presales.
                          </p>
                      </div>
                    </div>
                    <div className={classes.boxLineTwoSm}  >
                      <div data-aos='zoom-in-up' className={classes.boxOneSm} >
                        <FlashOnIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                        <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>Funds Protection</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                           Insurance in opposition to possibilities of financial deprivation related to Defi hacks, vulnerability and vapor ware
                          </p>
                      </div>
                      <div data-aos='zoom-in-up' className={classes.boxTwoSm} >
                        <StarIcon style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates' }} />
                        <h3 style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '25px' }}>No KYC</h3>
                          <p style={{color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '15px', marginTop: '20px' }}>
                            Cerium is available to everyone
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            <Upcoming id='pools' className={classes.detailSectionSm} >
          <div className={classes.upcomingPoolsSm}>
            <Title><h2 >Upcoming Pools</h2></Title>
            <div className={classes.poolBoxesSm}>
              <div data-aos='flip-up' className={classes.poolBoxSm}>
                <div className={classes.boxHeaderSm} >
                  <Avatar variant='circle' src='hh.png' ></Avatar>
                  <p>
                    <span></span>
                    in 1 day
                  </p>
                </div>
                <div className={classes.boxTitle}><h1>Unmarshal</h1></div>
                <div className={classes.boxTextOne}><p>Total Raise</p></div>
                <div className={classes.boxTextTwo}><p style={{color:'#FF3465'}} >$240k</p></div>
                <div className={classes.boxFooter}>
                  <section>
                    <div><h4>Min Allocation</h4></div>
                    <div><h5>0</h5></div>
                  </section>
                  <section>
                    <div><h4>Max Allocation</h4></div>
                    <div><h5>$300</h5></div>
                  </section>
                  <section>
                    <div><h4>Access</h4></div>
                    <div><h5>Private</h5></div>
                  </section>
                </div>
              </div>
  
              <div data-aos='flip-up' className={classes.poolBoxSm}>
                <div className={classes.boxHeaderSm} >
                  <Avatar variant='circle' src='hh.png' ></Avatar>
                  <p>
                    <span></span>
                    in 1 day
                  </p>
                </div>
                <div className={classes.boxTitle}><h1>Unmarshal</h1></div>
                <div className={classes.boxTextOne}><p>Total Raise</p></div>
                <div className={classes.boxTextTwo}><p style={{color:'#FF3465'}} >$240k</p></div>
                <div className={classes.boxFooter}>
                  <section>
                    <div><h4>Min Allocation</h4></div>
                    <div><h5>0</h5></div>
                  </section>
                  <section>
                    <div><h4>Max Allocation</h4></div>
                    <div><h5>$300</h5></div>
                  </section>
                  <section>
                    <div><h4>Access</h4></div>
                    <div><h5>Private</h5></div>
                  </section>
                </div>
              </div>
            </div>
          </div>
  
          <div>
            <Btn className={classes.helloBtn} >Get Notified ></Btn>
          </div>
        </Upcoming>
  
    
            {/* TIERS SECTION */}
            
            <div id='subscription' className={classes.tier} >
              <h2 data-aos='zoom-in-up' style={{textAlign:'center', fontFamily: 'Montserrat Alternates', color: 'white', fontSize: '30px', fontWeight: 'bold', marginTop: '40px' }} >Tier Packages</h2>
              <div className={classes.tierSectionSm} >
                {/* <div  className={classes.tierBox} > */}
                    <div data-aos='zoom-in-up' className={classes.innerTierBoxSm} >
                      <div>
                        <h2 style={{color: '#F2B28E', fontSize: '30px'}} >Bronze</h2>
                        <p style={{fontSize: '10px', marginTop: '10px' }} >Staking Requirements</p>
                        <h3 style={{marginTop: '30px', fontSize: '35px', backgroundColor: '#474747' }} >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                        <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                        <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                        <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                        <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>1x</p>
                      </div>
                    </div>
                {/* </div> */}
                {/* <div  className={classes.tierBox} > */}
                  <div data-aos='zoom-in-up' className={classes.innerTierBoxSm} >
                    <div>
                      <h2 style={{color: '#B7C2D3', fontSize: '30px'}}>Silver</h2>
                      <p style={{fontSize: '10px', marginTop: '10px' }} >Staking Requirements</p>
                      <h3 style={{marginTop: '30px', fontSize: '35px', backgroundColor: '#474747' }} >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>2x</p>
                    </div>
                  </div>
                {/* </div> */}
                {/* <div  className={classes.tierBox} > */}
                  <div data-aos='zoom-in-up' className={classes.innerTierBoxSm} >
                    <div>
                      <h2 style={{color: '#FFA825', fontSize: '30px'}}>Gold</h2>
                      <p style={{fontSize: '10px', marginTop: '10px' }} >Staking Requirements</p>
                      <h3 style={{marginTop: '30px', fontSize: '35px', backgroundColor: '#474747' }} >10,000 <span style={{fontSize: '20px', fontFamily: 'Montserrat Alternates'}}>cards</span><br /> <span style={{fontSize: '10px', fontFamily: 'Montserrat Alternates'}} >for 7 days</span> </h3>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}} >Guaranteed Allocation</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Yes</p>
                      <p style={{marginTop: '30px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>Pool Weight</p>
                      <p style={{marginTop: '10px', fontWeight: 'bold', fontFamily: 'Montserrat Alternates'}}>3x</p>
                    </div>
                  </div>
                {/* </div> */}
              </div>
            </div>
        </div>

        

        {/* PROGRESS BAR SECTION */}
  
        <div id='features' className={classes.progressBarSm} >
            <div>
              <video autoPlay loop muted style={{height: '300px', width: '300px', marginTop: '20px',
            marginLeft: '30px' }} data-aos='zoom-in-left' ><source src='Meta_low.webm' type='video/mp4' /></video>
            </div>

            <div  data-aos='zoom-in-up' className={classes.innerProgressBarSm} >
              <h2 style={{color: 'white', fontFamily: 'Montserrat Alternates', marginBottom: '30px', fontWeight: 'bold', fontSize: '30px' }} >Tokenomics</h2>
              <p style={{color: 'white', fontFamily: 'Montserrat Alternates', marginBottom: '30px' }} >Token supply: The total token supply for Cerium is 10,000,000</p>
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Private Sale</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Public Sale</p>
              <ProgressBar completed={30} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Liquidity</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Partnership</p>
              <ProgressBar completed={8} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Team</p>
              <ProgressBar completed={20} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
              <p style={{marginBottom: '-15px', color: 'white', fontWeight: 'bold', fontFamily: 'Montserrat Alternates', fontSize: '10px' }} >Advisors</p>
              <ProgressBar completed={2} width='100%' margin='20px 0px' height='10px' labelAlignment='outside' bgColor='#FF3465' baseBgColor='#657783' />
            </div>
          </div>
  
          <div style={{paddingBottom: '100px', backgroundColor: 'black', paddingTop: '100px'}} >
            <h2  data-aos='zoom-in-up' style={{fontFamily: 'Montserrat Alternates', fontWeight: 'bold', fontSize: '30px', textAlign: 'center', color: 'white', marginBottom: '50px' }} >Initial Distribution Model</h2>
            <div  data-aos='zoom-in-up' >
                <div style={{textAlign: 'center', margin: '0px auto', fontFamily: 'Montserrat Alternates', width: '350px',}} >
                  <h2 style={{marginBottom: '20px', color: '#676977', fontSize: '30px' }} >2,000,000</h2>
                  <p style={{marginBottom: '20px', color: '#FF3465', fontWeight: 'bold' }}>$cards</p>
                  <p style={{marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>Round 1</p>
                  <p style={{color: 'white', fontSize: '15px'}} >2,000,000 $CARDS @ $0.10 per token ($200k), capped at $5000 per person Vesting - 10% at TGE, 22.5% per month for 4 months</p>
                </div>
                <div style={{textAlign: 'center', margin: '0px auto', fontFamily: 'Montserrat Alternates', width: '350px',}} >
                  <h2 style={{marginBottom: '20px', color: '#676977', fontSize: '30px' }} >2,000,000</h2>
                  <p style={{marginBottom: '20px', color: '#FF3465', fontWeight: 'bold' }}>$cards</p>
                  <p style={{marginBottom: '20px', color: 'white', fontWeight: 'bold' }}>Round 1</p>
                  <p style={{color: 'white', fontSize: '15px'}} >2,000,000 $CARDS @ $0.10 per token ($200k), capped at $5000 per person Vesting - 10% at TGE, 22.5% per month for 4 months</p>
                </div>
            </div>
          </div>

          {/* ROADMAP SECTION */}
  
          <div id='roadmap' style={{backgroundColor: '#1B1B1B'}} >
              <div data-aos='zoom-in-right' style={{width: '80%', margin: '0px auto', textAlign: 'center', paddingTop: '100px', paddingBottom: '200px' }} >
              <h2 style={{fontFamily: 'Montserrat Alternates', fontSize: '30px', fontWeight: 'bolder', color: 'white', marginBottom: '20px' }} >Our Roadmap for 2021</h2>
                <p style={{fontFamily: 'Montserrat Alternates', fontSize: '15px', color: 'white', marginBottom: '20px' }}>Roadmap will contiously change as we progress with our project. For updates and news, join our Telegram annoucement channel</p>
  
                <div>
                  <a href="https://t.me/ceriumfinance"><button className={classes.btnTelegram} >Join Telegram</button></a>
                </div>

                <div className={classes.svg} >
                  <div>
                  <div style={{display: 'flex', alignItems: 'center',  marginLeft: '50px'}} >
                    <div style={{textAlign: 'left',}} >
                      <ScatterPlotIcon style={{padding: '10px', fontSize: '30px', borderRadius: '15px', backgroundColor: '#ff346385', color: 'white', marginBottom: '20px'}}  />
                      <div style={{color: 'white'}} >
                        <h5>Q1 2021</h5>
                        <p style={{width: '200px'}} >
                          - Cerium Token Generation Event<br />
                          - Uniswap Listing
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 style={{fontSize: '200px', color: '#FF3465', marginLeft: '-20px'}} >1</h1>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}} >
                    <div>
                      <h1 style={{fontSize: '200px', color: '#FF3465',}} >2</h1>
                    </div>
                    <div style={{textAlign: 'left',}} >
                      <CreateIcon style={{padding: '10px', fontSize: '30px', borderRadius: '15px', backgroundColor: '#ff346385', color: 'white', marginBottom: '20px'}}  />
                      <div style={{color: 'white'}} >
                        <h5>Q2 2021</h5>
                        <p style={{width: '200px'}} >
                          - Patnership<br />
                          - Development<br />
                          - Marketing <br />
                          - Project IDOs <br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}} >
                    <div style={{textAlign: 'right', marginLeft: '-50px'}} >
                      <DirectionsIcon style={{padding: '10px', fontSize: '30px', borderRadius: '15px', backgroundColor: '#ff346385', color: 'white', marginBottom: '20px'}}  />
                      <div style={{color: 'white'}} >
                        <h5>Q3 2021</h5>
                        <p style={{width: '200px'}} >
                          - More products on Cerium launchpad<br />
                        </p>
                      </div>
                    </div>
                    <div>
                      <h1 style={{fontSize: '200px', color: '#FF3465', marginLeft: '20px'}} >3</h1>
                    </div>
                  </div>
                </div>
                </div>
              </div>
           
            {/* APPLY SECTION */}
  
            <div id='apply' style={{ paddingBottom: '150px', marginTop: '100px'  }} >
              <div style={{margin: '0px auto', width: '90%', marginTop: '-200px', textAlign: 'center' }} >
                <h2 style={{fontFamily: 'Montserrat Alternates', fontSize: '40px', color: '#FF3465', fontWeight: 'bolder' }} >Developing a Project? Let's Talk</h2>
                <p style={{textAlign: 'center', fontFamily: 'Montserrat Alternates', color: 'white', marginTop: '30px'}} >Drop us a message, we'd love to hear more about your project!</p>
              </div>
  
              <div style={{margin: '0px 10px', backgroundColor: '#ababab', padding: '5px 40px', marginTop: '30px', borderRadius: '20px' }} >
                <h3 style={{fontFamily: 'Montserrat Alternates', fontSize: '20px', color: '#000', fontWeight: 'bolder', marginBottom: '30px', marginTop: '30px', textAlign: 'center' }}>Apply</h3>
                  <form action="">
                      <TextField  color='secondary' type='text' label='Full Name' fullWidth style={{margin: '20px auto', width: '100%'}}/>
                      <TextField style={{margin: '20px auto', width: '100%'}} color='secondary' type='text' label='Email' fullWidth />
                      <TextField style={{margin: '20px auto', width: '100%'}} color='secondary' type='text' label='Project Name' fullWidth />
                    <TextField color='secondary' fullWidth type='text' multiline rows={4} label='Message' />
                    <div>
                      <button className={classes.btnTelegramSm} >Send Message</button>
                    </div>
                  </form>
              </div>
            </div>
        </div>

        {/* FOOTER SECTION */}
        
        <Footer className={classes.footerSm} >
          <div className={classes.innerFooterSm} >
          <Logo style={{fontSize: '15px', textAlign: 'center'}} >Cer<span className={classes.spanOne}>i</span>u<span className={classes.spanOne}>m</span></Logo>
              <Honors style={{fontSize: '10px', textAlign: 'center'}} >© Cerium 2021</Honors>
          </div>
  
          <div style={{margin: '0px auto', width: '40%', marginTop: '30px' }} >
            <a href='https://t.me/ceriumfinance' ><TelegramIcon style={{color: 'white', margin: '0px 20px'}} /></a>
            <a href='https://twitter.com/ceriumfinance' ><TwitterIcon style={{color: 'white', margin: '0px 20px'}} /></a>
          </div>
        </Footer>
    </Hidden>
</div>
    )  
}

export default MainPage
