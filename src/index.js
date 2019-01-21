require('./index.css')

const crel = require ('crel')

const reizen = [
    {
        title: "1. Southern Nile Valley, Egypt ", 
        body : "Egypt’s Southern Nile Valley is the flag-bearer for the country’s return to travel’s super league, and its near-incomparable historical itinerary represents a superb deal for travellers in 2019. For starters, world-class ancient sites hugging the Nile south from Luxor to Aswan are accessible for a few dollars. If you’re on a cruise, food and land transport will be included; otherwise it’s easy to make inexpensive arrangements for all but a handful of big-ticket temples and tombs, which are more than worth the admission price themselves. Factor in easy access from Europe and growing visitor numbers and it’s a great time for that dream Nile cruise or desert adventure."
    },
    {
        title: "2. Łódź, Poland ", 
        body : "The ambitious post-industrial city of Łódź, the third-largest in Poland, is in a rapid state of transformation. It combines renovation of industrial spaces with bold architectural projects: former factories and other spaces are being transformed into cultural, shopping and entertainment areas. Łódź’s EC1 complex continues to take shape and already has a new planetarium, a huge new science and technology centre and a range of exhibition spaces. The Manufaktura shopping and entertainment area is home to the MS2 Museum of Art, a zip line and an artificial beach. And don’t miss the remarkable Fabryczna railway station, a work of art with trains. "
    },
    {
        title: "3. Great Smoky Mountains National Park, USA ", 
        body : "Although little celebrated outside the USA, the Great Smoky Mountains National Park is no secret, as 10 million annual visitors will attest. This park, which straddles the North Carolina and Tennessee border, is free to enter, which means accessing the view from Clingmans Dome or exploring the atmospheric remains of Cades Cove won’t cost you anything more than getting there. It also offers some of the best hiking east of the Mississippi. The park has recovered from the 2016 wildfires and access to the iconic Chimney Tops Trail is almost fully restored, so this is a great time to enjoy a wallet-friendly national park adventure. "
    },
    {
        title: "4. Maldives ", 
        body : "Independent travel is growing in the Maldives as word gets out about a network of inexpensive places to stay on the islands. OK, we’re not talking Southeast Asia cheap, but an increasing number of inhabited, non-resort islands have their own locally run guesthouses, bypassing the expensive resort scene and bringing visitors close to what can be the otherwise elusive Maldivian culture. Costs are typically around US$90 per night and meals, diving and other activities can be arranged. Popular islands for independent travellers include Maafushi, Rasdhoo, Thoddoo and Dhigurah, but there are many more, contributing to a growing independent travel scene across the atolls. "
    },
    {
        title: "5. Houston, USA ", 
        body : "Although trips into orbit remain prohibitively expensive, the city from where the moon landings were guided is a great-value place to celebrate the 50th anniversary of the giant leap for mankind. An excellent place to start is Houston’s Museum District, which has 19 museums within walking distance: 10 of them are always free and the others offer special free days. The up-and-coming EaDo (East Downtown) district is home to an open-air gallery of murals, and a self-guided tour can take you around this colourful part of town. Houston’s diversity inspires its cuisine and great eating needn’t mean top-end fine dining. Chinatown, located on Houston’s west side, is home to the James Beard Award-nominated Mala Sichuan and Crawfish & Noodles. "
    },
    {
        title: "6. Argentina ", 
        body : "In the past few years, costs for travellers to Argentina have crept up, but the country’s efforts to encourage visitors can offer some significant savings. Overseas visitors who pay for their lodging with an international credit card will receive a refund on the 21% rate of Value Added Tax, plus there are savings on visa fees for certain nationalities. The solar eclipse crossing the north of the country is another incentive to visit in 2019, along with Argentina’s marvellous mix of world-beating wine, awesome mountain and lake scenery and its crackling-with-life capital Buenos Aires. "
    },
    {
        title: "7. Bangladesh ", 
        body : "Bangladesh creates astonishingly few ripples given everything it has to offer. The world’s eighth most populated country is home to diverse, exciting cities, Asia’s longest beach (and an emerging surf scene) at Cox’s Bazar, and the mangroves and wild tigers of Sundarbans National Park. Bangladesh has always been an inexpensive destination for travellers, and Unesco World Heritage sites are waiting to be discovered, such as the open-air museum that is the historic city of Bagerhat, where the Ganges and Brahmaputra rivers meet, and the atmospheric Buddhist ruins at Paharpur. Visitors remain a rarity almost everywhere else, giving Bangladesh an ‘out there’ feeling that’s harder to find in many neighbouring countries. "
    },
    {
        title: "8. Albania", 
        body : "Albania has been Europe’s final frontier for a while. Here’s a pocket of great value hiding in plain sight, with some superb beaches, a unique history and none of the crowds of Montenegro to the north or Greece to the south. The country’s exciting food scene celebrates the fruits of its unique local flavours and offers seriously distinctive dining. Although its archaeological sights, such as Apollonia and Butrint, and its one-of-a-kind blend of Balkan, Mediterranean and Italian influences are no secrets, Albania remains a destination where you can hike amid beautiful mountain scenery, stay in tiny and timeless villages and explore the buzzy capital Tirana for far less than pretty much anywhere else in Europe. "
    },
    {
        title: "9. Ecuador ", 
        body : "Want to see the best of South America but short on time? Ecuador is the place for you. Here are green Andean landscapes, colourful colonial towns, Amazon rainforests and Pacific Ocean waves. As you might expect in a small country, buses are quick, plentiful and cheap: hardly anywhere is more than half a day’s journey away. Ecuador is home to one of South America’s best beach scenes, in the towns north of the city of Guayaquil. Though they’re changing fast, the likes of Canoa and Mompiche are still places where you can find a beachside place to crash for a few dollars a night. "
    },
    {
        title: "10. Slovenia ", 
        body : "This pocket of Europe in miniature is a great value bet for anyone who’s after the continent’s highlights but is short on time or funds. In a single day you can tour a Venetian-tinged seaside town, cross Alpine passes and dine by the river in the heart of Ljubljana. But why rush? This is a land of outdoor activities available for much less than you’ll pay in other Alpine countries. It is a place of world-class restaurants and wineries, and undiscovered small towns. Getting around is easy and cheap, and many road and rail journeys are spectacular. Summer brings crowds to lakes Bled and, to a lesser extent, Bohinj, but it’s easy to leave them behind. "
    }           
]


function renderplaatsen (plaats)
{
    return crel("div",{class: "container"},
    crel ('h1',plaats.title),
    crel('p',plaats.body))
}

function renderReizen(reizen) {
    return crel('div',
        reizen.map(renderplaatsen))
}

 const view = renderReizen(reizen)
 
 document.getElementById('root').appendChild(view)
