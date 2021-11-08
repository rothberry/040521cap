class Relationship < ApplicationRecord
  belongs_to :user_1, class_name: "User", foreign_key: :user_1_id
  belongs_to :user_2, class_name: "User", foreign_key: :user_2_id

  
  # * Make sure that this is "validate" not "validates"...
  validate :is_good_relationship?

  private

  def is_good_relationship?
    # rel_arr_1 = Relationship.where("user_1_id = #{self.user_1.id} AND user_2_id = #{self.user_2.id}")
    # rel_arr_2 = Relationship.where("user_1_id = #{self.user_2.id} AND user_2_id = #{self.user_1.id}")

    rel_arr = Relationship.where("user_1_id = #{self.user_1.id} AND user_2_id = #{self.user_2.id} OR user_1_id = #{self.user_2.id} AND user_2_id = #{self.user_1.id}")
    p "*" * 99
    p rel_arr

    if !rel_arr.empty? 
      errors.add(:relationship, "Already Exists")
    end
  end



end


# ? Test stuff
# r = Relationship.new(user_1_id: User.second.id, user_2_id: User.first.id)
#     Relationship.where("user_1_id = #{self.id} OR user_2_id = #{self.id}")
