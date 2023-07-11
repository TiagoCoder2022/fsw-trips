import { prisma } from '@/lib/prisma'

import React from 'react'
import TripHeader from './components/TripHeader'
import TripReservation from './components/TripReservation'
import TripDescription from './components/TripDescription'
import TripHighlights from './components/TripHighlights'
import TripLocation from './components/TripLocation'


const getTipDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })
  return trip
}
const TripDetails = async ({params}: {params: { tripId: string }}) => {
  const trip = await getTipDetails(params.tripId)

  if (!trip) return null
  return (
    <div className='container mx-auto'>
      <TripHeader trip={trip}/>
      <TripReservation trip={trip}/>
      <TripDescription description={trip.description}/>  
      <TripHighlights highlights={trip.highlights}/>  
      <TripLocation locationDescription={trip.locationDescription} location={trip.location}/>
    </div>  
    
  )
}

export default TripDetails
