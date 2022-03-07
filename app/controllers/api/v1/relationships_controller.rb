class Api::V1::RelationshipsController < ApplicationController

  def index
    relationships = Relationship.all
    render json: relationships
  end

  def create
    # don't have to check validity manually here
    rel = Relationship.new(rel_params)
    if rel.save
      render json: rel
    else
      render json: {error: rel.errors.full_messages}, status: 401
    end
  end

  def destroy
    rel = Relationship.find_by(id: params[:id])
    if rel
      rel.delete
      head :no_content
    else
      render json: {}, status: 404
    end
  end

  private

  def rel_params
    params.permit(:user_1_id, :user_2_id)
  end
  
end
