class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profile_picture, :email

  # has_many :posts
  # has_many :comments
  has_many :relationships
end
