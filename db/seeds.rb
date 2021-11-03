# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User = Api::V1::User
Post = Api::V1::Post
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