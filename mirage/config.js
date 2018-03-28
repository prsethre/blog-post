export default function() {
  this.namespace = '/api';

  this.get('/posts', function () {
    return {
      data: [{
        type: 'posts',
        id: 1,
        attributes: {
          title: "Cheerio, Mate",
          excerpt: "Sausage roll corgi it's the dogs bollocks",
          content: "Pommy ipsum bit of a div middle class old girl chips fancy a cuppa, have a butcher's at this sausage roll fork out proper. Pezzy little in the jacksy doing my head in queer as a clockwork orange, doolally. Bangers and mash flog a dead horse chav treacle codswallop one would like knee high to a grasshopper i'll be a monkey's uncle cheerio, houlligan on his bill we'll be 'avin less of that Prince Charles dignified a bit wonky tad, daft cow sweets collywobbles alright duck the dog's dinner smeg head. Bowler hat nicked owt alright duck ever so apple and pears on his bill The Hounds of Baskerville, what a mug golly bottled it whizz punter.",
          author: "Nigel Codswoggler",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Grenadier_Guards_Buckingham_Palace_2013_%28cropped%29.jpg/440px-Grenadier_Guards_Buckingham_Palace_2013_%28cropped%29.jpg',
          date: '10/23/2017',
        }
      }, {
        type: 'posts',
        id: 2,
        attributes: {
          title: "Here's an idea",
          excerpt: "Jazz it up a little bit, make the picture of the cupcake look delicious.",
          content: "You are lucky to even be doing this for us I really think this could go viral, nor I have printed it out, but the animated gif is not moving. I have an awesome idea for a startup, i need you to build it for me or can you put Find us on Facebook by the Facebook logo?, make it pop. It's great, can you add a beard though we try your eye, but can you change everything? can you please change the color theme of the website to pink and purple? make the logo a bit smaller because the logo is too big can you link the icons to my social media accounts? oh and please put pictures of cats everywhere, so the website doesn't have the theme i was going for start on it today and we will talk about what i want next time . Can you make the logo bigger yes bigger bigger still the logo is too big I really think this could go viral, but the hair is just too polarising, yet can you turn it around in photoshop so we can see more of the front, yet I like it, but can the snow look a little warmer, I really think this could go viral. Thanks for taking the time to make the website, but i already made it in wix.",
          author: "Jimmy Deebag",
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jeff_Bezos_2016.jpg/440px-Jeff_Bezos_2016.jpg',
          date: '11/23/2017',
        }
      }, {
        type: 'posts',
        id: 3,
        attributes: {
          title: "Happy Trees",
          excerpt: "A tree cannot be straight if it has a crooked trunk.",
          content: "Happy painting, God bless. Now we don't want him to get lonely, so we'll give him a little friend. You've got to learn to fight the temptation to resist these things. Just let them happen. Use what happens naturally, don't fight it. I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. Very easy to work these to death. Do an almighty painting with us. These trees are so much fun. I get started on them and I have a hard time stopping.",
          author: "Bob Ross",
          image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Bob_at_Easel.jpg',
          date: '03/23/2018',
        }
      }, {
        type: 'posts',
        id: 4,
        attributes: {
          title: "In Trouble",
          excerpt: "Son, as your lawyer, I declare y'all are in a 12-piece bucket o' trouble.",
          content: "I decline the title of Iron Cook and accept the lesser title of Zinc Saucier, which I just made up. Uhh… also, comes with double prize money. What kind of a father would I be if I said no? Do a flip! Bender, being God isn't easy. If you do too much, people get dependent on you, and if you do nothing, they lose hope. You have to use a light touch. Like a safecracker, or a pickpocket. Yes, I saw. You were doing well, until everyone died.",
          author: "Bender Bending Rodriguez",
          image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/Bender_Rodriguez.png',
          date: '01/08/2018',
        }
      }]
    }
  });
}

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

