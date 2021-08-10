class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profile_picture, :email

  has_many :posts
end
