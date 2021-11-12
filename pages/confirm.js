import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/dist/client/router'
import RideSelector from './components/RideSelector'
import Link from 'next/dist/client/link'


const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff}= router.query
    const [pickupCoordinates, setPickupCoordinates] =useState([0,0])
    const [dropoffCoordinates, setDropoffCoordinates] =useState([0,0])
   
   
    const getPickupCoordinates = (pickup)=>{
    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams(
            {access_token:"pk.eyJ1IjoiemFyazI4IiwiYSI6ImNrdm4zd2xzdDdpNHcydXF3Z2Y5NGhpdnUifQ.LW87zXss3Dq8Czo03nlAhQ",
            limit: 1
            })
        )
        .then(response => response.json())
        .then (data => {
            // console.log(data.features[0].center)
            setPickupCoordinates(data.features[0].center)
        })}

        const getDropoffCoordinates =(dropoff)=>{
            
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams(
            {access_token:"pk.eyJ1IjoiemFyazI4IiwiYSI6ImNrdm4zd2xzdDdpNHcydXF3Z2Y5NGhpdnUifQ.LW87zXss3Dq8Czo03nlAhQ",
            limit: 1
            })
        )
        .then(response => response.json())
        .then (data => {
            // console.log(data.features[0].center)
            setDropoffCoordinates(data.features[0].center)
        })
        }

        useEffect(()=>{
            getPickupCoordinates(pickup);
            getDropoffCoordinates(dropoff);
        },[pickup,dropoff])
    return (
        <Wrapper>
            <Link href="/search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates} />
            <RideContainer>
                <RideSelector 
                pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}/>

                
                <ConfirmButtonContainer>
                   <ConfirmButton>

                    Confirm UberX
                   </ConfirmButton>

                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer =tw.div `
flex-1 flex flex-col h-1/2
`
const ConfirmButtonContainer =tw.div `
border-t-2`

const ConfirmButton =tw.div `
bg-black text-white my-4 mx-4 py-4 text-center text-xl`

const BackButton=tw.img `
h-12 m-4 w-12 cursor-pointer  shadow-md bg-white absolute z-50 rounded-full`