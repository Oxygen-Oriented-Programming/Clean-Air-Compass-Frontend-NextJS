import { useMap } from 'react-leaflet';

export default function MapDescendent(props) {
  const map = useMap();
  props.setMap(map);
}
