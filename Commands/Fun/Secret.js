/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
module.exports.run = async (Client, message, args, prefix) => {
  if (!message.content.startsWith(prefix)) return;
  await message.delete();
  const array = [
    'It doesn\'t matter how slow you do as long as you don\'t stop!',
    'You can only live once, so never give up!',
    'Anyone who never did a mistake, has never tried anything new.',
    'Don\'t stop when you\'re tired, stop when you\'re done.',
    'Push yourself because no one else is going to do it for you!',
    'You didn\'t come this far to only come this far.',
    'If you can dream it, you can do it.',
    'If someone can, you can.',
    'Once you become fearless, life become timeless.',
    'You only fail when you quit.',
    'Good things happen to those who hustle.',
    'The key to success is to focus on goals, not obstacles.',
    'Be strong, you never know who you are inspiring.',
    'There is no excuse for not trying.',
    'A glow stick has to be broken to glow up!',
    'People will throw stones at you, Don\'t throw them back. Collect them all and build an empire.',
    'The best way to predict your future is to create it.',
    'Don\'t watch the clock, do what it does. Keep going!',
    'Dreams don\'t work unless you do!',
    'What hurts you today makes you stronger tomorrow.',
    'Work hard in silence, let success make the noise!',
    'People often say that motivation doesn\'t last. well, neither does bathing, that\'s why we recommend it daily.',
    'You can do it!',
    'Don\'t count the days, make the days count.',
    'We are what we repeatedly do. excellence, therefore, is not an act but a habit.',
    'If you\'re not making mistakes, then you\'re not doing anything.',
    'Once you believe that you can, you are half way there!',
    'I\'m a great believer in luck, and i find the harder i work the more i have of it.',
    'Tough times never last, but tough people do!',
    'It\'s okay to struggle, it\'s not okay to give up.',
    'Never give up on anything that makes your heart soar.',
    'Act as if what you do makes a difference. It does!',
    'You make a life out of what you have, not what you\'re missing.',
    'It is not enough to have a good mind, the important thing is to use it well.',
    'Some people want it to happen, some wish it would happen, others make it happen.',
    'Not all storms come to disrupt your life, some come to clear your path!',
    'Now or Never. You decide!',
    'Pain is temporary, quitting lasts forever.',
    'What i\'m looking for is not out there, it is in me.',
    'If you\'re going through hell, keep going!',
    'Don\'t let a bad day make you fell like you have a bad life.',
    'You can never cross the ocean until you have the courage to lose sight of the shore.',
    'If you want to fly, give up everything that weighs you down',
    'Don\'t be afraid to try.',
    'It\'s okay to be a glow stick, Sometimes we have to break before we shine.',
    'When you can\'t change the direction of the wind, adjust your sails.',
    'Believing in yourself is the first secret to success.',
    'Your only limit is your mind.',
    'Kindness is a language which the deaf can hear and the blind can see.',
    'You just can\'t beat the person who never gives up, be that person!',
    'You can and you will!',
    'When you focus on the good, the good get better',
    'Sometimes later becomes never, do it now!',
    'You never know what tomorrow has with it, achieve it now or never!',
    'If you get tired learn to rest not to quit',
    'A river cuts through a rock, not because of its power, but its persistance!',
    'If you don\'t stop thinking about it, don\'t stop working for it!',
    'If you want to buy anything without looking at price, work without looking at the clock.',
    'if your dreams doesn\'t scare you, they are too small.',
    'No one will believe in you believe in you.',
    'Patient is the power to do nothing when doing something won\'t do anything but make everything worse.',
    'No response is a response, And it\'s powerful one. Remember that!',
    'There is no elevator to success, you have to take the stairs',
    'The best view comes after the hardest climb',
    'Train yourself to find the blessing in everything.',
    'Great people do things before they\'re ready.',
    'She dreams more often than she sleeps',
    'Don\'t tell people your plan, show them your results.',
    'Think big, trust yourself and make it happen.',
    'If you felt down, stand up again like nothing happened.',
    'Every day may not be good, but there is something good in every day!',
    'If nobody is listening, then you\'re likely talking to the wrong audience.',
    'Life isn’t about getting and having, it’s about giving and being.',
    'Whatever the mind of man can conceive and believe, it can achieve.',
    'Strive not to be a success, but rather to be of value.',
    'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.',
    'I attribute my success to this: I never gave or took any excuse.',
    'You miss 100% of the shots you don’t take.',
    'The most difficult thing is the decision to act, the rest is merely tenacity.',
    'Every strike brings me closer to the next home run.',
    'Definiteness of purpose is the starting point of all achievement.',
    'We must balance conspicuous consumption with conscious capitalism.',
    'We become what we think about.',
    'Life is 10% what happens to me and 90% of how I react to it.',
    'The most common way people give up their power is by thinking they don’t have any.',
    'The mind is everything. What you think you become.',
    'The best time to plant a tree was 20 years ago. The second best time is now.',
    'An unexamined life is not worth living.',
    'Eighty percent of success is showing up.',
    'Your time is limited, so don’t waste it living someone else’s life.',
    'Winning isn’t everything, but wanting to win is.',
    'I am not a product of my circumstances. I am a product of my decisions.',
    'Every child is an artist. The problem is how to remain an artist once he grows up.',
    'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    'Either you run the day, or the day runs you.',
    'Whether you think you can or you think you can’t, you’re right.',
    'The two most important days in your life are the day you are born and the day you find out why.',
    'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.',
    'The best revenge is massive success.',
    'Life shrinks or expands in proportion to one’s courage.',
    'If you hear a voice within you say \'you cannot paint\', then by all means paint and that voice will be silenced.',
    'There is only one way to avoid criticism: do nothing, say nothing, and be nothing.',
    'Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.',
    'The only person you are destined to become is the person you decide to be.',
    'Go confidently in the direction of your dreams.  Live the life you have imagined.',
    'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
    'Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.',
    'Certain things catch your eye, but pursue only those that capture the heart.',
    'Everything you’ve ever wanted is on the other side of fear.',
    'We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.',
    'Start where you are. Use what you have.  Do what you can.',
    'Fall seven times and stand up eight.',
    'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
    'Everything has beauty, but not everyone can see.',
    'How wonderful it is that nobody need wait a single moment before starting to improve the world.',
    'When I let go of what I am, I become what I might be.',
    'Happiness is not something already made. It comes from your own actions.',
    'If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.',
    'We all have limits. Almost no one reaches theirs. You definitely haven\'t. Keep going!',
    'Fat, drunk, and stupid is no way to go through life, son.',
    'If you don’t like the road you’re walking, start paving another one.',
    'The biggest adventure you can take is to live the life of your dreams.',
    'As soon as something stops being fun, I think it’s time to move on. Life is too short to be unhappy. Waking up stressed and miserable is not a good way to live.',
    'Life’s most persistent and urgent question is, ‘”What are you doing for others?”',
    'I’ve failed over and over and over again in my life and that is why I succeed.',
    'Nothing can dim the light that shines from within.',
    'It’s not what we have in life but who we have in our life that matters.',
    'Sometimes you will never know the value of a moment until it becomes a memory.',
    'Don’t judge each day by the harvest you reap but by the seeds that you plant.',
    'Without passion, you don’t have energy. Without energy, you have nothing.',
    'Remember, today is the tomorrow you worried about yesterday.',
    'Work for that feeling that you have accomplished something…Don’t waste your time on this earth without making a mark.',
    'Life is not fair, get used to it!',
    'If you expect the world to be fair with you because you are fair, you’re fooling yourself. That’s like expecting the lion not to eat you because you didn’t eat him.',
    'The only person you are destined to become is the person you decide to be.',
    'Live for each second without hesitation.',
    'We define ourselves far too often by our past failures. That’s not you. You are this person right now. You’re the person who has learned from those failures.',
    'You don’t need to be better than anyone else, you just need to be better than you used to be.',
    'When something is important enough, you do it even if the odds are no in your favour.',
    'Everything is either an opportunity to grow or an obstacle to keep you from growing. You get to choose.',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.',
    'Whatever the mind can conceive and believe, it can achieve.',
    'A real decision is measured by the fact that you’ve taken a new action. If there’s no action, you haven’t truly decided.',
    'Go confidently in the direction of your dreams. Live the life you have imagined.',
    'By recording your dreams and goals on paper, you set in motion the process of becoming the person you most want to be. Put your future in good hands – your own.',
    'Life is what happens when you’re busy making other plans.',
    'You will never find time for anything. If you want time you must make it.',
    'There is only one thing that makes a dream impossible to achieve: the fear of failure.',
    'Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.',
    'The best way to gain self-confidence is to do what you are afraid to do.',
    'Try not to become a man of success. Rather become a man of value',
    'Don’t be afraid to give up the good to go for the great.',
    'All our dreams can come true if we have the courage to pursue them.',
    'You are never too old to set another goal or to dream a new dream.',
    'We must be willing to let go of the life we planned so as to have the life that is waiting for us.',
    'You get what you give.',
    'Your life only gets better when you get better.',
    'If I cannot do great things, I can do small things in a great way.',
    'Light tomorrow with today!',
    'The only limit to our realization of tomorrow will be our doubts of today.',
    'Keep your face always toward the sunshine, and shadows will fall behind you.',
    'The bad news is time flies. The good news is you’re the pilot.',
    'Let us make our future now, and let us make our dreams tomorrow’s reality.',
    'Don’t Let Yesterday Take Up Too Much Of Today.',
  ];
  let user = message.author;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (Client.guilds.cache.get('781932135631028244').members.cache.get(args[0])) {
    user = Client.guilds.cache.get('781932135631028244').members.cache.get(args[0]).user;
  }

  if (user.id == Client.user.id) {
    return message.author.send(array[Math.floor(Math.random() * array.length)]).catch(() => message.channel.send('Could not send a dm'));
  }

  user.send(array[Math.floor(Math.random() * array.length)]).catch(() => message.channel.send('Could not send a dm'));
};

module.exports.help = {
  name: 'secret',
  aliases: ['quotes'],
};
