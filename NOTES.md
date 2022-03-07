# Brainstorming

- Travel App
- Social Media
- Postcard Creator
- Workout Tracker
- Words API Thing
- Memory Game(X)
- Mood Vision Board

## Models

Travel

- User, destination, reviews, likes/rating

Social Media:

- User, post, comments, followers/following, likes

Postcard Creator (More Frontend Focused)

- User, card, destination

Workout:

- User, exercises, muscles/groups, types of excercises

Words (Backend):

- User, words, jumbled words or soemthing, phonetically the same word, different word changes

Mood/Vision Board Gen

- User, moods, search api for images with a feeling?

# SOZIALS

Social Media:

- User, post, comments, followers, likes

Associations

User many Posts
Posts belongs User

Post many Comments
Comments belongs Post

User many Comments through Posts

Post many Likes
User many Likes through Posts

<!-- 2 Options -->

Facebook: Request, and confirm friends (2 way)

User many User through Followers

User: username, password, email, pic, bio
Post: content(text for now), user_id
Comment: content, post_id, user_id
Like: post_id, user_id, liked(boolean) or delete and relike
Follower: user_id_1, user_id_2

### Day 2

Goals:

- Start Client Side
-- react-router-dom
-- react-bootstrap


### Day 3

User Auth

### Day 4

Finish backend models
- Comments
Create new posts
Add Comments

### Day 5

Adding Context (Global State)

- Abstract our props/state into a global 'store'

Pain point: if your app was too deep, then passing props through many components

App -> container -> List -> ListItem -> ItemContainer ...