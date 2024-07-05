// import React from 'react';

// const VR = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 py-8">
//         {/* button */}
//         <div className="left-0 w-full flex justify-center mt-1 mb-3">
// //         <button class="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-gray-500 rounded hover:bg-white group py-1.5 px-2.5">
//     <span class="w-56 h-48 rounded bg-indigo-600 absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
//     <span class="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">Exterior</span>
//      </button>
//       </div>
//     {/* First row with one full-width image */}
//     <div className="mb-4">
//       <img src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="w-full rounded-lg shadow-lg mb-2" />
//     </div>
     
//      {/* Third row with two images */}
//     <div className="flex flex-wrap mb-4">
//       <div className="w-full sm:w-1/2">
//         <div className="aspect-w-1 aspect-h-1">
//           <img src="https://images.pexels.com/photos/4394220/pexels-photo-4394220.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="object-top object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//       <div className="w-full sm:w-1/2">
//         <div className="aspect-w-1 aspect-h-1">
//           <img src="https://images.pexels.com/photos/7283549/pexels-photo-7283549.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="object-top object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
    

//     {/* Third row with two images */}
//     <div className="flex flex-wrap mb-4">
//       <div className="w-full sm:w-1/2">
//         <div className="aspect-w-1 aspect-h-1">
//           <img src="https://images.pexels.com/photos/4394220/pexels-photo-4394220.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="object-top object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//       <div className="w-full sm:w-1/2">
//         <div className="aspect-w-1 aspect-h-1">
//           <img src="https://images.pexels.com/photos/7283549/pexels-photo-7283549.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" className="object-top object-cover rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </div>
     
//      {/* fourth row */}
//      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <img src="https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" className="md:col-start-2 md:col-span-2 row-start-2 md:row-span-2 self-end object-top object-cover rounded-lg shadow-lg" />
//       <img src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" className="md:row-start-1 self-end object-top object-cover rounded-lg shadow-lg" />
//       <img src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" className="md:row-start-3 self-end object-top object-cover rounded-lg shadow-lg" />
//     </div>
    
//   </div>
//   );
// }

// export default VR;
import React, { useEffect, useRef } from 'react';

