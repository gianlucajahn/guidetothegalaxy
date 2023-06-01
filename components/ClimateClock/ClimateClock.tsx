import { useEffect } from 'react';

const ClimateClock = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://climateclock.world/widget-v2.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //@ts-ignore
  return <climate-clock />;
};

export default ClimateClock;