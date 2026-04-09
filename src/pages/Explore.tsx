
import { APIProvider, Map } from '@vis.gl/react-google-maps';


export default function ExploreWeb() {
    const MAPS_WEB_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string;

    return (
      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'relative'
      }}>
       <APIProvider apiKey={MAPS_WEB_API_KEY}>
        <Map
        colorScheme='DARK'
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          bottom: 0,
          right: 0,
      }}
        defaultCenter={{lat: 38.8869996, lng: 0 }} 
        zoom={10}
         gestureHandling={'greedy'}
         disableDefaultUI={true}
         
        >
        </Map>
       </APIProvider>
      </div>
    );
}