const PYRAMID_CITY = () => {
  const viewerRef = useRef(null);
  const preloadContainerRef = useRef(null);
   
  useEffect(() => {
    const loadTdv = async () => {
      try {
        const TDV = await import('https://lib/tdvplayer.js?v=1685460048824/tdv.min.js');
        // Now you can use TDV
        const tour = new TDV.Tour(new TDV.PlayerSettings(), {
          general: 'script_general.js?v=1685460048824',
        });
        // Use tour object as needed
      } catch (error) {
        console.error('Error loading TDV library:', error);
      }
    };
  
    loadTdv();
  }, []);
  
  
  useEffect(() => {
    const tour = new TDV.Tour(new TDV.PlayerSettings(), {
      general: 'script_general.js?v=1685460048824',
    });

    tour.bind(TDV.Tour.EVENT_TOUR_INITIALIZED, onVirtualTourInit);
    tour.bind(TDV.Tour.EVENT_TOUR_LOADED, onVirtualTourLoaded);
    tour.bind(TDV.Tour.EVENT_TOUR_ENDED, onVirtualTourEnded);
    tour.load();

    return () => {
      tour.destroy();
    };
  }, []);

  const onVirtualTourInit = () => {
    if (tour.player.cookiesEnabled) {
      enableCookies();
    } else {
      tour.player.bind('enableCookies', enableCookies);
    }
  };

  const onVirtualTourLoaded = () => {
    disposePreloader();
  };

  const onVirtualTourEnded = () => {};

  const enableCookies = () => {};

  const disposePreloader = () => {
    const preloadContainer = preloadContainerRef.current;
    if (!preloadContainer) return;

    const transitionEndName = transitionEndEventName();
    if (transitionEndName) {
      preloadContainer.addEventListener(transitionEndName, hide, false);
      preloadContainer.style.opacity = 0;
      setTimeout(hide, 500); //Force hide. Some cases the transitionend event isn't dispatched with an iFrame.
    } else {
      hide();
    }

    function hide() {
      document.body.style.backgroundColor = window.getComputedStyle(preloadContainer).backgroundColor;
      preloadContainer.style.visibility = 'hidden';
      preloadContainer.style.display = 'none';
      const videoList = preloadContainer.getElementsByTagName('video');
      for (let i = 0; i < videoList.length; ++i) {
        const video = videoList[i];
        video.pause();
        while (video.children.length) video.removeChild(video.children[0]);
      }
    }

    function transitionEndEventName() {
      const el = document.createElement('div');
      const transitions = {
        transition: 'transitionend',
        OTransition: 'otransitionend',
        MozTransition: 'transitionend',
        WebkitTransition: 'webkitTransitionEnd',
      };

      let t;
      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }

      return undefined;
    }
  };

  const onBodyClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    loadTour();
  };

  const onLoad = () => {
    if (/AppleWebKit/.test(navigator.userAgent) && /Mobile\/\w+/.test(navigator.userAgent)) {
      window.addEventListener('orientationchange', onOrientationChange);
      onOrientationChange();
    }

    const params = getParams(location.search.substr(1));
    if (params.hasOwnProperty('skip-loading')) {
      loadTour();
      disposePreloader();
      return;
    }

    if (isOVRWeb()) {
      showPreloader();
      loadTour();
      return;
    }

    document.body.addEventListener('click', onBodyClick);
    document.body.addEventListener('touchend', onBodyClick);
    showPreloader();
  };

  const playVideo = (video, autoplayMuted, clickComponent) => {
    function hasAudio(video) {
      return (
        video.mozHasAudio ||
Boolean(video.webkitAudioDecodedByteCount) ||
        Boolean(video.audioTracks && video.audioTracks.length)
      );
    }

    function detectUserAction() {
      const component = clickComponent || document.getElementById('preloadContainer');
      const onVideoClick = (e) => {
        if (video.paused) {
          video.play();
        }
        video.muted = false;
        if (hasAudio(video)) {
          e.stopPropagation();
          e.stopImmediatePropagation();
          e.preventDefault();
        }

        component.removeEventListener('click', onVideoClick);
        component.removeEventListener('touchend', onVideoClick);

        if (component == clickComponent) {
          setComponentVisibility(false);
        }
      };
      component.addEventListener('click', onVideoClick);
      component.addEventListener('touchend', onVideoClick);
    }

    function setComponentVisibility(visible) {
      clickComponent.style.visibility = visible ? 'visible' : 'hidden';
    }

    let canPlay = true;
    const promise = video.play();
    if (promise) {
      promise.catch((error) => {
        if (clickComponent) setComponentVisibility(true);
        canPlay = false;
        if (autoplayMuted) {
          video.muted = true;
          video.play();
        }
        detectUserAction();
      });
    } else {
      canPlay = false;
    }

    if (!canPlay || video.muted) {
      detectUserAction();
    } else if (clickComponent) {
      setComponentVisibility(false);
    }
  };

  const isOVRWeb = () => {
    return window.location.hash.substring(1).split('&').indexOf('ovrweb') > -1;
  };

  const getParams = (params) => {
    const queryDict = {};
    params.split('&').forEach((item) => {
      const k = item.split('=')[0],
        v = decodeURIComponent(item.split('=')[1]);
      queryDict[k.toLowerCase()] = v;
    });
    return queryDict;
  };

  useEffect(() => {
    window.addEventListener('DOMContentLoaded', onLoad);

    return () => {
      window.removeEventListener('DOMContentLoaded', onLoad);
    };
  }, []);

  return (
    <div>
      <div id="preloadContainer" ref={preloadContainerRef} className="fill-viewport">
        <div
          style={{
            zIndex: 4,
            position: 'absolute',
            overflow: 'hidden',
            backgroundSize: 'contain',
            backgroundImage: `url('loading/HTMLImage_3DFE5BEB_2D83_3EBF_41B8_C69207B65562.jpg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            overflow: 'hidden',
            right: '0%',
            bottom: '0%',
            width: '67.55%',
            height: '67.64%',
          }}
        ></div>
        <div
          style={{
            zIndex: 5,
            position: 'absolute',
            overflow: 'hidden',
            backgroundSize: 'contain',
            backgroundImage: `url('loading/HTMLImage_22E45395_2D83_2F6B_419D_B3C477354569.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            overflow: 'hidden',
            right: '29.47%',
            bottom: '34.5%',
            width: '39.10%',
            height: '46.11%',
          }}
        ></div>
        <a
          href="https://sketchers3d.com/?v=1685460048824"
          target="_blank"
        >
          <div
            style={{
              zIndex: 6,
              position: 'absolute',
              overflow: 'hidden',
              backgroundSize: 'contain',
              backgroundImage: `url('loading/HTMLImage_3DE08749_2D87_D7FB_41A6_840412C3EE3E.png')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              overflow: 'hidden',
              left: '2.79%',
              bottom: '2.59%',
              width: '10.33%',
              height: '9.81%',
            }}
          ></div>
        </a>
      </div>
      <div id="viewer" ref={viewerRef} className="fill-viewport"></div>
    </div>
  );
};

export default PYRAMID_CITY;







