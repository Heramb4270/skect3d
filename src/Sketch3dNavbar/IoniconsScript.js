import React, { useEffect } from 'react';

const IoniconsScript = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    // Set the src attribute to the ionicons script URL
    script.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    // Set the type attribute
    script.type = 'module';
    // Append the script element to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script element when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return null; // Since this component doesn't render anything, return null
};

export default IoniconsScript;



