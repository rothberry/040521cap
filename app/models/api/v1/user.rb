class Api::V1::User < ApplicationRecord
  has_many :posts
  has_secure_password
end
