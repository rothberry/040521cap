class CreateRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :relationships do |t|
      # Facebook(meta) relationship
      t.integer :user_1_id
      t.integer :user_2_id

      # directional realtionship (Twitter)
      # t.integer :follower_id
      # t.integer :followed_id

      # t.integer :sender_id
      # t.integer :reciever_id

      t.timestamps
    end
  end
end
