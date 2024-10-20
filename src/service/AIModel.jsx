import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list withHotelName, Hotel address, Price, hotel image ur, geo coordinates, rating, descriptions and suggest itinerary with placeName, PlaceDetails, Place lmage Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan withbest time to visit in JSON format!",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotelOptions": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50 - $100 per night",\n      "hotelImageUrl": "https://www.thedlv.com/media/wysiwyg/D-Hotel-Exterior-Day.jpg",\n      "geoCoordinates": "36.1699, -115.1422",\n      "rating": "3.5 stars",\n      "description": "A budget-friendly downtown hotel with a retro vibe, featuring a casino, restaurants, and a rooftop pool."\n    },\n    {\n      "hotelName": "The Golden Nugget",\n      "hotelAddress": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$70 - $150 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/media/wysiwyg/golden-nugget-las-vegas-exterior-2-1.jpg",\n      "geoCoordinates": "36.1698, -115.1424",\n      "rating": "4 stars",\n      "description": "A historic hotel and casino with a lively atmosphere, featuring a shark tank, a pool, and a variety of dining options."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40 - $80 per night",\n      "hotelImageUrl": "https://www.circuscircus.com/media/wysiwyg/hotel-carousel-circus-circus-hero-2.jpg",\n      "geoCoordinates": "36.1207, -115.1714",\n      "rating": "3 stars",\n      "description": "A family-friendly hotel with a circus theme, featuring a midway, a casino, and a variety of restaurants."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "A pedestrian-friendly street filled with entertainment, street performers, and vibrant light shows.",\n          "placeImageUrl": "https://www.fremontstreetexperience.com/media/2018/07/Fremont-Street-Experience-Viva-Vision-Light-Show.jpg",\n          "geoCoordinates": "36.1699, -115.1422",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars",\n          "time": "2 hours"\n        },\n        {\n          "placeName": "The Mob Museum",\n          "placeDetails": "Learn about the history of organized crime in Las Vegas and the United States.",\n          "placeImageUrl": "https://www.themobmuseum.org/sites/default/files/styles/hero_image_wide/public/images/Hero%20images/mob-museum-hero-exterior.jpg",\n          "geoCoordinates": "36.1710, -115.1437",\n          "ticketPricing": "$25 - $35",\n          "rating": "4 stars",\n          "time": "2 hours"\n        }\n      ],\n      "bestTime": "Afternoon",\n      "plan": [\n        {\n          "placeName": "Golden Gate Hotel & Casino",\n          "placeDetails": "Have a budget-friendly lunch at the oldest casino in Las Vegas.",\n          "placeImageUrl": "https://www.goldengate.com/media/wysiwyg/gg-exterior-day.jpg",\n          "geoCoordinates": "36.1700, -115.1420",\n          "ticketPricing": "N/A",\n          "rating": "3.5 stars",\n          "time": "1 hour"\n        },\n        {\n          "placeName": "Neon Museum",\n          "placeDetails": "Explore a collection of vintage neon signs from Las Vegas\' past.",\n          "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2020/03/Neon-Museum-Sign-Sign-Night.jpg",\n          "geoCoordinates": "36.1580, -115.1392",\n          "ticketPricing": "$20 - $30",\n          "rating": "4 stars",\n          "time": "2 hours"\n        }\n      ],\n      "bestTime": "Evening",\n      "plan": [\n        {\n          "placeName": "Freemont Street Experience",\n          "placeDetails": "Enjoy the vibrant light shows and street performances at night.",\n          "placeImageUrl": "https://www.fremontstreetexperience.com/media/2018/07/Fremont-Street-Experience-Viva-Vision-Light-Show.jpg",\n          "geoCoordinates": "36.1699, -115.1422",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars",\n          "time": "2 hours"\n        }\n      ]\n    },\n    {\n      "day": 2,\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Admire the beautiful floral displays in this free attraction.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/images/pages/attractions/conservatory/conservatory-botanical-gardens-hero.jpg",\n          "geoCoordinates": "36.1181, -115.1732",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars",\n          "time": "1 hour"\n        },\n        {\n          "placeName": "Fountains of Bellagio",\n          "placeDetails": "Watch a spectacular water and light show synchronized to music.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/images/pages/attractions/fountains/fountains-of-bellagio-hero.jpg",\n          "geoCoordinates": "36.1180, -115.1734",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars",\n          "time": "1 hour"\n        }\n      ],\n      "bestTime": "Afternoon",\n      "plan": [\n        {\n          "placeName": "The Strip",\n          "placeDetails": "Walk along the famous Las Vegas Strip, browsing the shops and admiring the hotels.",\n          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/hero_image/public/images/hero-images/hero-strip-wide.jpg",\n          "geoCoordinates": "36.1180, -115.1730",\n          "ticketPricing": "Free",\n          "rating": "4.5 stars",\n          "time": "3 hours"\n        }\n      ],\n      "bestTime": "Evening",\n      "plan": [\n        {\n          "placeName": "LINQ Promenade",\n          "placeDetails": "Enjoy dinner and drinks at one of the many restaurants and bars along this outdoor promenade.",\n          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/linq/linq-promenade-hero-image.jpg",\n          "geoCoordinates": "36.1220, -115.1740",\n          "ticketPricing": "N/A",\n          "rating": "4 stars",\n          "time": "3 hours"\n        }\n      ]\n    },\n    {\n      "day": 3,\n      "bestTime": "Morning",\n      "plan": [\n        {\n          "placeName": "Red Rock Canyon National Conservation Area",\n          "placeDetails": "Explore the scenic landscapes of this nearby national park.",\n          "placeImageUrl": "https://www.nps.gov/redr/planyourvisit/images/RedRockCanyon_15_20.jpg",\n          "geoCoordinates": "36.0970, -115.3330",\n          "ticketPricing": "$7 per vehicle",\n          "rating": "4.5 stars",\n          "time": "4 hours"\n        }\n      ],\n      "bestTime": "Afternoon",\n      "plan": [\n        {\n          "placeName": "Downtown Container Park",\n          "placeDetails": "Shop, dine, and be entertained at this unique outdoor mall built from repurposed shipping containers.",\n          "placeImageUrl": "https://www.downtowncontainerpark.com/images/about/downtown-container-park-exterior.jpg",\n          "geoCoordinates": "36.1675, -115.1446",\n          "ticketPricing": "Free",\n          "rating": "4 stars",\n          "time": "2 hours"\n        }\n      ],\n      "bestTime": "Evening",\n      "plan": [\n        {\n          "placeName": "The Cosmopolitan of Las Vegas",\n          "placeDetails": "Enjoy a free show at the Chandelier Bar.",\n          "placeImageUrl": "https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/images/pages/experience/attractions/chandelier-bar-hero.jpg",\n          "geoCoordinates": "36.1190, -115.1740",\n          "ticketPricing": "Free",\n          "rating": "4 stars",\n          "time": "1 hour"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is a suggestion and can be customized based on your interests and preferences.\n* The hotel prices listed are approximate and can vary depending on the time of year and availability.\n* Ticket prices may vary and are subject to change.\n* You can find more information about these attractions and hotels on their respective websites.\n\n**Tips for a Cheap Budget:**\n\n* Consider staying at a hotel outside of the Strip, such as those in downtown Las Vegas.\n* Take advantage of free attractions, such as the Bellagio Conservatory & Botanical Garden and the Fountains of Bellagio.\n* Pack your own snacks and drinks to save money on food and beverages.\n* Look for deals and discounts on show tickets, meals, and activities.\n* Consider using public transportation to get around Las Vegas, which is much cheaper than taxis.\n\nEnjoy your trip to Las Vegas! \n',
        },
      ],
    },
  ],
});
