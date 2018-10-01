let topics =
{
    "Price": ["cheap", "expensive", "price"],
    "Business specialties": ["gnome", "gnomes"],
    "Harry Shrub": ["harry shrub"]
}
let reviews =
    [
        "Harry Shrub did a great job with my garden, but I expected more gnomes for the price.",
        "I love my new gnomes, they are so cute! My dog loves them too! Thanks Harry!",
        "Very expensive at fifty dollars per gnome. Next time I'll buy from Cheap Gnomes Warehouse."
    ]

const yelp = (reviews, topics) => {
    let results = {}
    Object.keys(topics).forEach(topic => {
        let currentTopic = topics[topic]
        results[topic] = 0
        reviews.forEach(review => {
            for (let i = 0; i < currentTopic.length; i++) {
                if (review.toLowerCase().includes(currentTopic[i].toLowerCase())) {
                    results[topic] += 1;
                    break;
                }
            }
        })
    })
    return results
}

console.log(yelp(reviews, topics))