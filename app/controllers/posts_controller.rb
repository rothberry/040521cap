class PostsController < ApplicationController

  def index
    render json: Post.all
  end

  def create
    p "****************"
    p "CREATING POST"
    p "****************"
    # Find user from Session
    user = User.find_by(id: session[:user_id])
    p user

    if user
      post = user.posts.create(post_params)
      render json: post
    else
      render json: {error: "Didn't work..."}
    end
  end

  def show 
    post = Post.find_by(id: params[:id])
    render json: post
  end

  private

  def post_params
    params.permit(:content)
  end
  
end
