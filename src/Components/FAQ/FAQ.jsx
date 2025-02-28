import React from 'react';

const FAQ = () => {
    return (
        <div className='lg:p-0 p-5 lg:flex'>
            <div className='lg:w-1/2'>
                <h1 className='bebas text-7xl'>FAQs</h1>
                <p className='roboto font-semibold '>Find answers to your questions about visiting the museum, ticketing, and upcoming events.</p>
                <button className="btn bg-white text-black border-black mt-5 roboto h-12">Contact</button>
            </div>
            <div className='lg:w-1/2 mt-5'>
                <h1 className='liter font-bold text-xl'>What are the hours</h1>
                <p className='roboto font-semibold text-gray-black text-sm '>The museum is open from 10 AM to 6 PM, Tuesday through Sunday. We are closed on Mondays. Special holiday hours may apply, so check our website for updates.</p>

                <h1 className='liter lg:mt-10 mt-5 font-bold text-xl'>How do I buy tickets?</h1>
                <p className='roboto font-semibold text-gray-black text-sm '>Tickets can be purchased online through our website or at the museum entrance. We recommend buying in advance to secure your preferred time slot. Group discounts are available for parties of ten or more.</p>

                <h1 className='liter lg:mt-10 mt-5 font-bold text-xl'>Are there guided tours?</h1>
                <p className='roboto font-semibold text-gray-black text-sm '>Yes, we offer guided tours led by knowledgeable staff. Tours are available on weekends and can be booked in advance. Check our events calendar for specific times and availability.</p>

                <h1 className='liter lg:mt-10 mt-5 font-bold text-xl'>Is there parking available?</h1>
                <p className='roboto font-semibold text-gray-black text-sm '>Limited street parking is available near the museum. We recommend using public transportation or rideshare services for convenience. Nearby parking garages offer discounted rates for museum visitors.</p>

                <h1 className='liter lg:mt-10 mt-5 font-bold text-xl'>What events are happening?</h1>
                <p className='roboto font-semibold text-gray-black text-sm '>We host a variety of events including workshops, talks, and community gatherings. Check our events calendar for the latest updates and to RSVP. Don't miss out on our special exhibitions!</p>

                
            </div>
        </div>
    );
};

export default FAQ;