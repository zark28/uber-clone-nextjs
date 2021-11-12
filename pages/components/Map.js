
import {useEffect} from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken =
 'pk.eyJ1IjoiemFyazI4IiwiYSI6ImNrdm4zd2xzdDdpNHcydXF3Z2Y5NGhpdnUifQ.LW87zXss3Dq8Czo03nlAhQ';
const Map = (props) => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center:[7.9527706, -1.0307118],
          zoom: 3,
          });
// console.log(props.pickupCoordinates);
        if(props.pickupCoordinates){
            addToMap(map,props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
            addToMap(map,props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates){
            map.fitBounds([
                props.dropoffCoordinates,props.pickupCoordinates
            ],{
            padding:60
        })
        }
      },[props.pickupCoordinates,props.dropoffCoordinates,])

      const addToMap = (map,coordinates)=>{
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
      }


      
      
      return (
        <Wrapper id= 'map'>
            
        </Wrapper>
    )
}

export default Map

const Wrapper =tw.div `
flex-1 h-1/2
`