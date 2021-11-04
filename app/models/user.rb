class User < ApplicationRecord
  has_many :posts
  has_many :comments

  # relationships
  # has_many :relationships, class_name: "Relationship", foreign_key: :user_1_id, dependent: :destroy
  # has_many :relationships, class_name: "Relationship", foreign_key: :user_2_id, dependent: :destroy
  
  def relationships
    # find all relationships that include the user_id
    Relationship.where("user_1_id = #{self.id} OR user_2_id = #{self.id}")
  end

  has_secure_password
end
