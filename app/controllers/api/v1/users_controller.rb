class Api::V1::UsersController < ApplicationController
  User = Api::V1::User

  def index
    users = User.all
    render json: users
  end

    
  def signup
  
  end

end
