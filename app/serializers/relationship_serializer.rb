class RelationshipSerializer < ActiveModel::Serializer
  attributes :id, :user_1_id, :user_2_id

  belongs_to :user_1
  belongs_to :user_2
end
