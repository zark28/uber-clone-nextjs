import Link from 'next/link'
import { useState } from 'react'
import tw from 'tailwind-styled-components'

const Search = () => {
const [pickup, setPickup]=useState()
const [dropoff, setDropoff]=useState()
    return (
        <Wrapper>
            <ButtonContainer>
                <Link passHref href="/">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
                </Link>
            </ButtonContainer>
            <InputConatiner>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcons>
                <InputBoxes>
                    <Input 
                    placeholder="Enter pickup location"
                    value={pickup}
                    onChange={(e)=> setPickup(e.target.value)}
                    />
                    <Input 
                    placeholder="Where to?"
                    value={dropoff}
                    onChange={(e)=> setDropoff(e.target.value)}
                    />
                </InputBoxes>
                <PlusIcon src= "https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputConatiner>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            <Link passHref href={{
                pathname:"/confirm",
                query:{
                    pickup:pickup,
                    dropoff:dropoff
                } }}>
            <ConfirmLocationsContainer>
              
              Confirm Locations
              
            </ConfirmLocationsContainer>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper =tw.div `
bg-gray-200 h-screen
`
const ButtonContainer =tw.div `
bg-white px-4 
`

const BackButton =tw.img `
h-12 cursor-pointer
`

const InputConatiner =tw.div `
bg-white flex items-center px-4 mb-2
`

const FromToIcons =tw.div `
w-10 flex flex-col mr-2 items-center
`

const Circle = tw.img ` h-2.5`
const Line = tw.img `h-10`
const Square = tw.img `h-3`

const InputBoxes =tw.div `
flex flex-col flex-1 
`

const Input =tw.input `
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`

const PlusIcon = tw.img `
w-10 h-10 bg-gray-200 rounded-full ml-3`

const SavedPlaces = tw.div `
flex items-center bg-white px-4 py-2 
`
const StarIcon = tw.img `
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocationsContainer = tw.div `
flex justify-center mt-4 py-3 mx-4 cursor-pointer
bg-black text-white text-2xl text-center
`