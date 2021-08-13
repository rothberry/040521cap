# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

u1 = User.create(
  {
    username: "rothberry",
    email: "r@r.com",
    bio: "Hi",
    profile_picture: "https://images.unsplash.com/photo-1628613779039-7a71e2df81d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
    password: "123"
  }
)
u2 = User.create(
  {
    username: "jc",
    email: "j@j.com",
    bio: "Hi there",
    profile_picture: "https://images.unsplash.com/photo-1628613779039-7a71e2df81d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80",
    password: "123"
  }
)

puts "USERS SEEDED"

p1 = u1.posts.create(content: "test 1")
p2 = u1.posts.create(content: "test 2")
p3 = u1.posts.create(content: "test 3")
p4 = u2.posts.create(content: "test 4")
p5 = u2.posts.create(content: "test 5")
p6 = u2.posts.create(content: "test 6")

puts "POSTS SEEDED"

c1 = p1.comments.create(content: "com 1", user_id: u1.id)
c2 = p1.comments.create(content: "com 2", user_id: u2.id)
c3 = p2.comments.create(content: "com 3", user_id: u1.id)
c4 = p2.comments.create(content: "com 4", user_id: u2.id)
c5 = p3.comments.create(content: "com 5", user_id: u1.id)
c6 = p4.comments.create(content: "com 6", user_id: u2.id)
c7 = p5.comments.create(content: "com 7", user_id: u1.id)

puts "COMMENTS SEEDED"