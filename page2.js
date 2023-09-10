function card(name, description, image){
    this.name = name;
    this.description = description;
    this.image = image;
}

var cardeck = [  
    // from alice
    new card(
       'The Fool',
        'New Beginnings and Adventure.<br> Think before you act.',
        '0'
    ),
    new card(
        'The Magician',
        'Creation.<br> Creating magic by your own determination yields a fruitful result.',
        '1'
    ),
    new card(
        'The High Priestess',
        'Learning and Observing. <br> Power from feminine energy.',
        '2'
    ),
    new card(
        'The Empress',
        'Connection and Kindness. <br> How is your link with feminine energy?',
        '3'
    ),
    new card(
        'The Emperor',
        'Authority and Structure.<br> Are you confident in what you do?',
        '4'
    ),
    new card(
        'The Hierophant',
        'Spiritual wisdom and conformity. <br> Be familiar and establish your system.',
        '5'
    ),
    new card(
        'The Lovers',
        'Love, Harmony and Choices. <br> Choices of two: harmony or disbalance.',
        '6'
    ),
    new card(
        'The Chariot',
        'Direction and Action. <br> You are motivated and ambitious; now is the time to get what you want.',
        '7'
    ),
    new card(
        'Strength',
        'Strength and courage. <br> You have the strength and courage to overcome any obstacle; act with grace and sensitivity.',
        '8'
    ),
    new card(
        'The Hermit',
        'Wisdom and enlightenment.<br> A quiet moment with yourself, a period of growth and exploration.',
        '9'
    ),
    new card(
        'Wheel of Fortune',
        'Chance and turning points.<br> You are in luck; do what you are up to.',
        '10'
    ), 
    new card(
        'Justice',
        'Fairness and Life lessons. <br> Justice arrives to restore balance and order.',
        '11'
    ),
    new card(
        'The Hanged Man',
        'Letting go and Reflecting. <br> It is time to reflect.',
        '12'
    ),
    new card(
        'Death',
        'Transitions and Resolutions. <br> A new chapter is waiting to begin.',
        '13'
    ),
    new card(
        'Temperance',
        'Balance and Moderation. <br> Resist the temptation to react immediately.',
        '14'
    ),
    new card(
        'The Devil',
        'Material focus and Desire. <br> Redirect your attention from the desire toward things that matter more to you.',
        '15'
    ),
    new card(
        'The Tower',
        'Intense and Sudden change.<br> This process can be painful and difficult, but it will lead to a fresh start.',
        '16'
    ),
    new card(
        'The Star',
        'Hope and Healing. <br> A time for healing and finding peace in mind.',
        '17'
    ),
    new card(
        'The Moon',
        'Confusion and Fear. <br> Take a deep breath and trust your decision. ',
        '18'
    ),
    new card(
        'The Sun',
        'Optimism and success. <br> The hard times will not last forever, and you will move on to brighter days.',
        '19'
    ),
    new card(
        'Judgment',
        'Awakening and Absolution. <br> The ideal time to weigh your action and make sure it is consistent with your values and beliefs.',
        '20'
    ),
    new card(
        'The World',
        'Fulfillment, Harmony, and Travel. <br> A major event is happening in your life; be proud of what you learn along the way.',
        '21'
    ), 

    // from Karina Collins tarot and Alice
    new card(
        'Ace Of Cups',
        'Love and New beginning. <br> You are beginning a new love or passion.',
        'c1'
    ),
    new card(
        'Two of Cups',
        'Snakes, Wings, Yin and Yang. <br> Taking a relationship to the next level.',
        'c2'
    ),
    new card(
        'Three of Cups',
        'Celebration and Gathering. <br> There is cause for celebration now, or soon will be.',
        'c3'
    ),
    new card(
        'Four of Cups',
        'Waiting and Meditation. <br> You feel bored and are looking for something to excite you.',
        'c4'
    ),
    new card(
        'Five of Cups',
        'Reviewing the past. <br> Feeling disappointed or sad about a particular situation.',
        'c5'
    ),
    new card(
        'Six of Cups',
        'Children and Opportunity. <br> Blast from the past! An issue, person or opportunity from the past re-emerges. ',
        'c6'
    ),
    new card(
        'Seven of Cups',
        'Confusion and Choices. <br> Feeling confused and uncertain where to focus your attention.',
        'c7'
    ),
    new card(
        'Eight of Cups',
        'Disappointment and abandonment. <br> Walking away from a situation or way of living.',
        'c8'
    ),
    new card(
        'Nine of Cups',
        'Wish come true. <br> You about to experience a run of good luck, life goes your way',
        'c9'
    ),
    new card(
        'Ten of Cups',
        'Blissful relationshipsa and harmony. <br> You are about to receive your happy ever after scenario.',
        'c10'
    ),
    new card(
        'Page of Cups',
        'Creative opportunities, possibility, and curiosity. <br> You receive news of a happy nature. This news may be unexpected.',
        'cp'
    ),
    new card(
        'Knight of Cups',
        'Romance and charm. <br>Your emotional life improves, there is movement now.',
        'ckn'
    ),
    new card(
        'Queen of Cups',
        'Intuitive and in flow. <br> Your intuition is good at this time and so you can trust your feelings. ',
        'cq'
    ),
    new card(
        'King of Cups',
        'Emotionally balanced and compassionate. <br> Rise up and server humanity, now is the time to live your purpose.',
        'ck'
    ),

  // from Karina Collins tarot and Alice

    new card(
        'Ace of Pentacles',
        'Manifestation and abundance. <br> This is a beginning of prosperity.',
        'p1'
    ),
    new card(
        'Two of Pentacles',
        'Prioritisation and adaptability. <br> Managing a busy life, juggling several things at once successfully.',
        'p2'
    ),
    new card(
        'Three of Pentacles',
        'Teamwork and collaboration. <br> Reward and recognition for a job well done.',
        'p3'
    ),
    new card(
        'Four of Pentacles',
        'Saving money and control. <br> Taking a longer-term view and building for your future.',
        'p4'
    ),
    new card(
        'Five of Pentacles',
        'Isolation and worry. <br> This card represents hardship, struggle and worries.',
        'p5'
    ),
    new card(
        'Six of Pentacles',
        'Generosity and receiving. <br> This is a time of good fortune, and giving to others.',
        'p6'
    ),
    new card(
        'Seven of Pentacles',
        'Perseverance and investment <br> A reminder that hard work pays off, eventually.',
        'p7'
    ),
    new card(
        'Eight of Pentacles',
        'Apprenticeship and skill development. <br> Making progress through hard work and dedication.',
        'p8'
    ),
    new card(
        'Nine of Pentacles',
        'Self-sufficiency and Abundance. <br> The good life. You have enough money to do what you want.',
        'p9'
    ),
    new card(
        'Ten of Pentacles',
        'Long-term success and family. <br> Signifies wealth, health and happiness for the entire family.',
        'p10'
    ),
    new card(
        'Page of Pentacles',
        'Manifestation and financial opportunity. <br> The court card delivers good news of an opportunity, award or financial boost.',
        'pp'
    ),
    new card(
        'Knight of Pentacles',
        'Hard work and productivity. <br> You are making steady progress in one or more areas of your life.',
        'pkn'
    ),
    new card(
        'Queen of Pentacles',
        'Nurturing and practical. <br> This is a good time for action, push yourself gently a little more. ',
        'pq'
    ),
    new card(
        'King of Pentacles',
        'Wealth, business and leadership. <br> This royal card signifies success and worldly power.',
        'pk'
    ),

    // from Karina Collins tarot and Alice

    new card(
        'Ace of Swords',
        ' Breakthroughs and new ideas. <br> The birth of a new idea. This card is the proverbial Ace up your sleeve.',
        's1'
    ),
    new card(
        'Two of Swords',
        'An impasse and avoidance. <br> You are undecided about which is the best course of action to take.',
        's2'
    ),
    new card(
        'Three of Swords',
        'Heartbreak and emotional pain. <br> Feeling sad or disappointed. Let the tears flow.',
        's3'
    ),
    new card(
        'Four of Swords',
        'Meditation and contemplation. <br> Take time-out to rest and recharge your batteries.',
        's4'
    ),
    new card(
        'Five of Swords',
        'Conflict and disagreements. <br> Are you feeling angry with someone ?',
        's5'
    ),
    new card(
        'Six of Swords',
        'Transition and Change. <br> Better days are coming, and you are heading in the right direction.',
        's6'
    ),
    new card(
        'Seven of Swords',
        'Betrayal and deception. <br> Someone is behaving sneakily behind your back.',
        's7'
    ),
    new card(
        'Eight of Swords',
        'Self-imposed restriction and imprisonment.  <br> Feeling caged in by negative thoughts or a victim mentality.',
        's8'
    ),
    new card(
        'Nine of Swords',
        'Worry and fear. <br> Feeling anxious, depressed or lonely.',
        's9'
    ),
    new card(
        'Ten of Swords',
        'Deep wounds and Loss. <br> Represents a devastating loss and the end of a situation.',
        's10'
    ),
    new card(
        'Page of Swords',
        'New ideas and curiosity. <br> The arrival of news, which may be unexpected.',
        'sp'
    ),
    new card(
        'Knight of Swords',
        'Ambitious and fast-thinking. <br> Full steam ahead, events take off at great speed now.',
        'skn'
    ),
    new card(
        'Queen of Swords',
        'Independent and direct communication. <br> Inspire us by your words or actions. Shine your Light.',
        'sq'
    ),
    new card(
        'King of Swords',
        'Mental clarity and intellectual power. <br> Assert yourself, tell us what you feel and really think.',
        'sk'
    ),   
    
  // from Karina Collins tarot and Alice

  new card(
    'Ace of Wands',
    'Inspiration and new opportunities. <br> A new beginning or a new venture.',
    'w1'
),
new card(
    'Two of Wands',
    'Future planning and decisions. <br> What you have started begins to deliver results.',
    'w2'
),
new card(
    'Three of Wands',
    'Progress, foresight, and overseas opportunities. <br> You are experiencing some success and can now expand your horizons further.',
    'w3'
),
new card(
    'Four of Wands',
    'Celebration, joy, and harmony.<br> There is cause for celebration or a happy gathering of friends and family.',
    'w4'
),
new card(
    'Five of Wands',
    'Competition and tension. <br> Fight for what you want, don’t be afraid to compete.',
    'w5'
),
new card(
    'Six of Wands',
    'Success and self-confidence. <br> Feeling victorious, you achieve what you want.',
    'w6'
),
new card(
    'Seven of Wands',
    'Challenge and perseverance. <br> Do not give up, and stand your ground if necessary.',
    'w7'
),
new card(
    'Eight of Wands',
    'Movement, fast paced change, and air travel. <br> Life speed up and there is rapid progress now.',
    'w8'
),
new card(
    'Nine of Wands',
    'Courage and persistence. <br> Don’t give up, keep going because you’re nearly there.',
    'w9'
),
new card(
    'Ten of Wands',
    'Extra responsibility, hard work, and completion. <br> Feeling exhausted and overburdened by responsibilities.',
    'w10'
),
new card(
    'Page of Wands',
    'Inspiration,limitless potential, and free spirit. <br> You receive exciting or good news.',
    'wp'
),
new card(
    'Knight of Wands',
    'Inspired action, adventure, and impulsiveness. <br> Movement after a period of delays or stagnation.',
    'skn'
),
new card(
    'Queen of Wands',
    'Courage, confidence, and determination. <br> Feeling confident and comfortable in your own skin.',
    'wq'
),
new card(
    'King of Wands',
    'Vision and entrepreneur. <br> You can achieve what you want now, you’re ready..',
    'wk'
),     
  
];

function getRandom(num){
    var randomNumber = 
    Math.floor(Math.random()* num);
    return randomNumber;
}

document.getElementById("draw").onclick 
= function(){
    var index = getRandom(78);
    var currentCard = cardeck [index];

    document.getElementById("display").innerHTML 
    = '<img src= "imgs/' + 
    currentCard.image + '.png"><h2>' +
    currentCard.name + '</h2><p>' +
    currentCard.description +'</p>';
};