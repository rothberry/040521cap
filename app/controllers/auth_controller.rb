class AuthController < ApplicationController
  # All user authentication will be here

  def login
    # find user with email
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      p "LOGGED IN"
      p session[:user_id]
      render json: user
    else
      render json: {errors: "Invalid Email or Password"}
    end
  end

  def signup
    
  end

  def logout
    session.delete :user_id
    head :no_content
    # render json: { message: "Logged Out"}
  end

  def me
    user = User.find(session[:user_id])
    p "User: #{user}"
    p "Session: #{session}"
    if user
      render json: user
    else 
      render json: {message: "Not Logged In"}
    end
  end

end
